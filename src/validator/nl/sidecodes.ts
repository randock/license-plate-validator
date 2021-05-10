export const sidecodes = [];
sidecodes.push(/^[a-zA-Z]{2}[\d]{2}[\d]{2}$/); // 01 XX-99-99
sidecodes.push(/^[\d]{2}[\d]{2}[a-zA-Z]{2}$/); // 02 99-99-XX
sidecodes.push(/^[\d]{2}[a-zA-Z]{2}[\d]{2}$/); // 03 99-XX-99
sidecodes.push(/^[a-zA-Z]{2}[\d]{2}[a-zA-Z]{2}$/); // 04 XX-99-XX
sidecodes.push(/^[a-zA-Z]{2}[a-zA-Z]{2}[\d]{2}$/); // 05 XX-XX-99
sidecodes.push(/^[\d]{2}[a-zA-Z]{2}[a-zA-Z]{2}$/); // 06 99-XX-XX
sidecodes.push(/^[\d]{2}[a-zA-Z]{3}[\d]{1}$/); // 07 99-XXX-9
sidecodes.push(/^[\d]{1}[a-zA-Z]{3}[\d]{2}$/); // 08 9-XXX-99
sidecodes.push(/^[a-zA-Z]{2}[\d]{3}[a-zA-Z]{1}$/); // 09 XX-999-X
sidecodes.push(/^[a-zA-Z]{1}[\d]{3}[a-zA-Z]{2}$/); // 10 X-999-XX
sidecodes.push(/^[a-zA-Z]{3}[\d]{2}[a-zA-Z]{1}$/); // 11 XXX-99-X
sidecodes.push(/^[a-zA-Z]{1}[\d]{2}[a-zA-Z]{3}$/); // 12 X-99-XXX
sidecodes.push(/^[\d]{1}[a-zA-Z]{2}[\d]{3}$/); // 13 9-XX-999
sidecodes.push(/^[\d]{3}[a-zA-Z]{2}[\d]{1}$/); // 14 999-XX-9
