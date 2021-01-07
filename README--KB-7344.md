# Update MathType Moodle Filter plugin to use Javascript only ( and exclude PHP from the rendering logic )



## Considerations

- The three wiris modules ('moodle-filter_wiris', 'moodle-atto_wiris' and 'moodle-tinymce_wiris') need to be updated to the same version, `KB-7344` branch.
- All tests are passing.


## Code analysis

1. Cal esborar la referencia a la llibrearia php en thirdpartylibs.xml, ja que es carreguen automàticament per moodle (at `settings.php:32`). 
2. 

## Traces and logs

### Local testing

```sh
moodle-docker$ bin/moodle-docker-compose exec -T webserver php admin/tool/behat/cli/run.php --tags="@filter_wiris"
Running single behat site:
Moodle 3.9.3+ (Build: 20201224), 0d833e248a4792606f91cb679bb2af35a5181b99
Php: 7.3.20, mysqli: 5.7.27, OS: Linux 5.4.0-58-generic x86_64
Server OS "Linux", Browser: "firefox"
Browser specific fixes have been applied. See http://docs.moodle.org/dev/Acceptance_testing#Browser_specific_fixes
Started at 07-01-2021, 17:33
.........................................~~~~............................. 70
...................................................................... 140
......................................

18 scenarios (18 passed)
178 steps (178 passed)
3m37.97s (49.77Mb)
```

### CI validation using TravisCI

| w  | Result  |
|---|---|
| Moodle3_5 + php70 | error  |
| Moodle3_9 + php74 | ok  |
| Moodle3_8 + php74 | ok  |


```sh


```
