<p align="center"><a href="https://laravel.com" target="_blank"><img src="https://raw.githubusercontent.com/laravel/art/master/logo-lockup/5%20SVG/2%20CMYK/1%20Full%20Color/laravel-logolockup-cmyk-red.svg" width="400" alt="Laravel Logo"></a></p>

<p align="center">
<a href="https://github.com/laravel/framework/actions"><img src="https://github.com/laravel/framework/workflows/tests/badge.svg" alt="Build Status"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/dt/laravel/framework" alt="Total Downloads"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/v/laravel/framework" alt="Latest Stable Version"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/l/laravel/framework" alt="License"></a>
</p>

## Тестовое задание HH 24.01.2024

Тестовое задание:
Что нужно сделать?
Подобие формы обратной связи

Как сделать?
Фронтенд:
Сделать одностраничное приложение (SPA) используя vueJs, vuex, vue-router
Приложение должно содержать 2 страницы:
1 страница: форма с полями (имя, обращение). Форма должна отправляться на бэкенд и сохраняться в локальном store (vuex)
2 страница: отображает списком эти формы, только то, что отправляли на 1 странице и было сохранено во vuex, без запроса к бекенду. (Если после обновления страницы данные пропадут, это нормально)
Переключение между страницами сделать через vue-router без перезагрузки. Дизайн и внешний вид вообще не важен, смотрим на использование vuex, vue-router.

Бэкенд:
Принимать данные с фронта и сохранять данные через фабрику (реализовать простейшую фабрики).
В фабрику передается database или email при создании. И у фабрики должен быть метод save(). Фабрика должна выбрать место для сохранения и сохранить (данные можно и не сохранять, просто реализовать методы).

Что необходимо использовать:
- PHP 7 и выше
- ООП (для реализации фабрики сохранения)
- Фреймворк Laraveд
- Обязательно Vuejs, Vuex, Vue-Router
