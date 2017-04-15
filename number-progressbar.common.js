"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var view_1 = require("ui/core/view");
var proxy_1 = require("ui/core/proxy");
var dependency_observable_1 = require("ui/core/dependency-observable");
var progressTextSizeProperty = new dependency_observable_1.Property("progress_text_size", "NumberProgressBar", new proxy_1.PropertyMetadata(undefined, dependency_observable_1.PropertyMetadataSettings.None));
var progressTextColorProperty = new dependency_observable_1.Property("progress_text_color", "NumberProgressBar", new proxy_1.PropertyMetadata(undefined, dependency_observable_1.PropertyMetadataSettings.None));
var progressUnreachedBarHeightProperty = new dependency_observable_1.Property("progress_unreached_bar_height", "NumberProgressBar", new proxy_1.PropertyMetadata(undefined, dependency_observable_1.PropertyMetadataSettings.None));
var progressReachedBarHeightProperty = new dependency_observable_1.Property("progress_reached_bar_height", "NumberProgressBar", new proxy_1.PropertyMetadata(undefined, dependency_observable_1.PropertyMetadataSettings.None));
var progressUnreachedColorProperty = new dependency_observable_1.Property("progress_unreached_color", "NumberProgressBar", new proxy_1.PropertyMetadata(undefined, dependency_observable_1.PropertyMetadataSettings.None));
var progressReachedColorProperty = new dependency_observable_1.Property("progress_reached_color", "NumberProgressBar", new proxy_1.PropertyMetadata(undefined, dependency_observable_1.PropertyMetadataSettings.None));
var NumberProgressBar = (function (_super) {
    __extends(NumberProgressBar, _super);
    function NumberProgressBar() {
        return _super.call(this) || this;
    }
    Object.defineProperty(NumberProgressBar.prototype, "progress_text_size", {
        get: function () {
            return this._getValue(NumberProgressBar.progressTextSizeProperty);
        },
        set: function (value) {
            this._setValue(NumberProgressBar.progressTextSizeProperty, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NumberProgressBar.prototype, "progress_text_color", {
        get: function () {
            return this._getValue(NumberProgressBar.progressTextColorProperty);
        },
        set: function (value) {
            this._setValue(NumberProgressBar.progressTextColorProperty, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NumberProgressBar.prototype, "progress_unreached_bar_height", {
        get: function () {
            return this._getValue(NumberProgressBar.progressUnreachedBarHeightProperty);
        },
        set: function (value) {
            this._setValue(NumberProgressBar.progressUnreachedBarHeightProperty, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NumberProgressBar.prototype, "progress_reached_bar_height", {
        get: function () {
            return this._getValue(NumberProgressBar.progressReachedBarHeightProperty);
        },
        set: function (value) {
            this._setValue(NumberProgressBar.progressReachedBarHeightProperty, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NumberProgressBar.prototype, "progress_unreached_color", {
        get: function () {
            return this._getValue(NumberProgressBar.progressUnreachedColorProperty);
        },
        set: function (value) {
            this._setValue(NumberProgressBar.progressUnreachedColorProperty, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NumberProgressBar.prototype, "progress_reached_color", {
        get: function () {
            return this._getValue(NumberProgressBar.progressReachedColorProperty);
        },
        set: function (value) {
            this._setValue(NumberProgressBar.progressReachedColorProperty, value);
        },
        enumerable: true,
        configurable: true
    });
    NumberProgressBar.prototype.incrementProgressBy = function (value) { };
    NumberProgressBar.prototype.getProgress = function () { };
    NumberProgressBar.prototype.setProgress = function (value) { };
    NumberProgressBar.prototype.getProgressMax = function () { };
    NumberProgressBar.prototype.setProgressMax = function (value) { };
    NumberProgressBar.prototype.setProgressTextVisibility = function (value) { };
    return NumberProgressBar;
}(view_1.View));
NumberProgressBar.progressTextSizeProperty = progressTextSizeProperty;
NumberProgressBar.progressTextColorProperty = progressTextColorProperty;
NumberProgressBar.progressUnreachedBarHeightProperty = progressUnreachedBarHeightProperty;
NumberProgressBar.progressReachedBarHeightProperty = progressReachedBarHeightProperty;
NumberProgressBar.progressUnreachedColorProperty = progressUnreachedColorProperty;
NumberProgressBar.progressReachedColorProperty = progressReachedColorProperty;
exports.NumberProgressBar = NumberProgressBar;
//# sourceMappingURL=number-progressbar.common.js.map