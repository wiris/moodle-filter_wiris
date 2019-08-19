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
     * Check the size of the formula in full screen mode
     *
     * @Given I press :button in full screen mode
     * @param  string $button button to press
     * @throws Exception If the button does not exist, it will throw an exception.
     */
    public function i_press_mathtype_in_full_screen_mode($button) {
        $session = $this->getSession();
        $buttonarray = array(
            "MathType" => "mce_fullscreen_tiny_mce_wiris_formulaEditor",
            "ChemType" => "mce_fullscreen_tiny_mce_wiris_formulaEditorChemistry",
            "Full screen" => "mce_fullscreen_fullscreen"
        );
        if (empty($buttonarray[$button])) {
            throw new Exception($button." button not registered.");
        }
        $component = $session->getPage()->find(
            'xpath',
            $session->getSelectorsHandler()->selectorToXpath('xpath', '//*[@id="'.$buttonarray[$button].'"]')
        );
        if (empty($component)) {
            throw new Exception ('"'.$button.'" button not found in full screen mode');
        }
        $component->click();
    }

    /**
     * Click on a certain field
     *
     * @Given I click on :field field
     * @param  string $field field to click on
     * @throws Exception If the field does not exist, it will throw an exception.
     */
    public function i_click_on_field($field) {
        $fieldarray = array(
            "Page content" => "id_pageeditable",
            "Question text" => "id_questiontexteditable",
            "General feedback" => "id_generalfeedbackeditable",
            "Feedback" => "id_feedback_0editable"
        );
        if (empty($fieldarray[$field])) {
            throw new Exception($field." field not registered.");
        }
        $session = $this->getSession();
        $component = $session->getPage()->find(
            'xpath',
            $session->getSelectorsHandler()->selectorToXpath('xpath', '//div[@id="'.$fieldarray[$field].'"]')
        );
        if (empty($component)) {
            throw new Exception($field." field not correctly recognized.");
        }
        $component->click();
    }

    /**
     * Place caret in a certain position in a certain field
     *
     * @Given I place caret at position :position in :field field
     * @param  integer $position position to which the caret is placed
     * @param  string $field field to check
     * @throws Exception If the field does not exist, it will throw an exception.
     */
    public function i_place_caret_at_position_in_field($position, $field) {
        $fieldarray = array(
            "Page content" => "id_pageeditable",
            "Question text" => "id_questiontexteditable",
            "General feedback" => "id_generalfeedbackeditable",
            "Feedback" => "id_feedback_0editable"
        );
        if (empty($fieldarray[$field])) {
            throw new Exception($field." field not registered.");
        }
        $session = $this->getSession();
        $component = $session->getPage()->find(
            'xpath',
            $session->getSelectorsHandler()->selectorToXpath('xpath', '//div[@id="'.$fieldarray[$field].'"]')
        );
        if (empty($component)) {
            throw new Exception($field." field not correctly recognized.");
        }
        $session = $this->getSession();
        behat_field_manager::get_form_field_from_label("Page content", $this);
        $script = 'range = window.parent.document.getSelection().getRangeAt(0);'
            .'node = document.getElementById(\''.$fieldarray[$field].'\').firstChild;'
            .'window.parent.document.getSelection().removeAllRanges();'
            .'range.setStart(node,'.$position.');'
            .'range.setEnd(node,'.$position.');'
            .'window.parent.document.getSelection().addRange(range);'
            .'window.parent.document.body.focus();';
        $session->executeScript($script);
    }

    /**
     * Press certain button in certain field in Atto
     *
     * @Given I press :button in :field field in Atto editor
     * @param  string $button button to press
     * @param  string $field field to check
     * @throws Exception If the field does not exist, it will throw an exception.
     */
    public function i_press_in_field_in_atto_editor($button, $field) {
        $sectionarray = array(
            "Page content" => "fitem_id_page",
            "Question text" => "fitem_id_questiontext",
            "General feedback" => "fitem_id_generalfeedback",
            "Feedback" => "fitem_id_feedback_0"
        );
        if (empty($sectionarray[$field])) {
            throw new Exception($field." field not registered.");
        }
        $buttonarray = array(
            "MathType" => "atto_wiris_button_wiris_editor",
            "ChemType" => "atto_wiris_button_wiris_chem_editor",
            "HTML" => "atto_html_button"
        );
        if (empty($buttonarray[$button])) {
            throw new Exception($button." button not registered.");
        }
        $session = $this->getSession();
        $component = $session->getPage()->find(
            'xpath',
            $session->getSelectorsHandler()->selectorToXpath('xpath', '//div[@id="'.$sectionarray[$field].'"]
            //button[@class="'.$buttonarray[$button].'"]')
        );
        if (empty($component)) {
            throw new Exception ('"'.$button.'" button not found in "'.$field.'" field');
        }
        $component->click();
    }

    /**
     * Press certain button in certain field in Tiny
     *
     * @Given I press :button in :field field in TinyMCE editor
     * @param  string $button button to press
     * @param  string $field field to check
     * @throws Exception If the field does not exist, it will throw an exception.
     */
    public function i_press_in_field_in_tinymce_editor($button, $field) {
        $sectionarray = array(
            "Page content" => "fitem_id_page",
            "Question text" => "fitem_id_questiontext",
            "General feedback" => "fitem_id_generalfeedback",
            "Feedback" => "fitem_id_feedback_0"
        );
        if (empty($sectionarray[$field])) {
            throw new Exception($field." field not registered.");
        }
        $buttonarray = array(
            "MathType" => "id_page_tiny_mce_wiris_formulaEditor",
            "ChemType" => "id_page_tiny_mce_wiris_formulaEditorChemistry",
            "Toggle" => "id_page_pdw_toggle",
            "Full screen" => "id_page_fullscreen"
        );
        if (empty($buttonarray[$button])) {
            throw new Exception($button." button not registered.");
        }
        $session = $this->getSession();
        $component = $session->getPage()->find(
            'xpath',
            $session->getSelectorsHandler()->selectorToXpath('xpath', '//div[@id="'.$sectionarray[$field].'"]
            //*[@id="'.$buttonarray[$button].'"]')
        );
        if (empty($component)) {
            throw new Exception ('"'.$button.'" button not found in "'.$field.'" field');
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
        $this->getSession()->visit($this->locate_path($url));
    }


    /**
     * Check if MathType formula has certain value for the src property
     *
     * @Given I check if MathType formula src is equals to :link
     */
    public function i_check_if_mathtype_formula_src_is_equals_to($link) {
        $session = $this->getSession();
        $script = 'return document.getElementsByClassName(\'Wirisformula\')[0].src == \''.$link.'\'';
        $session->evaluateScript($script);
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
     * Svg element is correctly displayed in the current page
     *
     * @Then an svg image is correctly displayed
     */
    public function an_svg_image_is_correclty_displayed() {
        // We do not use xpath because in this page the svg element acts as root node instead of being an element inside an html.
        $script = 'return document.children[0].nodeName';
        $node = $this->getSession()->evaluateScript($script);
        return $node == 'svg';
    }

    /**
     * Png element is correctly displayed in the current page
     *
     * @Then an png image is correctly displayed
     */
    public function an_png_image_is_correctly_displayed() {
        $session = $this->getSession();
        $image = $session->getPage()->find(
            'xpath',
            $session->getSelectorsHandler()->selectorToXpath('xpath', '//img')
        );
        if (empty($image)) {
            throw new Exception('Image not found.');
        }
    }

    /**
     * Look whether a MathJax element exists
     *
     * @Then MathJax element should exist
     */
    public function mathjax_element_should_exist() {
        $session = $this->getSession();
        $element = $session->getPage()->find(
            'xpath',
            $session->getSelectorsHandler()->selectorToXpath('xpath', '//span[contains(@class,\'MathJax\')]')
        );
        if (empty($element)) {
            throw new Exception('MathJax element not found.');
        }
    }

    /**
     * MathType images are correctly displayed when the chosen format is svg
     *
     * @Then MathType image in svg format is correctly displayed
     */
    public function mathtype_image_in_svg_format_is_correctly_displayed() {
        $session = $this->getSession();
        $image = $session->getPage()->find(
            'xpath',
            $session->getSelectorsHandler()->selectorToXpath('xpath', '//img[contains(@src,\'data:image/svg+xml\')]')
        );
        if (empty($image)) {
            throw new Exception('Image not found.');
        }
    }

    /**
     * MathType images are correctly displayed when the chosen format is png
     *
     * @Then MathType image in png format is correctly displayed
     */
    public function mathtype_image_in_png_format_is_correctly_displayed() {
        $session = $this->getSession();
        $image = $session->getPage()->find(
            'xpath',
            $session->getSelectorsHandler()->selectorToXpath('xpath', '//img[contains(@src,\'data:image/png;base64\')]')
        );
        if (empty($image)) {
            throw new Exception('Image not found.');
        }
    }

    /**
     * Select language option as spanish
     *
     * @Given I select spanish
     * @throws Exception If spanish option does not exist, it will throw an exception.
     */
    public function i_select_spanish() {
        $session = $this->getSession();
        $component = $session->getPage()->find(
            'xpath',
            $session->getSelectorsHandler()->selectorToXpath('xpath', '//select')
        );
        if (empty($component)) {
            throw new Exception('Spanish option not found.');
        }
        $component->selectOption("Español - Internacional ‎(es)‎");
    }

    /**
     * Select 100% in grade option of Answer 1 field
     *
     * @Given I select 100% option in Answer1
     * @throws Exception If grade option does not exist, it will throw an exception.
     */
    public function i_select_100_option_in_answer1() {
        $session = $this->getSession();
        $component = $session->getPage()->find(
            'xpath',
            $session->getSelectorsHandler()->selectorToXpath('xpath', '//select[@id="id_fraction_0"]')
        );
        if (empty($component)) {
            throw new Exception('Grade option in Answer 1 field not found.');
        }
        $component->selectOption("100%");
    }

    /**
     * Check enable trusted content on site security settings page
     *
     * @Given I check enable trusted content
     * @throws Exception If enable trusted content checkbox does not exist, it will throw an exception.
     */
    public function i_check_enable_trusted_content() {
        $session = $this->getSession();
        $component = $session->getPage()->find(
            'xpath',
            $session->getSelectorsHandler()->selectorToXpath('xpath', '//input[@id="id_s__enabletrusttext"]')
        );
        if (empty($component)) {
            throw new Exception('Enable trusted content checkbox not found.');
        }
        $component->check();
    }

    /**
     * Select seconds in autosave frequency option on Atto toolbar settings page
     *
     * @Given I select seconds in autosave frequency option
     * @throws Exception If autosave frequency option does not exist, it will throw an exception.
     */
    public function i_select_seconds_in_autosave_frequency_option() {
        $session = $this->getSession();
        $component = $session->getPage()->find(
            'xpath',
            $session->getSelectorsHandler()->selectorToXpath('xpath', '//select[@id="id_s_editor_atto_autosavefrequencyu"]')
        );
        if (empty($component)) {
            throw new Exception('Autosave frequency option in Answer 1 field not found.');
        }
        $component->selectOption("seconds");
    }

    /**
     * Choose Short answoer in Choose a questoin type to add dialog
     *
     * @Given I choose Short answer
     * @throws Exception If Short answer radio button does not exist, it will throw an exception.
     */
    public function i_choose_short_answer() {
        $session = $this->getSession();
        $component = $session->getPage()->find(
            'xpath',
            $session->getSelectorsHandler()->selectorToXpath('xpath', '//input[@id="item_qtype_shortanswer"]')
        );
        if (empty($component)) {
            throw new Exception('Short answer radio button in Answer 1 field not found.');
        }
        $component->click();
    }
}
