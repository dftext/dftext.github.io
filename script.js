
var playerevent = "{\"block\":\"event\",\"id\":\"block\",\"args\":{\"items\":[]},\"action\":\"%ACTION\"}";
var entityevent = "{\"block\":\"entity_event\",\"id\":\"block\",\"args\":{\"items\":[]},\"action\":\"\%ACTION\"}"
var playeraction = "{\"block\":\"player_action\",\"id\":\"block\",\"args\":{\"items\":[]},\"action\":\"%ACTION\"}"
var gameaction = "{\"block\":\"game_action\",\"id\":\"block\",\"args\":{\"items\":[]},\"action\":\"%ACTION\"}"
var entityaction = "{\"block\":\"entity_action\",\"id\":\"block\",\"args\":{\"items\":[]},\"action\":\"%ACTION\"}"
var setvariable = "{\"block\":\"set_var\",\"id\":\"block\",\"args\":{\"items\":[]},\"action\":\"%ACTION\"}"
var control = "{\"block\":\"control\",\"id\":\"block\",\"args\":{\"items\":[{\"item\":{\"id\":\"bl_tag\",\"data\":{\"tag\":\"Time Unit\",\"option\":\"Ticks\",\"action\":\"%ACTION\",\"block\":\"control\"}},\"slot\":26}]},\"action\":\"%ACTION\"}"
var callfunc = "{\"block\":\"call_func\",\"id\":\"block\",\"args\":{\"items\":[]},\"action\":\"dynamic\",\"data\":\"%ACTION\"}"
var funct = "\"block\":\"func\",\"id\":\"block\",\"args\":{\"items\":[{\"item\":{\"id\":\"bl_tag\",\"data\":{\"tag\":\"Is Hidden\",\"option\":\"False\",\"action\":\"dynamic\",\"block\":\"func\"}},\"slot\":26}]},\"action\":\"dynamic\",\"data\":\"%ACTION\"}" 
var openbracket = "{\"id\":\"bracket\",\"type\":\"norm\",\"direct\":\"open\"}"
var closedbracket = "{\"id\":\"bracket\",\"type\":\"norm\",\"direct\":\"close\"}"
var ifplayer = "{\"block\":\"if_player\",\"id\":\"block\",\"args\":{\"items\":[]},\"action\":\"%ACTION\"}"
var _else = "{\"block\":\"else\",\"id\":\"block\"}"
var ifentity = "{\"block\":\"if_entity\",\"id\":\"block\",\"args\":{\"items\":[]},\"action\":\"%ACTION\"}" 
var ifgame = "{\"block\":\"if_game\",\"id\":\"block\",\"args\":{\"items\":[]},\"action\":\"%ACTION\"}"
var ifvar = "{\"block\":\"if_var\",\"id\":\"block\",\"args\":{\"items\":[]},\"action\":\"%ACTION\"}"
var selectobject = "{\"block\":\"select_obj\",\"id\":\"block\",\"args\":{\"items\":[]},\"action\":\"%ACTION\"}"
var repeat = "{\"block\":\"repeat\",\"id\":\"block\",\"args\":{\"items\":[]},\"action\":\"%ACTION\"}"
var repeatbracketopen = "{\"id\":\"bracket\",\"type\":\"repeat\",\"direct\":\"open\"}"
var repeatbracketclosed = "{\"id\":\"bracket\",\"type\":\"repeat\",\"direct\":\"close\"}"
var callprocess = "{\"id\":\"block\",\"block\":\"start_process\",\"args\":{\"items\":[{\"item\":{\"id\":\"bl_tag\",\"data\":{\"option\":\"Create new storage\",\"tag\":\"Local Variables\",\"action\":\"dynamic\",\"block\":\"start_process\"}},\"slot\":25},{\"item\":{\"id\":\"bl_tag\",\"data\":{\"option\":\"With current targets\",\"tag\":\"Target Mode\",\"action\":\"dynamic\",\"block\":\"start_process\"}},\"slot\":26}]},\"data\":\"%ACTION\"}"
var process = "{\"id\":\"block\",\"block\":\"process\",\"args\":{\"items\":[{\"item\":{\"id\":\"bl_tag\",\"data\":{\"option\":\"False\",\"tag\":\"Is Hidden\",\"action\":\"dynamic\",\"block\":\"process\"}},\"slot\":26}]},\"data\":\"%ACTION\"}"

var giveCommand = "/give @p minecraft:ender_chest{PublicBukkitValues:{\"hypercube:codetemplatedata\":\'{\"author\":\"DFText\",\"name\":\"DFText Template\",\"version\":1,\"code\":\"\%CODEHERE%\"}\'},display:{Name:\'{\"text\":\"DFText Template\"}\'}}"
/*


{"block":"select_obj","id":"block","args":{"items":[]},"action":"Shooter"}

INVERTED{"block":"select_obj","id":"block","args":{"items":[]},"inverted":"NOT","action":"FilterSelect","subAction":"Subaction"}

{"block":"repeat","id":"block","args":{"items":[]},"action":"Multiple"}
{"id":"bracket","type":"repeat","direct":"open"}
{"id":"bracket","type":"repeat","direct":"close"}

INVERTED {"block":"repeat","id":"block","args":{"items":[]},"inverted":"NOT","action":"While","subAction":"HasPlayer"}


*/

function printConsole() {
    x = document.getElementById('codebox').value + " test"; 
}   

function convert() {
    endResult = "{\"blocks\":[";
    x = document.getElementById('codebox').value;
    y = x.split(";");
    last = y.length - 1;
    console.log(last);
    y.forEach(func);
    endResult += "]}";
    console.log(endResult);
    document.getElementById('codebox').value = endResult;
}

function copy() {
    copiedText = document.getElementById("codebox");
    copiedText.select();
    copiedText.setSelectionRange(0, 999999);
    document.execCommand("copy");
}

function compress() {
    var codedata = document.getElementById('codebox').value;
    data = pako.gzip(codedata);
    data = String.fromCharCode.apply(null, new Uint16Array(data));
    compressData = btoa(data);
    document.getElementById('codebox').value = compressData;
}

function decompress(){
    var base64data = document.getElementById('codebox').value;
    compressData = atob(base64data);
    compressData = compressData.split('').map(function(e) {
        return e.charCodeAt(0);
    });
    binData = new Uint8Array(compressData);
    data = pako.inflate(binData);
    data = String.fromCharCode.apply(null, new Uint16Array(data));
    document.getElementById('codebox').value = data;
}

function givecommand() {
    command = giveCommand;
    gzipcode = document.getElementById('codebox').value;
    command = command.replace("%CODEHERE%", gzipcode);
    document.getElementById('codebox').value = command;
    $('.toast').toast(commandGiven)
}

function func(item, index) {
    playereventConverted = playerevent.replace("\\", ""); // DONE
    entityeventConverted = entityevent.replace("\\", ""); // DONE
    playeractionConverted = playeraction.replace("\\", ""); // DONE
    entityactionConverted = entityaction.replace("\\", ""); // DONE
    setvariableConverted = setvariable.replace("\\", ""); // DONE
    controlConverted = control.replace("\\", ""); // DONE
    gameactionConverted = gameaction.replace("\\", ""); // DONE
    functionConverted = funct.replace("\\", ""); // DONE
    callfunctionConverted = callfunc.replace("\\", "");  // DONE
    openbracketConverted = openbracket.replace("\\", ""); // DONE
    closedbracketConverted = closedbracket.replace("\\", ""); // DONE
    ifplayerConverted = ifplayer.replace("\\", ""); // DONE
    ifentityConverted = ifentity.replace("\\", ""); // DONE
    ifgameConverted = ifgame.replace("\\", ""); // DONE
    elseConverted = _else.replace("\\", ""); // DONE
    ifvarConverted = ifvar.replace("\\", ""); // DONE
    repeatConverted = repeat.replace("\\", ""); // DONE
    selectobjectConverted = selectobject.replace("\\", ""); // DONE
    repeatbracketclosedConverted = repeatbracketclosed.replace("\\", ""); // DONE
    repeatbracketopenConverted = repeatbracketopen.replace("\\", ""); // DONE
    callprocessConverted = callprocess.replace("\\", ""); // DONE
    processConverted = process.replace("\\", "") // DONE

    // PLAYER EVENT
    if(item.includes("playerevent")) {
        item = item.slice(11,99);
        item = item.replace("(", "");
        item = item.replace(")", "");
        CurrentItem = "PlayerEvent:" + item;
        playereventConverted = playereventConverted.replace("%ACTION", item);
        endResult = endResult + playereventConverted;
        if(index != last) {
            endResult = endResult + ",";
        }
    }
    //ENTITY EVENT
    if(item.includes("entityevent")) {
        item = item.slice(12,99);
        item = item.replace("(", "");
        item = item.replace(")", "");
        CurrentItem = "EntityAction:" + item;
        entityeventConverted = entityeventConverted.replace("%ACTION", item);
        endResult = endResult + entityeventConverted;;
        if(index != last) {
            endResult = endResult + ",";
        }
    }
    // PLAYER ACTION
    if(item.includes("playeraction")) {
        item = item.slice(12,99);
        item = item.replace("(", "");
        item = item.replace(")", "");
        CurrentItem = "PlayerAction:" + item;
        playeractionConverted = playeractionConverted.replace("%ACTION", item);
        endResult = endResult + playeractionConverted
        if(index != last) {
            endResult = endResult + ",";
        }
    }
    // ENTITY ACTION
    if(item.includes("entityaction")) {
        item = item.slice(13,99);
        item = item.replace("(", "");
        item = item.replace(")", "");
        CurrentItem = "EntityAction:" + item;
        entityactionConverted = entityactionConverted.replace("%ACTION", item);
        endResult = endResult + entityactionConverted
        if(index != last) {
            endResult = endResult + ",";
        }
    }
    // CONTROL
    if(item.includes("control")) {
        item = item.slice(8,99);
        item = item.replace("(", "");
        item = item.replace(")", "");
        CurrentItem = "Control:" + item;
        controlConverted = controlConverted.replace("%ACTION", item);
        endResult = endResult + controlConverted
        if(index != last) {
            endResult = endResult + ",";
        }
    }
    // SETVARIABLE
    if(item.includes("setvariable")) {
        item = item.slice(12,99);
        item = item.replace("(", "");
        item = item.replace(")", "");
        CurrentItem = "SetVariable:" + item;
        setvariableConverted = setvariableConverted.replace("%ACTION", item);
        endResult = endResult + setvariableConverted
        if(index != last) {
            endResult = endResult + ",";
        }
    }
    // GAMEACTION
    if(item.includes("gameaction")) {
        item = item.slice(11,99);
        item = item.replace("(", "");
        item = item.replace(")", "");
        CurrentItem = "GameAction:" + item;
        gameactionConverted = gameactionConverted.replace("%ACTION", item);
        endResult = endResult + gameactionConverted
        if(index != last) {
            endResult = endResult + ",";
        }
    }
    // FUNCTION
    if(item.includes("declarefunction")) {
        item = item.slice(9,99);
        item = item.replace("(", "");
        item = item.replace(")", "");
        CurrentItem = "Function:" + item;
        functionConverted = functionConverted.replace("%ACTION", item);
        endResult = endResult + functionConverted
        if(index != last) {
            endResult = endResult + ",";
        }
    }
    // FUNCTION
    if(item.includes("callfunction")) {
        item = item.slice(13,99);
        item = item.replace("(", "");
        item = item.replace(")", "");
        CurrentItem = "CallFunction:" + item;
        callfunctionConverted = callfunctionConverted.replace("%ACTION", item);
        endResult = endResult + callfunctionConverted
        if(index != last) {
            endResult = endResult + ",";
        }
    }
    // BRACKET
    if(item.includes("ifbracket")) {
        item = item.slice(8,99);
        item = item.replace("(", "");
        item = item.replace(")", "");
        CurrentItem = "Bracket:" + item;
        if (item === "open") {
            endResult = endResult + openbracketConverted;
        }
        if (item === "close") {
            endResult = endResult + closedbracketConverted;
        }
        if(index != last) {
            endResult = endResult + ",";
        }
    }
    //REPEATBRACKET
    if(item.includes("repeatbracket")) {
        item = item.slice(14,99);
        item = item.replace("(", "");
        item = item.replace(")", "");
        CurrentItem = "RepeatBracket:" + item;
        if (item === "open") {
            endResult = endResult + repeatbracketopenConverted;
        }
        if (item === "close") {
            endResult = endResult + repeatbracketclosedConverted;
        }
        if(index != last) {
            endResult = endResult + ",";
        }
    }
    // IFVAR
    if(item.includes("ifvariable")) {
        item = item.slice(11,99);
        item = item.replace("(", "");
        item = item.replace(")", "");
        CurrentItem = "IfVariable:" + item;
        ifvarConverted = ifvarConverted.replace("%ACTION", item);
        endResult = endResult + ifvarConverted
        if(index != last) {
            endResult = endResult + ",";
        }
    }
    // IFPLAYER
    if(item.includes("ifplayer")) {
        item = item.slice(9,99);
        item = item.replace("(", "");
        item = item.replace(")", "");
        CurrentItem = "IfPlayer:" + item;
        ifplayerConverted = ifplayerConverted.replace("%ACTION", item);
        endResult = endResult + ifplayerConverted
        if(index != last) {
            endResult = endResult + ",";
        }
    }
    // ELSE
    if(item.includes("else")) {
        item = item.slice(5,99);
        item = item.replace("(", "");
        item = item.replace(")", "");
        CurrentItem = "Else:" + item;
        elseConverted = elseConverted.replace("%ACTION", item);
        endResult = endResult + elseConverted
        if(index != last) {
            endResult = endResult + ",";
        }
    }
    // IFGAME
    if(item.includes("ifgame")) {
        item = item.slice(7,99);
        item = item.replace("(", "");
        item = item.replace(")", "");
        CurrentItem = "IfGame:" + item;
        ifgameConverted = ifgameConverted.replace("%ACTION", item);
        endResult = endResult + ifgameConverted
        if(index != last) {
            endResult = endResult + ",";
        }
    }
    // IFENTITY
    if(item.includes("ifentity")) {
        item = item.slice(9,99);
        item = item.replace("(", "");
        item = item.replace(")", "");
        CurrentItem = "IfEntity:" + item;
        ifentityConverted = ifentityConverted.replace("%ACTION", item);
        endResult = endResult + ifentityConverted
        if(index != last) {
            endResult = endResult + ",";
        }
    }
    // REPEAT
    if(item.includes("repeat")) {
        item = item.slice(7,99);
        item = item.replace("(", "");
        item = item.replace(")", "");
        CurrentItem = "Repeat:" + item;
        repeatConverted = repeatConverted.replace("%ACTION", item);
        endResult = endResult + repeatConverted
        if(index != last) {
            endResult = endResult + ",";
        }
    }
    if(item.includes("selectobject")) {
        item = item.slice(14,99);
        item = item.replace("(", "");
        item = item.replace(")", "");
        CurrentItem = "SelectObject:" + item;
        selectobjectConverted = selectobjectConvertedConverted.replace("%ACTION", item);
        endResult = endResult + selectobjectConvertedConverted
        if(index != last) {
            endResult = endResult + ",";
        }
    }
    if(item.includes("callprocess")) {
        item = item.slice(12,99);
        item = item.replace("(", "");
        item = item.replace(")", "");
        CurrentItem = "CallProcess:" + item;
        callprocessConverted = callprocessConverted.replace("%ACTION", item);
        endResult = endResult + callprocessConverted
        if(index != last) {
            endResult = endResult + ",";
        }
    }
    if(item.includes("process")) {
        item = item.slice(8,99);
        item = item.replace("(", "");
        item = item.replace(")", "");
        CurrentItem = "Process:" + item;
        processConverted = processConverted.replace("%ACTION", item);
        endResult = endResult + processConverted
        if(index != last) {
            endResult = endResult + ",";
    }

}
    console.log(CurrentItem)
}