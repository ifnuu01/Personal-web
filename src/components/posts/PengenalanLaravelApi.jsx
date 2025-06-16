import React from "react";
import Thumbnail from "../../../public/ThumbnailLaravelApi.svg";
import Code from "../Code";

function PengenalanLaravelApi(props) {
  return (
    <>
      <img
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="100"
        data-aos-once="true"
        src={Thumbnail}
        alt="Pengenalan API Laravel"
        className="w-full rounded-lg"
      />
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="200"
        data-aos-once="true"
        className="flex justify-between flex-col lg:flex-row items-start lg:items-center"
      >
        <div className="bg-white rounded-lg px-4 py-2 shadow-lg w-fit mt-4 text-secondary font-bold text-lg">
          📕 {props.title}
        </div>
        <div className="bg-white rounded-lg px-4 py-2 shadow-lg w-fit mt-4 text-primary text-sm">
          📅 {props.date}
        </div>
      </div>
      {/* content */}
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="300"
        data-aos-once="true"
        className="prose max-w-none mt-6 bg-white p-2 rounded-lg shadow-lg text-primary text-justify overflow-hidden"
      >
        <h2 className="text-lg font-bold text-secondary mb-4">
          Apa itu REST API?🤔
        </h2>
        <p>
          <b>REST API</b> (Representational State Transfer Application
          Programming Interface) adalah standar komunikasi antar aplikasi
          menggunakan protokol HTTP. Dengan REST API, aplikasi frontend (seperti
          React, Vue, atau mobile app) bisa berkomunikasi dengan backend Laravel
          secara efisien dan terstruktur.
        </p>

        <h2 className="font-bold text-md mt-4 text-secondary mb-2">
          Kenapa Menggunakan REST API di Laravel?
        </h2>
        <ul>
          <li>⭐ Memudahkan integrasi dengan aplikasi lain (mobile/web).</li>
          <li>⭐ Struktur kode lebih rapi dan scalable.</li>
          <li>
            Laravel menyediakan tools powerful untuk membuat API dengan cepat.
          </li>
        </ul>

        <h2 className="font-bold text-md mt-4 text-secondary mb-2">
          Instalasi Laravel 12
        </h2>
        <p>
          Pastikan sudah menginstall <b>Composer</b> di komputer kamu. Untuk
          membuat project Laravel 12 baru, jalankan perintah berikut di
          terminal:
        </p>
        <Code language="bash">
          {`composer create-project laravel/laravel:^12.0 laravel-api`}
        </Code>
        <p>Setelah selesai, masuk ke folder project:</p>
        <Code language="bash">{`cd laravel-api`}</Code>
        <p>
          Laravel 12 tidak langsung memiliki konfigurasi API kita perlu install
          terlebih dahulu
        </p>
        <Code language="bash">{`php artisan install:api`}</Code>
        <p>Jalankan server lokal:</p>
        <Code language="bash">{`php artisan serve`}</Code>
        <p>
          Buka <b>http://localhost:8000 </b>
          di browser untuk melihat halaman utama Laravel.
        </p>

        <h2 className="mt-4 font-bold text-secondary text-md mb-2">
          Membuat REST API Pertama di Laravel
        </h2>
        <ol>
          <li>
            <b>⭐Buat Controller API</b>
            <Code language="bash">
              {`php artisan make:controller Api/UserController`}
            </Code>
          </li>
          <li>
            <b>⭐Edit Controller</b> <br />
            Buka <Code>app/Http/Controllers/Api/UserController.php</Code> dan
            tambahkan method berikut:
            <Code language="php">
              {`<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function index()
    {
        return response()->json([
            'success' => true,
            'users' => [
                ['id' => 1, 'name' => 'Budi'],
                ['id' => 2, 'name' => 'Siti'],
            ]
        ]);
    }
}
`}
            </Code>
          </li>
          <li>
            <b>⭐Daftarkan Route API</b> <br />
            Buka file <Code>routes/api.php</Code> dan tambahkan:
            <Code language="php">
              {`use App\Http\Controllers\Api\UserController;

Route::get('/users', [UserController::class, 'index']);`}
            </Code>
          </li>
          <li>
            <b>⭐Coba Akses API</b> <br />
            Jalankan server Laravel, lalu buka{" "}
            <b>http://localhost:8000/api/users </b>
            di browser atau gunakan Postman. Kamu akan melihat data JSON seperti
            berikut:
            <Code language="json">
              {`{
  "success": true,
  "users": [
    { "id": 1, "name": "Budi" },
    { "id": 2, "name": "Siti" }
  ]
}`}
            </Code>
          </li>
        </ol>

        <h2 className="font-bold text-md mt-4 text-secondary mb-2">
          Tips Interaktif
        </h2>
        <ul>
          <li>
            ⭐Coba ubah data di controller dan lihat hasilnya di endpoint API.
          </li>
          <li>
            ⭐Gunakan <b>Postman</b> atau <b>Insomnia</b> untuk mengetes
            endpoint dengan berbagai metode (GET, POST, dll).
          </li>
          <li className="mt-4">
            Untuk saya sendiri biasanya menggunakan Postman untuk testing API
            berikut link download Postman :{" "}
            <a
              className="text-secondary underline"
              href="https://www.postman.com/downloads/"
            >
              https://www.postman.com/downloads/
            </a>
          </li>
          <li className="mt-4">
            Explore fitur <b>Resource</b> dan <b>Request Validation</b> di
            Laravel untuk API yang lebih kompleks.
          </li>
        </ul>

        <div className="alert alert-info mt-4">
          🚀 Selamat! Kamu sudah berhasil membuat REST API sederhana di{" "}
          <b>Laravel 12 </b>👋
        </div>
      </div>
    </>
  );
}

export default PengenalanLaravelApi;
