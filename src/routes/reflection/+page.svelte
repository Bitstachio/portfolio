<script lang="ts">
import SectionTitle from "$lib/components/layout/SectionTitle.svelte";
</script>

<section class="app-container-main">
    <SectionTitle text="Co-op Reflection" />
    <div class="app-bg-white">
        <video controls width="640" height="360">
            <source src="/reflection/reflection.mp4" type="video/mp4"/>
            <track kind="captions" src="/captions.vtt" srclang="en" label="English" default/>
            Your browser does not support the video tag.
        </video>
    </div>
</section>

<style>
    .app-bg-white {
        width: fit-content;
    }
</style>
