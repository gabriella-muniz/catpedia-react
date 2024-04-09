import { GiCat } from "react-icons/gi";

export default function Footer() {
    return(
        <footer id="contact" class="bg-black text-white py-8 px-8 sm:px-12 md:px-20 lg:px-32 xl:px-40">
  <div class="max-w-screen-xl mx-auto">
    <div class="flex flex-col sm:flex-row justify-between">
      <div class="mb-8 sm:mr-8 sm:w-2/5">
        <h4 class="mb-4">
          Catpédia <i class="fas fa-cat"></i>
        </h4>
        <p class="text-sm leading-relaxed">
          Espero que tenha apreciado nosso site que é dedicado aos amantes de gatos e entusiastas de raças felinas! Obrigado por nos acompanhar nesta aventura felina! Para obter mais informações, você pode encontrá-las em nossas redes sociais.
        </p>
      </div>

      <div>
        <h4 class="mb-4">SOCIAL</h4>
        <div class="flex space-x-4">
          <a href="#"  class="text-white">
          <GiCat />
          </a>
          <a href="#"  class="text-white">
          <GiCat />
          </a>
          <a href="#" target="_blank" class="text-white">
          <GiCat />
          </a>
        </div>
      </div>
    </div>

    <div class="border-t border-gray-700 pt-8 text-center text-xs">
      <span>© Copyright 2024. Made by Gabriella Muniz</span>
    </div>
  </div>
</footer>

    )
}