/*
 * Copyright 2014 BlackBerry Ltd.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var ERRON_MSG_PPS = "Cannot retrieve data from system";

module.exports = {
    getFields: function (success, fail, args, env) {
        var result = new PluginResult(args, env),
            fields = { };

        try {
            fields.name = qnx.callExtensionMethod("application.name");
        } catch (e) {
            result.error(ERRON_MSG_PPS);
        }

        try {
            fields.description = qnx.callExtensionMethod("application.description");
        } catch (e) {
            result.error(ERRON_MSG_PPS);
        }

        try {
            fields.applicationPackageName = qnx.callExtensionMethod("application.packageName");
        } catch (e) {
            result.error(ERRON_MSG_PPS);
        }

        try {
            fields.version = qnx.callExtensionMethod("application.version");
        } catch (e) {
            result.error(ERRON_MSG_PPS);
        }

        try {
            result.ok(fields, false);
        } catch (e) {
            result.error(ERRON_MSG_PPS);
        }
    }
};
