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

class behat_wiris_formula extends behat_wiris_base {

     /**
      * @Transform /^(\d+)$/
      */
    public function cast_string_to_number($string) {
        return intval($string);
    }

    /**
     * Look whether a Wirisformula exists
     *
     * @Then Wirisformula should exist
     */
    public function wirisformula_should_exist() {
        $session = $this->getSession();
        $formula = $session->getPage()->find(
            'xpath',
            $session->getSelectorsHandler()->selectorToXpath('xpath', '//img[contains(@class, \'Wirisformula\')]')
        );
        if (empty($formula)) {
            throw new Exception('Wirisformula not found.');
        }
    }

    /**
     * Look whether a Wirisformula exists
     *
     * @Then Wirisformula should not exist
     */
    public function wirisformula_should_not_exist() {
        $session = $this->getSession();
        $formula = $session->getPage()->find(
            'xpath',
            $session->getSelectorsHandler()->selectorToXpath('xpath', '//img[contains(@class, \'Wirisformula\')]')
        );
        if (!empty($formula)) {
            throw new Exception('Wirisformula does exist.');
        }
    }

    /**
     * Look whether any ChemType formula exist
     *
     * @Then ChemType formula should exist
     */
    public function chemtype_formula_should_exist() {
        $session = $this->getSession();
        $formula = $session->getPage()->find(
            'xpath',
            $session->getSelectorsHandler()->selectorToXpath('xpath', '//img[contains(@data-mathml,\'chemistry\')]')
        );
        if (empty($formula)) {
            throw new Exception('ChemType formula not found.');
        }
    }

    /**
     * Check if a Wirisformula containing certain value exist
     *
     * @Then a Wirisformula containing :value should exist
     * @param  string $value the formula should contains
     */
    public function a_wirisformula_containing_should_exist($value) {
        $session = $this->getSession();
        $formula = $session->getPage()->find(
            'xpath',
            $session->getSelectorsHandler()->selectorToXpath('xpath', '//img[contains(@alt, \''.$value.'\')]')
        );
        if (empty($formula)) {
            throw new Exception('Wirisformula with value '.$value.' not found.');
        }
    }

    /**
     * Check if a Wirisformula containing certain html entity value exist
     *
     * @Then a Wirisformula containing html entity :value should exist
     * @param  string $value the formula should contains
     */
    public function a_wirisformula_containing_html_entity_should_exist($value) {
        $session = $this->getSession();
        $script = 'element = document.createElement("textarea"); element.innerHTML=\''.$value.'\'; return element.value';
        $element = $session->executeScript($script);
        $formula = $session->getPage()->find(
            'xpath',
            $session->getSelectorsHandler()->selectorToXpath('xpath', '//img[contains(@alt, \''.$element.'\')]')
        );
        if (empty($formula)) {
            throw new Exception('Wirisformula with value '.$value.' not found.');
        }
    }

    /**
     * Check if a Wirisformula containing certain value exist in a certain field
     *
     * @Then a Wirisformula containing :value should exist in :field field
     * @param  string $value content that the formula should contains
     * @param  string $field field to check
     * @throws Exception If the field does not exist, it will throw an exception.
     */
    public function a_wirisformula_containing_should_exist_in_field($value, $field) {
        $fieldarray = array(
            "Page content" => "id_page_ifr"
        );
        $session = $this->getSession();
        if (empty($fieldarray[$field])) {
            throw new Exception($field." field not registered.");
        }
        $component = $session->getPage()->find(
            'xpath',
            $session->getSelectorsHandler()->selectorToXpath('xpath', '//*[@id="'.$fieldarray[$field].'"]')
        );
        if (empty($component)) {
            throw new Exception("\"".$field."\" field not correctly recognized.");
        }
        // As tinymce editor is insde an iframe, the search should be done inside the document of it.
        $script = 'return document.getElementById(\''.$fieldarray[$field].'\').contentWindow.document
        .evaluate("//img[@alt=\''.$value.'\' and not(@data-mce-src)]", document.getElementById(\''.$fieldarray[$field].'\')
        .contentWindow.document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue';
        $formula = $this->getSession()->evaluateScript($script);
        if (empty($formula)) {
            throw new Exception('Wirisformula with value '.$value.' not found in "'.$field.'" field');
        }
    }

    /**
     * Check the size of the formula
     *
     * @Then Wirisformula should has height :height with error of :error
     * @param  int $height height value to be compared with
     * @param  int $error acceptable error of the height value
     * @throws Exception If formula does not exist, it will throw an exception.
     */
    public function wirisformula_should_has_height_with_error($height, $error) {
        $session = $this->getSession();
        if ('integer' !== gettype($height) || 'integer' !== gettype($error)) {
            throw new Exception('Integer value expected.');
        }
        $script = 'return document.getElementsByClassName(\'Wirisformula\')[0]';
        $formula = $session->evaluateScript($script);
        if (empty($formula)) {
            throw new Exception('Formula not found.');
        }
        $script = 'return document.getElementsByClassName(\'Wirisformula\')[0].height >= '.($height - $error).
        ' && document.getElementsByClassName(\'Wirisformula\')[0].height <='.($height + $error);
        $equals = $this->getSession()->evaluateScript($script);
        if (!$equals) {
            throw new Exception('Image height is not correct.');
        }
    }

    /**
     * Check the size of the formula
     *
     * @Then Wirisformula should has width :width with error of :error
     * @param  int $width width value to be compared with
     * @param  int $error acceptable error of the width value
     * @throws Exception If formula does not exist, it will throw an exception.
     */
    public function wirisformula_should_has_width_with_error($width, $error) {
        $session = $this->getSession();
        if ('integer' !== gettype($width) || 'integer' !== gettype($error)) {
            throw new Exception('Integer value expected.');
        }
        $script = 'return document.getElementsByClassName(\'Wirisformula\')[0]';
        $formula = $session->evaluateScript($script);
        if (empty($formula)) {
            throw new Exception('Formula not found.');
        }
        $script = 'return document.getElementsByClassName(\'Wirisformula\')[0].width >= '.($width - $error).
        ' && document.getElementsByClassName(\'Wirisformula\')[0].width <='.($width + $error);
        $equals = $this->getSession()->evaluateScript($script);
        if (!$equals) {
            throw new Exception('Image width is not correct.');
        }
    }

    /**
     * Check the size of the formula in certain field
     *
     * @Then Wirisformula should has width :width with error of :error in :field field
     * @param  int $width width value to be compared with
     * @param  int $error acceptable error of the width value
     * @param  string $field field to check
     * @throws Exception If formula does not exist, it will throw an exception.
     */
    public function wirisformula_should_has_width_with_error_in_field($width, $error, $field) {
        $session = $this->getSession();
        if ('integer' !== gettype($width) || 'integer' !== gettype($error)) {
            throw new Exception('Integer value expected.');
        }
        $fieldarray = array(
            "Page content" => "id_page_ifr"
        );
        $session = $this->getSession();
        if (empty($fieldarray[$field])) {
            throw new Exception($field." field not registered.");
        }
        // As tinymce editor is insde an iframe, the search should be done inside the document of it.
        $script = 'return document.getElementById(\''.$fieldarray[$field].'\').contentWindow.document.
        getElementsByClassName(\'Wirisformula\')';
        $formula = $session->evaluateScript($script);
        if (empty($formula)) {
            throw new Exception('Formula not found.');
        }
        $script = 'return document.getElementById(\''.$fieldarray[$field].'\').contentWindow.document.
        getElementsByClassName(\'Wirisformula\')[0].width >= '.($width - $error).
        ' && document.getElementById(\''.$fieldarray[$field].'\').contentWindow.document.
        getElementsByClassName(\'Wirisformula\')[0].width <='.($width + $error);
        $equals = $this->getSession()->evaluateScript($script);
        if (!$equals) {
            throw new Exception('Image width is not correct.');
        }
    }

    /**
     * Check the size of the formula in a certain field
     *
     * @Then Wirisformula should has height :height with error of :error in :field field
     * @param  int $height height value to be compared with
     * @param  int $error acceptable error of the height value
     * @param  string $field field to check
     * @throws Exception If formula does not exist, it will throw an exception.
     */
    public function wirisformula_should_has_height_with_error_in_field($height, $error, $field) {
        $session = $this->getSession();
        if ('integer' !== gettype($height) || 'integer' !== gettype($error)) {
            throw new Exception('Integer value expected.');
        }
        $fieldarray = array(
            "Page content" => "id_page_ifr"
        );
        $session = $this->getSession();
        if (empty($fieldarray[$field])) {
            throw new Exception($field." field not registered.");
        }
        // As tinymce editor is insde an iframe, the search should be done inside the document of it.
        $script = 'return document.getElementById(\''.$fieldarray[$field].'\').contentWindow.document.
        getElementsByClassName(\'Wirisformula\')';
        $formula = $session->evaluateScript($script);
        if (empty($formula)) {
            throw new Exception('Formula not found.');
        }
        $script = 'return document.getElementById(\''.$fieldarray[$field].'\').contentWindow.document.
        getElementsByClassName(\'Wirisformula\')[0].height >= '.($height - $error).
        ' && document.getElementById(\''.$fieldarray[$field].'\').contentWindow.document.
        getElementsByClassName(\'Wirisformula\')[0].height <='.($height + $error);
        $equals = $this->getSession()->evaluateScript($script);
        if (!$equals) {
            throw new Exception('Image height is not correct.');
        }
    }

    /**
     * Check the size of the formula in full screen mode
     *
     * @Then Wirisformula should has width :width with error of :error in full screen mode
     * @param  int $width width value to be compared with
     * @param  int $error acceptable error of the width value
     * @throws Exception If formula does not exist, it will throw an exception.
     */
    public function wirisformula_should_has_width_with_error_in_full_screen_mode($width, $error) {
        $session = $this->getSession();
        if ('integer' !== gettype($width) || 'integer' !== gettype($error)) {
            throw new Exception('Integer value expected.');
        }
        // As tinymce editor is insde an iframe, the search should be done inside the document of it.
        $script = 'return document.getElementById(\'mce_fullscreen_ifr\')';
        $iframe = $session->evaluateScript($script);
        if (empty($iframe)) {
            throw new Exception('Tinymce screen mode is off.');
        }
        $script = 'return document.getElementById(\'mce_fullscreen_ifr\').contentWindow.document.
        getElementsByClassName(\'Wirisformula\')';
        $formula = $session->evaluateScript($script);
        if (empty($formula)) {
            throw new Exception('Formula not found.');
        }
        $script = 'return document.getElementById(\'mce_fullscreen_ifr\').contentWindow.document.
        getElementsByClassName(\'Wirisformula\')[0].width >= '.($width - $error).
        ' && document.getElementById(\'mce_fullscreen_ifr\').contentWindow.document.
        getElementsByClassName(\'Wirisformula\')[0].width <='.($width + $error);
        $equals = $this->getSession()->evaluateScript($script);
        if (!$equals) {
            throw new Exception('Image width is not correct.');
        }
    }

    /**
     * Check the size of the formula in full screen mode
     *
     * @Then Wirisformula should has height :height with error of :error in full screen mode
     * @param  int $height height value to be compared with
     * @param  int $error acceptable error of the height value
     * @throws Exception If formula does not exist, it will throw an exception.
     */
    public function wirisformula_should_has_height_with_error_in_full_screen_mode($height, $error) {
        $session = $this->getSession();
        if ('integer' !== gettype($height) || 'integer' !== gettype($error)) {
            throw new Exception('Integer value expected.');
        }
        // As tinymce editor is insde an iframe, the search should be done inside the document of it.
        $script = 'return document.getElementById(\'mce_fullscreen_ifr\')';
        $iframe = $session->evaluateScript($script);
        if (empty($iframe)) {
            return Exception('Tinymce screen mode is off.');
        }
        $script = 'return document.getElementById(\'mce_fullscreen_ifr\').contentWindow.document.
        getElementsByClassName(\'Wirisformula\')';
        $formula = $session->evaluateScript($script);
        if (empty($formula)) {
            throw new Exception('Formula not found.');
        }
        $script = 'return document.getElementById(\'mce_fullscreen_ifr\').contentWindow.document.
        getElementsByClassName(\'Wirisformula\')[0].height >= '.($height - $error).
        ' && document.getElementsByClassName(\'Wirisformula\')[0].height <='.($height + $error);
        $equals = $this->getSession()->evaluateScript($script);
        if (!$equals) {
            throw new Exception('Image height is not correct.');
        }
    }

}
