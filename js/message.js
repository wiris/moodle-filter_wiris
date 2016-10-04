function get_firstchild(n){
    x = n.firstChild;
    while (x.nodeType != 1){
        x = x.nextSibling;
    }
    return x;
}

innerHTML = '<p style="padding: 5px; white-space: nowrap;">';
innerHTML += '<b>Attention!</b> A component is missing for WIRIS filter to function correctly. WIRIS filter requires that ';
innerHTML += '<a target="_blank" href="http://www.wiris.com/plugins/docs/moodle/troubleshooting?url='; encodeURI(location.href);
innerHTML += '#missing-tinymce-plugin">';
innerHTML += ' WIRIS plugin for Moodle and TinyMCE or Atto';
innerHTML += '<img style="vertical-align: -3px;" alt="" src="https://www.wiris.com/system/files/attachments/1689/WIRIS_manual_icon_17_17.png" /></a> is also installed.</p>';

var div = document.createElement('div');
div.style.backgroundColor = '#FF878D';
div.style.height = '25px';
div.innerHTML = innerHTML;
var bodyFirstChild = get_firstchild(document.body);
bodyFirstChild.parentNode.insertBefore(div, bodyFirstChild);
