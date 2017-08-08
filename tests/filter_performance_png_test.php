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
 * @group filter_wiris
 * @copyright  2016
 * @license    http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later.
 */

defined('MOODLE_INTERNAL') || die();

global $CFG;
require_once($CFG->dirroot . '/filter/wiris/filter.php');
require_once($CFG->dirroot . '/filter/wiris/integration/lib/com/wiris/system/CallWrapper.class.php');

class filter_wiris_filter_performance_png_testcase extends advanced_testcase
{   protected $wirisfilter;
    protected $safexml;
    protected $xml;
    protected $imagepng;

    protected function setUp() {
        global $CFG;
        parent::setUp();
        $this->resetAfterTest(true);
        filter_wiris_pluginwrapper::set_configuration(array('wirispluginperformance' => 'true',
                                                            'wirisimageformat' => 'png'));
        $this->wirisfilter = new filter_wiris(context_system::instance(), array());
        $this->safexml = '«math xmlns=¨http://www.w3.org/1998/Math/MathML¨»«mn»1«/mn»«mo»+«/mo»«mn»2«/mn»«/math»';
        $this->xml = '<math xmlns="http://www.w3.org/1998/Math/MathML"><mn>1</mn><mo>+</mo><mn>2</mn></math>';

        // Simple images of "1+2".

        // Png format.
        $testsiteprotocol = strrpos($CFG->wwwroot, 'https') !== false ? 'https' : 'http';

        $this->imagepng = '<img src="' . $testsiteprotocol. '://www.example.com/moodle/filter/wiris/integration/showimage.php';
        $this->imagepng .= '?formula=cd345a63d1346d7a11b5e73bb97e5bb7&refererquery=?course=1/category=0"';
        $this->imagepng .= ' class="Wirisformula" alt="1 plus 2" width="37" height="13" style="vertical-align:-1px"';
        $this->imagepng .= ' data-mathml=\'«math ';
        $this->imagepng .= 'xmlns=¨http://www.w3.org/1998/Math/MathML¨»«mn»1«/mn»«mo»+«/mo»«mn»2«/mn»«/math»\'/>';

    }

    public function test_filter_safexml_with_performance_png() {
        global $CFG;
        $output = $this->wirisfilter->filter($this->safexml);
        $this->assertEquals($output, $this->imagepng);
    }

    public function test_filter_xml_with_performance_png() {
        $output = $this->wirisfilter->filter($this->xml);
        $this->assertEquals($output, $this->imagepng);
    }

    public function test_filter_safexml_with_performance_png_cache() {
        $output = $this->wirisfilter->filter($this->safexml);
        $cachefile = new moodlefilecache('filter_wiris', 'images');
        $md5 = 'cd345a63d1346d7a11b5e73bb97e5bb7';
        $data = $cachefile->get($md5);
        $this->assertEquals($output, $this->imagepng);
    }
}
