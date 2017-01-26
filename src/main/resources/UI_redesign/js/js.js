/*jslint browser: true*/
/*global $, jQuery, alert*/
$(document).ready(function () {
    'use strict';
    $('#enter-to-register-button').click(function () {
        $('#enter-form').css('display', 'none');
        $('#register-form').css('display', 'flex');
    });
    $('.main-site-link').click(function () {
        $('#enter-form').css('display', 'flex');
        $('#register-form').css('display', 'none');
    });
    /*------------------------*/
    $('.page-mask').click(function () {
        $('.settings').css('display', 'none');
        $('.page-mask').css('display', 'none');
    });
    $('.user-nav__settings').click(function () {
        $('.page-mask').css('display', 'block');
        $('.settings').css('display', 'block');
    });
    $(document).mouseup(function (e) {
        if ($('.user-nav').has(e.target).length === 0 && $('.page-header__settings').parent().has(e.target).length === 0) {
            $('.user-nav').css('display', 'none');
            $('.page-header__settings').css('transform', 'rotate(0deg)');
        }
        if ($('.category-add input').parent().has(e.target).length === 0) {
            $('.category-add input').css('display', 'none');
            $('.category-add label').css('display', 'block');
        }
        if ($('.task-nav__selector-menu').has(e.target).length === 0 && $('.task-nav__edit').parent().has(e.target).length === 0) {
            $('.task-nav__selector-menu').css('display', 'none');
        }
        if ($('.task-nav__add-project').parent().has(e.target).length === 0) {
            $('.task-nav__add-project-button').css('display', 'block');
            $('.task-nav__add-project').css('display', 'none');
        }
    });
    $('.page-header__settings').click(function () {
        if ($('.user-nav').css('display') === 'none') {
            $('.page-header__settings').css('transform', 'rotate(45deg)');
            $('.user-nav').css('display', 'flex');
        } else if ($('.user-nav').css('display') === 'flex') {
            $('.page-header__settings').css('transform', 'rotate(0deg)');
            $('.user-nav').css('display', 'none');
        }
    }).hover(function () {
        $('.page-header__settings').css('transform', 'rotate(45deg)');
    }).mouseleave(function () {
        if ($('.user-nav').css('display') === 'none') {
            $('.page-header__settings').css('transform', 'rotate(0deg)');
        }
    });
    $('.task-nav__add-project-button').click(function () {
        $('.task-nav__add-project-button').css('display', 'none');
        $('.task-nav__add-project').css('display', 'block');
        $('.task-nav__add-project__name').focus();
    });
    $('.task-nav__add-project__cancel').click(function () {
        $('.task-nav__add-project__name').val('');
        $('.task-nav__add-project-button').css('display', 'block');
        $('.task-nav__add-project').css('display', 'none');
    });
    $('.task-nav__project').hover(function () {
        $(this).children('.task-nav__edit').css('opacity', '0.2');
    }).mouseleave(function () {
        $(this).children('.task-nav__edit').css('opacity', '0');
    });
    $('.button-edit').hover(function () {
        $(this).css('opacity', '1');
    }).mouseleave(function () {
        $(this).css('opacity', '0.2');
    }).mousedown(function () {
        $(this).css('opacity', '0.5');
    }).mouseup(function () {
        $(this).css('opacity', '1');
    });
    $('.task-nav__edit').click(function () {
        var menu = $(this).parent().children('.task-nav__selector-menu');
        $('.task-nav__selector-menu').css('display', 'none');
        if (menu.css('display') === 'flex') {
            menu.css('display', 'none');
        } else {
            menu.css('display', 'flex');
        }
    });
    $('.task').hover(function () {
        $(this).children().children('.task__edit').css('opacity', '0.7');
    }).mouseleave(function () {
        $(this).children().children('.task__edit').css('opacity', '0');
    });
});