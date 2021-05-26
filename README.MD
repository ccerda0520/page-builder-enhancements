# ComponentBasedCarlos_PageBuilderEnhancements

A Magento 2 module that adds features on top of the page builder module.

## Description

This module introduces features to the Magento/Adobe Commerce Page Builder module.

## Installation Instructions
_Install using composer_
```$xslt
composer require ccerda0520/page-builder-enhancements
php bin/magento module:enable ComponentBasedCarlos_PageBuilderEnhancements
php bin/magento setup:upgrade
```


## Features

* As of Magento 2.4.2, the concept of [Viewports](https://devdocs.magento.com/page-builder/docs/viewports/introduction.html)
was introduced where a user can now control element values on different screen breakpoints, making it much simpler to
style components for mobile screens. As of the creation of this module, the amount of elements that take advantage of
this feature are low. This module adds the ability to control margin/padding values on the "mobile" viewport/breakpoint
for the following elements.
    * Banner
    * Buttons
    * Button Item
    * Column
    * Heading
    * Html
    * Image
    * Row
    * Slider
    * Slide
    * Tabs
    * Tab Item
    * Text
    * Video

