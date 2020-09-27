import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';
import $ from 'jquery';
import StickyHeader from './modules/StickyHeader';
import Modal from './modules/Modal';

var mobileMenu = new MobileMenu();
new RevealOnScroll($(".home-section__title"), "95%");
new RevealOnScroll($(".cat-section__content"), "85%");
new RevealOnScroll($(".dog-section__content"), "85%");
new RevealOnScroll($(".other-pets-section__content"), "85%");
new RevealOnScroll($(".blog-section__title"), "85%");
new RevealOnScroll($(".blog-section__the-btn"), "85%");
new RevealOnScroll($(".row--align-y-start"), "85%");
new RevealOnScroll($(".site-footer__bambi"), "95%");
var stickyHeader = new StickyHeader();
var modal = new Modal();