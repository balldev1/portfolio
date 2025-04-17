<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class CurrencyController extends Controller
{
    public function getCurrency(Request $request)
    {
        $from = $request->query('from');
        $to = $request->query('to');

        if (!$from || !$to) {
            return response()->json(['error' => "Missing 'from' or 'to' parameter"], 400);
        }

        try {
            $response = Http::get("https://open.er-api.com/v6/latest/{$from}");
            $data = $response->json();

            if (!isset($data['rates'][$to])) {
                return response()->json(['error' => 'Currency not found'], 404);
            }

            $rate = $data['rates'][$to];

            return response()->json(['rate' => $rate]);
        } catch (\Exception $e) {
            return response()->json(['error' => 'Failed to fetch exchange rate'], 500);
        }
    }
}
