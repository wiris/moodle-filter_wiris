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
 * Unit tests for MathType filter.
 *
 * @package    filter_wiris
 * @group filter_wiris
 * @copyright  2016
 * @license    http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later.
 */

defined('MOODLE_INTERNAL') || die();

global $CFG;

require_once($CFG->dirroot . '/filter/wiris/filter.php');
require_once($CFG->dirroot . '/filter/wiris/subfilters/mathjax.php');

class filter_wiris_filter_mathjax_testcase extends advanced_testcase {
    protected $wirisfilter;
    protected $safexml;
    protected $xml;

    protected function setUp() {
        global $CFG;
        parent::setUp();
        $this->resetAfterTest(true);
        $this->safexml = '«math xmlns=¨http://www.w3.org/1998/Math/MathML¨»«mn»1«/mn»«mo»-«/mo»«mn»2«/mn»«/math»';
        $this->xml = '<math xmlns="http://www.w3.org/1998/Math/MathML"><mn>1</mn><mo>-</mo><mn>2</mn></math>';
    }

    /**
     * Test that the filter_wiris_mathjax works as expected
     */
    public function test_filter_safexml() {
        global $CFG;
        $this->wirisfilter = new filter_wiris_mathjax(context_system::instance(), array());
        $output = $this->wirisfilter->filter($this->safexml);
        $assertion = strrpos($output, $this->xml) !== false;
        $this->assertTrue($assertion);
    }

    /**
     * Check that setting filterwiris/rendertype to mathjax makes filter_wiris
     * act like filter_wiris_mathjax
     */
    public function test_filter_changefilter() {
        global $CFG;
        set_config('rendertype', 'mathjax', 'filter_wiris');
        $this->wirisfilter = new filter_wiris(context_system::instance(), array());
        $output = $this->wirisfilter->filter($this->safexml);
        $assertion = strrpos($output, $this->xml) !== false;
        $this->assertTrue($assertion);
    }
}
