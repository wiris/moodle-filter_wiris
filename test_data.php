<?php
// URL: filter/wiris/test_data.php
require_once(__DIR__ . '/../../config.php');

require_login();

// Security: Uncomment to make sure users are logged in and are an admin to see this page:
// require_capability('moodle/site:config', context_system::instance());

global $USER, $DB, $PAGE, $OUTPUT;

// Get the Course ID for detecting roles correctly.
$courseid = optional_param('courseid', 2, PARAM_INT); 
$context = context_course::instance($courseid);

// Set up a basic Moodle page wrapper so it looks nice.
$PAGE->set_url('/filter/wiris/test_data.php');
$PAGE->set_context(context_system::instance());
$PAGE->set_title('MathType Data Test');
$PAGE->set_heading('Exploring Moodle Data');

echo $OUTPUT->header();

// ROLE DETECTION
echo "<h2>1. Role & Context Detection</h2>";

// We check for the 'moodle/course:update' capability: Editing Teacher/Admin
if (has_capability('moodle/course:update', $context)) {
    echo $OUTPUT->notification("Instructor / Manager", 'success');
    echo "<p>Note: This user has <strong>Editing Permissions</strong> in Course ID: {$courseid}.</p>";
} else {
    echo $OUTPUT->notification("Learner / Student", 'info');
    echo "<p>Note: This user is a <strong>Learner</strong> in Course ID: {$courseid}.</p>";
}

// GLOBALLY UNIQUE IDENTIFIER
echo "<hr><h2>2. Global Identification</h2>";

$global_id = $CFG->wwwroot . '_user_' . $USER->id;

echo "<p>To prevent ID collisions across different Moodle sites, we can opt to combine the Site URL and User ID:</p>";
echo "<div class='alert alert-dark'><strong>Unique MathType ID: </strong> <code>{$global_id}</code></div>";

// DATA TABLE
echo "<hr><h2>3. Specific User Data retrieved</h2>";
echo "<table class='table table-bordered'>";
echo "<thead><tr><th>Moodle Variable</th><th>Retrieved Value</th></tr></thead>";
echo "<tbody>";
echo "<tr><td>ID</td><td>{$USER->id}</td></tr>";
echo "<tr><td>Username</td><td>{$USER->username}</td></tr>";
echo "<tr><td>Full Name</td><td>" . fullname($USER) . "</td></tr>";
echo "<tr><td>Email</td><td>{$USER->email}</td></tr>";
echo "<tr><td>Language</td><td>{$USER->lang}</td></tr>";
echo "<tr><td>Institution</td><td>" . ($USER->institution ?: 'Not provided') . "</td></tr>";
echo "<tr><td>Last Access</td><td>" . userdate($USER->lastaccess) . "</td></tr>";
echo "</tbody></table>";

// RAW USER OBJECT DUMP
echo "<hr><h4>Raw USER Object (Full Dump)</h4>";
echo '<div style="background: #f8f9fa; padding: 10px; border: 1px solid #ccc; border-radius: 5px; max-height: 250px; overflow-y: auto;">';
echo '<pre>' . s(print_r($USER, true)) . '</pre>';
echo '</div>';

// GLOBAL COURSE & ROLE MAP
echo "<hr><h2>4. Global Course & Role Map</h2>";
echo "<p>This is to show that we can track exactly which courses a user belongs to and their specific permissions in each.</p>";

// Get all courses the user is enrolled in.
$mycourses = enrol_get_users_courses($USER->id, true); // 'true' only shows active enrolments.

if (empty($mycourses)) {
    echo "<div class='alert alert-warning'>User is not enrolled in any courses.</div>";
} else {
    echo "<table class='table table-sm table-hover'>";
    echo "<thead class='thead-dark'><tr><th>Course Name</th><th>Roles in this Course</th><th>Context ID</th></tr></thead><tbody>";

    foreach ($mycourses as $course) {
        // Get the roles specifically for this user in this course.
        $roles_in_course = get_user_roles_in_course($USER->id, $course->id);

        echo "<tr>";
        echo "<td><strong>{$course->fullname}</strong></td>";
        echo "<td><span class='badge bg-info text-dark'>{$roles_in_course}</span></td>";
        echo "<td><code>" . context_course::instance($course->id)->id . "</code></td>";
        echo "</tr>";
    }

    echo "</tbody></table>";
}

// SYSTEM-WIDE ROLES
echo "<hr><h2>5. All Defined System Roles</h2>";
echo "<p>Reference list of every role type defined on this Moodle site:</p>";

$all_roles = $DB->get_records('role', [], 'sortorder ASC');

echo "<div class='d-flex flex-wrap gap-2'>";

foreach ($all_roles as $role) {
    echo "<span class='badge border text-muted'>" . s($role->name) . " ({$role->shortname})</span> ";
}
echo "</div>";

// SITE-WIDE STATISTICS
echo "<hr><h2>6. Site-Wide MathType Reach</h2>";
echo "<p>This section demonstrates how we can collect 'Big Data' for MathType analytics and site-wide licensing.</p>";

$total_users = $DB->count_records('user', ['deleted' => 0]);
$total_courses = $DB->count_records('course');

// Active Users who interacted with Moodle in the last 24 hours.
$one_day_ago = time() - (24 * 60 * 60);
$active_users = $DB->count_records_select('user', 'lastaccess > ? AND deleted = 0', [$one_day_ago]);

// Total Student Enrollments. We look for the 'student' role and count how many times it's assigned across the site.
$student_role = $DB->get_record('role', ['shortname' => 'student']);
$total_enrollments = $DB->count_records('role_assignments', ['roleid' => $student_role->id]);

echo "<div class='row'>";
echo "  <div class='col-md-3'><div class='card text-center p-3 border-primary'><h4 class='mb-0'>{$total_users}</h4><small>Total Users</small></div></div>";
echo "  <div class='col-md-3'><div class='card text-center p-3 border-success'><h4 class='mb-0'>{$active_users}</h4><small>Active (24h)</small></div></div>";
echo "  <div class='col-md-3'><div class='card text-center p-3 border-info'><h4 class='mb-0'>{$total_courses}</h4><small>Total Courses</small></div></div>";
echo "  <div class='col-md-3'><div class='card text-center p-3 border-warning'><h4 class='mb-0'>{$total_enrollments}</h4><small>Total Enrollments</small></div></div>";
echo "</div>";

// Technical Environment Info
echo "<p class='mt-3'><strong>Moodle Environment:</strong> Version " . get_config('', 'release') . " (Build: " . get_config('', 'version') . ")</p>";

echo $OUTPUT->footer();
