function submit(form) {
  const formData = new FormData(form);

  const data = Object.fromEntries(formData.entries());

  const name = data.name;
  const email = data.email;
  const phoneNumber = data.phoneNumber;
  const subject = data.subject;
  const message = data.message;

  const link = document.createElement("a");
  link.href = `mailto:ripaldiansyah13@gmail.com?subject=${subject}&body= Halo nama saya ${name} ${message} silahkan menghubungi saya melalui nomor telp berikut ${phoneNumber} atau email ${email}`;
  link.click();
}
