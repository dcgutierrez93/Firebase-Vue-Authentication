<style lang="css">

.ft-vertical-seperator {
    height: 2em;
}

.sidenav {
    height: 100%;
    width: 300px;
    position: fixed;
    z-index: -1;
    top: 0;
    left: 0;
    background-color: #f2f2f2;
    overflow-x: hidden;
    padding-top: 20px;
}

</style>

<template lang="html">

<div class="container">

    <div class="ft-vertical-seperator"></div>

    <!-- Upload Component -->
    <div class="card">
        <div class="card-body">
            <div class="custom-file">
                <input type="file" class="custom-file-input" id="customFile">
                <label class="custom-file-label" for="customFile">Choose file</label>
            </div>
        </div>
    </div>

    <div class="ft-vertical-seperator"></div>

    <!-- Nabar component -->
    <div class="card">
        <div class="card-body">
            <ul class="nav justify-content-center">
                <li class="nav-item">
                    <a class="nav-link active" href="#">Images</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Files</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Music</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Videos</a>
                </li>
            </ul>
            <hr>
            <!-- Files -->
            <div class="">

            </div>

        </div>
    </div>
</div>

</template>

<script>

export default {}

</script>
