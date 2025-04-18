<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Note;
use Illuminate\Support\Facades\Storage;
use Intervention\Image\Facades\Image;
use Illuminate\Support\Str;

class NoteController extends Controller
{
    // ฟังก์ชันสำหรับดึงโพสต์ทั้งหมด
    public function getNotes()
    {
        try {
            // ดึงข้อมูลทั้งหมดจาก collection Note
            $notes = Note::all();

            // ส่งข้อมูลกลับ
            return response()->json($notes, 200);
        } catch (\Exception $e) {
            return response()->json([
                'message' => 'Server Error',
                'error' => $e->getMessage()
            ], 500);
        }
    }

    // ฟังก์ชันสำหรับสร้างโพสต์ใหม่
    public function createNotes(Request $request)
    {
        try {
            // วาลิดate ข้อมูลที่ส่งมา
            $request->validate([
                'header' => 'required|string',
                'content' => 'required|string',
                'image' => 'nullable|image|mimes:jpg,jpeg,png'
            ]);

            // รับข้อมูลจาก request
            $header = $request->input('header');
            $content = $request->input('content');
            $imagePath = null;

            // ถ้ามีการอัปโหลดไฟล์
            if ($request->hasFile('image')) {
                $image = $request->file('image');
                
                // ตั้งชื่อไฟล์ใหม่เพื่อหลีกเลี่ยงการซ้ำกัน
                $filename = Str::random(20) . '.' . $image->getClientOriginalExtension();
                $filePath = 'public/note/' . $filename;

                // แปลงรูปภาพเป็น .webp โดยใช้ Intervention Image
                $img = Image::make($image)->encode('webp');
                
                // ใช้ Storage เพื่อบันทึกไฟล์
                Storage::put($filePath, $img);

                // สร้าง URL ของไฟล์ที่สามารถเข้าถึงได้จาก public
                $imagePath = Storage::url($filePath);
            }

            // สร้างโพสต์ใหม่ในฐานข้อมูล
            $newNote = Note::create([
                'header' => $header,
                'content' => $content,
                'image' => $imagePath, // เก็บ path ของภาพ
            ]);

            return response()->json([
                'message' => 'Note created successfully',
                'data' => $newNote
            ], 201);
        } catch (\Exception $e) {
            return response()->json([
                'message' => 'Server Error',
                'error' => $e->getMessage()
            ], 500);
        }
    }
}
