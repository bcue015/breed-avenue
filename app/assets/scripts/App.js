import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';
import $ from 'jquery';
import StickyHeader from './modules/StickyHeader';
import Modal from './modules/Modal';

var mobileMenu = new MobileMenu();
new RevealOnScroll($(".home-section"), "95%");
new RevealOnScroll($(".cat-section"), "55%");
new RevealOnScroll($(".dog-section"), "55%");
new RevealOnScroll($(".other-pets-section"), "55%");
new RevealOnScroll($(".blog-section"), "45%");
new RevealOnScroll($(".page-post"), "45%");
new RevealOnScroll($(".page-about"), "45%");
new RevealOnScroll($(".page-authors"), "15%");
new RevealOnScroll($(".site-footer"), "65%");
var stickyHeader = new StickyHeader();
var modal = new Modal();