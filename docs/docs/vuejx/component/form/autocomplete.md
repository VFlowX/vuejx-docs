# vuejx-autocomplete object
```js
{
    "props": {
        "prefix": {
            "default": ""
        },
        "dynamicAPI": {
            "default": false
        },
        "id": {
            "default": ""
        },
        "config": {
            "required": true
        },
        "text_style": {
            "default": false
        },
        "call_onload": {
            "default": false
        },
        "item": {
            "required": true
        },
        "items": {
            "required": true
        },
        "defaultVal": {},
        "maxItem": {
            "required": false,
            "default": 100
        },
        "delay": {
            "required": false,
            "default": 0
        },
        "data": {
            "required": false
        },
        "site": {},
        "khac": {},
        "flatten": {
            "default": true
        },
        "comp": {
            "default": ""
        }
    },
    "methods": {},
    "watch": {}
}
```

# template
```html
<div class="relative vuejx_combobox_selection" :id="id">
	<div class="block font-semibold truncate" :class="config['label_class'] ? config['label_class'] : 'leading-normal'" v-if="!config['hidden_label'] || !config.hasOwnProperty('hidden_label')">{{ config.hasOwnProperty("label") ? config["label"] : config["model"] }}<span class="required__class" v-if="config['required']">*</span></div>
	<div :class="'flex flex-wrap items-stretch w-full mb-0 relative autocomplete bg-gray-200 rounded ' + ('vuejx_cbx___' + String(config['model']).replace(/./g, '____'))" style="min-height: 33px">
		<template v-if="!stateKhac">
			<Multiselect v-if="!dynamicAPI && renderCBX" :class="{'flex-1': khac}" v-model="value" :mode="config['multiple'] ? 'tags' : 'single'" :placeholder="config['placeholder']" :trackBy="config['itemText'] ? (config['itemTextLv1'] ? config['itemText'] + '___raw' : config['itemText']) : '_source.title'" :label="config['itemText'] ? (config['itemTextLv1'] ? config['itemText'] + '___raw' : config['itemText']) : '_source.title'" :valueProp="config['itemValue'] ? config['itemValue'] : '_source.shortName'" :object="true" :search="true" :searchable="true" :options="options" @change="changeCBX" @open="openCBX" @clear="clearCBX" :loading="loading" :noOptionsText="config['noOptionsText'] ? config['noOptionsText'] : noOptionsText" :noResultsText="config['noResultsText'] ? config['noResultsText'] : 'Không có dữ liệu.'">
				<template v-slot:singlelabel>
					<div class="multiselect-single-label">
						<slot name="custom_singlelabel" :valData="value" :config="config">
							{{ (typeof value === 'string' ? value : objectView(value, config['itemText'] ? (config['itemTextLv1'] ? config['itemText'] + '___raw' : config['itemText']) : '_source.title')) === '' ? config['placeholder'] : typeof value === 'string' ? config['placeholder'] : objectView(value, config['itemText'] ? (config['itemTextLv1'] ? config['itemText'] + '___raw' : config['itemText']) : '_source.title') }}
						</slot>
					</div>
				</template>
				<template v-slot:tag="{ option, handleTagRemove, disabled }">
					<div class="multiselect-tag is-user">
						{{
						objectView(
						option,
						config['itemText'] ? (config['itemTextLv1'] ? config['itemText'] + '___raw' : config['itemText']) : '_source.title'
						)
						}}
						<i v-if="!disabled" @click.prevent @mousedown.prevent.stop="handleTagRemove(option, $event)" />
					</div>
				</template>
				<template v-slot:option="{ option }">
					<slot name="option" :option="option">
						<span>{{ objectView(option, config['itemText'] ? (config['itemTextLv1'] ? config['itemText'] + '___raw' : config['itemText']) : '_source.title') }}</span>
					</slot>
				</template>
			</Multiselect>
			<Multiselect v-else-if="renderCBX" :class="{'flex-1': khac}" v-model="value" :mode="config['multiple'] ? 'tags' : 'single'" :placeholder="config['placeholder']" :trackBy="config['itemText'] ? (config['itemTextLv1'] ? config['itemText'] + '___raw' : config['itemText']) : '_source.title'" :label="config['itemText'] ? (config['itemTextLv1'] ? config['itemText'] + '___raw' : config['itemText']) : '_source.title'" :valueProp="
            config['itemValue'] ? config['itemValue'] : '_source.shortName'
            " :object="true" :filterResults="false" :minChars="1" :resolveOnLoad="true" :delay="delay" :searchable="true" :options="async function(query) {
                return await pullDataSource(query)
            }" @change="changeCBX" @open="openCBX" @clear="clearCBX" :loading="loading" :noOptionsText="
            config['noOptionsText'] ? config['noOptionsText'] : noOptionsText
            " :noResultsText="
            config['noResultsText']
                ? config['noResultsText']
                : 'Không có dữ liệu.'
            ">
				<template v-slot:singlelabel>
					<div class="multiselect-single-label">
						<slot name="custom_singlelabel" :valData="value" :config="config">
							{{ (typeof value === 'string' ? value : objectView(value, config['itemText'] ? (config['itemTextLv1'] ? config['itemText'] + '___raw' : config['itemText']) : '_source.title')) === '' ? config['placeholder'] : typeof value === 'string' ? config['placeholder'] : objectView(value, config['itemText'] ? (config['itemTextLv1'] ? config['itemText'] + '___raw' : config['itemText']) : '_source.title') }}
						</slot>
					</div>
				</template>
				<template v-slot:tag="{ option, handleTagRemove, disabled }">
					<div class="multiselect-tag is-user">
						{{
						objectView(
						option,
						config['itemText'] ? (config['itemTextLv1'] ? config['itemText'] + '___raw' : config['itemText']) : '_source.title'
						)
						}}
						<i v-if="!disabled" @click.prevent @mousedown.prevent.stop="handleTagRemove(option, $event)" />
					</div>
				</template>
				<template v-slot:option="{ option }">
					<span>{{ objectView(option, config['itemText'] ? (config['itemTextLv1'] ? config['itemText'] + '___raw' : config['itemText']) : '_source.title') }}</span>
				</template>
			</Multiselect>
		</template>
		<template v-else>
			<input v-model="valueKhac" class="bg-gray-200 text-gray-700 p-2 focus:cursor-text w-full border border-gray-200 focus:outline-none focus:bg-white focus:border-gray-400 rounded flex-1" type="text" />
		</template>
		<template v-if="khac">
			<button @click="doKhac" class="leading-none font-semibold bg-blue-700 text-white ml-2 rounded px-4 py-2 focus:outline-none whitespace-nowrap flex-2" tabindex="-1">{{ dataForm[config[khac.model]] || stateKhac ? 'Quay lại' : khac.title }}</button>
		</template>
	</div>
</div>
```