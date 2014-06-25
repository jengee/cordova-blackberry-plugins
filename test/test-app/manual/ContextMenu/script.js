/*
 * Copyright 2014 BlackBerry Limited.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/


var callback = function (id) {
    alert("Callback triggered with id: " + id);
};

function overridePlatform() {
    var myItem = {actionId: blackberry.ui.contextmenu.ACTION_COPY, label: 'CustomCopy!', icon: 'local:///manual/ContextMenu/icon.png'};

    blackberry.ui.contextmenu.overrideItem(function () {
        alert("Wow you succesfully overrode the platform menu item Copy");
    }, function () { alert("error in overriding"); }, myItem, null);

    alert("Copy in the context menu has been changed!");
}

function clearCopyOverride() {
    blackberry.ui.contextmenu.clearOverride(blackberry.ui.contextmenu.ACTION_COPY);
    alert("You have removed the copy context menu");
}


function overrideMenuServiceShare() {
    var myItem = {actionId: 'MenuService-1', label: 'CustomMenuOption', icon: 'local:///manual/ContextMenu/icon.png'};
    blackberry.ui.contextmenu.overrideItem(myItem, function () {
        alert("You have successfully created a new menu service action called CustomMenuOption");
    });
}

function clearMSOverride() {
    blackberry.ui.contextmenu.clearOverride('MenuService-1');
    alert("Cleared the custom option menu");
}



function disableContextMenu() {
    blackberry.ui.contextmenu.enabled = false;
    alert("Turned off context menus");
}

function reenableContextMenu() {
    blackberry.ui.contextmenu.enabled = true;
    alert("Context Menus are reenabled.");
}

function addMenuItemContextAll() {
    var myItem = {actionId: '1', label: 'ALL', icon: 'local:///manual/ContextMenu/icon.png'},
        contexts = [blackberry.ui.contextmenu.CONTEXT_ALL];

    blackberry.ui.contextmenu.addItem(contexts, myItem, callback);

    //Added alert
    alert("Added a new menu option called 'ALL'");
}

function removeMenuItemContextAll() {
    var myItem = {actionId: '1', label: 'ALL', icon: 'local:///manual/ContextMenu/icon.png'},
        contexts = [blackberry.ui.contextmenu.CONTEXT_ALL];

    blackberry.ui.contextmenu.removeItem(contexts, myItem.actionId);

    //Added alert
    alert("Removed menu option called 'ALL'");
}

function addMenuItemContextLink() {
    var myItem = {actionId: '2', label: 'LINK', icon: 'local:///manual/ContextMenu/icon.png'},
        contexts = [blackberry.ui.contextmenu.CONTEXT_LINK];

    blackberry.ui.contextmenu.addItem(contexts, myItem, callback);

    //Added alert
    alert("added a new menu option called 'LINK' for only hyperlinked objects on the webpage");
}

function removeMenuItemContextLink() {
    var myItem = {actionId: '2', label: 'LINK', icon: 'local:///manual/ContextMenu/icon.png'},
        contexts = [blackberry.ui.contextmenu.CONTEXT_LINK];

    blackberry.ui.contextmenu.removeItem(contexts, myItem.actionId);

    //Added alert
    alert("removed menu option called 'LINK'");
}

function addMenuItemContextInput() {
    var myItem = {actionId: '3', label: 'INPUT', icon: 'local:///manual/ContextMenu/icon.png'},
        contexts = [blackberry.ui.contextmenu.CONTEXT_INPUT];

    blackberry.ui.contextmenu.addItem(contexts, myItem, callback);

    //added alert
    alert("added a Context Input option called INPUT");
}

function removeMenuItemContextInput() {
    var myItem = {actionId: '3', label: 'INPUT', icon: 'local:///manual/ContextMenu/icon.png'},
        contexts = [blackberry.ui.contextmenu.CONTEXT_INPUT];

    blackberry.ui.contextmenu.removeItem(contexts, myItem.actionId);

    //added alert
    alert("removed context input option called INPUT");
}

function addMenuItemContextIText() {
    var myItem = {actionId: '4', label: 'TEXT', icon: 'local:///manual/ContextMenu/icon.png'},
        contexts = [blackberry.ui.contextmenu.CONTEXT_TEXT];

    blackberry.ui.contextmenu.addItem(contexts, myItem, callback);

    alert("added context text option called TEXT in the context menu");
}

function removeMenuItemContextIText() {
    var myItem = {actionId: '4', label: 'TEXT', icon: 'local:///manual/ContextMenu/icon.png'},
        contexts = [blackberry.ui.contextmenu.CONTEXT_TEXT];

    blackberry.ui.contextmenu.removeItem(contexts, myItem.actionId);

    alert("removed context text option called TEXT in the context menu");
}

function addMenuItemContextImage() {
    var myItem = {actionId: '5', label: 'IMAGE', icon: 'local:///manual/ContextMenu/icon.png'},
        contexts = [blackberry.ui.contextmenu.CONTEXT_IMAGE];

    blackberry.ui.contextmenu.addItem(contexts, myItem, callback);

    alert("added context image option called IMAGE in the context menu");
}

function removeMenuItemContextImage() {
    var myItem = {actionId: '5', label: 'IMAGE', icon: 'local:///manual/ContextMenu/icon.png'},
        contexts = [blackberry.ui.contextmenu.CONTEXT_IMAGE];

    blackberry.ui.contextmenu.removeItem(contexts, myItem.actionId);

    alert("Removed context image option called IMAGE in the context menu");
}

function addMenuItemContextImageLink() {
    var myItem = {actionId: '6', label: 'IMAGE_LINK', icon: 'local:///manual/ContextMenu/icon.png'},
        contexts = [blackberry.ui.contextmenu.CONTEXT_IMAGE_LINK];

    blackberry.ui.contextmenu.addItem(contexts, myItem, callback);

    alert("Added context image link option called IMAGE_LINK in the context menu");
}

function removeMenuItemContextImageLink() {
    var myItem = {actionId: '6', label: 'IMAGE_LINK', icon: 'local:///manual/ContextMenu/icon.png'},
        contexts = [blackberry.ui.contextmenu.CONTEXT_IMAGE_LINK];

    blackberry.ui.contextmenu.removeItem(contexts, myItem.actionId);

    alert("Removed context image link option called 'IMAGE_LINK'");
}

function addMenuItemContextCustom() {
    var myItem = {actionId: '7', label: 'CustomContext', icon: 'local:///manual/ContextMenu/icon.png'},
        contexts = ["myContext"];

    blackberry.ui.contextmenu.addItem(contexts, myItem, callback);

    alert("Added custom context option called 'CustomContext' in the context menu");
}

function removeMenuItemContextCustom() {
    var myItem = {actionId: '7', label: 'CustomContext', icon: 'local:///manual/ContextMenu/icon.png'},
        contexts = ["myContext" ];

    blackberry.ui.contextmenu.removeItem(contexts, myItem.actionId);
    alert("Removed custom context option called 'CustomContext' in the context menu");
}


//**************************Custom contexts - defineCustomContext()**********************************

function someFunction(sourceId) {
    alert("Some empty function that gets called when you click on any custom context menu: " + sourceId);
}

function orangeIconAlertFunction(sourceId) {
    alert("A function executed when you clicked on the orange context menu. And the sourceId is: " + sourceId);
}

function customContext1() {
    alert("Adding a menu called Orange with a Orange Icon with a callback function that just invokes an alert.");
    
    // Create a menu item and add it to the context
    var item = {actionId: 'Test1',
        label: 'Orange', 
        icon:'local:///manual/ContextMenu/icon.png'},
        
        contexts = ["Test1"]; //Name of the section in the HTML page that the custom context menu applies
        
    blackberry.ui.contextmenu.addItem(contexts, item, orangeIconAlertFunction);
}

function customContext2() {
    alert("Adding a menu called 'A tire' with a tire icon with a callback function that just invokes an alert.");
    
    // Create a menu item and add it to the context
    var item = {actionId: 'Test2',
        label: 'A tire', 
        icon:'local:///manual/ContextMenu/tire.png'},
        
        contexts = ["Test2"]; //Name of the section in the HTML page that the custom context menu applies
         
    blackberry.ui.contextmenu.addItem(contexts, item, someFunction);
        
}

function customContext3() {
    //Because each section in the HTML page has it's own div section, you have to add the menu each and every time. 
   alert ("Adding a menu called 'A tire' and 'Orange'.");
   
    // Create a menu item and add it to the context
    var item = {actionId: '1',
        label: 'Orange', 
        icon:'local:///manual/ContextMenu/icon.png'},
        
        contexts = ["Test3"]; //Name of the section in the HTML page that the custom context menu applies
        
    blackberry.ui.contextmenu.addItem(contexts, item, orangeIconAlertFunction);

    // Create a menu item and add it to the context
    item = {actionId: '2',
        label: 'A tire', 
        icon:'local:///manual/ContextMenu/tire.png'};
        
    contexts = ["Test3"]; //Name of the section in the HTML page that the custom context menu applies
         
    blackberry.ui.contextmenu.addItem(contexts, item, someFunction);
}

function customContext4() {
    //Because each section in the HTML page has it's own div section, you have to add the menu each and every time. 
   alert ("This only adds the menu service items in the context menu.");
       
    var defineOptions = {
        includeContextItems: 
            [],
            includePlatformItems: false,
            includeMenuServiceItems: true
    };

    // Define the custom context with the options that we want used
    blackberry.ui.contextmenu.defineCustomContext("Test4", 
        defineOptions);
}

function customContext5() {
    //Because each section in the HTML page has it's own div section, you have to add the menu each and every time. 
    alert("This only adds the platform items to the context menu.");
    
    var defineOptions = {
        includeContextItems: 
            [],
            includePlatformItems: true,
            includeMenuServiceItems: false
    };
    
    // Define the custom context with the options that we want used
    blackberry.ui.contextmenu.defineCustomContext("Test5", 
        defineOptions);
}

function customContext6() {
    //Because each section in the HTML page has it's own div section, you have to add the menu each and every time. 
    alert("This only adds the platform items to the context menu.");
    
    var defineOptions = {
        includeContextItems: 
            [],
            includePlatformItems: true,
            includeMenuServiceItems: false
    };
    
    // Define the custom context with the options that we want used
    blackberry.ui.contextmenu.defineCustomContext("Test6", 
        defineOptions);
    
}

function customContext7() {
    
    alert("This adds an orange custom menu to the default context menu");
    
    // Create a menu item and add it to the context
    var item = {actionId: '1',
        label: 'Orange', 
        icon:'local:///manual/ContextMenu/icon.png'},
        
        contexts = ["Test7"]; //Name of the section in the HTML page that the custom context menu applies
        
    blackberry.ui.contextmenu.addItem(contexts, item, orangeIconAlertFunction);
    
    var defineOptions = {
        includeContextItems: 
            [],
            includePlatformItems: true,
            includeMenuServiceItems: true
    };
    
    // Define the custom context with the options that we want used
    blackberry.ui.contextmenu.defineCustomContext("Test7", 
        defineOptions);
}

//This test covers the scenario where the user provides the wrong div tag. Expected: No context menus are invoked
function customContext8() {
    alert("No context menus are enabled because it is referring to the wrong &lt;div&gt; tag");
    
    // Create a menu item and add it to the context
    var item = {actionId: '1',
        label: 'Orange', 
        icon:'local:///manual/ContextMenu/icon.png'},
        
        contexts = ["WrongDivTag"]; //Name of the section in the HTML page that the custom context menu applies
        
    blackberry.ui.contextmenu.addItem(contexts, item, orangeIconAlertFunction);
    
    var defineOptions = {
        includeContextItems: 
            [blackberry.ui.contextmenu.CONTEXT_LINK],
            includePlatformItems: true,
            includeMenuServiceItems: true
    };
    
    // Define the custom context with the options that we want used
    blackberry.ui.contextmenu.defineCustomContext("WrongDivTag", 
        defineOptions);
}

//This test covers the function override and clearOverride
function customContext9() {
    alert("This function uses override");
    
    var myItem = {actionId: blackberry.ui.contextmenu.ACTION_COPY, 
        label: 'Custom Copy!',
        icon:'local:///icon.png'};

    blackberry.ui.contextmenu.overrideItem(myItem, function() {
        alert("Plaform menu item Copy successfully overridden");
    });
}

function customContext9a() {
    alert("This function clears the override");
    
    var myItem = {actionId: 
        blackberry.ui.contextmenu.ACTION_SAVE_IMAGE, 
        label: 'Save Image'};
        
    blackberry.ui.contextmenu.overrideItem(myItem, function() {
        alert("Custom Save using system icon");
    });

}

//This test covers the disablePlatformItem, enablePlatformItem() and list DisabledPlatformItems
//function to enablePlatformItems
function customContext10() {
    var context = blackberry.ui.contextmenu.CONTEXT_IMAGE,
        actionId = blackberry.ui.contextmenu.ACTION_COPY,
        resp;
    
    resp = blackberry.ui.contextmenu.enablePlatformItem(context, actionId);
    
    if (resp === true) {
        alert("enabled " + context + " successfully!");
        
    } else if (resp === undefined) {
        alert("enablePlatformItems returned undefined");
    } else {
        // assuming false
        alert (resp + "- Unable to enable " + context);
    }
}

//function to disablePlatformItems
function customContext10a() {
    var context = blackberry.ui.contextmenu.CONTEXT_IMAGE,
        actionId = blackberry.ui.contextmenu.ACTION_COPY,
        resp;
    
    resp = blackberry.ui.contextmenu.disablePlatformItem(context, 
            actionId);
    
    if (resp === true) {
        alert("disabled " + context + " successfully!");
    } else if (resp === undefined) {
        alert("disablePlatformItems returned undefined");
    } else {
        // assuming false
        alert (resp + "- Unable to disable " + context);
    }
}

//function to return list of disabledPlatformItems
function customContext10b() {
       var imageContext = blackberry.ui.contextmenu.CONTEXT_IMAGE,
            disabledItems = 
                blackberry.ui.contextmenu.listDisabledPlatformItems();
        
        // Print all disabled platform items for the image context
        if (disabledItems[imageContext].length !== 0) {
            disabledItems[imageContext].forEach(function (actionId) {
                console.log(actionId);
            });
        }    
}

//This function toggles on/off context menus
function toggle() {
    
    if (blackberry.ui.contextmenu.enabled === false) {
        alert("turning on context menus");
        blackberry.ui.contextmenu.enabled = true;
    } else {
        alert("turning off context menus");
        blackberry.ui.contextmenu.enabled = false;
    }
    
}






