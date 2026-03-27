<div align="center">

# 🎵 BepopApp Server

**Modern Müzik Platformu ve Akıllı Öneri Motoru Backend Servisi**

[![.NET](https://img.shields.io/badge/.NET-512BD4?style=for-the-badge&logo=dotnet&logoColor=white)](https://dotnet.microsoft.com/)
[![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white)](https://www.python.org/)
[![FastAPI](https://img.shields.io/badge/FastAPI-009688?style=for-the-badge&logo=fastapi&logoColor=white)](https://fastapi.tiangolo.com/)
[![MySQL](https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white)](https://www.mysql.com/)
[![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)](https://www.docker.com/)
[![n8n](https://img.shields.io/badge/n8n-FF6D5A?style=for-the-badge&logo=n8n&logoColor=white)](https://n8n.io/)

[Mimarisi](#-mimari-ve-teknoloji-yığını) • [Kurulum](#-kurulum-ve-kullanım) • [Özellikler](#-temel-özellikler) • [İletişim](#-iletişim)

</div>

## 📖 Proje Hakkında

**BepopApp Server**, kullanıcıların müzik dinleyebildiği, sanatçı ve albümleri keşfedebildiği bir platformun arka uç (backend) sistemidir. Salt bir CRUD uygulamasının ötesine geçerek, **Makine Öğrenmesi (Machine Learning)** destekli bir mikroservis ile kullanıcılara kişiselleştirilmiş müzik önerileri sunar. 

Proje, endüstri standartlarında kurumsal bir yapı hedeflenerek **Katmanlı Mimari (N-Tier Architecture)** prensipleriyle inşa edilmiştir.

## 🚀 Temel Özellikler

- **Gelişmiş Kimlik Yönetimi:** ASP.NET Core Identity ve JWT (JSON Web Token) tabanlı güvenli doğrulama.
- **Akıllı Öneri Motoru:** Python, FastAPI ve `scikit-learn` (Matrix Factorization) kullanılarak geliştirilmiş, Dockerize edilmiş bağımsız müzik öneri mikroservisi.
- **Temiz Kod (Clean Code) & AOP:** Controller'ları if-else bloklarından arındırmak için özel yazılmış `ValidationFilter` middleware'i ve DTO'lar üzerinde `FluentValidation` entegrasyonu.
- **Gelişmiş Veri Erişimi:** Generic Repository ve Unit of Work (UoW) tasarım desenleri ile asenkron veritabanı işlemleri.
- **Otomasyon (Workflow):** **n8n** ve **Gemini API** entegrasyonu ile haftalık kişiselleştirilmiş öneri bültenlerinin dinamik olarak oluşturulup kullanıcılara e-posta ile iletilmesi.

## 📸 Ekran Görüntüleri (Proje Albümü)

<table align="center">
  <tr>
    <td align="center">
      <img src="https://github.com/user-attachments/assets/4166f4b7-6a88-460c-b6aa-a77bd7f9b636" width="400" alt="n8n İş Akışı"/>
      <br />
      <b>n8n Otomasyon Akışı</b>
    </td>
    <td align="center">
      <img src="https://github.com/user-attachments/assets/004000a9-ecf6-40d1-bb1a-70423cdc5327" width="400" alt="Gemini AI Mail Çıktısı"/>
      <br />
      <b>Gemini AI Destekli E-Posta Çıktısı</b>
    </td>
  </tr>
  <tr>
    <td align="center">
      <img src="https://github.com/user-attachments/assets/bc33ed19-b54d-44f1-9e32-cf41a770d7a6" width="400" alt="Ana Sayfa"/>
      <br />
      <b>Ana Sayfa</b>
    </td>
    <td align="center">
      <img src="https://github.com/user-attachments/assets/1202516c-6cd7-43de-9122-07f08090d2be" width="400" alt="Ana Sayfa Paket Hatası"/>
      <br />
      <b>Ana Sayfa (Paket Uyarısı)</b>
    </td>
  </tr>
  <tr>
    <td align="center">
      <img src="https://github.com/user-attachments/assets/1664e4dd-525a-44c6-8ba1-f2fc91cdb3b6" width="400" alt="Parçalar"/>
      <br />
      <b>Parçalar (Şarkılar)</b>
    </td>
    <td align="center">
      <img src="https://github.com/user-attachments/assets/a4f25185-336f-49a9-b7ce-7a64be7a224f" width="400" alt="Albümler"/>
      <br />
      <b>Albümler Sayfası</b>
    </td>
  </tr>
  <tr>
    <td align="center">
      <img src="https://github.com/user-attachments/assets/91461e2b-72eb-491a-b246-cee410579cce" width="400" alt="En İyiler"/>
      <br />
      <b>En İyiler Sayfası (Top Charts)</b>
    </td>
    <td align="center">
      <img src="https://github.com/user-attachments/assets/af7a83bb-7617-497b-8b17-b5791288f61f" width="400" alt="Şarkıcılar"/>
      <br />
      <b>Şarkıcılar Sayfası</b>
    </td>
  </tr>
  <tr>
    <td align="center">
      <img src="https://github.com/user-attachments/assets/c03dd919-1611-4a7c-baf4-8538395b3da4" width="400" alt="Şarkıcı Detay"/>
      <br />
      <b>Şarkıcı Detay Sayfası</b>
    </td>
    <td align="center">
      <img src="https://github.com/user-attachments/assets/909a6092-12b5-44fc-9679-60b71c0807ca" width="400" alt="Şarkıcı Albüm Detay"/>
      <br />
      <b>Şarkıcı Albüm Detay Sayfası</b>
    </td>
  </tr>
  <tr>
    <td align="center" colspan="2">
      <img src="https://github.com/user-attachments/assets/0426820a-b744-400c-8d1e-3fb860616a27" width="400" alt="Login Sayfası"/>
      <br />
      <b>Kullanıcı Giriş (Login) Sayfası</b>
    </td>
  </tr>
</table>

## 🏗 Mimari ve Teknoloji Yığını

Proje, bileşenler arası bağımlılığı en aza indirmek (loose coupling) amacıyla 4 ana katmandan oluşmaktadır:

```text
📦 BepopAppServer
 ┣ 📂 BepopAppServer.Entity    # Core Modeller, Base Entity ve Interface'ler
 ┣ 📂 BepopAppServer.DAL       # Data Access (EF Core), Repository, UoW, Migrations
 ┣ 📂 BepopAppServer.Business  # İş Kuralları, DTO'lar, Validation Kuralları, Servisler
 ┗ 📂 BepopAppServer.API       # Controller'lar, Middlewares, AppSettings (Entry Point)
 ┣ 📂 [Python Microservice]    # ML Tabanlı Recommendation Servisi (FastAPI)
