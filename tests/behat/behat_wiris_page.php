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
     * Press MathType button in Question text field
     *
     * @Given I press MathType in Question text field
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
            throw new Exception ('MathType button in Question text field not found');
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
     * Press HTML button in Question text field
     *
     * @Given I press HTML in Question text field
     * @throws Exception If HTML button does not exist, it will throw an exception.
     */
    public function i_press_html_in_questiontext_field() {
        $session = $this->getSession();
        $component = $session->getPage()->find(
            'xpath',
            $session->getSelectorsHandler()->selectorToXpath('xpath', '//div[@id="fitem_id_questiontext"]
            //button[@class="atto_html_button"]')
        );
        if (empty($component)) {
            throw new Exception ('HTML button in Question text field not found');
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
     * Create an image with an mml and visit to its path
     *
     * @Given I create an image with mml :mml and visit to its path
     */
    public function i_create_an_image_with_mml_mml_and_visit_to_its_path($mml) {
        $session = $this->getSession();
        $url = '/filter/wiris/integration/createimage.php?mml='.$mml.'&lang=en&metrics=&centerbaseline=false';
        $session->visit($this->locate_path($url));
        $script = 'return document.body.innerHTML';
        $path = $session->evaluateScript($script);
        $session->visit($this->locate_path($path));
    }

    /**
     * Refresh the page on the browser
     *
     * @Given I refresh the page
     */
    public function i_refresh_the_page() {
        $this->getSession()->reload();
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
     * Look whether an image exists
     *
     * @Then an image should exist
     */
    public function an_image_should_exist() {
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
     * Svg element is correctly displayed in the current page
     *
     * @Then an svg is correctly displayed
     */
    public function svg_is_correclty_displayed() {
        // We dont use xpath because in this page the svg element acts as root node instead of being an element inside an html.
        $script = 'return document.children[0].nodeName';
        $node = $this->getSession()->evaluateScript($script);
        return $node == 'svg';
    }

    /**
     * Images are correctly displayed when the chosen format is svg
     *
     * @Then svg img format is correctly displayed
     */
    public function svg_img_format_is_correctly_displayed() {
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
     * Images are correctly displayed when the chosen format is png
     *
     * @Then png img format is correctly displayed
     */
    public function png_img_format_is_correctly_displayed() {
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
