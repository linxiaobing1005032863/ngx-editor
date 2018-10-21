'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`<nav>
    <ul class="list">
        <li class="title">
            <a href="index.html" data-type="index-link">NgxEditor</a>
        </li>
        <li class="divider"></li>
        ${ isNormalMode ? `<div id="book-search-input" role="search">
    <input type="text" placeholder="Type to search">
</div>
` : '' }
        <li class="chapter">
            <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
            <ul class="links">
                    <li class="link">
                        <a href="overview.html" data-type="chapter-link">
                            <span class="icon ion-ios-keypad"></span>Overview
                        </a>
                    </li>
                    <li class="link">
                        <a href="index.html" data-type="chapter-link">
                            <span class="icon ion-ios-paper"></span>README
                        </a>
                    </li>
                    <li class="link">
                            <a href="license.html"
                        data-type="chapter-link">
                            <span class="icon ion-ios-paper"></span>LICENSE
                        </a>
                    </li>
                    <li class="link">
                        <a href="dependencies.html"
                            data-type="chapter-link">
                            <span class="icon ion-ios-list"></span>Dependencies
                        </a>
                    </li>
            </ul>
        </li>
        <li class="chapter">
            <div class="simple menu-toggler" data-toggle="collapse"
              ${ isNormalMode ? 'data-target="#additional-pages"' : 'data-target="#xs-additional-pages"'}>
                <span class="icon ion-ios-book"></span>
                <span>Wiki</span>
                <span class="icon ion-ios-arrow-down"></span>
            </div>
            <ul class="links collapse"
                ${ isNormalMode ? 'id="additional-pages"' : 'id="xs-additional-pages"' }>
                    <li class="link ">
                        <a href="additional-documentation/prerequisites.html" data-type="entity-link" data-context-id="additional">Prerequisites</a>
                    </li>
                    <li class="link ">
                        <a href="additional-documentation/configuration.html" data-type="entity-link" data-context-id="additional">Configuration</a>
                    </li>
                    <li class="link ">
                        <a href="additional-documentation/toolbar.html" data-type="entity-link" data-context-id="additional">Toolbar</a>
                    </li>
                    <li class="link ">
                        <a href="additional-documentation/font-size.html" data-type="entity-link" data-context-id="additional">Font Size</a>
                    </li>
                    <li class="link ">
                        <a href="additional-documentation/colors.html" data-type="entity-link" data-context-id="additional">Colors</a>
                    </li>
                    <li class="link ">
                        <a href="additional-documentation/image-uploader.html" data-type="entity-link" data-context-id="additional">Image Uploader</a>
                    </li>
                    <li class="link ">
                        <a href="additional-documentation/insert-video.html" data-type="entity-link" data-context-id="additional">Insert Video</a>
                    </li>
                    <li class="link ">
                        <a href="additional-documentation/resizer.html" data-type="entity-link" data-context-id="additional">Resizer</a>
                    </li>
                    <li class="link ">
                        <a href="additional-documentation/errors.html" data-type="entity-link" data-context-id="additional">Errors</a>
                    </li>
            </ul>
        </li>
        <li class="chapter modules">
            <a data-type="chapter-link" href="modules.html">
                <div class="menu-toggler linked" data-toggle="collapse"
                    ${ isNormalMode ? 'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                    <span class="icon ion-ios-archive"></span>
                    <span class="link-name">Modules</span>
                    <span class="icon ion-ios-arrow-down"></span>
                </div>
            </a>
            <ul class="links collapse"
            ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                    <li class="link">
                        <a href="modules/AppModule.html" data-type="entity-link">AppModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#components-links-module-AppModule-52b32e759b7b854ca380ddd56e4fac1a"' : 'data-target="#xs-components-links-module-AppModule-52b32e759b7b854ca380ddd56e4fac1a"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-AppModule-52b32e759b7b854ca380ddd56e4fac1a"' : 'id="xs-components-links-module-AppModule-52b32e759b7b854ca380ddd56e4fac1a"' }>
                                        <li class="link">
                                            <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppComponent</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/NgxEditorModule.html" data-type="entity-link">NgxEditorModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#components-links-module-NgxEditorModule-836f5e0fd81f4a5e56fd17c6fef70e5a"' : 'data-target="#xs-components-links-module-NgxEditorModule-836f5e0fd81f4a5e56fd17c6fef70e5a"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-NgxEditorModule-836f5e0fd81f4a5e56fd17c6fef70e5a"' : 'id="xs-components-links-module-NgxEditorModule-836f5e0fd81f4a5e56fd17c6fef70e5a"' }>
                                        <li class="link">
                                            <a href="components/NgxEditorComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">NgxEditorComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/NgxEditorMessageComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">NgxEditorMessageComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/NgxEditorToolbarComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">NgxEditorToolbarComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/NgxGrippieComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">NgxGrippieComponent</a>
                                        </li>
                                </ul>
                            </li>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#injectables-links-module-NgxEditorModule-836f5e0fd81f4a5e56fd17c6fef70e5a"' : 'data-target="#xs-injectables-links-module-NgxEditorModule-836f5e0fd81f4a5e56fd17c6fef70e5a"' }>
                                    <span class="icon ion-md-arrow-round-down"></span>
                                    <span>Injectables</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="injectables-links-module-NgxEditorModule-836f5e0fd81f4a5e56fd17c6fef70e5a"' : 'id="xs-injectables-links-module-NgxEditorModule-836f5e0fd81f4a5e56fd17c6fef70e5a"' }>
                                        <li class="link">
                                            <a href="injectables/CommandExecutorService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules"}>CommandExecutorService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/MessageService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules"}>MessageService</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
            </ul>
        </li>
        <li class="chapter">
            <div class="simple menu-toggler" data-toggle="collapse"
                ${ isNormalMode ? 'data-target="#interfaces-links"' : 'data-target="#xs-interfaces-links"' }>
                <span class="icon ion-md-information-circle-outline"></span>
                <span>Interfaces</span>
                <span class="icon ion-ios-arrow-down"></span>
            </div>
            <ul class="links collapse"
            ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                    <li class="link">
                        <a href="interfaces/IMaxLengthValidatorOptions.html" data-type="entity-link">IMaxLengthValidatorOptions</a>
                    </li>
            </ul>
        </li>
        <li class="chapter">
            <div class="simple menu-toggler" data-toggle="collapse"
            ${ isNormalMode ? 'data-target="#miscellaneous-links"' : 'data-target="#xs-miscellaneous-links"' }>
                <span class="icon ion-ios-cube"></span>
                <span>Miscellaneous</span>
                <span class="icon ion-ios-arrow-down"></span>
            </div>
            <ul class="links collapse"
            ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                    <li class="link">
                      <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                    </li>
                    <li class="link">
                      <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                    </li>
            </ul>
        </li>
    </ul>
</nav>`);
        this.innerHTML = tp.strings;
    }
});