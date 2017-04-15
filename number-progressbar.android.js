"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var color_1 = require("color");
var common = require("./number-progressbar.common");
function onProgressTextSizePropertyChanged(data) {
    var dPad = data.object;
    if (!dPad.android) {
        return;
    }
    dPad.android.setProgressTextSize(data.newValue);
}
function onProgressTextColorPropertyChanged(data) {
    var dPad = data.object;
    if (!dPad.android) {
        return;
    }
    dPad.android.setProgressTextColor(new color_1.Color(data.newValue).android);
}
function onProgressUnreachedBarHeightPropertyChanged(data) {
    var dPad = data.object;
    if (!dPad.android) {
        return;
    }
    dPad.android.setUnreachedBarHeight(data.newValue);
}
function onProgressReachedBarHeightPropertyChanged(data) {
    var dPad = data.object;
    if (!dPad.android) {
        return;
    }
    dPad.android.setReachedBarHeight(data.newValue);
}
function onProgressUnreachedColorPropertyChanged(data) {
    var dPad = data.object;
    if (!dPad.android) {
        return;
    }
    dPad.android.setUnreachedBarColor(new color_1.Color(data.newValue).android);
}
function onProgressReachedColorPropertyChanged(data) {
    var dPad = data.object;
    if (!dPad.android) {
        return;
    }
    dPad.android.setReachedBarColor(new color_1.Color(data.newValue).android);
}
common.NumberProgressBar.progressTextSizeProperty.metadata.onSetNativeValue = onProgressTextSizePropertyChanged;
common.NumberProgressBar.progressTextColorProperty.metadata.onSetNativeValue = onProgressTextColorPropertyChanged;
common.NumberProgressBar.progressUnreachedBarHeightProperty.metadata.onSetNativeValue = onProgressUnreachedBarHeightPropertyChanged;
common.NumberProgressBar.progressReachedBarHeightProperty.metadata.onSetNativeValue = onProgressReachedBarHeightPropertyChanged;
common.NumberProgressBar.progressUnreachedColorProperty.metadata.onSetNativeValue = onProgressUnreachedColorPropertyChanged;
common.NumberProgressBar.progressReachedColorProperty.metadata.onSetNativeValue = onProgressReachedColorPropertyChanged;
global.moduleMerge(common, exports);
var bnp = com.daimajia.numberprogressbar.NumberProgressBar;
var NumberProgressBar = (function (_super) {
    __extends(NumberProgressBar, _super);
    function NumberProgressBar() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(NumberProgressBar.prototype, "android", {
        get: function () {
            return this._android;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NumberProgressBar.prototype, "_nativeView", {
        get: function () {
            return this._android;
        },
        enumerable: true,
        configurable: true
    });
    NumberProgressBar.prototype._createUI = function () {
        var that = new WeakRef(this);
        var that1 = this;
        this._android = new bnp(this._context);
        console.log(this._android);
        this._android.setOnProgressBarListener(new com.daimajia.numberprogressbar.OnProgressBarListener({
            get owner() {
                return that.get();
            },
            onProgressChange: function (current, max) {
                if (current == max) {
                    that1._android.setProgress(0);
                }
            }
        }));
        if (this.progress_text_size) {
            this._android.setProgressTextSize(this.progress_text_size);
        }
        if (this.progress_text_color) {
            this._android.setProgressTextSize(new color_1.Color(this.progress_text_color).android);
        }
        if (this.progress_unreached_bar_height) {
            this._android.setUnreachedBarHeight(this.progress_unreached_bar_height);
        }
        if (this.progress_reached_bar_height) {
            this._android.setReachedBarHeight(this.progress_reached_bar_height);
        }
        if (this.progress_unreached_color) {
            this._android.setUnreachedBarColor(this.progress_unreached_color);
        }
        if (this.progress_reached_color) {
            this._android.setReachedBarColor(this.progress_reached_color);
        }
    };
    NumberProgressBar.prototype.incrementProgressBy = function (value) {
        var val = +value;
        this._android.incrementProgressBy(val);
    };
    NumberProgressBar.prototype.getProgress = function () {
        var progressVal = this._android.getProgress();
        return progressVal;
    };
    NumberProgressBar.prototype.setProgress = function (value) {
        var val = +value;
        this._android.setProgress(val);
    };
    NumberProgressBar.prototype.getProgressMax = function () {
        var progressMaxVal = this._android.getMax();
        return progressMaxVal;
    };
    NumberProgressBar.prototype.setProgressMax = function (value) {
        var val = +value;
        this._android.setMax(val);
    };
    return NumberProgressBar;
}(common.NumberProgressBar));
exports.NumberProgressBar = NumberProgressBar;
//# sourceMappingURL=number-progressbar.android.js.map