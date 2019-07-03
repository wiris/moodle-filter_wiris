<?php
// This file is part of Moodle - http://moodle.org/
//
// Moodle is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// Moodle is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with Moodle.  If not, see <http://www.gnu.org/licenses/>.

/**
 * Methods related to the interaction with the MathType.
 * @package    filter
 * @subpackage wiris
 * @copyright  WIRIS Europe (Maths for more S.L)
 * @license    http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */

// NOTE: no MOODLE_INTERNAL test here, this file may be required by behat before including /config.php.

require_once(__DIR__ . '/behat_wiris_base.php');

class behat_wiris_page extends behat_wiris_base {

    /**
     * Click on Message field
     *
     * @Given I click on Message field
     * @throws Exception If Message field does not exist, it will throw an exception.
     */
    public function i_click_on_message_field() {
        $session = $this->getSession();
        behat_field_manager::get_form_field_from_label("Message", $this);
        $component = $session->getPage()->find(
            'xpath',
            $session->getSelectorsHandler()->selectorToXpath('xpath', '//div[@id="id_messageeditable"]')
        );
        if (empty($component)) {
            throw new Exception("Message field does not exsits.");
        }
        $component->click();
    }

    /**
     * Place caret in a certain position in the Message field
     *
     * @Given I place caret at position :position in Message field
     * @throws Exception If Message field does not exist, it will throw an exception.
     */
    public function i_place_caret_at_position($position) {
        $session = $this->getSession();
        behat_field_manager::get_form_field_from_label("Message", $this);
        $script = 'range = window.parent.document.getSelection().getRangeAt(0);'
            .'node = document.getElementById(\'id_messageeditable\').firstChild;'
            .'window.parent.document.getSelection().removeAllRanges();'
            .'range.setStart(node,'.$position.');'
            .'range.setEnd(node,'.$position.');'
            .'window.parent.document.getSelection().addRange(range);'
            .'window.parent.document.body.focus();';
        $session->executeScript($script);
    }

    /**
     * Press MathType button in Question field
     *
     * @Given I press MathType in Question field
     * @throws Exception If MathType button does not exist, it will throw an exception.
     */
    public function i_press_mathtype_in_questiontext_field() {
        $session = $this->getSession();
        $component = $session->getPage()->find(
            'xpath',
            $session->getSelectorsHandler()->selectorToXpath('xpath', '//div[@id="fitem_id_questiontext"]
            //button[@class="atto_wiris_button_wiris_editor"]')
        );
        if (empty($component)) {
            throw new Exception ('MathType button in Question field not found');
        }
        $component->click();
    }

    /**
     * Press MathType button in General feedback field
     *
     * @Given I press MathType in General feedback field
     * @throws Exception If MathType button does not exist, it will throw an exception.
     */
    public function i_press_mathtype_in_general_feedback_field() {
        $session = $this->getSession();
        $component = $session->getPage()->find(
            'xpath',
            $session->getSelectorsHandler()->selectorToXpath('xpath', '//div[@id="fitem_id_generalfeedback"]
            //button[@class="atto_wiris_button_wiris_editor"]')
        );
        if (empty($component)) {
            throw new Exception ('MathType button in General feedback field not found');
        }
        $component->click();
    }

    /**
     * Press MathType button in Answer1 Feedback field
     *
     * @Given I press MathType in Answer1 Feedback field
     * @throws Exception If MathType button does not exist, it will throw an exception.
     */
    public function i_press_mathtype_in_answer1_feedback_field() {
        $session = $this->getSession();
        $component = $session->getPage()->find(
            'xpath',
            $session->getSelectorsHandler()->selectorToXpath('xpath', '//div[@id="fitem_id_feedback_0"]
            //button[@class="atto_wiris_button_wiris_editor"]')
        );
        if (empty($component)) {
            throw new Exception ('MathType button in Answer1 Feedback field not found');
        }
        $component->click();
    }

    /**
     * Press HTML button in Question field
     *
     * @Given I press HTML in Question field
     * @throws Exception If HTML button does not exist, it will throw an exception.
     */
    public function i_press_html_in_question_field() {
        $session = $this->getSession();
        $component = $session->getPage()->find(
            'xpath',
            $session->getSelectorsHandler()->selectorToXpath('xpath', '//div[@id="fitem_id_questiontext"]
            //button[@class="atto_html_button"]')
        );
        if (empty($component)) {
            throw new Exception ('HTML button in Question field not found');
        }
        $component->click();
    }

    /**
     * Press HTML button in General feedback field
     *
     * @Given I press HTML in General feedback field
     * @throws Exception If HTML button does not exist, it will throw an exception.
     */
    public function i_press_html_in_general_feedback_field() {
        $session = $this->getSession();
        $component = $session->getPage()->find(
            'xpath',
            $session->getSelectorsHandler()->selectorToXpath('xpath', '//div[@id="fitem_id_generalfeedback"]
            //button[@class="atto_html_button"]')
        );
        if (empty($component)) {
            throw new Exception ('HTML button in General feedback field not found');
        }
        $component->click();
    }

    /**
     * Press HTML button in Answer1 Feedback field
     *
     * @Given I press HTML in Answer1 Feedback field
     * @throws Exception If HTML button does not exist, it will throw an exception.
     */
    public function i_press_html_in_answer1_feedback_field() {
        $session = $this->getSession();
        $component = $session->getPage()->find(
            'xpath',
            $session->getSelectorsHandler()->selectorToXpath('xpath', '//div[@id="fitem_id_feedback_0"]
            //button[@class="atto_html_button"]')
        );
        if (empty($component)) {
            throw new Exception ('HTML button in Answer1 Feedback field not found');
        }
        $component->click();
    }

    /**
     * Look whether an element contains certain value for an attribute
     *
     * @Then element :element containing attribute :attribute with value :value should exist
     * @param  string $element element to find
     * @param  string $attribute attribute of the element to find
     * @param  string $value value for the attribute of the element to find
     */
    public function element_containing_attribute_with_value_should_exist($element, $attribute, $value) {
        $session = $this->getSession();
        $component = $session->getPage()->find(
            'xpath',
            $session->getSelectorsHandler()->selectorToXpath('xpath', '//'.$element.'[contains(@'.$attribute.', \''.$value.'\')]')
        );
        if (empty($component)) {
            throw new Exception ($element.' with value '.$value.' for attribute '.$attribute.' not found');
        }
    }

    /**
     * Look whether an element contains certain value for an attribute
     *
     * @Then element :element containing attribute :attribute with value :value should not exist
     * @param  string $element element to find
     * @param  string $attribute attribute of the element to find
     * @param  string $value value for the attribute of the element to find
     */
    public function element_containing_attribute_with_value_should_not_exist($element, $attribute, $value) {
        $session = $this->getSession();
        $component = $session->getPage()->find(
            'xpath',
            $session->getSelectorsHandler()->selectorToXpath('xpath', '//'.$element.'[contains(@'.$attribute.', \''.$value.'\')]')
        );
        if (!empty($component)) {
            throw new Exception ($element.' with value \''.$value.'\' for attribute \''.$attribute.'\' does exist');
        }
    }

    /**
     * Click on an element that contains certain value for an attribute
     *
     * @Given I click on element :element containing attribute :attribute with value :value
     * @throws ElementNotFoundException If the element does not exist, it will throw an exception.
     */
    public function i_click_on_element_containing_attribute_with_value($element, $attribute, $value) {
        $session = $this->getSession();
        $component = $session->getPage()->find(
            'xpath',
            $session->getSelectorsHandler()->selectorToXpath('xpath', '//'.$element.'[contains(@'.$attribute.', \''.$value.'\')]')
        );
        if (empty($component)) {
            throw new Exception ($element.' with value \''.$value.'\' for attribute \''.$attribute.'\' do not exist');
        }
        $component->click();
    }

    /**
     * Execute mathjax script
     *
     * @Given I enable saveMode
     */
    public function i_enable_save_mode() {
        $script = 'WirisPlugin.Configuration.set("saveMode", "xml")';
        $this->getSession()->executeScript($script);
    }

    /**
     * Follow a specific url
     *
     * @Given I go to link :url
     */
    public function i_go_to_link($url) {
        $script = 'window.location.replace("http://127.0.0.1/moodle3_5'.$url.'");';
        $this->getSession()->executeScript($script);
    }

    /**
     * Go back on the browser
     *
     * @Given I go back
     */
    public function i_go_back() {
        $this->getSession()->back();
    }

    /**
     * Go back on the browser
     *
     * @Given I create an image with mml :mml and visit to its path
     */
    public function i_create_an_image_with_mml_mml_and_visit_to_its_path($mml) {
        $session = $this->getSession();
        $script = 'window.location.replace("http://127.0.0.1/moodle3_5/filter/wiris/integration/createimage.php?mml='
        .$mml.'&lang=en&metrics=&centerbaseline=false");';
        $session->executeScript($script);
        $script = 'return document.body.innerHTML';
        $path = $session->evaluateScript($script);
        $script = 'window.location.replace("'.$path.'");';
        $session->executeScript($script);
    }

    /**
     * Svg element is correctly displayed in the current page
     *
     * @Then svg is correctly displayed
     */
    public function svg_is_correclt_displayed() {
        $script = 'return document.children[0].nodeName';
        $node = $this->getSession()->evaluateScript($script);
        return $node == 'svg';
    }
}
