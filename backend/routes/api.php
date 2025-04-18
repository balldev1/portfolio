<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CurrencyController;
use App\Http\Controllers\NoteController;

use App\Models\Note;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');


Route::get('/exchange-rate', [CurrencyController::class, 'getCurrency']);

Route::get('/notes', [NoteController::class, 'getNotes']);
Route::post('/notes', [NoteController::class, 'createNotes']);