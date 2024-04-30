<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\ScanController;


Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::post('/register',[UserController::class,'register']);
Route::post('/login',[UserController::class,'login']);
Route::post('/scaninsert',[ScanController::class,'scanInsert']);
Route::post('/fileupload',[ScanController::class,'fileUpload']);
Route::post('/view',[ScanController::class,'viewreport']);
Route::post('/deletescan',[ScanController::class,'deletescan']);
Route::post('/searchscan',[ScanController::class,'searchscan']);







