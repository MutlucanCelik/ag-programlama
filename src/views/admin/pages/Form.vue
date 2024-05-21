<template>
  <div class="container-fluid">
    <div class="mb-5 d-flex justify-content-center">
        <h3>Kullanıcı ekle</h3>
    </div>
    <form action="" class="row flex-column w-100">
        <div class="mb-3">
            <label for="">Adı soyad</label>
            <input type="text" class="form-control" name="name">
        </div>
        <div class="mb-3">
            <label for="">Yaş</label>
            <input type="text" class="form-control" name="age">
        </div>
        <div class="mb-3">
            <label for="">Doğum tarihi</label>
            <input type="text" class="form-control" name="date_of_birth">
        </div>
        <div class="mb-3">
            <label for="">Adres</label>
            <textarea name="address" class="form-control" cols="30" rows="5"></textarea>
        </div>
        <button class="btn btn-sn btn-success w-100">Gönder</button>
    </form>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
        .container-fluid{
            padding: 1rem 7rem;
        }
</style>