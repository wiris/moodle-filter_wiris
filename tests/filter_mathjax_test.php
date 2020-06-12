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
 * @copyright  2020
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
     * Test that the filter does not break questions with Wiris Graph plotters.
     */
    public function test_filter_question_with_plotter() {
        global $CFG;
        $this->wirisfilter = new filter_wiris_mathjax(context_system::instance(), array());
        $input = $this->safexml .
        ' <img class="wirisconstruction"' .
        'data-wirisconstruction="{&quot;displays&quot;:[{&quot;horizontal_grid_step&quot;:1.,&quot;horizontal_axis_step&quot;:2.'.
        ',&quot;horizontal_axis_values_position&quot;:&quot;below&quot;,&quot;vertical_axis_label&quot;:&quot;&quot;,&quot;window'.
        '_width&quot;:450,&quot;horizontal_axis_label&quot;:&quot;&quot;,&quot;magnetic_grid&quot;:true,&quot;vertical_grid_step'.
        '&quot;:1.,&quot;styles&quot;:[{&quot;color&quot;:&quot;#3575B7&quot;,&quot;ref&quot;:&quot;curve1&quot;,&quot;external'.
        '&quot;:true,&quot;xref&quot;:&quot;0&quot;,&quot;stroke_width&quot;:2}],&quot;vertical_axis_step&quot;:2.,&quot;window_height'.
        '&quot;:450,&quot;grid_subdivisions&quot;:2,&quot;height&quot;:21.,&quot;id&quot;:&quot;plotter1&quot;,&quot;grid_y&quot;:true,'.
        '&quot;width&quot;:21.,&quot;grid_secondary_color&quot;:&quot;#E2E2E2&quot;,&quot;grid_x&quot;:true,&quot;axis_color&quot;:&quot;'.
        '#717171&quot;,&quot;grid_primary_color&quot;:&quot;#C6C6C6&quot;,&quot;vertical_axis_values_position&quot;:&quot;left&quot;,&quot;'.
        'background_color&quot;:&quot;#FFFFFF&quot;,&quot;axis_y&quot;:true,&quot;axis_x&quot;:true,&quot;center&quot;:[0.,0.]}],&quot;'.
        'elements&quot;:[{&quot;wiris_cas_kernel_computed&quot;:&quot;false&quot;,&quot;type&quot;:&quot;function_graph&quot;,&quot;'.
        'value_content&quot;:&quot;&lt;math&gt;&lt;lambda&gt;&lt;bvar&gt;&lt;ci&gt;x&lt;/ci&gt;&lt;/bvar&gt;&lt;domainofapplication&gt;'.
        '&lt;interval closure=\&quot;closed\&quot;&gt;&lt;apply&gt;&lt;minus/&gt;&lt;infinity/&gt;&lt;/apply&gt;&lt;infinity/&gt;'.
        '&lt;/interval&gt;&lt;/domainofapplication&gt;&lt;apply&gt;&lt;plus/&gt;&lt;apply&gt;&lt;power/&gt;&lt;ci&gt;x&lt;/ci&gt;&lt;'.
        'cn&gt;2&lt;/cn&gt;&lt;/apply&gt;&lt;apply&gt;&lt;times/&gt;&lt;cn&gt;2&lt;/cn&gt;&lt;ci&gt;x&lt;/ci&gt;&lt;/apply&gt;&lt;cn&gt;'.
        '1&lt;/cn&gt;&lt;/apply&gt;&lt;/lambda&gt;&lt;/math&gt;&quot;,&quot;id&quot;:&quot;curve1&quot;}],&quot;handwriting&quot;:[],&quot;'.
        'constraints&quot;:[]}"/>';
        $expected = $this->xml .
        ' <img class="wirisconstruction"' .
        'data-wirisconstruction="{&quot;displays&quot;:[{&quot;horizontal_grid_step&quot;:1.,&quot;horizontal_axis_step&quot;:2.'.
        ',&quot;horizontal_axis_values_position&quot;:&quot;below&quot;,&quot;vertical_axis_label&quot;:&quot;&quot;,&quot;window'.
        '_width&quot;:450,&quot;horizontal_axis_label&quot;:&quot;&quot;,&quot;magnetic_grid&quot;:true,&quot;vertical_grid_step'.
        '&quot;:1.,&quot;styles&quot;:[{&quot;color&quot;:&quot;#3575B7&quot;,&quot;ref&quot;:&quot;curve1&quot;,&quot;external'.
        '&quot;:true,&quot;xref&quot;:&quot;0&quot;,&quot;stroke_width&quot;:2}],&quot;vertical_axis_step&quot;:2.,&quot;window_height'.
        '&quot;:450,&quot;grid_subdivisions&quot;:2,&quot;height&quot;:21.,&quot;id&quot;:&quot;plotter1&quot;,&quot;grid_y&quot;:true,'.
        '&quot;width&quot;:21.,&quot;grid_secondary_color&quot;:&quot;#E2E2E2&quot;,&quot;grid_x&quot;:true,&quot;axis_color&quot;:&quot;'.
        '#717171&quot;,&quot;grid_primary_color&quot;:&quot;#C6C6C6&quot;,&quot;vertical_axis_values_position&quot;:&quot;left&quot;,&quot;'.
        'background_color&quot;:&quot;#FFFFFF&quot;,&quot;axis_y&quot;:true,&quot;axis_x&quot;:true,&quot;center&quot;:[0.,0.]}],&quot;'.
        'elements&quot;:[{&quot;wiris_cas_kernel_computed&quot;:&quot;false&quot;,&quot;type&quot;:&quot;function_graph&quot;,&quot;'.
        'value_content&quot;:&quot;&lt;math&gt;&lt;lambda&gt;&lt;bvar&gt;&lt;ci&gt;x&lt;/ci&gt;&lt;/bvar&gt;&lt;domainofapplication&gt;'.
        '&lt;interval closure=\&quot;closed\&quot;&gt;&lt;apply&gt;&lt;minus/&gt;&lt;infinity/&gt;&lt;/apply&gt;&lt;infinity/&gt;'.
        '&lt;/interval&gt;&lt;/domainofapplication&gt;&lt;apply&gt;&lt;plus/&gt;&lt;apply&gt;&lt;power/&gt;&lt;ci&gt;x&lt;/ci&gt;&lt;'.
        'cn&gt;2&lt;/cn&gt;&lt;/apply&gt;&lt;apply&gt;&lt;times/&gt;&lt;cn&gt;2&lt;/cn&gt;&lt;ci&gt;x&lt;/ci&gt;&lt;/apply&gt;&lt;cn&gt;'.
        '1&lt;/cn&gt;&lt;/apply&gt;&lt;/lambda&gt;&lt;/math&gt;&quot;,&quot;id&quot;:&quot;curve1&quot;}],&quot;handwriting&quot;:[],&quot;'.
        'constraints&quot;:[]}"/>';
        $output = $this->wirisfilter->filter($input);
        $assertion = strpos($expected, $output) !== false;
        $this->assertTrue($assertion);
    }

    /**
     * Test that the filter does not break plain latex, even when there is a semicolon next to the
     * last dollar sign.
     */
    public function test_filter_question_with_plain_latex_semicolon() {
        global $CFG;
        $this->wirisfilter = new filter_wiris_mathjax(context_system::instance(), array());
        $latexwithsemicolon = '$$x^2 + 2x + 1$$; ';
        $input = $latexwithsemicolon . $this->safexml;
        $expected = $latexwithsemicolon . $this->xml;
        $output = $this->wirisfilter->filter($input);
        $assertion = strpos($expected, $output) !== false;
        $this->assertTrue($assertion);
    }


    /**
     * Test that the filter does not break plain latex, even when it is at the end of the line.
     */
    public function test_filter_question_with_plain_latex_end_of_line() {
        global $CFG;
        $this->wirisfilter = new filter_wiris_mathjax(context_system::instance(), array());
        $latex = ' $$x^2 + 2x + 1$$';
        $input = $this->safexml . $latex;
        $expected = $this->xml . $latex;
        $output = $this->wirisfilter->filter($input);
        $assertion = strpos($expected, $output) !== false;
        $this->assertTrue($assertion);
    }

    /**
     * Test that the filter adds an mrow to a badly converted LaTeX. The MathML specification
     * requires that the first child of the semantics tag must be the actual MathML. That is not true
     * without the mrow tag.
     */
    public function test_filter_question_with_converted_latex_mathml() {
        global $CFG;
        $this->wirisfilter = new filter_wiris_mathjax(context_system::instance(), array());
        $input = '<math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mn>2</mn><mi>x</mi><mo>+</mo><mn>1</mn>' .
        '<annotation encoding="LaTeX">x^2 + 2x + 1</annotation></semantics></math>';
        $expected = '<math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mn>2</mn><mi>x</mi><mo>+</mo><mn>1</mn></mrow>' .
        '<annotation encoding="LaTeX">x^2 + 2x + 1</annotation></semantics></math>';
        $output = $this->wirisfilter->filter($input);
        $assertion = strpos($expected, $output) !== false;
        $this->assertTrue($assertion);
    }

    /**
     * Does the same as the previous test, but this time with safe mathml.
     */
    public function test_filter_question_with_converted_latex_safe_mathml() {
        global $CFG;
        $this->wirisfilter = new filter_wiris_mathjax(context_system::instance(), array());
        $input = '«math xmlns=¨http://www.w3.org/1998/Math/MathML¨»«semantics»'.
        '«msup»«mi»x«/mi»«mn»2«/mn»«/msup»«mo»+«/mo»«mn»2«/mn»«mi»x«/mi»«mo»+«/mo»«mn»1«/mn»'.
        '«annotation encoding=¨LaTeX¨»x^2 + 2x + 1«/annotation»«/semantics»«/math»';
        $expected = '<math xmlns="http://www.w3.org/1998/Math/MathML"><semantics>'.
        '<mrow><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mn>2</mn><mi>x</mi><mo>+</mo><mn>1</mn></mrow>' .
        '<annotation encoding="LaTeX">x^2 + 2x + 1</annotation></semantics></math>';
        $output = $this->wirisfilter->filter($input);
        $assertion = strpos($expected, $output) !== false;
        $this->assertTrue($assertion);
    }

    /**
     * Test that the filter does not break escaped mathml inside html attributes, such as the
     * ones that the Wiris Quizzes plugin uses to render the answers to a cloze question.
     */
    public function test_filter_cloze () {
        global $CFG;
        $this->wirisfilter = new filter_wiris_mathjax(context_system::instance(), array());
        $input = '<input value="' . htmlspecialchars($this->xml) . '"> ' . $this->safexml;
        $expected = '<input value="' . htmlspecialchars($this->xml) . '"> ' . $this->xml;
        $output = $this->wirisfilter->filter($input);
        $assertion = strpos($expected, $output) !== false;
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
