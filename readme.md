## Penjelasan Aplikasi

Proyek ini merupakan aplikasi web yang dikembangkan menggunakan Express JS, Handlebars, dan Sequelize ORM untuk mengelola operasi CRUD (Create, Read, Update, Delete). Aplikasi ini dibuat sebagai salah satu tugas dari Bootcamp Dumbways dan menggunakan PostgreSQL sebagai database. Selain itu, aplikasi ini juga memanfaatkan SweetAlert untuk memberikan notifikasi yang interaktif dan user-friendly.

## Fitur

- Create New Project
- Update existing Project
- Delete Project
- Show all project and show detail project
- validasi jika tanggal start project kurang dari selesai project dengan bantuan sweet alert

Deskripsi Pada daftar project akan menampilkan **Baca Selengkapnya** jika panjang deksripsi melebihi 120 Karakter dan masih banyak lagi

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Ripaldiansyah/my-project-app-dumbways.git

   ```

2. Navigate to the project folder:

   ```bash
   cd my-project-app-dumbways

   ```

3. Open with vscode:
   ```bash
   code .
   ```
4. install dependency :
   ```bash
   npm install
   ```
5. sesuaikan username dan password database
   ```bash
   src/config/config.json
   ```
6. Run migration
   ```bash
   npx sequelize db:migrate
   ```
7. Run seeder
   ```bash
   npx sequelize-cli db:seed:all
   ```
8. start with NPM
   ```bash
   npm run dev
   ```

## Screenshots

### Home

| Desktop                                       | Mobile                                                   |
| --------------------------------------------- | -------------------------------------------------------- |
| ![Home](screenshots/home.png)                 | ![Home Mobile](screenshots/homeMobile.png)               |
| ![Home Mobile 2](screenshots/homeMobile2.png) | ![Home Mobile Navigation](screenshots/homeMobileNav.png) |

---

### Fitur untuk Menambahkan Project

| Desktop                                                               | Mobile                                                                             |
| --------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| ![Add My Project](screenshots/addProject.png)                         | ![Add My Project Mobile](screenshots/addProjectMobile.png)                         |
| ![Add My Project Validation](screenshots/addProjectValidation.png)    | ![Add My Project Mobile Validation](screenshots/addProjectMobileValidation.png)    |
| ![Add My Project Validation 2](screenshots/addProjectValidation2.png) | ![Add My Project Mobile Validation 2](screenshots/addProjectMobileValidation2.png) |
| ![Add My Project Validation 3](screenshots/addProjectValidation3.png) | ![Add My Project Mobile Validation 3](screenshots/addProjectMobileValidation3.png) |
| ![Add My Project Validation 4](screenshots/addProjectValidation4.png) | ![Add My Project Mobile Validation 4](screenshots/addProjectMobileValidation4.png) |
| ![Add My Project Validation 5](screenshots/addProjectValidation5.png) | ![Add My Project Mobile Validation 5](screenshots/addProjectMobileValidation5.png) |

---

### Daftar Project

| Desktop                                          | Mobile                                                           |
| ------------------------------------------------ | ---------------------------------------------------------------- |
| ![List of Projects](screenshots/listProject.png) | ![List of Projects Mobile](screenshots/listProjectMobile.png)    |
|                                                  | ![List of Projects Mobile 2](screenshots/listProjectMobile2.png) |

---

### Explore & Delete Project

| Desktop                                                                 | Mobile                                                                               |
| ----------------------------------------------------------------------- | ------------------------------------------------------------------------------------ |
| ![Explore Project Validation](screenshots/listProjectValidation.png)    | ![Explore Project Mobile Validation](screenshots/listProjectMobileValidation.png)    |
| ![Explore Project Validation 2](screenshots/listProjectValidation2.png) | ![Explore Project Mobile Validation 2](screenshots/listProjectMobileValidation2.png) |

---

### Fitur Edit Project

| Desktop                                      | Mobile                                                    |
| -------------------------------------------- | --------------------------------------------------------- |
| ![Edit Project](screenshots/editProject.png) | ![Edit Project Mobile](screenshots/editProjectMobile.png) |

---

### Halaman Kontak

| Desktop                                                     | Mobile                                                                   |
| ----------------------------------------------------------- | ------------------------------------------------------------------------ |
| ![Contact](screenshots/contact.png)                         | ![Contact Mobile Validation](screenshots/contactMobileValidation.png)    |
| ![Contact Validation](screenshots/contactValidation.png)    | ![Contact Mobile Validation 2](screenshots/contactMobileValidation2.png) |
| ![Contact Validation 2](screenshots/contactValidation2.png) | ![Contact Mobile Validation 3](screenshots/contactMobileValidation3.png) |
| ![Contact Validation 3](screenshots/contactValidation3.png) |                                                                          |
