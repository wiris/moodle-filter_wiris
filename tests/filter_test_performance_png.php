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
require_once($CFG->dirroot . '/filter/wiris/integration/lib/com/wiris/system/CallWrapper.class.php');

class filter_wiris_filter_performance_testcase extends advanced_testcase
{   protected $wirisfilter;
    protected $safexml;
    protected $xml;
    protected $image;
    protected $base64image;
    protected $cachetable;

    protected function setUp() {
        global $CFG;
        parent::setUp();
        $this->resetAfterTest(true);
        filter_wiris_pluginwrapper::set_configuration(array('wirispluginperformance' => 'true',
                                                            'wirisimageformat' => 'png'));
        $this->wirisfilter = new filter_wiris(context_system::instance(), array());
        $this->cachetable = 'filter_wiris_formulas';
        $this->safexml = '«math xmlns=¨http://www.w3.org/1998/Math/MathML¨»«mn»1«/mn»«mo»+«/mo»«mn»2«/mn»«/math»';
        $this->xml = '<math xmlns="http://www.w3.org/1998/Math/MathML"><mn>1</mn><mo>+</mo><mn>2</mn></math>';

        // Image: print("asd");//
        $this->specialcharsimagesafexml = '«math xmlns=¨http://www.w3.org/1998/Math/MathML¨»«mi»p«/mi»«mi»r«/mi»«mi»i«/mi»';
        $this->specialcharsimagesafexml .= '«mi»n«/mi»«mi»t«/mi»«mo»(«/mo»«mo»§#34;«/mo»«mi»a«/mi»«mi»s«/mi»«mi»d«/mi»«mo»§#34;';
        $this->specialcharsimagesafexml .= '«/mo»«mo»)«/mo»«mo»;«/mo»«mo»/«/mo»«mo»/«/mo»«/math»';

        // Special image svg
        $this->imagesvgspecialchars = 'data:image/svg+xml;charset=utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2F';
        $this->imagesvgspecialchars .= 'svg%22%20xmlns%3Awrs%3D%22http%3A%2F%2Fwww.wiris.com%2Fxml%2Fcvs-extension%22%20height';
        $this->imagesvgspecialchars .= '%3D%2221%22%20width%3D%22117%22%20wrs%3Abaseline%3D%2216%22%3E%3C%21--MathML%3A%20%3Cmat';

        // Special chars alt
        $this->specialcharsalt = 'p r i n t left parenthesis " a s d " right parenthesis semicolon divided by divided by';

        // Simple images of "1+2".

        // Png format.
        $testsiteprotocol = strrpos($CFG->wwwroot, 'https') !== false ? 'https' : 'http';
        $this->imagepng = '<img src="' . $testsiteprotocol. '://www.example.com/moodle/filter/wiris/integration/showimage.php';
        $this->imagepng .= '?formula=cd345a63d1346d7a11b5e73bb97e5bb7&refererquery=?course=1/category=0"';
        $this->imagepng .= ' class="Wirisformula" alt="1 plus 2" width="37" height="13" style="vertical-align:-1px"';
        $this->imagepng .= ' data-mathml="«math ';
        $this->imagepng .= 'xmlns=¨http://www.w3.org/1998/Math/MathML¨»«mn»1«/mn»«mo»+«/mo»«mn»2«/mn»«/math»"/>';

        // Svg performance.
        $this->imagesvgperformance = 'data:image/svg+xml;charset=utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3';
        $this->imagesvgperformance .= 'Awrs%3D%22http%3A%2F%2Fwww.wiris.com%2Fxml%2Fcvs-extension%22%20height%3D%2220';
        $this->imagesvgperformance .= '%22%20width%3D%2234%22%20wrs%3Abaseline%3D%2216%22%3E%3C%21--MathML%3A%20%3Cmath%20xmlns%3D%22http%3A%2F%2Fww';
        $this->imagesvgperformance .= 'w.w3.org%2F1998%2FMath%2FMathML%22%3E%3Cmn%3E1%3C%2Fmn%3E%3Cmo%3E%2B%3C%2';

        $this->base64image = '<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACUAAAANCAYAAAAuYadYAAAACXBIWXMAA';
        $this->base64image .= 'A7EAAAOxAGVKw4bAAAABGJhU0UAAAAMyZLetQAAAJ1JREFUeNpjYEAFakBcC8QXGGgHrIF4DRB/AuJfULui8WlYD';
        $this->base64image .= 'MRpQPyfho46CMSRQMwD5WsB8VGoGF5AjqMo8Yg8EF8abI4CgR+DzVGW0CgcNI7iAOKT0AxAsQX/icCEgCAQbwBiN1';
        $this->base64image .= 'r5mlQ9SlAHqdAyKkjRowHEs4GYi9bpg1g94kC8CohZ6JFoidWzBRpSJBlMamIlx/H/6WQX9QAAJxI4ILfeWLsAAAA';
        $this->base64image .= 'ASUVORK5CYII=" class="Wirisformula" alt="1 plus 2" width="37" height="13" style="vertical';
        $this->base64image .= '-align:-1px" data-mathml="«math xmlns=¨http://www.w3.org/1998/Math/MathML¨»«mn»1«/mn»«mo»';
        $this->base64image .= '+«/mo»«mn»2«/mn»«/math»"/>';

        $this->svg = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:wrs="http://www.wiris.com/xml/cvs-extension" height="20"';
        $this->svg .= ' width="34" wrs:baseline="16"><!--MathML: <math xmlns="http://www.w3.org/1998/Math/MathML"><mn>1</mn><mo>';
        $this->svg .= '+</mo><mn>2</mn></math>--><defs><style type="text/css">@font-face{font-family:';

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
