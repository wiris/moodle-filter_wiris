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
 * Unit tests for WIRIS filter.
 *
 * @package    filter_wiris
 * @copyright  2016
 * @license    http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later.
 */

defined('MOODLE_INTERNAL') || die();

global $CFG;
require_once($CFG->dirroot . '/filter/wiris/filter.php');

class filter_wiris_filter_testcase extends advanced_testcase
{   protected $filter;
    protected $safexml;
    protected $xml;
    protected $image;

    protected function setUp() {
        parent::setUp();
        $this->resetAfterTest(true);
        $this->wirisfilter = new filter_wiris(context_system::instance(), array());
        $this->safexml = '«math xmlns=¨http://www.w3.org/1998/Math/MathML¨»«mn»1«/mn»«mo»+«/mo»«mn»2«/mn»«/math»';
        $this->xml = '<math xmlns="http://www.w3.org/1998/Math/MathML"><mn>1</mn><mo>+</mo><mn>2</mn></math>';
        $this->image = '<img src="http://www.example.com/moodle/filter/wiris/integration/showimage.php';
        $this->image .= '?formula=cd345a63d1346d7a11b5e73bb97e5bb7&refererquery=?course=1/category=0"';
        $this->image .= ' class="Wirisformula" alt="1 plus 2" width="37" height="13" style="vertical-align:-1px"';
        $this->image .= ' data-mathml="«math ';
        $this->image .= 'xmlns=¨http://www.w3.org/1998/Math/MathML¨»«mn»1«/mn»«mo»+«/mo»«mn»2«/mn»«/math»"/>';

    }

    public function test_filter_safexml() {
        $output = $this->wirisfilter->filter($this->safexml);
        $this->assertEquals($output, $this->image);
    }

    public function test_filter_xml() {
        $output = $this->wirisfilter->filter($this->xml);
        $this->assertEquals($output, $this->image);
    }
}
