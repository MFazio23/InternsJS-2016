/**
 * Created by MFazio on 6/7/2016.
 */
function doesSkylineNSExist() {
    return typeof skyline === 'object';
}

function getSkylineLocation() {
    return typeof skyline === 'object' ? skyline.location : '';
}

function getGlobalName() {
    return typeof getName === 'function' ? getName() : '';
}
function getSkylineName() {
    return typeof skyline === 'object' ? skyline.getName() : '';
}

function getGlobalFullName(first, last) {
    return typeof getFullName === 'function' ? getFullName(first, last) : '';
}
function getSkylineFullName(first, last) {
    return typeof skyline === 'object' ? skyline.getFullName(first, last) : '';
}