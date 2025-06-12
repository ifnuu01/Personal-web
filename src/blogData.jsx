import PengenalanLaravelApi from "./components/posts/PengenalanLaravelApi";

const posts = [
  {
    title: "Pengenalan API Laravel",
    date: "2025-01-01",
    slug: "pengenalan-api-laravel",
    description:
      "Dalam tutorial ini, kita akan membahas cara membuat API sederhana menggunakan Laravel. Kita akan membuat endpoint untuk mengelola data pengguna.",
    link: "/blog/pengenalan-api-laravel",
    component: PengenalanLaravelApi,
  },
  {
    title: "Membuat Create API dengan Laravel",
    slug: "membuat-create-api-dengan-laravel",
    date: "2025-01-02",
    description:
      "Pada artikel ini, kita akan belajar cara membuat endpoint API untuk menambahkan data pengguna baru ke dalam database menggunakan Laravel.",
    link: "#",
    component: PengenalanLaravelApi,
  },
];

export default posts;
