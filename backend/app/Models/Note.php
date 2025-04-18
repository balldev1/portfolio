<?php

namespace App\Models;

use MongoDB\Laravel\Eloquent\Model;

class Note extends Model
{
    protected $connection = 'mongodb'; 
    protected $collection = 'notes'; 

    protected $fillable = [
        'header',
        'content',
        'image',
        'createdAt'
    ];

    public $timestamps = false;
}
