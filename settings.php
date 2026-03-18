<?php
// dummy settings page to test the login/logout button and token saving logic.

defined('MOODLE_INTERNAL') || die;

if ($ADMIN->fulltree) {

    if (!class_exists('admin_setting_wiris_login_button')) {
        class admin_setting_wiris_login_button extends admin_setting {

            public function __construct($name, $visiblename, $description, $defaultsetting) {
                parent::__construct($name, $visiblename, $description, $defaultsetting);
            }

            public function get_setting() { return true; }
            public function write_setting($data) { return ''; }

            public function output_html($data, $query = '') {
                global $PAGE;

                $html = '<div class="form-item row">';
                $html .= '<div class="form-label text-sm-end"></div>';
                $html .= '<div class="form-setting col-sm-9">';
                
                $current_token = get_config('filter_wiris', 'auth_token');
                
                // If we have a token, show the Connected status and a disconnect button.
                if (!empty($current_token)) {
                    $html .= '<div class="alert alert-success">Status: Connected (Token: ' . s($current_token) . ')</div>';
                    $html .= '<button type="button" id="mathtype-logout-btn" class="btn btn-danger">Disconnect MathType</button>';
                } else {
                    // If no token, show the normal login button.
                    $html .= '<button type="button" id="mathtype-login-btn" class="btn btn-primary">';
                    $html .= get_string('login_button_text', 'filter_wiris');
                    $html .= '</button>';
                }
                
                $html .= '</div></div>';

                // This is a temporary hack to inject our JavaScript directly on the settings page for easiest development testing.
                // In a production environment, this should be moved to an AMD module.
                $js = '
                    require(["core/modal"], function(Modal) {
                        
                        // Iframe Message Listener for Login Simulation
                        window.addEventListener("message", function(event) {
                            if (event.data && event.data.mathtype_token) {
                                var token = event.data.mathtype_token;
                                var saveUrl = M.cfg.wwwroot + "/filter/wiris/save_token.php?token=" + encodeURIComponent(token);
                                window.location.href = saveUrl;
                            }
                        });

                        // Login Button Logic
                        var loginBtn = document.getElementById("mathtype-login-btn");

                        if (loginBtn) {
                            loginBtn.addEventListener("click", function(e) {
                                e.preventDefault();
                                
                                var dummyHtml = "data:text/html;charset=utf-8,%3Chtml%3E%3Cbody%20style%3D%22font-family%3A%20sans-serif%3B%20text-align%3A%20center%3B%20padding-top%3A%2050px%3B%22%3E%3Ch3%3EMathType%20Dummy%20Login%3C%2Fh3%3E%3Cp%3EClick%20below%20to%20simulate%20a%20successful%20login.%3C%2Fp%3E%3Cbutton%20onclick%3D%22window.parent.postMessage(%7Bmathtype_token%3A%20%27MT-VALIDATED-TOKEN-999%27%7D%2C%20%27*%27)%3B%22%20style%3D%22padding%3A%2010px%2020px%3B%20background%3A%20%23007bff%3B%20color%3A%20white%3B%20border%3A%20none%3B%20border-radius%3A%205px%3B%20cursor%3A%20pointer%3B%22%3EAuthenticate%3C%2Fbutton%3E%3C%2Fbody%3E%3C%2Fhtml%3E";

                                Modal.create({
                                    title: "MathType Login Simulation",
                                    body: `<iframe src="${dummyHtml}" style="width: 100%; height: 300px; border: 1px solid #ccc; border-radius: 8px;"></iframe>`,
                                    large: true,
                                    show: true
                                }).catch(function(error) {
                                    console.error("Modal creation failed:", error);
                                });
                            });
                        }

                        // Logout Button Logic.
                        var logoutBtn = document.getElementById("mathtype-logout-btn");

                        if (logoutBtn) {
                            logoutBtn.addEventListener("click", function(e) {
                                e.preventDefault();

                                // We call our save_token.php but pass it NOTHING!
                                // This overwrites the database with an empty string, locking the filter.
                                window.location.href = M.cfg.wwwroot + "/filter/wiris/save_token.php?token=";
                            });
                        }
                    });
                ';
                
                $PAGE->requires->js_amd_inline($js);

                return format_admin_setting($this, $this->visiblename, $html, $this->description, true, '', '', $query);
            }
        }
    }

    $settings->add(new admin_setting_wiris_login_button(
        'filter_wiris/login_button',
        get_string('login_setting_name', 'filter_wiris'),
        get_string('login_setting_desc', 'filter_wiris'),
        ''
    ));
}