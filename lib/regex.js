'use strict';

function join(array, joiner) {
  return array
    .map(function(val) {
      return (val || '').trim();
    })
    .filter(function(val) { return val.length; })
    .join(joiner);
}

// ['alpha', 'beta'] ==> new RegExp(...alpha|beta...)
function getNotesRegex(noteKeywords) {
  return new RegExp('(' + join(noteKeywords, '|') + '):\\s([\\s\\S]*)');
}

// ['closed', 'closes'] => new RegExp(...closed|closes...)
function getClosesRegex(closeKeywords) {
  return new RegExp('(?:' + join(closeKeywords, '|') + ')\\s((?:#\\d+(?:\\,\\s)?)+)', 'gi');
}

module.exports = {
  getNotesRegex: getNotesRegex,
  getClosesRegex: getClosesRegex
};
