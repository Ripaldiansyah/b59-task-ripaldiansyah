const submitButton = document.getElementById("btnAddProject");

if (submitButton) {
  submitButton.addEventListener("click", (e) => {
    e.preventDefault();

    const form = document.getElementById("formAddProject");

    const isDateValid =
      new Date(form.endDate.value) > new Date(form.startDate.value);

    if (isDateValid) {
      addProject(form);
    } else {
      confirm({
        text: "Pastikan tanggal mulai lebih besar dibandingkan tanggal selesai",
        icon: "error",
        showCancelButton: false,
        showResult: false,
      });
    }
  });
}

const contactSubmitBtn = document.getElementById("contactSubmitBtn");

if (contactSubmitBtn) {
  contactSubmitBtn.addEventListener("click", (e) => {
    e.preventDefault();

    const form = document.getElementById("contactForm");

    const isValid = form.checkValidity();
    if (isValid) {
      confirm({
        text: "Apakah Anda yakin ingin menghubui kami?",
        icon: "question",
        titleConfirm: "Membuka aplikasi email",
        callback: () => {
          submit(form);
        },
      });
    } else {
      confirm({
        text: "Pastikan semuanya telah terisi",
        icon: "error",
        showCancelButton: false,
        showResult: false,
      });
      form.reportValidity();
    }
  });
}

function deleteProject(id) {
  confirm({
    text: "Apakah Anda yakin ingin menghapus data ?",
    icon: "question",
    titleConfirm: "Project berhasil dihapus",
    callback: () => {
      const form = document.getElementById(`delete-${id}`);
      form.submit();
    },
  });
}

const editSubmitButton = document.getElementById("editBtnSubmit");
if (editSubmitButton) {
  editSubmitButton.addEventListener("click", (e) => {
    e.preventDefault();

    const form = document.getElementById("editFormProject");
    const isDateValid =
      new Date(form.endDate.value) > new Date(form.startDate.value);

    if (isDateValid) {
      editProject(form);
    } else {
      confirm({
        text: "Pastikan tanggal mulai lebih besar dibandingkan tanggal selesai",
        icon: "error",
        showCancelButton: false,
        showResult: false,
      });
    }
  });
}

function addProject(form) {
  const checkboxes = document.querySelectorAll(
    "input[name='technologies']:checked"
  );

  const isValid = form.checkValidity() && checkboxes.length > 0;
  if (isValid) {
    confirm({
      text: "Apakah Anda yakin ingin menambahkan data baru ?",
      icon: "question",
      titleConfirm: "Project berhasil ditambahkan",
      callback: () => {
        form.submit();
      },
    });
  } else {
    confirm({
      text: "Pastikan semuanya telah terisi",
      icon: "error",
      showCancelButton: false,
      showResult: false,
    });
    form.reportValidity();
  }
}
function editProject(form) {
  const checkboxes = document.querySelectorAll(
    "input[name='technologies']:checked"
  );

  const isValid = form.checkValidity() && checkboxes.length > 0;
  if (isValid) {
    confirm({
      text: "Apakah Anda yakin ingin merubah data ?",
      icon: "question",
      titleConfirm: "Project berhasil diubah",
      callback: () => {
        form.submit();
      },
    });
  } else {
    confirm({
      text: "Pastikan semuanya telah terisi",
      icon: "error",
      showCancelButton: false,
      showResult: false,
    });
    form.reportValidity();
  }
}

function confirm({
  title = "Konfirmasi",
  titleConfirm = "Project telah dihapus",
  text = "Apakah Anda yakin ingin menghapus ?",
  icon = "warning",
  showCancelButton = true,
  confirmText = "Ya",
  showResult = true,
  callback = () => {},
}) {
  Swal.fire({
    title: title,
    text: text,
    icon: icon,
    showCancelButton: showCancelButton,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: confirmText,
  }).then(async (result) => {
    if (result.isConfirmed) {
      if (showResult) {
        await Swal.fire({
          title: "Sukses",
          text: titleConfirm,
          icon: "success",
        });
      }
      callback();
    } else {
      if (showResult) {
        await Swal.fire({
          title: "Dibatalkan",
          text: "Operasi dibatalkan",
          icon: "warning",
        });
      }
    }
  });
}
