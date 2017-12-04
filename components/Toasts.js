import Events from '~/components/Events.js'

export default {
    show,
}

function show(text, options){
	debugger
    options = options || {};
    options.text = text;
    Events.publish('toast', options)
}
