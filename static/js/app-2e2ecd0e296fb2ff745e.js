!function (e, t) {
    for (var n in t)e[n] = t[n]
}(this, webpackJsonp([40], [, , , function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    var r = n(106), i = {
        Init: {
            init: r.createTypedAction(),
            initConfig: r.createTypedAction(),
            initRoute: r.createTypedAction(),
            initUser: r.createTypedAction()
        },
        API: {
            filter: r.createTypedAction(),
            search: r.createTypedAction(),
            loadLinkHistory: r.createTypedAction(),
            loadBitlinkForCustomBitlinksPage: r.createTypedAction(),
            loadCustomBitlinks: r.createTypedAction(),
            loadCustomBitlinkPastUrlClicks: r.createTypedAction(),
            loadCustomBitlinkBatchClicks: r.createTypedAction(),
            loadCustomBitlinkTotalClicks: r.createTypedAction(),
            loadCustomBitlinkTimeSeriesClicks: r.createTypedAction(),
            loadShortensByDay: r.createTypedAction(),
            loadPopularClicks: r.createTypedAction(),
            loadClicks: r.createTypedAction(),
            loadGlobalEncoders: r.createTypedAction(),
            loadClickHistory: r.createTypedAction(),
            loadChannels: r.createTypedAction(),
            loadNextPage: r.createTypedAction(),
            loadCustomLinkNextPage: r.createTypedAction(),
            loadCustomBitlinkDetail: r.createTypedAction(),
            editBitlink: r.createTypedAction(),
            createBitlink: r.createTypedAction(),
            loadTags: r.createTypedAction(),
            editTags: r.createTypedAction(),
            bulkEditTags: r.createTypedAction(),
            fetchTags: r.createTypedAction(),
            shareBitlink: r.createTypedAction(),
            fastFilterByTag: r.createTypedAction(),
            removeTag: r.createTypedAction(),
            loadPerformanceData: r.createTypedAction(),
            removeSharedAccount: r.createTypedAction(),
            loadCountryCodes: r.createTypedAction(),
            setPhoneNumber: r.createTypedAction(),
            verifyCode: r.createTypedAction(),
            loadTfaStatus: r.createTypedAction(),
            disableTfa: r.createTypedAction(),
            loadSecurityLogs: r.createTypedAction(),
            resendVerification: r.createTypedAction(),
            resendVerificationPrompt: r.createTypedAction(),
            loadBitlinkRateLimit: r.createTypedAction(),
            loadBSDRateLimit: r.createTypedAction(),
            resetAPIKey: r.createTypedAction(),
            setShortDomain: r.createTypedAction(),
            getShortDomainStatus: r.createTypedAction(),
            deleteShortDomain: r.createTypedAction(),
            setBitlinkDomainPreference: r.createTypedAction(),
            getLinkedApps: r.createTypedAction(),
            revokeAuthorization: r.createTypedAction(),
            deactivateAccount: r.createTypedAction(),
            signOutSessions: r.createTypedAction(),
            verifyEmail: r.createTypedAction(),
            setRedirectUrl: r.createTypedAction(),
            getRedirectUrl: r.createTypedAction(),
            loadCountries: r.createTypedAction(),
            revalidate: r.createTypedAction(),
            pullingStatus: r.createTypedAction(),
            setHttps: r.createTypedAction(),
            redirectBitlink: r.createTypedAction(),
            bulkArchiveBitlink: r.createTypedAction(),
            fetchUserInfo: r.createTypedAction(),
            fetchPreferences: r.createTypedAction(),
            addEmail: r.createTypedAction(),
            removeEmail: r.createTypedAction(),
            updateEmail: r.createTypedAction(),
            resendVerificationEmail: r.createTypedAction()
        },
        UI: {
            select: r.createTypedAction(),
            deselect: r.createTypedAction(),
            deselectCampaign: r.createTypedAction(),
            selectCustomLink: r.createTypedAction(),
            deselectCustomLink: r.createTypedAction(),
            bulkSelect: r.createTypedAction(),
            bulkDeselect: r.createTypedAction(),
            deselectAll: r.createTypedAction(),
            clearBitlinkErrors: r.createTypedAction(),
            openSheet: r.createTypedAction(),
            closeSheetByName: r.createTypedAction(),
            closeSheet: r.createTypedAction(),
            setFilter: r.createTypedAction(),
            selectFilterTags: r.createTypedAction(),
            filterTags: r.createTypedAction(),
            clearGeneralFilter: r.createTypedAction(),
            clearTagsFilter: r.createTypedAction(),
            clearDateFilter: r.createTypedAction(),
            clearAllFilters: r.createTypedAction(),
            filterByDateRange: r.createTypedAction(),
            filterDate: r.createTypedAction(),
            filterDeeplinks: r.createTypedAction(),
            clearDeeplinks: r.createTypedAction(),
            toggleTag: r.createTypedAction(),
            trackPageView: r.createTypedAction(),
            connectAccount: r.createTypedAction(),
            filterCountryCodes: r.createTypedAction(),
            selectCountryCode: r.createTypedAction(),
            closeAllSheets: r.createTypedAction(),
            archiveBitlink: r.createTypedAction(),
            openOnlySheet: r.createTypedAction(),
            setSiteWideMessage: r.createTypedAction(),
            changeSection: r.createTypedAction(),
            switchToDefaultBrand: r.createTypedAction(),
            switchBrand: r.createTypedAction(),
            overwriteKeyword: r.createTypedAction(),
            brandSheet: r.createTypedAction(),
            getBsdSiteAssociation: r.createTypedAction(),
            switchOrganizationSection: r.createTypedAction(),
            manageOrganization: r.createTypedAction(),
            clearDomainChoices: r.createTypedAction(),
            toggleApp: r.createTypedAction(),
            setAppForLinkException: r.createTypedAction(),
            setAppFallback: r.createTypedAction(),
            setInstallPreference: r.createTypedAction(),
            setEmailForExport: r.createTypedAction()
        },
        Forms: {
            stageBrandBSDAddition: r.createTypedAction(),
            stageBrandBSDRemoval: r.createTypedAction(),
            setShortenDomain: r.createTypedAction(),
            setCampaignChannel: r.createTypedAction(),
            setCampaign: r.createTypedAction(),
            setSiteAssociationForm: r.createTypedAction()
        },
        Notification: {
            openDefaultNotification: r.createTypedAction(),
            confirmArchive: r.createTypedAction(),
            openNotification: r.createTypedAction(),
            closeNotification: r.createTypedAction(),
            confirmRemoveSharedAccount: r.createTypedAction(),
            confirmResetAPIKey: r.createTypedAction(),
            confirmOverwrite: r.createTypedAction(),
            confirmSetAsPrimaryEmail: r.createTypedAction()
        },
        Preferences: {
            updateUserProfile: r.createTypedAction(),
            dismissContent: r.createTypedAction(),
            setPreference: r.createTypedAction(),
            setUnsafeGraphPreference: r.createTypedAction(),
            setUnsafeBrandPreference: r.createTypedAction(),
            setDomainPreference: r.createTypedAction(),
            resetPassword: r.createTypedAction(),
            clearUserErrors: r.createTypedAction(),
            addPasswordMismatchError: r.createTypedAction()
        },
        EasterEgg: {startEasterEgg: r.createTypedAction(), removeEasterEgg: r.createTypedAction()},
        Chrome: {
            start: r.createTypedAction(),
            getSettings: r.createTypedAction(),
            updateSettings: r.createTypedAction(),
            signout: r.createTypedAction()
        },
        Campaigns: {
            editCampaign: r.createTypedAction(),
            setActiveCampaign: r.createTypedAction(),
            setActiveChannel: r.createTypedAction(),
            loadCampaigns: r.createTypedAction(),
            getCampaignsNotInCache: r.createTypedAction(),
            setSection: r.createTypedAction(),
            createCampaign: r.createTypedAction(),
            createCampaignForBitlink: r.createTypedAction(),
            getChannels: r.createTypedAction(),
            filterChannels: r.createTypedAction(),
            toggleChannels: r.createTypedAction(),
            addChannel: r.createTypedAction(),
            removeChannel: r.createTypedAction(),
            removeChannelFromCampaign: r.createTypedAction(),
            editChannel: r.createTypedAction(),
            bulkUploadBitlinks: r.createTypedAction(),
            removeBitlink: r.createTypedAction(),
            removeCampaignBitlink: r.createTypedAction(),
            loadCampaignsNextPage: r.createTypedAction(),
            search: r.createTypedAction(),
            addUrlToChannels: r.createTypedAction(),
            addBitlinkToCampaign: r.createTypedAction()
        },
        Dashboard: {
            loadDashboard: r.createTypedAction(),
            setDateFilter: r.createTypedAction(),
            resetDateFilter: r.createTypedAction()
        },
        Organizations: {
            editOrgName: r.createTypedAction(),
            addOrgUserRole: r.createTypedAction(),
            editOrgUserRole: r.createTypedAction(),
            removeActiveUserForEdit: r.createTypedAction(),
            addOrgBSD: r.createTypedAction(),
            removeOrgBSD: r.createTypedAction(),
            revalidateOrgBSD: r.createTypedAction(),
            addBrandBSD: r.createTypedAction(),
            removeBrandBSD: r.createTypedAction(),
            updateBrandBSDs: r.createTypedAction(),
            setBsdForAddOrEdit: r.createTypedAction(),
            updateOrgBSD: r.createTypedAction(),
            confirmRemoveActiveUserFromActiveOrg: r.createTypedAction(),
            removeActiveUserFromActiveOrg: r.createTypedAction(),
            createBrandAndMakeActiveBrand: r.createTypedAction(),
            createBrandAndInviteUser: r.createTypedAction(),
            editBrand: r.createTypedAction(),
            removeBrand: r.createTypedAction(),
            openBrandUserRoleForUser: r.createTypedAction(),
            openBrandUserRoleForUserAndBrand: r.createTypedAction(),
            openCreateBrand: r.createTypedAction(),
            openEditBrand: r.createTypedAction(),
            openOrgUserRoleForUser: r.createTypedAction(),
            openNewOrgUserRole: r.createTypedAction(),
            openNewBsdSheet: r.createTypedAction()
        },
        Deeplinks: {
            createDeeplinkApp: r.createTypedAction(),
            editDeeplinkApp: r.createTypedAction(),
            editDeeplinkRule: r.createTypedAction(),
            createDeeplinkRule: r.createTypedAction(),
            deactivateDeeplinkRule: r.createTypedAction(),
            deactivateDeeplinkApp: r.createTypedAction(),
            thirdPartyAppLookup: r.createTypedAction(),
            openDeeplinksAppEdit: r.createTypedAction(),
            getDeeplinkRules: r.createTypedAction(),
            updateAppAssociations: r.createTypedAction(),
            getDeeplinkMetrics: r.createTypedAction(),
            updateDeeplinkFlag: r.createTypedAction()
        },
        Users: {
            getFullUser: r.createTypedAction(),
            setEmailForEdit: r.createTypedAction(),
            addUserBrandRoles: r.createTypedAction()
        },
        Brands: {
            addUserWithRoleToBrand: r.createTypedAction(),
            removeUserWithRoleFromBrand: r.createTypedAction(),
            editUserRoleInBrand: r.createTypedAction()
        },
        DataExport: {exportBitlinkData: r.createTypedAction(), exportPerformanceData: r.createTypedAction()}
    };
    t.default = i
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    var r = n(0), i = n(1), a = {
        handleClick: function (e) {
            e.preventDefault(), this.props.iconAction(this.props.filterName)
        }
    }, o = i("Icons", a, function (e) {
        var t = e.iconName, n = e.iconAction, i = e.iconLink;
        return n ? r.createElement("a", {
            href: "#",
            className: t,
            alt: t,
            onClick: this.handleClick
        }) : i ? r.createElement("a", {href: i, className: t, alt: t}) : r.createElement("span", {className: t, alt: t})
    });
    t.default = o
}, , , function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    var r = n(19), i = n(2), a = n(10), o = n(9), s = n(5), l = n(3), c = n(34), u = n(22), d = n(20), p = n(15), f = function (e, t, n) {
        if ((!e.state || (n ? e.state.active : !e.state.active)) && e.refs.applyButton) {
            var i = {
                animationName: "show-apply-button-2" !== t ? "show-apply-button" : "show-apply-button-2",
                animationDuration: 700,
                animationFillMode: n ? "backwards" : "forwards"
            };
            a.animate(e.refs.applyButton, i, function () {
                return e.setState({active: !n})
            }), r.findDOMNode(e).classList.add("button-visible")
        }
    }, h = {
        showApplyButton: function (e) {
            f(this, e)
        }, hideApplyButton: function (e) {
            f(this, e, !0)
        }
    };
    t.ActionSheetMixin = h;
    var g = {
        bsdRateLimitCheck: function () {
            return this.props.bsdRateLimit.getIn(["data", "usage"], 0) >= this.props.bsdRateLimit.getIn(["data", "limit"]) && this.props.bsdRateLimit.getIn(["data", "active"])
        }, encodeRateLimitCheck: function () {
            return this.props.bitlinkRateLimit.getIn(["data", "usage"], 0) >= this.props.bitlinkRateLimit.getIn(["data", "limit"])
        }, marketingUsageMonitoringLink: function (e, t) {
            var n = {
                lowUsage: {bsd: "https://bitly.is/BSDInApp50", encode: "https://bitly.is/ETInApp50"},
                mediumUsage: {bsd: "https://bitly.is/BSDInApp90", encode: "https://bitly.is/ETInApp90"},
                highUsage: {bsd: "https://bitly.is/BSDInAppB100", encode: "https://bitly.is/ETInAppB100"},
                defaultUsage: {bsd: "https://bitly.is/BSDInApp100", encode: "https://bitly.is/ETInApp100"}
            };
            return e <= 50 ? n.lowUsage[t] : 50 < e && e <= 90 ? n.mediumUsage[t] : 90 < e && e < 100 ? n.highUsage[t] : n.defaultUsage[t]
        }, marketingUsageMonitoringText: function (e, t) {
            return void 0 === t && (t = "both"), "bsd" == t ? {
                header: "Branded Bitlink limit exceeded.",
                text: "Your Bitlink will use bit.ly",
                link: "Upgrade Now",
                url: this.marketingUsageMonitoringLink(e, t)
            } : "encode" == t ? {
                header: "Monthly Bitlink limit exceeded.",
                text: "You cannot create additional Bitlinks",
                link: "Upgrade Now",
                url: this.marketingUsageMonitoringLink(e, t)
            } : {
                header: "Monthly Bitlink and Branded Bitlink limits exceeded.",
                text: "You cannot create additional Bitlinks",
                link: "Upgrade Now",
                url: this.marketingUsageMonitoringLink(e, "encode")
            }
        }, createUsageMonitoringMarketingModule: function (e, t) {
            if (void 0 === e && (e = !1), void 0 === t && (t = !1), t) {
                var n = o.percentage(this.props.bitlinkRateLimit.getIn(["data", "usage"], 0), this.props.bitlinkRateLimit.getIn(["data", "limit"]));
                return this.marketingUsageMonitoringText(n, e ? "both" : "encode")
            }
            if (e) {
                var r = o.percentage(this.props.bsdRateLimit.getIn(["data", "usage"], 0), this.props.bsdRateLimit.getIn(["data", "limit"]));
                return this.marketingUsageMonitoringText(r, "bsd")
            }
        }, createSheetHelpText: function (e, t, n) {
            return e ? {__html: "Take control of your personal brand with a <a href='https://bitly.is/1XOvJTq'>Branded Domain.</a>"} : t ? {__html: this.props.session.hasIn(["featureFlags", "invalid_bsd_disable"]) ? "Your Domain's DNS settings haven't been updated, so your Bitlinks will be created using bit.ly. Update DNS settings to use your " + n + " Branded Short Domain. <a href='https://bit.ly/product-post-june29-free'>Learn more.</a>" : null} : null
        }
    };
    t.BSDRateLimitMixin = g;
    var m = {
        truncateGraphSeries: function (e, t, n) {
            var r = t.count(), i = t.sort(function (e, t) {
                return t[1] - e[1]
            });
            if (r > e) {
                var a = i.take(e).reduce(function (e, t) {
                    return e + t[1]
                }, 0);
                i = i.take(e).concat([["+" + (r - e) + " more", n - a]])
            }
            return i
        }
    };
    t.TruncateSeriesMixin = m;
    var v = [], k = {
        keyPressCheck: function (e, t, n) {
            void 0 === t && (t = !1), void 0 === n && (n = 0), n || e.keyCode !== c.keys.ESC ? "INPUT" !== e.target.tagName && "TEXTAREA" !== e.target.tagName && (e.keyCode === c.keys.B ? l.default.UI.openOnlySheet("create") : e.keyCode == c.keys.LEFT ? (v.push(c.keys.LEFT), this.checkCode(v)) : e.keyCode == c.keys.RIGHT && (v.push(c.keys.RIGHT), this.checkCode(v)), t && (e.keyCode === c.keys.E ? l.default.UI.openOnlySheet("edit") : e.keyCode === c.keys.S ? l.default.UI.openOnlySheet("share") : e.keyCode === c.keys.T ? l.default.UI.openOnlySheet("tag") : e.keyCode === c.keys.H && l.default.UI.archiveBitlink(null))) : l.default.UI.closeAllSheets()
        }, checkCode: function (e) {
            var t = [c.keys.LEFT, c.keys.LEFT, c.keys.RIGHT, c.keys.RIGHT];
            e.toString() == t.toString() && (v = [], l.default.EasterEgg.startEasterEgg("disco"))
        }
    };
    t.keyEventsHandlerMixin = k;
    var b = {
        addPill: function (e, t, n, r) {
            var i = {label: t, labelAction: this.labelAction, iconAction: null};
            switch (n) {
                case"custom_bitlink":
                case"archived":
                case"query":
                    i.iconAction = function () {
                        return l.default.UI.clearGeneralFilter(n)
                    };
                    break;
                case"domain_deeplinks":
                    i.iconAction = function () {
                        return l.default.UI.clearDeeplinks("domain")
                    };
                    break;
                case"link_deeplinks":
                    i.iconAction = function () {
                        return l.default.UI.clearDeeplinks("link")
                    };
                    break;
                case"tags":
                    i.iconAction = function () {
                        return l.default.UI.clearTagsFilter(r)
                    };
                    break;
                case"dateFilter":
                    i.iconAction = function () {
                        return l.default.UI.clearDateFilter()
                    };
                    break;
                default:
                    i.iconAction = function () {
                        return l.default.UI.clearAllFilters()
                    }
            }
            e.push(i)
        }, getFilterPills: function (e, t, n) {
            var r = this, a = [];
            return "on" === n.get("custom_bitlink") && this.addPill(a, "Customized", "custom_bitlink"), "off" !== n.get("archived") && this.addPill(a, "Hidden", "archived"), "on" === n.getIn(["deeplinks", "domain"]) && this.addPill(a, "Domain Deeplinks", "domain_deeplinks"), "on" === n.getIn(["deeplinks", "link"]) && this.addPill(a, "Link Deeplinks", "link_deeplinks"), this.hasSearchResults(n) && this.addPill(a, n.get("query"), "query"), n.get("tags").size && n.get("tags").forEach(function (e) {
                r.addPill(a, "Tag: " + e, "tags", e)
            }), e && !d.isDesktop() && this.addPill(a, "Date: " + t, "dateFilter"), i.fromJS(a)
        }, hasSearchResults: function (e) {
            return "" !== e.get("query")
        }, labelAction: function () {
            l.default.UI.openSheet("filter")
        }, dateFilterLabel: function (e, t) {
            var n = t ? s.unix(t).utc() : s.utc(), r = s.unix(e).utc();
            return n.diff(r, "day") > 1 ? u.formatDateShort(r) + " - " + u.formatDateShort(n) : u.formatDateShort(n)
        }
    };
    t.FilterPillMixin = b;
    var y = {
        deleteNotification: function () {
            var e = this, t = i.fromJS([{
                text: "Confirm", fill: !0, callback: function () {
                    return l.default.Organizations.removeOrgBSD(e.props.brandedShortDomain.get("branded_short_domain"))
                }
            }, {text: "Cancel", fill: !1, callback: l.default.Notification.closeNotification}]), n = {
                aspect: "ACTION",
                title: "Remove Short Domain",
                text: "Your Bitlinks will use the bit.ly domain",
                buttons: t
            };
            l.default.Notification.openNotification(new p.default(n))
        }, revalidate: function (e) {
            e.preventDefault(), l.default.Organizations.revalidateOrgBSD(this.props.brandedShortDomain.get("branded_short_domain"))
        }
    };
    t.OrgDomainFormMixin = y
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    var r = n(0), i = n(1), a = i("Button", function (e) {
        var t = e.aspect, n = e.label, i = e.type, a = e.copyData, o = e.clickCallback, s = e.disabled, l = void 0 !== s && s;
        return r.createElement("button", {
            className: "button--" + t,
            type: i,
            onClick: o,
            disabled: l,
            "data-clipboard-text": a
        }, n)
    });
    t.default = a
}, function (e, t, n) {
    "use strict";
    function r(e) {
        return null === e || void 0 === e ? "" : e.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    }

    function i(e) {
        return null === e || void 0 === e ? "" : u ? e.toLocaleString(d) : r(e)
    }

    function a(e) {
        return Math.round(100 * e) / 100
    }

    function o(e) {
        return null === e || void 0 === e ? "" : u ? e.toLocaleString(d, {maximumFractionDigits: 2}) : r(a(e))
    }

    function s(e, t) {
        if (t = t < 3 ? 3 : t, "number" == typeof e && isFinite(e)) {
            if (e >= 1e9) {
                var n = (e / 1e9).toPrecision(t);
                return n + "G"
            }
            if (e >= 1e6) {
                var n = (e / 1e6).toPrecision(t);
                return n + "M"
            }
            if (e >= 1e4) {
                var n = (e / 1e3).toPrecision(t);
                return n + "k"
            }
            return e.toString()
        }
        return "" + e
    }

    function l(e, t) {
        return Math.min(100, e / t * 100)
    }

    Object.defineProperty(t, "__esModule", {value: !0});
    var c = {month: 1, week: 6048e5, day: 864e5, hour: 36e5, minute: 6e4};
    t.POINT_INTERVALS = c;
    var u = function () {
        return !("object" != typeof Intl || !Intl || "function" != typeof Intl.NumberFormat)
    }(), d = function () {
        if (u) {
            return (new Intl.Collator).resolvedOptions().locale
        }
        return "en-US"
    }();
    t.commifyNumber = i, t.displayNumber = o, t.abbreviateInteger = s, t.percentage = l
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    var r = n(36), i = n(14), a = n(54), o = n(3), s = {
        animationName: "",
        animationDelay: 0,
        animationDirection: "normal",
        animationDuration: 0,
        animationFillMode: "none",
        animationIterationCount: 1,
        animationPlayState: "running",
        animationTimingFunction: "ease"
    }, l = function (e, t, n) {
        void 0 === t && (t = {});
        var o = r(s);
        i(o, t);
        var l, c = o.animationDelay, u = o.animationDuration, d = o.animationIterationCount;
        return "infinite" !== d ? (l = u * d, o.animationIterationCount = o.animationIterationCount.toString() + "ms") : l = u, o.animationDelay = o.animationDelay.toString() + "ms", o.animationDuration = o.animationDuration.toString() + "ms", o.animationIterationCount = o.animationIterationCount.toString(), new Promise(function (t, r) {
            var i = function () {
                for (var r in o) {
                    var i = a.default(r);
                    e.style[r] = o[r], e.style["webkit" + i] = o[r], e.style["moz" + i] = o[r], e.style["o" + i] = o[r]
                }
                n && setTimeout(n, l + 50), setTimeout(t, l + 50)
            };
            setTimeout(i, c)
        })
    };
    t.animate = l;
    var c = function (e) {
        for (var t in s) {
            var n = t.charAt(0).toUpperCase() + t.slice(1);
            e.style[t] = s[t], e.style["webkit" + n] = s[t], e.style["moz" + n] = s[t], e.style["o" + n] = s[t]
        }
    };
    t.clearAnimation = c;
    var u = {animationName: "close-sheet", animationDuration: 600, animationFillMode: "forwards"};
    t.closeSheetAnimationOptions = u;
    var d = function () {
        var e = Array.prototype.slice.call(document.querySelectorAll(".action-sheet--wrapper-MAIN, .action-sheet--wrapper-LARGE"));
        return Promise.all(e.map(function (t, n) {
            return l(t, u, n == e.length - 1 ? o.default.UI.closeAllSheets : null)
        }))
    };
    t.closeAllSheetsAnimation = d
}, , , function (e, t, n) {
    "use strict";
    var r = this && this.__extends || function () {
            var e = Object.setPrototypeOf || {__proto__: []}instanceof Array && function (e, t) {
                    e.__proto__ = t
                } || function (e, t) {
                    for (var n in t)t.hasOwnProperty(n) && (e[n] = t[n])
                };
            return function (t, n) {
                function r() {
                    this.constructor = t
                }

                e(t, n), t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
            }
        }();
    Object.defineProperty(t, "__esModule", {value: !0});
    var i = n(2), a = function (e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }

        return r(t, e), t.prototype.mapData = function (e) {
            return new t({loading: this.loading, error: this.error, loadedOnce: this.loadedOnce, data: e(this.data)})
        }, t
    }(i.Record({loading: !1, error: null, data: null, loadedOnce: !1}));
    t.Loadable = a;
    var o = function (e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }

        return r(t, e), t.prototype.mapData = function (e) {
            return new t({loading: this.loading, error: this.error, loadedOnce: this.loadedOnce, data: e(this.data)})
        }, t.prototype.reduceData = function (e, t) {
            return new a({
                loading: this.loading,
                error: this.error,
                loadedOnce: this.loadedOnce,
                data: this.data.reduce(e, t)
            })
        }, t
    }(i.Record({loading: !1, error: null, data: i.List(), loadedOnce: !1}));
    t.LoadableList = o;
    var s = function (e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }

        return r(t, e), t.prototype.mapData = function (e) {
            return new t({loading: this.loading, error: this.error, loadedOnce: this.loadedOnce, data: e(this.data)})
        }, t.prototype.reduceData = function (e, t) {
            return new a({
                loading: this.loading,
                error: this.error,
                loadedOnce: this.loadedOnce,
                data: this.data.reduce(e, t)
            })
        }, t
    }(i.Record({loading: !1, error: null, data: i.Map(), loadedOnce: !1}));
    t.LoadableMap = s;
    var l = function (e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }

        return r(t, e), t
    }(i.Record({loading: !1, error: null, data: i.List(), total: null, loadedOnce: !1}));
    t.LoadableListWithTotal = l
}, , function (e, t, n) {
    "use strict";
    var r = this && this.__extends || function () {
            var e = Object.setPrototypeOf || {__proto__: []}instanceof Array && function (e, t) {
                    e.__proto__ = t
                } || function (e, t) {
                    for (var n in t)t.hasOwnProperty(n) && (e[n] = t[n])
                };
            return function (t, n) {
                function r() {
                    this.constructor = t
                }

                e(t, n), t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
            }
        }();
    Object.defineProperty(t, "__esModule", {value: !0});
    var i = n(2), a = function (e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }

        return r(t, e), t
    }(i.Record({aspect: "", title: "", text: "", buttons: null, html: "", downloadable: null}));
    t.default = a
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    var r = n(2), i = n(28), a = new i.DateFilter, o = {
        anonymous: {
            MAX_CLICK_DAYS: 30,
            MAX_CHANNELS: 3,
            MAX_LOCATIONS: 3,
            MAX_POPULAR_LINKS: 0,
            MAX_POPULAR_BITLY_LINKS: 0,
            MAX_DASHBOARD_DAYS: 1,
            PERF_DATE_FILTER: null,
            BITLINK_DATE_FILTER: null,
            DASHBOARD_DATE_FILTER: null,
            INFO_PLUS_DATE_FILTER: new i.DateFilter({units: 30}),
            DEFAULT_SECTION: null,
            VALID_SECTIONS: r.Set()
        },
        free: {
            MAX_CLICK_DAYS: 30,
            MAX_CHANNELS: 3,
            MAX_LOCATIONS: 3,
            MAX_POPULAR_LINKS: 0,
            MAX_POPULAR_BITLY_LINKS: 0,
            MAX_DASHBOARD_DAYS: 1,
            PERF_DATE_FILTER: new i.DateFilter({units: 30, limit: 100}),
            BITLINK_DATE_FILTER: a,
            DASHBOARD_DATE_FILTER: new i.DateFilter({units: 1}),
            INFO_PLUS_DATE_FILTER: a,
            DEFAULT_SECTION: "bitlinks",
            VALID_SECTIONS: r.Set(["bitlinks", "performance"])
        },
        enterprise: {
            MAX_CLICK_DAYS: 90,
            MAX_CHANNELS: 10,
            MAX_LOCATIONS: 10,
            MAX_POPULAR_LINKS: 3,
            MAX_POPULAR_BITLY_LINKS: 3,
            MAX_DASHBOARD_DAYS: 60,
            PERF_DATE_FILTER: new i.DateFilter({units: 90, limit: 100}),
            BITLINK_DATE_FILTER: a,
            DASHBOARD_DATE_FILTER: new i.DateFilter({units: 1}),
            INFO_PLUS_DATE_FILTER: a,
            DEFAULT_SECTION: "dashboard",
            VALID_SECTIONS: r.Set(["performance", "bitlinks", "dashboard", "organization", "campaigns", "customlinks"])
        }
    };
    t.MAX_LONG_URL_LENGTH = 6144, t.VALID_ORG_SUBSECTIONS = r.Set(["users", "brands", "bsds", "social_shares", "mobile"]), t.DEFAULT_ORG_SUBSECTION = "users", t.default = o
}, function (e, t, n) {
    "use strict";
    function r(e) {
        if (null == e)return !1;
        var t = h.parse(e, !1, !0);
        return !!t.hostname && (-1 !== g.indexOf(t.protocol) && (!!b.test(t.hostname) && !!y.test(t.path)))
    }

    function i(e) {
        if (null == e)return e;
        var t = h.parse(e.replace(/:\/+/, "://"), !1, !0);
        return "" === t.href ? "" : t.protocol ? -1 !== g.indexOf(t.protocol) ? t.href : b.test(t.protocol) && t.host.match(/^\d+$/) ? h.parse("http://" + e).href : t.href : t.host && t.slashes ? h.parse("http:" + t.href).href : (t = h.parse("http://" + e), t.host ? t.href : e)
    }

    function a(e) {
        return null == e ? e : d(e) ? h.parse(e).pathname.match(D)[1] : null
    }

    function o(e) {
        return null == e ? e : h.parse(e).host
    }

    function s(e) {
        return "undefined" != typeof location && (e = e || location), null == e ? m : "http:" !== e.protocol && "https:" !== e.protocol ? m : e.hostname ? e.hostname.replace(/^app\./, "") : m
    }

    function l(e) {
        var t = h.parse(e);
        return h.format({protocol: "https", host: s(), pathname: t.pathname, search: t.search})
    }

    function c(e) {
        return e ? h.format({protocol: "http", host: s(), pathname: e}) : null
    }

    function u(e) {
        var t = h.parse(e);
        return h.format({protocol: "https", host: "app." + s(), pathname: t.pathname, search: t.search})
    }

    function d(e) {
        if (null == e)return !1;
        var t = h.parse(e), n = t.hostname, r = t.protocol, i = t.port;
        t.auth;
        return !!k.test(n) && (("http:" === r || "https:" === r) && ((!i || "80" === i || "443" === i) && !!D.test(t.pathname)))
    }

    function p(e, t) {
        if (!d(e))return !1;
        var n = h.parse(e);
        return t.indexOf(n.host) >= 0
    }

    function f(e) {
        return e.replace(/^(\w+:)?\/\//, "")
    }

    Object.defineProperty(t, "__esModule", {value: !0});
    var h = n(71), g = ["http:", "https:", "ftp:", "itms:"], m = "bitly.com", v = "(?:[^\\s\\!'\\#\\$\\%\\&\\(\\)\\*\\+\\,\\.\\/\\:\\;\\<\\=\\>\\?\\@\\\\[\\]\\^\\_`\\{\\|\\}\\~]+\\.)+(?:aero|arpa|asia|biz|cat|com|coop|edu|gov|info|int|jobs|mil|mobi|museum|name|net|org|pro|tel|travel|local|example|invalid|test|مصر|рф|السعودية|امارات|xn--wgbh1c|xn--p1ai|xn--mgberp4a5d4ar|xn--mgbaam7a8h|中国|中國|香港|الاردن|فلسطين|قطر|ලංකා|இலங்கை|台灣|台湾|ไทย|تونس|xn--fiqs8S|xn--fiqz9S|xn--j6w193g|xn--mgbayh7gpa|xn--ygbi2ammx|xn--wgbl6a|xn--fzc2c9e2c|xn--xkc2al3hye2a|xn--kpry57d|xn--kprw13d|xn--o3cw4h|xn--pgbs0dh|إختبار|آزمایشی|测试|測試|испытание|परीक्षा|δοκιμή|테스트|טעסט|テスト|பரிட்சை|xn--kgbechtv|xn--hgbk6aj7f53bba|xn--0zwm56d|xn--g6w251d|xn--80akhbyknj4f|xn--11b5bs3a9aj6g|xn--jxalpdlp|xn--9t4b11yi5a|xn--deba0ad|xn--zckzah|xn--hlcj6aya9esc7a|[a-z]{2})(?::[0-9]+)?", k = new RegExp(v), b = new RegExp("(?:(?:[^\\s\\!'\\#\\$\\%\\&\\(\\)\\*\\+\\,\\.\\/\\:\\;\\<\\=\\>\\?\\@\\\\[\\]\\^\\_`\\{\\|\\}\\~]+\\.)+(?:aero|arpa|asia|biz|cat|com|coop|edu|gov|info|int|jobs|mil|mobi|museum|name|net|org|pro|tel|travel|local|example|invalid|test|مصر|рф|السعودية|امارات|xn--wgbh1c|xn--p1ai|xn--mgberp4a5d4ar|xn--mgbaam7a8h|中国|中國|香港|الاردن|فلسطين|قطر|ලංකා|இலங்கை|台灣|台湾|ไทย|تونس|xn--fiqs8S|xn--fiqz9S|xn--j6w193g|xn--mgbayh7gpa|xn--ygbi2ammx|xn--wgbl6a|xn--fzc2c9e2c|xn--xkc2al3hye2a|xn--kpry57d|xn--kprw13d|xn--o3cw4h|xn--pgbs0dh|إختبار|آزمایشی|测试|測試|испытание|परीक्षा|δοκιμή|테스트|טעסט|テスト|பரிட்சை|xn--kgbechtv|xn--hgbk6aj7f53bba|xn--0zwm56d|xn--g6w251d|xn--80akhbyknj4f|xn--11b5bs3a9aj6g|xn--jxalpdlp|xn--9t4b11yi5a|xn--deba0ad|xn--zckzah|xn--hlcj6aya9esc7a|[a-z]{2})(?::[0-9]+)?|(?:[0-9]{1,3}\\.){3}(?:[0-9]{1,3})|(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]).){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]).){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])))"), y = new RegExp("/?(?:\\S*[^\\s\\.,!\\)\\?])?"), D = /^\/([^\.\/\s!\"#$%&\\\'()*+,:;<=>?@\[\]^`{|}~]+)$/;
    t.isUrl = r, t.protocolizeUrl = i, t.shortUrlToHash = a, t.urlToDomain = o, t.getBitlyRootDomain = s, t.rootDomainUrl = l, t.hashToShortUrl = c, t.appDomainURL = u, t.isShortUrl = d, t.isBitlyLink = p, t.removeProtocol = f
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    var r = n(0), i = n(36), a = n(1), o = n(10), s = {
        componentDidMount: function () {
            var e = {
                animationName: "loading-animation",
                animationDuration: 3e3,
                animationIterationCount: "infinite",
                animationTimingFunction: "ease-in-out",
                animationDirection: "alternate",
                animationFillMode: "both",
                animationDelay: 0
            }, t = i(e);
            t.animationDelay = 200;
            var n = i(e);
            n.animationDelay = 400, o.animate(this.refs.bounce1, e), o.animate(this.refs.bounce2, t), o.animate(this.refs.bounce3, n)
        }
    }, l = a("LoadingState", s, function () {
        return r.createElement("div", {className: "loading-state--MAIN"}, r.createElement("div", {className: "loading-state--animation-wrapper"}, r.createElement("div", {
            className: "loading-state--bounce",
            ref: "bounce1"
        }), r.createElement("div", {
            className: "loading-state--bounce",
            ref: "bounce2"
        }), r.createElement("div", {className: "loading-state--bounce", ref: "bounce3"})))
    });
    t.default = l
}, , function (e, t, n) {
    "use strict";
    function r() {
        return "undefined" == typeof navigator || navigator.userAgent.match(/android|webos|iphone|ipad|ipod|blackberry/i) && !0
    }

    function i() {
        return "undefined" != typeof matchMedia && matchMedia("only screen and (min-width: 601px)").matches
    }

    Object.defineProperty(t, "__esModule", {value: !0}), t.isMobileDevice = r, t.isDesktop = i
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    var r = n(49), i = n(88), a = function (e) {
        return function (t) {
            return t.length ? (r.logger.info("Starting transaction"), e.cursor().withMutations(function (e) {
                return t.reduce(function (e, t) {
                    return e.merge(t(e))
                }, e)
            }), r.logger.info("Transaction complete", e.cursor().toJS()), {success: !0}) : {success: !0}
        }
    }, o = function (e) {
        return function (t) {
            return Promise.all(t).then(a(e)).catch(function (e) {
                return r.logger.info("Transaction error!", e), e instanceof Error ? Promise.reject({
                    success: !1,
                    err: e
                }) : e.json().then(function (t) {
                    return e.status ? Promise.reject({
                        success: !1,
                        err: new i.APIError(t.status_text || "no status text available", e.status, {
                            response: e,
                            json: t
                        })
                    }) : Promise.reject({
                        success: !1,
                        err: new i.NetworkError("Failed to Fetch API Resource", {response: e, json: t})
                    })
                })
            })
        }
    };
    t.default = o
}, function (e, t, n) {
    "use strict";
    function r(e, t) {
        if ("string" != typeof t)throw new TypeError("Missing unit: " + t);
        var n = u.normalizeUnits(t), r = u(e);
        switch (n) {
            case"millisecond":
            case"second":
            case"minute":
                return +r.utc().startOf(n);
            case"hour":
                var i = -r.utcOffset();
                return +r.subtract(i, "minute").utc().startOf("hour").add(i, "minute");
            default:
                return +r.startOf(n)
        }
    }

    function i(e, t) {
        if ("string" != typeof t)throw new TypeError("Missing unit: " + t);
        return +u(r(e, t)).add(1, t)
    }

    function a(e, t) {
        if ("string" != typeof t)throw new TypeError("Missing unit: " + t);
        return +e === r(i(e, t) - 1, t)
    }

    function o(e) {
        var t = e % 12 || 12;
        return e < 12 ? t + "AM" : t + "PM"
    }

    function s(e) {
        var t = u(e).utc();
        return u().year() !== t.year() ? t.format("MMM D, YYYY") : t.format("MMM D")
    }

    function l(e) {
        var t = u(e).utc();
        return u().year() !== t.year() ? t.format("MMM D, YYYY, h:mm a") : t.format("MMM D, h:mm a")
    }

    function c() {
        var e = u().endOf("month"), t = u().startOf("day");
        return e.diff(t, "days")
    }

    Object.defineProperty(t, "__esModule", {value: !0});
    var u = n(5);
    t.startOfThis = r, t.startOfNext = i, t.isStartOf = a, t.translate24HourTo12Hour = o, t.formatDateShort = s, t.formatDateLong = l, t.daysUntilEndOfMonth = c;
    var d = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
    t.daysOfWeek = d;
    var p = ["JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE", "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"];
    t.monthsOfYear = p
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    var r = n(0), i = n(44), a = {
        title: "unauthenticated",
        html: r.createElement("p", {className: "notification--text"}, r.createElement("span", {
            className: "notification--link",
            onClick: function (e) {
                e.preventDefault(), window.location.reload(!1)
            }
        }, "Reload"), " to refresh your session. It looks like you may be logged out.")
    }, o = {
        FORBIDDEN: a,
        NOT_AUTHORIZED: a,
        UNAUTHENTICATED: a,
        UNKNOWN: {text: "Oops, something went wrong. Please try again"},
        UNKNOWN_ERROR: {text: "Oops, something went wrong. Please try again"},
        DEFAULT: {title: "error", text: "Oops, there's been an error"},
        INVALID_ARG_LIMIT: {title: "error", text: "Invalid limit."},
        INVALID_ARG_OFFSET: {title: "error", text: "Invalid offset."},
        INVALID_ARG_JSON_BODY: {title: "error", text: "Invalid object."},
        MAX_ORGANIZATION_USER_SEATS: {
            title: "No user seats available for this organization",
            text: "Please contact your Customer Success Manager at customersuccess@bitly.com."
        },
        TEMPORARILY_UNAVAILABLE: {text: "This functionality is temporarily unavailable. Please try again later."}
    };
    t.genericErrors = o;
    var s = {
        SHORTENING_NONEXISTENT_SHORT_URL: {
            title: "Uh Oh, there was an error",
            text: "That link cannot be made into a Bitlink."
        },
        MONTHLY_RATE_LIMIT_EXCEEDED: {
            title: "",
            html: r.createElement("p", {className: "notification--text"}, "You've hit your monthly link limit! Need more links? ", r.createElement("a", {href: "https://bitly.is/ETInAppShortenError"}, "Contact us"), ".")
        },
        DNS_CONFIGURATION_ERROR: {
            title: "Uh Oh, there was an error",
            text: "Your domain is unavailable until you update your DNS settings."
        },
        INVALID_URI: {title: "Uh Oh, there was an error", text: "Not a valid URL"}
    };
    t.bitlinkShortenErrors = s;
    var l = {INVALID_ARG_TITLE: {text: "Title too long. The max length of a title is 2048 characters."}};
    t.bitlinkTitleErrors = l;
    var c = {
        DNS_CONFIGURATION_ERROR: {
            title: "Uh Oh, there was an error",
            text: "Your domain is unavailable until you update your DNS settings."
        },
        KEYWORD_UNAVAILABLE: {
            html: r.createElement("div", null, r.createElement("div", {className: "input-field-customization--error-text"}, "This Custom Bitlink is taken. "), r.createElement(i.default, {
                aspect: "MAIN",
                content: {
                    text: "To use this customization, ",
                    url: "https://bitly.is/CustomBitlinkLP",
                    link: "upgrade to Bitly Enterprise."
                }
            }))
        },
        WOULD_OVERWRITE: {html: r.createElement("div", {className: "input-field-customization--error-text"}, "This Custom Bitlink is taken. ")},
        INVALID_KEYWORD: {text: 'Invalid Custom Bitlink: Custom Bitlinks can only contain the characters "-,_,a-z,A-Z,0-9"'}
    };
    t.bitlinkCustomizeErrors = c;
    var u = {
        QUERY_TOO_LONG: "The max character length is 50.",
        INVALID_QUERY: "Only a-Z, 0-9, - and _ allowed for tags"
    };
    t.bitlinkTagErrors = u;
    var d = {
        VERIFIED_USER_REQUIRED: "You must verify your email address before sharing.",
        ACCESS_TOKEN_INVALID: "Your access token is invalid. Please visit your settings to ensure your account is connected properly.",
        MISSING_ARG_SHARE_LINK: "The link you want to share is missing",
        MISSING_ARG_EMAIL: "Email address is required field",
        SHARE_TEXT_TOO_LONG: "Message is too long"
    };
    t.bitlinkShareErrors = d;
    var p = {
        INVALID_ARG_LINK: {text: "Oops, something went wrong. Please try again."},
        MISSING_ARG_ADD_TAG_OR_REMOVE_TAG: {text: "Oops, please add or remove a tag to continue."},
        INVALID_ARG_TOO_MANY_TAGS_PER_USER: {text: "You can only create 1,000 unique tags per user."},
        INVALID_ARG_TOO_MANY_TAGS_PER_LINK: {text: "You can only add 100 tags to this Bitlink."}
    };
    t.tagsCreateEditErrors = p;
    var f = {
        INVALID_ARG_EMAIL_ADDRESS: {text: "The email address you have entered is not a valid email address."},
        EMAIL_ADDRESS_IN_USE: {text: "The email address you have entered is already being used."},
        INVALID_NEW_PASSWORD_BLANK: {text: "You cannot have a blank password."},
        INVALID_NEW_PASSWORD_LENGTH: {text: "All passwords must be at least 6 characters long."},
        INVALID_NEW_PASSWORD_TOO_LONG: {text: "All passwords must be 256 characters or shorter."},
        INVALID_NEW_PASSWORD_MATCHES_USERNAME: {text: "Your password cannot be the same as your username."},
        INVALID_NEW_PASSWORD_STRENGTH: {text: "Password is not strong enough. Try including uppercase letters, numbers, special characters or using a longer password."},
        PASSWORD_MISMATCH: {text: "The passwords you have entered do not match. Please try again."},
        INVALID_CURRENT_PASSWORD: {text: "The current password you entered is not correct."}
    };
    t.settingsErrors = f;
    var h = {
        INTERNAL_ERROR: {title: "error", text: "Oops, there's been an error"},
        FEATURE_LIMIT_ORGANIZATION_BRAND_LIMIT_REACHED: {
            title: "No brands available for this organization",
            text: "Please contact your Customer Success Manager at customersuccess@bitly.com."
        }
    };
    t.orgErrors = h;
    var g = {
        INVALID_ARG_BRAND_GUID: {title: "error", text: "Invalid Brand ID."},
        INVALID_ARG_CAMPAIGN_GUID: {title: "error", text: "Invalid Campaign ID."},
        INVALID_ARG_CHANNEL_GUID: {title: "error", text: "Invalid Channel ID."},
        INVALID_ARG_JSON_BODY_BRAND_GUID: {title: "error", text: "Invalid object Brand ID."},
        INVALID_ARG_JSON_BODY_GUID: {title: "error", text: "Invalid object ID"},
        INVALID_ARG_JSON_BODY_CREATEDBY: {title: "error", text: "Invalid object creator."},
        INVALID_ARG_JSON_BODY_NAME: {title: "error", text: "Invalid object name."},
        INVALID_ARG_CAMPAIGN_GUID_NOT_FOUND: {title: "error", text: "Campaign does not exist."},
        INVALID_ARG_CAMPAIGN_GUID_NOT_MODIFIED: {title: "error", text: "Campaign could not be modified."},
        INVALID_ARG_BRAND_GUID_MAX_CAMPAIGN_LIMIT_HIT: {
            title: "error",
            text: "You have reached the limit of Campaigns for this brand."
        },
        INVALID_ARG_CAMPAIGN_GUID_MAX_BITLINK_LIMIT_HIT: {
            title: "error",
            text: "You have reached the limit of Bitlinks for this Campaign."
        },
        INVALID_ARG_DESCRIPTION_LIMIT_HIT: {
            title: "error",
            text: "Description too long. The max length of a description is 255 characters."
        },
        INVALID_ARG_CSV_BODY_MISSING_ARG_LONG_URL: {title: "error", text: "Long URL is required field."},
        INVALID_ARG_CSV_BODY_MISSING_ARG_CHANNEL_GUID: {title: "error", text: "Channel is missing."},
        INVALID_ARG_CSV_BODY: {title: "error", text: "Invalid CSV."},
        INVALID_ARG_CHANNEL_GUID_NOT_FOUND: {title: "error", text: "Channel is missing."},
        INVALID_ARG_CHANNEL_GUID_NOT_MODIFIED: {title: "error", text: "Channel could not be modified."},
        INVALID_ARG_BRAND_GUID_MAX_CHANNEL_LIMIT_HIT: {
            title: "error",
            text: "You have reached the limit of Channels for this Brand"
        },
        INVALID_ARG_JSON_BODY_NAME_DUPLICATE_CHANNEL_NAME: {title: "error", text: "The Channel already exists."},
        INVALID_ARG_JSON_BODY_URL: {title: "error", text: "Invalid URL."},
        INVALID_ARG_JSON_BODY_ADD_UTM_PARAMS: {title: "error", text: "Invalid UTM Parameters."},
        INVALID_ARG_JSON_BODY_CHANNEL_GUIDS: {
            title: "error",
            text: "You need to add channels to this campaign before creating a Bitlink."
        },
        INVALID_ARG_CAMPAIGN_GUID_CHANNEL_GUID_NOT_FOUND: {title: "error", text: "The Channel cannot be found."},
        INVALID_ARG_CAMPAIGN_GUID_MAX_CHANNEL_LIMIT_HIT: {
            title: "error",
            text: "You have reached the limit of Channels for this Campaign."
        },
        INVALID_ARG_CHANNEL_GUID_DUPLICATE: {title: "error", text: "The Channel already exists."},
        INVALID_ARG_CHANNEL_GUID_DUPLICATE_BITLINK_ALREADY_IN_CAMPAIGN: {
            title: "error",
            text: "Sorry, a Bitlink can only be attached to one Channel of a Campaign."
        },
        INVALID_ARG_BITLINK_ID_ALREADY_ASSOCIATED_WITH_BRAND_CHANNEL: {
            title: "Bitlink(s) not added",
            text: "The Bitlink is already associated with another channel. To create bitlink, you must add parameters."
        },
        INVALID_ARG_DOMAIN: {
            title: "Uh Oh, there was an error",
            text: "Your domain is unavailable until you update your DNS settings."
        },
        INVALID_ARG_ID: {title: "error", text: "Invalid ID."},
        INVALID_ARG_BITLINKID_NOT_FOUND: {title: "error", text: "The Bitlink cannot be found."},
        INVALID_ARG_CAMPAIGN_GUID_CHANNEL_GUID_DUPLICATE_BITLINK: {
            title: "Duplicate Bitlink Error",
            text: "It is already a Bitlink."
        },
        INVALID_ARG_CHANNEL_GUID_EXISTING_BITLINK_ID: {
            title: "error",
            text: "You have already added this Bitlink to this Channel."
        },
        INVALID_ARG_EXPORT: {title: "error", text: "An error occurred while exporting the data, please try again."},
        INVALID_ARG_EXPORT_ROLLUP: {
            title: "error",
            text: "An error occurred while exporting the data, please try again."
        },
        PARTIAL_SUCCESS_LIMIT_HIT: {title: "error", text: "Campaign Bitlink limit exceeded"},
        COMPLETE_FAILURE: {title: "error", text: "Bitlink(s) not added"},
        INVALID_ARG_CSV_BODY_NOT_ENOUGH_COLUMNS: {
            title: "Bulk Import Error",
            text: "Cannot upload file. Please ensure file is formatted correctly."
        }
    };
    t.campaignErrors = g;
    var m = {
        INVALID_ARG_CSV_BODY_MISSING_ARG_LONGURL: "Long URL is missing. Please add a long URL",
        INVALID_ARG_CSV_BODY_MISSING_ARG_CHANNEL_NAME: "Channel is missing. Please add a channel.",
        INVALID_ARG_CSV_BODY_CHANNEL_NOT_FOUND: "Channel does not exist in this group. Please create the channel before using.",
        INVALID_ARG_LONGURL: "Long URL is invalid.",
        INVALID_ARG_NOTE: "Description too long.",
        INVALID_ARG_BRAND_GUID: "Brand is invalid",
        INVALID_ARG_CAMPAIGN_GUID: "Campaign is invalid",
        INVALID_ARG_CHANNEL_GUID: "Channel is invalid",
        INVALID_ARG_DOMAIN: "Domain is invalid",
        INVALID_ARG_BRAND_GUID_LEGACY_LOGIN_NOT_FOUND: "Login is not found",
        INVALID_ARG_CAMPAIGN_GUID_MAX_BITLINK_LIMIT_HIT: "Campaign Bitlink limit exceeded. Bitlink not added to campaign.",
        NOT_AUTHORIZED: "User is not authorized to create Custom Bitlink.",
        INVALID_KEYWORD: "keyword format is invalid.",
        INVALID_LOGIN: "User is not authorized to create Custom Bitlink.",
        DNS_CONFIGURATION_ERROR: "The Branded Short Domain has an invalid DNS configuration which must be corrected. See account settings for details.",
        WOULD_OVERWRITE: "Setting this keyword would overwrite an existing keyword on this domain",
        INVALID_CNAME: "this Domain doesn’t follow correct domain format OR user doesn’t have cname OR cname isn’t selected as default domain",
        INVALID_URI: "Long URL is invalid.",
        INVALID_LINK_SAVE_RESPONSE_UNABLE_TO_PARSE_URL: "Something went wrong.",
        INVALID_ARG_ID_ALREADY_ASSOCIATED_WITH_CAMPAIGN_CHANNEL: "You have already added this Bitlink to another Channel.",
        INTERNAL_ERROR: "Something went wrong.",
        INVALID_ARG_KEYWORD_LINK: "Branded Short Domain required to create Custom Bitlinks."
    };
    t.campaignImportErrors = m;
    var v = {
        INVALID_ARG_EMAIL_EXISTS: {
            title: "error",
            text: "The email address you have entered is already being used."
        }
    };
    t.userActionsErrors = v;
    var k = {
        INVALID_ARG_ORGANIZATION_GUID: {
            title: "The account ID is not valid",
            text: "Please check that you are in the proper group"
        },
        INVALID_ARG_NAME: {
            title: "The app name is not valid",
            text: "Please check that you've entered a valid app name"
        },
        INVALID_ARG_INSTALL_URL: {
            title: "The install URL is not valid",
            text: "Please check that you've entered a valid install URL"
        },
        INVALID_ARG_THIRD_PARTY_ID: {
            title: "The third party ID is not valid",
            text: "Please check that you've entered a valid third party ID"
        },
        INVALID_ARG_OS: {title: "The OS is not valid", text: "Please check that you've entered a valid OS"},
        INVALID_ARG_APP_SCHEME: {
            title: "The app scheme is not valid",
            text: "Please check that you've entered a valid app scheme"
        },
        INVALID_ARG_BRANDED_SHORT_DOMAIN: {
            title: "The BSD is not valid",
            text: "Please check that you've entered a valid and configured BSD"
        },
        INVALID_ARG_APP_URI_PATH: {
            title: "The app URI is not valid",
            text: "Please check that you've entered a valid app URI"
        },
        MAX_DEEPLINK_APPS: {
            title: "You've reached the limit for configured apps",
            text: "Please remove an app to add a replacement"
        },
        INVALID_ARG_ORGANIZATION_GUID_NOT_FOUND: {
            title: "The account ID is not found",
            text: "Please check that you are in the proper group"
        },
        INVALID_ARG_APP_GUID_NOT_FOUND: {
            title: "The app ID is not found",
            text: "Please check that you've entered a valid app id"
        },
        INVALID_ARG_APP_GUID: {
            title: "The app ID is not valid",
            text: "Please check that you've entered a valid app id"
        },
        INVALID_ARG_ICON_URL: {title: "App icon out of date", text: "Please refresh app icon to continue."}
    };
    t.deeplinkErrors = k
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    var r = n(0), i = n(1), a = n(4), o = i("EmptyState", function (e) {
        var t = e.aspect, n = e.iconName, i = e.colorIcon, o = e.title, s = e.text, l = e.link, c = e.inlineStyle, u = e.clickFunction;
        return r.createElement("div", {
            className: "empty-state--" + t,
            style: c
        }, r.createElement("div", {className: "empty-state--gradient-wrapper"}, i && r.createElement("div", {className: i}), n && r.createElement(a.default, {iconName: n}), o && r.createElement("h4", {className: "empty-state--header"}, o), s && r.createElement("div", {
                className: "empty-state--text",
                dangerouslySetInnerHTML: {__html: s}
            }), l && r.createElement("a", {href: "#", onClick: u, className: "empty-state--link"}, l)))
    });
    t.default = o
}, function (e, t, n) {
    "use strict";
    function r() {
        return void 0 !== s && s.App ? s.App.State.cursor().getIn(["session", "activeBrand"], null) : null
    }

    function i(e, t) {
        if (void 0 === e && (e = o.api), !e)throw new Error("NO API");
        var n = function (n, i) {
            var a = {};
            if (/^\/(?:proxy|data)\//.test(n)) {
                var o = t || r();
                o && "default" !== o && (a["X-Bitly-Brand-Guid"] = o)
            }
            return e(n, i, a)
        };
        return {
            getRateLimitForUser: function (e) {
                return n("/proxy/v3/user/rate_limit", {method: e.method})
            }, disable2fa: function () {
                return e("/proxy/private/two_factor_auth/disable")
            }, getSecurityLogForUser: function () {
                return e("/proxy/private/user/security_log")
            }, get2faStatus: function () {
                return e("/proxy/private/two_factor_auth/status")
            }, get2faPhoneNumber: function () {
                return e("/proxy/private/two_factor_auth/phone_number")
            }, set2faPhoneNumber: function (t) {
                return e("/proxy/private/two_factor_auth/set_phone_number", {
                    country_code: t.country_code,
                    phone_number: t.phone_number
                })
            }, verifyCodeFor2fa: function (t) {
                return e("/proxy/private/two_factor_auth/verify_code", {verification_code: t.verification_code})
            }, getLegacyBrandUserInfo: function () {
                return n("/proxy/v3/user/info").then(function (e) {
                    return {shareAccounts: e.data.share_accounts || []}
                })
            }, getUserApikey: function () {
                return e("/proxy/v3/user/info").then(function (e) {
                    return {
                        apiKey: e.data.apiKey,
                        legacyBrandGUID: e.data.legacy_brand.guid,
                        legacyOrgGUID: e.data.legacy_brand.organization_guid
                    }
                })
            }, removeShareAccount: function (e) {
                return n("/data/remove_share_account", {account_type: e.account_type, account_login: e.account_login})
            }, getAllCountryCallingCodesFor2fa: function () {
                return e("/proxy/private/two_factor_auth/all_country_calling_codes")
            }, validateBrandedShortDomain: function (t) {
                return e("/proxy/v3/branded_short_domain/validate", {branded_short_domain: t.branded_short_domain})
            }, revalidateBrandedShortDomain: function (t) {
                return e("/proxy/v3/branded_short_domain/revalidate", {branded_short_domain: t.branded_short_domain})
            }, getBrandedShortDomainStatus: function () {
                return e("/proxy/v3/branded_short_domain/status")
            }, setHttpsBitlinksForBrandedShortDomain: function (t) {
                return e("/proxy/v3/branded_short_domain/set_https_bitlinks", {https_bitlinks: t.https_bitlinks})
            }, deleteBrandedShortDomain: function () {
                return e("/proxy/v3/branded_short_domain/delete")
            }, getAuthorizationsForOauth: function () {
                return e("/proxy/v3/oauth/authorizations")
            }, revokeAuthorizationForOauth: function (t) {
                return e("/proxy/v3/oauth/revoke_authorization", {authorization_id: t.authorization_id})
            }, resendVerificationForUser: function () {
                return e("/proxy/private/user/resend_verification")
            }, setCnameRootRedirectForBrandedShortDomain: function (t) {
                return e("/proxy/v3/branded_short_domain/set_cname_root_redirect", {cname_root_redirect: t.cname_root_redirect})
            }, getCnameRootRedirectForBrandedShortDomain: function () {
                return e("/proxy/v3/branded_short_domain/cname_root_redirect")
            }, setDisplayNameForUser: function (t) {
                return e("/proxy/private/user/set_display_name", {display_name: t.display_name})
            }, setEmailForUser: function (t) {
                return e("/proxy/private/user/set_email", {email_address: t.email_address})
            }, changePasswordForUser: function (t) {
                return e("/proxy/v3/user/password_change", {
                    original_password: t.original_password,
                    new_password: t.new_password,
                    confirm_new_password: t.new_password
                })
            }, getDomainPreference: function () {
                return n("/proxy/v3/user/preferences")
            }, setDomainPreference: function (e) {
                return n("/proxy/v3/user/set_domain_preference", {domain_preference: e.domain_preference})
            }, setPreferenceForUser: function (t) {
                return e("/proxy/v3/user/preferences", (n = {edit: t.pref[0]}, n[t.pref[0]] = t.pref[1], n));
                var n
            }, deactivateAccountForUser: function (t) {
                return e("/proxy/v3/user/deactivate_account", t)
            }, invalidateOtherSessionsForData: function () {
                return e("/data/invalidate_other_sessions")
            }, getUserTags: function () {
                return n("/proxy/v3/user/tags")
            }, editTagForUser: function (e) {
                return n("/proxy/v3/user/tag_edit", {link: e.link, add_tag: e.add_tag, remove_tag: e.remove_tag})
            }, bulkEditTagsForUser: function (e) {
                return n("/proxy/v3/user/bulk", {
                    link: e.link,
                    add_tag: e.add_tag,
                    remove_tag: e.remove_tag,
                    action: e.action
                })
            }, bulkArchive: function (e) {
                return n("/proxy/v3/user/bulk", {action: "archive", link: e.link, archive: e.archive})
            }, getUserClicks: function (e) {
                return n("/proxy/v3/user/clicks", e)
            }, getTopCountriesForUser: function (e) {
                return n("/proxy/v3/user/top_countries", {
                    units: e.units,
                    unit: e.unit,
                    rollup: e.rollup,
                    timezone: e.timezone
                })
            }, getTopReferringNetworksForUser: function (e) {
                return n("/proxy/v3/user/top_referring_networks", {
                    units: e.units,
                    unit: e.unit,
                    rollup: e.rollup,
                    timezone: e.timezone
                })
            }, getShortenCountsForUser: function (e) {
                return n("/proxy/v3/user/shorten_counts", e)
            }, getChannelsDailyInAudienceSegmentationForOrganization: function () {
                return n("/proxy/v3/organization/audience_segmentation/channels_daily")
            }, getClicksForOrganization: function (e) {
                return n("/proxy/v3/organization/clicks", e)
            }, getShortenCountsForOrganization: function (e) {
                return n("/proxy/v3/organization/shorten_counts", e)
            }, getReferringNetworksForUser: function (e) {
                return n("/proxy/v3/user/referring_networks", e)
            }, getCountriesForUser: function (e) {
                return n("/proxy/v3/user/countries", {
                    rollup: e.rollup,
                    limit: e.limit,
                    units: e.units,
                    unit: e.unit,
                    timezone: e.timezone
                })
            }, resetApiKeyForUser: function () {
                return e("/proxy/v3/user/reset_api_key")
            }, getLinkHistory: function (e) {
                return n("/proxy/v3/user/link_history", e)
            }, getBitlinks: function (e) {
                return n("/proxy/v3/user/link_history", {link: e})
            }, getBitlink: function (e) {
                return n("/proxy/v3/user/link_history", {link: e})
            }, getLinkTitle: function (t) {
                return e("/data/beta/title", {url: t})
            }, getLinkEncodersCount: function (e) {
                return n("/proxy/v3/link/encoders_count", {link: e}).then(function (e) {
                    return e.data
                })
            }, getClicks: function (e) {
                return n("/proxy/v3/clicks", {hash: e}).then(function (e) {
                    return e.data.clicks
                })
            }, getLinkClicks: function (e) {
                return n("/proxy/v3/link/clicks", e).then(function (e) {
                    return e.data
                })
            }, getLinkCountries: function (e) {
                return n("/proxy/v3/link/countries", e).then(function (e) {
                    return e.data
                })
            }, getLinkReferrersByNetwork: function (e) {
                return n("/proxy/v3/link/referrers_by_network", e).then(function (e) {
                    return e.data
                })
            }, setKeyword: function (e) {
                return n("/proxy/private/keyword_api_router", e)
            }, getOrganizationMissedOpportunities: function (e) {
                return n("/proxy/v3/organization/missed_opportunities", e)
            }, getUserPopularLinks: function (e) {
                return n("/proxy/v3/user/popular_links", e)
            }, getInfo: function (e) {
                return n("/proxy/v3/info", e)
            }, getExpand: function (e) {
                return n("/proxy/v3/expand", e)
            }, editLink: function (e) {
                var t = a(e, {edit: e.edit.join(",")});
                return n("/proxy/v3/user/link_edit", t)
            }, saveLink: function (e) {
                return n("/proxy/v3/user/link_save", e)
            }, shareBitlink: function (e, t) {
                return n("/proxy/private/user/share/" + e, t)
            }, getCustomBitlinkHistory: function (e) {
                return n("/data/pro/custom_bitlink_history", {custom_bitlink: e})
            }, getCustomBitlinks: function (e) {
                return n("/data/pro/custom_bitlinks", e)
            }, getKeywordLinkClicks: function (e) {
                return n("/proxy/v3/link/keyword_clicks", e)
            }, getMultipleKeywordClicks: function (e) {
                return n("/proxy/v3/mget_keywords_clicks", {link: e})
            }, getKeywordClicksByDestination: function (e, t) {
                return void 0 === t && (t = 100), n("/proxy/v3/link/keyword_clicks_by_destination", {
                    link: e,
                    timezone: 0,
                    limit: t
                })
            }
        }
    }

    Object.defineProperty(t, "__esModule", {value: !0});
    var a = n(14), o = n(57), s = "undefined" != typeof window ? window : {};
    t.V3TransitionFactory = i;
    var l = i();
    t.V3Transition = l
}, , , function (e, t, n) {
    "use strict";
    var r = this && this.__extends || function () {
            var e = Object.setPrototypeOf || {__proto__: []}instanceof Array && function (e, t) {
                    e.__proto__ = t
                } || function (e, t) {
                    for (var n in t)t.hasOwnProperty(n) && (e[n] = t[n])
                };
            return function (t, n) {
                function r() {
                    this.constructor = t
                }

                e(t, n), t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
            }
        }();
    Object.defineProperty(t, "__esModule", {value: !0});
    var i = n(2), a = n(13), o = function (e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }

        return r(t, e), t
    }(i.Record({
        channels: new a.LoadableMap,
        confidential: !1,
        globalEncoders: new a.LoadableMap,
        tweetCount: null,
        countries: new a.LoadableMap,
        created: null,
        modified: null,
        title: null,
        note: null,
        archived: null,
        shares: [],
        tags: i.List(),
        hasLinkDeeplinks: !1,
        hasDomainDeeplinks: !1,
        longUrl: null,
        longUrlDomain: null,
        userHash: null,
        userLink: null,
        domain: null,
        globalHash: null,
        globalLink: null,
        keyword: null,
        keywordLink: null,
        keywordDomain: null,
        errors: i.Map(),
        campaigns: i.List(),
        rules: i.Map()
    }));
    t.Bitlink = o;
    var s = function (e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }

        return r(t, e), t
    }(i.Record({
        clicks: new a.LoadableMap,
        clickHistory: new a.LoadableMap,
        globalEncoders: new a.LoadableMap,
        created: null,
        title: null,
        tags: i.List(),
        longUrl: null,
        longUrlDomain: null,
        userHash: null,
        userLink: null,
        globalHash: null,
        domain: null,
        errors: i.Map()
    }));
    t.BitlyNetworkLink = s;
    var l = function (e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }

        return r(t, e), t
    }(i.Record({
        archived: "off",
        custom_bitlink: "both",
        deeplinks: i.Map({link: "both", domain: "both"}),
        limit: 30,
        link: i.List(),
        offset: 0,
        query: "",
        tags: i.List(),
        created_after: null,
        created_before: null,
        filterActive: !1
    }));
    t.BitlinkFilter = l;
    var c = function (e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }

        return r(t, e), t
    }(i.Record({timezone: 0, unit: "day", units: -1, unit_reference_ts: null, limit: 100}));
    t.DateFilter = c;
    var u = function (e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }

        return r(t, e), t
    }(i.Record({
        domain: null,
        created: null,
        longUrl: null,
        longUrlDomain: null,
        userHash: null,
        keyword: null,
        keywordDomain: null,
        keywordLink: null,
        tags: i.List(),
        pastUrls: new a.LoadableList,
        totalClicks: new a.Loadable,
        clickHistory: new a.LoadableMap
    }));
    t.CustomBitlink = u;
    var d = function (e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }

        return r(t, e), t
    }(i.Record({
        clicks: null,
        date_created_localized: "",
        date_created_ts: 0,
        date_deactivated_localized: null,
        date_deactivated_ts: null,
        domain: "",
        login: "",
        long_url: "",
        user_hash: ""
    }));
    t.PastUrl = d
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    var r = n(0), i = n(1), a = n(53), o = n(66), s = i("Checklist", function (e) {
        var t = e.searchChangeCallback, n = e.searchPlaceholder, i = e.items, s = e.itemClickCallback, l = e.newKeyword, c = e.error, u = e.radio, d = void 0 !== u && u, p = e.search, f = void 0 !== p && p, h = e.selectAllItem, g = void 0 === h ? null : h, m = d ? "RADIOBUTTON" : "CHECKBOX";
        return r.createElement("div", {className: "checklist--wrapper"}, f && r.createElement(o.default, {
                aspect: "ALTERNATE",
                ref: "search",
                placeholder: n,
                changeCallback: t,
                error: c
            }), g && i.count() ? r.createElement(a.default, {
            item: g,
            aspect: "CHECKBOX",
            clickCallback: s
        }) : null, i.map(function (e) {
            return e.get("hide") ? null : r.createElement(a.default, {
                item: e,
                key: e.get("id") + e.get("label") + e.get("secondLabel", ""),
                clickCallback: e.get("clickCallback") ? e.get("clickCallback") : s,
                newKeyword: l,
                aspect: e.has("enabled") ? m : "CONTENT"
            })
        }))
    });
    t.default = s
}, , , , , function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    var r = {
        ESC: 27,
        A: 65,
        B: 66,
        E: 69,
        F: 70,
        G: 71,
        H: 72,
        S: 83,
        T: 84,
        SLASH: 191,
        UP: 38,
        DOWN: 40,
        LEFT: 37,
        RIGHT: 39,
        SHIFT: 16,
        ENTER: 13
    };
    t.keys = r;
    var i = function (e) {
        return e.shiftKey
    };
    t.isShiftKey = i
}, , , function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    var r = n(0), i = n(1), a = n(90), o = n(2), s = {
        createExtraParams: function (e) {
            return e.map(function (e, t) {
                return e && e.size ? e.map(function (e, n) {
                    return r.createElement("input", {key: e + t, type: "hidden", value: e, name: t})
                }) : r.createElement("input", {key: t, type: "hidden", value: e, name: t})
            }).toSetSeq().flatten()
        }
    }, l = i("Export", [s], function (e) {
        var t = e.action, n = e.link, i = e.aspect, s = void 0 === i ? "MAIN" : i, l = e.buttonAspect, c = void 0 === l ? "MAIN" : l, u = e.extraParams, d = void 0 === u ? o.fromJS({}) : u;
        return r.createElement("form", {
            method: "post",
            action: t,
            className: "export--" + s
        }, r.createElement("input", {
            type: "hidden",
            value: a.getXSRFToken(),
            name: "_xsrf"
        }), r.createElement("input", {
            type: "hidden",
            value: "csv",
            name: "format"
        }), n && r.createElement("input", {
                type: "hidden",
                value: n,
                name: "link"
            }), d.isEmpty() ? null : this.createExtraParams(d), r.createElement("input", {
            type: "submit",
            className: "button--" + c,
            value: "EXPORT"
        }))
    });
    t.default = l
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    var r = n(71);
    t.exportUrl = function (e, t) {
        var n = r.parse(e, !0);
        return t && "default" !== t && (delete n.search, n.query.brand_guid = t), r.format(n)
    }
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    var r = n(0), i = n(1), a = i("Coachmark", function (e) {
        var t = e.text, n = e.button;
        return r.createElement("div", {className: "coachmark--MAIN"}, r.createElement("p", {className: "coachmark--text"}, t), r.createElement("a", {
            className: "button--" + n.aspect,
            onClick: n.callback
        }, n.label))
    });
    t.default = a
}, , , , , function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    var r = n(0), i = n(1), a = n(4), o = n(3), s = i("MarketingModule", function (e) {
        var t = e.content, n = e.aspect, i = void 0 === n ? "MAIN" : n;
        return r.createElement("div", {className: "marketing-module--" + i}, t.header ? r.createElement("p", {className: "marketing-module--header"}, t.header) : null, r.createElement("p", {className: "marketing-module--text"}, t.text, t.url ? r.createElement("a", {
            href: t.url,
            target: "_blank"
        }, t.link, r.createElement(a.default, {iconName: "arrow-icon"})) : null, t.action ? r.createElement("a", {onClick: o.default.UI.openSheet.bind(this, t.action)}, t.link, r.createElement(a.default, {iconName: "arrow-icon"})) : null))
    });
    t.default = s
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    var r = n(0), i = n(1), a = i("Tooltip", function (e) {
        var t = e.text, n = e.content, i = void 0 === n ? null : n;
        return i = i ? r.createElement("div", {className: "tooltip--content"}, i) : this.props.children, r.createElement("div", {className: "tooltip--MAIN"}, t, i)
    });
    t.default = a
}, , , function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    var r = n(163), i = n(242), a = n(49), o = {
        prefix_separator: ".",
        timeout: 1e4,
        disable_sending: !0
    }, s = o.disable_sending ? function () {
        var e = new i.default(o), t = r(function () {
            return e.flushQueues()
        }, o.timeout, {leading: !1});
        return ["incr", "incrOnce", "pageView", "timing"].reduce(function (n, r) {
            return n[r] = function () {
                for (var n = [], i = 0; i < arguments.length; i++)n[i] = arguments[i];
                return t(), e[r].apply(e, n)
            }, n
        }, {})
    }() : new i.default(o);
    t.statsD = s;
    var l = function () {
        for (var e = [], t = 0; t < arguments.length; t++)e[t] = arguments[t];
        return e.join(o.prefix_separator)
    };
    t.statsDKeyName = l;
    var c = function (e) {
        return a.logger.info("pageview --- " + e), s.pageView()
    };
    t.pageView = c
}, function (e, t, n) {
    "use strict";
    function r(e, t) {
        void 0 === t && (t = p);
        for (var n = 0, r = Object.keys(e); n < r.length; n++) {
            var i = r[n];
            !function (n) {
                for (var r = 0, i = Object.keys(e[n]); r < i.length; r++) {
                    var a = i[r];
                    !function (r) {
                        e[n][r].listen(function () {
                            for (var e = [], i = 0; i < arguments.length; i++)e[i] = arguments[i];
                            t({type: "Action", name: n + "." + r, data: e})
                        })
                    }(a)
                }
            }(i)
        }
    }

    function i(e, t) {
        void 0 === t && (t = p), e.on("swap", function (e, n, r) {
            t({type: "State", name: r.join("."), data: a(r) ? e.toJS() : o(e.toJS(), r)})
        })
    }

    Object.defineProperty(t, "__esModule", {value: !0});
    var a = n(164), o = n(243), s = n(84), l = n(89)("./config." + s.storageEnv), c = {
        info: function () {
        }, debug: function () {
        }, error: function () {
        }
    }, u = "error" === l.logger ? {
        info: function () {
        }, debug: function () {
        }, error: function (e) {
            for (var t = [], n = 1; n < arguments.length; n++)t[n - 1] = arguments[n];
            return console.error.apply(console, [e].concat(t))
        }
    } : {
        info: function (e) {
            for (var t = [], n = 1; n < arguments.length; n++)t[n - 1] = arguments[n];
            return console.info.apply(console, [e].concat(t))
        }, debug: function (e) {
            for (var t = [], n = 1; n < arguments.length; n++)t[n - 1] = arguments[n];
            return console.debug.apply(console, [e].concat(t))
        }, error: function (e) {
            for (var t = [], n = 1; n < arguments.length; n++)t[n - 1] = arguments[n];
            return console.error.apply(console, [e].concat(t))
        }
    }, d = "undefined" == typeof window ? c : u;
    t.logger = d;
    var p = function (e) {
        return d.info(e.type, e.name, e.data)
    };
    t.logActions = r, t.logState = i
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    var r = n(3), i = n(23), a = n(15), o = function (e) {
        "unauthenticated" === e.title ? r.default.Notification.openNotification(new a.default({
            aspect: "ACTION-ERROR",
            title: e.title,
            html: e.html
        })) : r.default.Notification.openDefaultNotification("ERROR", e.title, e.text)
    };
    t.mapErrorMsg = function (e) {
        return function (t) {
            var n = t && t.err && t.err.message ? t.err.message : "DEFAULT";
            return o(e[n] || i.genericErrors[n] || i.genericErrors.DEFAULT), t
        }
    }, t.genericErrorMsg = function (e) {
        var t = e && e.err && e.err.message ? e.err.message : "DEFAULT";
        return o(i.genericErrors[t] || i.genericErrors.DEFAULT), e
    }
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    var r = n(0), i = n(19), a = n(1), o = n(3), s = n(20), l = n(10), c = n(78), u = n(8), d = {
        animationOptions: {
            animationName: "copy-animation",
            animationDuration: 1e3,
            animationIterationCount: 1,
            animationTimingFunction: "ease",
            animationFillMode: "forwards",
            animationDelay: 100
        }, getInitialState: function () {
            return document.queryCommandSupported("copy") ? {
                tooltipOpen: !0,
                isMobile: s.isMobileDevice(),
                copySupported: !0
            } : {tooltipOpen: !1, isMobile: s.isMobileDevice(), copySupported: !1}
        }, closeTooltip: function (e) {
            var t = this, n = "copy" === e.type.toLowerCase();
            setTimeout(function () {
                t.state.copySupported || t.setState({tooltipOpen: !1}), n && (l.clearAnimation(i.findDOMNode(t.refs.animationCopy)), l.animate(i.findDOMNode(t.refs.animationCopy), t.animationOptions))
            }, 50)
        }, componentDidUpdate: function () {
            if (this.state.tooltipOpen && !document.queryCommandSupported("copy")) {
                var e = i.findDOMNode(this.refs.copyinput);
                e.focus(), e.select()
            }
        }, copyClicked: function () {
            if (document.queryCommandSupported("copy")) {
                var e = i.findDOMNode(this.refs.copyinput);
                e.focus(), e.select();
                try {
                    document.execCommand("copy")
                } catch (e) {
                }
            } else this.setState({tooltipOpen: !0})
        }, openEditSheet: function () {
            o.default.UI.closeSheetByName("bitlinkDetail"), o.default.UI.select(this.props.bitlink.get("userHash")), o.default.UI.openSheet("edit")
        }, openShare: function (e) {
            o.default.UI.closeSheetByName("bitlinkDetail"), o.default.UI.select(this.props.bitlink.get("userHash")), o.default.UI.openSheet(e)
        }
    }, p = a("CopyableBitlink", [d], function (e) {
        var t = this, n = e.bitlink, i = e.onLinkClick, a = e.hasEditButton, s = e.shareComponent, l = e.hasRedirect, d = navigator.platform.indexOf("Mac") > -1 ? "⌘" : "Ctrl", p = n.get("keyword") ? n.get("keywordLink") : n.get("userLink"), f = null;
        return (this.state.tooltipOpen && !this.state.isMobile || this.state.copySupported) && (f = r.createElement("div", {
            className: this.state.copySupported ? "bitlink--copy-tooltip" : "manual-tooltip",
            ref: "tooltip",
            onBlur: this.closeTooltip,
            onCopy: this.closeTooltip
        }, r.createElement("input", {
            value: p,
            ref: "copyinput",
            tabIndex: -1,
            readOnly: !0
        }), r.createElement("span", {className: "bitlink--copy-tooltip-text"}, "Press " + d + "-c to copy"))), r.createElement("div", {
            className: "bitlink--copy-wrapper",
            ref: "wrapper"
        }, f, (!this.state.tooltipOpen || this.state.copySupported) && r.createElement("div", {className: "bitlink--copy-interface"}, i ? r.createElement("span", {
                className: "bitlink--copyable-text",
                onBlur: this.closeTooltip,
                onCopy: this.closeTooltip,
                ref: "copylink",
                onClick: function () {
                    return i(n.get("userHash"))
                }
            }, r.createElement(c.default, {bitlink: n}), r.createElement(c.default, {
                bitlink: n,
                ref: "animationCopy"
            })) : r.createElement("a", {
                href: p,
                className: "bitlink--copyable-text",
                onBlur: this.closeTooltip,
                onCopy: this.closeTooltip,
                ref: "copylink",
                target: "_blank"
            }, r.createElement(c.default, {bitlink: n}), r.createElement(c.default, {
                bitlink: n,
                ref: "animationCopy"
            })), r.createElement("div", {className: "item--action-buttons"}, !this.state.isMobile && r.createElement(u.default, {
                    aspect: "ACTION",
                    type: "button",
                    label: "COPY",
                    ref: "copybutton",
                    copyData: p,
                    clickCallback: this.copyClicked
                }), s && r.createElement(u.default, {
                    aspect: "ACTION",
                    type: "button",
                    label: "SHARE",
                    clickCallback: function () {
                        return t.openShare(s)
                    }
                }), a && r.createElement(u.default, {
                    aspect: "ACTION",
                    type: "button",
                    label: "EDIT",
                    clickCallback: this.openEditSheet
                }), l && r.createElement(u.default, {
                    aspect: "ACTION",
                    type: "button",
                    label: "REDIRECT",
                    clickCallback: o.default.UI.openSheet.bind(this, "redirect")
                }))))
    });
    t.default = p
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    var r = n(0), i = n(1), a = n(4), o = {
        clickHandler: function (e) {
            e.preventDefault(), this.props.labelAction()
        }
    }, s = i("FilterPill", [o], function (e) {
        var t = e.filterName, n = e.labelAction, i = e.iconAction, o = e.aspect, s = void 0 === o ? "MAIN" : o, l = e.preIcon;
        return r.createElement("div", {className: "filter-pill--" + s + (l ? " pre-icon" : "") + (i ? "" : " no-icon")}, l ? r.createElement(a.default, {iconName: l + "-icon"}) : null, r.createElement("div", {
            href: "#",
            className: "filter-pill--label",
            onClick: n ? this.clickHandler : null
        }, t), i ? r.createElement(a.default, {iconName: "close-icon", iconAction: i}) : null)
    });
    t.default = s
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    var r = n(0), i = n(1), a = n(3), o = n(64), s = n(136), l = n(4), c = {
        handleClick: function () {
            if ("CHECKBOX" === this.props.aspect) {
                var e = this.state.item.set("enabled", !this.state.item.get("enabled"));
                this.setState({item: e}), this.props.clickCallback && this.props.clickCallback(e)
            } else if ("CONTENT" === this.props.aspect)this.props.item.get("name") && a.default.UI.openSheet(this.props.item.get("name")), this.props.clickCallback && this.props.clickCallback(this.props.item); else {
                var e = this.state.item.set("enabled", !0);
                this.setState({item: e}), this.props.clickCallback && this.props.clickCallback(e)
            }
        }
    }, u = {
        getInitialState: function () {
            return "CHECKBOX" === this.props.aspect || "RADIOBUTTON" === this.props.aspect ? {item: this.props.item} : {}
        }, componentWillReceiveProps: function (e) {
            this.setState({item: e.item})
        }
    }, d = i("ChecklistRow", [c, u], function (e) {
        var t, n = e.item, i = e.aspect, a = e.newKeyword, c = (e.icon, e.blueLink);
        switch (i) {
            case"CHECKBOX":
                t = r.createElement(o.default, {
                    id: n.get("label"),
                    aspect: "LARGE",
                    checked: this.state.item.get("enabled"),
                    disabled: n.get("disabled"),
                    ref: "checkbox"
                });
                break;
            case"RADIOBUTTON":
                t = r.createElement(s.default, {
                    id: n.get("label"),
                    name: n.get("name"),
                    aspect: "LARGE",
                    checked: this.state.item.get("enabled"),
                    ref: "radioButton"
                });
                break;
            default:
                t = c ? null : r.createElement(l.default, {iconName: "selector-icon"})
        }
        return r.createElement("div", {
            className: "checklist-row--" + (n.get("html") ? "ALTERNATE" : "MAIN"),
            key: n.get("label"),
            onClick: n.get("html") ? null : this.handleClick
        }, r.createElement("div", {className: "checklist-row--text" + (c ? " link" : "")}, n.get("html") ? r.createElement("span", {dangerouslySetInnerHTML: {__html: n.get("html")}}) : null, n.get("new") ? "Create new " + a + ": " : "", " ", n.get("labelIcon") ? r.createElement(l.default, {iconName: n.get("labelIcon")}) : null, " ", n.get("label"), n.get("secondLabel") ? r.createElement("span", {className: "checklist-row--secondary-label"}, n.get("secondLabel")) : null, n.get("channels") && n.get("bitlinks") ? r.createElement("div", {className: "checklist-row--total-label"}, n.get("channels"), " Channels | ", n.get("bitlinks"), " Bitlinks") : null), r.createElement("span", {
            className: "checklist-row--icon",
            onClick: n.get("html") ? this.handleClick : null
        }, t), r.createElement("span", {className: "checklist-row--count"}, n.get("count") ? n.get("count") : ""))
    });
    t.default = d
}, function (e, t, n) {
    "use strict";
    function r(e) {
        return e.charAt(0).toUpperCase() + e.slice(1)
    }

    Object.defineProperty(t, "__esModule", {value: !0}), t.default = r
}, , , function (e, t, n) {
    "use strict";
    function r(e) {
        if (200 <= e.status && e.status < 400 && /\/proxy\//.test(e.url))try {
            o.default.UI.setSiteWideMessage(e.headers.get("X-Site-Wide-Message"))
        } catch (e) {
        }
        return e
    }

    Object.defineProperty(t, "__esModule", {value: !0}), n(157);
    var i = n(85), a = n(14), o = n(3), s = n(88), l = n(162), c = n(48), u = n(127), d = function (e) {
        if (!(200 <= e.status && e.status < 400))throw new s.NetworkError("v3 fetch failed", {res: e});
        return e
    }, p = function (e) {
        return e.json().then(function (t) {
            if (null == t)throw new s.APIError("Empty JSON", e.status, {res: e, json: t});
            if (200 !== t.status_code)throw new s.APIError(t.status_txt, t.status_code, {res: e, json: t});
            return t
        })
    }, f = function (e, t, n) {
        if (!/^\/(?:proxy|data)\//.test(e)) {
            var o = new TypeError("'url' does not appear to be a valid API endpoint: " + e);
            throw l.trackJSError(o, c.statsD), o
        }
        var s = {"Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"};
        return a(s, n), u.default(e, {
            method: "POST",
            headers: s,
            body: i.stringify(t, {arrayFormat: "repeat", skipNulls: !0})
        }).then(d).then(r).then(p).catch(function (e) {
            return l.trackJSError(e, c.statsD), Promise.reject(e)
        })
    };
    t.api = f
}, , function (e, t, n) {
    "use strict";
    var r = {
        bitly_domains: ["bit.ly", "j.mp", "bitly.com"],
        shorten_domains: ["bit.ly"],
        mock: !1,
        AudienceMinDate: "2014-05-01",
        logger: "error",
        trackPageviews: !0,
        trackPerformance: !0,
        trackBlocking: !0,
        trackError: !0,
        debugActions: !1,
        debugState: !1
    };
    e.exports = r
}, function (e, t, n) {
    "use strict";
    function r(e) {
        var t = {
            archived: e.archived,
            created: e.created_ts,
            domain: e.domain,
            globalHash: e.global_hash,
            globalLink: e.global_link,
            longUrl: e.long_url,
            hasLinkDeeplinks: e.has_link_deeplinks,
            hasDomainDeeplinks: e.is_domain_deeplink,
            longUrlDomain: e.long_url_domain,
            modified: e.modified_ts,
            note: e.note,
            title: e.title,
            userHash: e.user_hash,
            userLink: e.user_link
        };
        if (e.tags && d(t, {tags: u.List(e.tags)}), e.shares && d(t, {shares: e.shares}), e.keyword_link) {
            var n = f.shortUrlToHash(e.keyword_link), r = f.urlToDomain(e.keyword_link);
            d(t, {keyword: n, keywordLink: e.keyword_link, keywordDomain: r})
        }
        return new p.Bitlink(t)
    }

    function i(e) {
        var t = f.shortUrlToHash(e.link), n = f.urlToDomain(e.link), r = {
            archived: e.archived,
            created: 1e3 * e.created_at,
            domain: n,
            globalHash: f.shortUrlToHash(e.aggregate_link),
            globalLink: e.aggregate_link,
            hasLinkDeeplinks: e.has_link_deeplinks,
            hasDomainDeeplinks: e.is_domain_deeplink,
            longUrl: e.long_url,
            longUrlDomain: f.urlToDomain(e.long_url),
            modified: 1e3 * e.modified_at,
            note: e.note,
            tags: u.fromJS(e.tags),
            title: e.title,
            userHash: t,
            userLink: e.link
        };
        if (e.shares && d(r, {shares: e.shares}), e.campaign_ids && d(r, {campaigns: u.List(e.campaign_ids)}), e.keyword_link) {
            var i = f.shortUrlToHash(e.keyword_link), a = f.urlToDomain(e.keyword_link);
            d(r, {keyword: i, keywordLink: e.keyword_link, keywordDomain: a})
        }
        return new p.Bitlink(r)
    }

    function a(e, t, n) {
        var r = t.filter(function (t) {
            return t.link === e.short_url
        }).map(function (e) {
            return e.clicks
        }), i = n.filter(function (t) {
            return t.short_url === e.short_url
        }).map(function (e) {
            return e.long_url
        })[0], a = f.shortUrlToHash(e.short_url), o = f.urlToDomain(e.short_url), s = {
            created: 1e3 * e.created_at,
            title: e.title || i || e.short_url,
            tags: u.fromJS([]),
            userHash: a,
            userLink: e.short_url,
            longUrl: i,
            globalHash: e.global_hash,
            domain: o,
            clicks: u.fromJS({data: {ownClicks: r[0]}})
        };
        return new p.BitlyNetworkLink(s)
    }

    function o(e) {
        var t = {
            longUrl: e.long_url,
            longUrlDomain: f.urlToDomain(e.long_url),
            created: 1e3 * e.created_at,
            title: e.title || e.long_url,
            userHash: e.user_hash,
            userLink: e.short_url || f.hashToShortUrl(e.user_hash),
            globalHash: e.global_hash,
            globalLink: f.hashToShortUrl(e.global_hash),
            domain: f.urlToDomain(e.short_url) || f.getBitlyRootDomain(),
            confidential: e.confidential_metrics && !e.confidential_metrics_visible,
            globalEncoders: new h.LoadableMap({loadedOnce: !0, data: u.Map({encoderCounts: e.num_saves})})
        };
        return e.keyword && d(t, {
            keyword: e.keyword,
            keywordDomain: e.keywordDomain,
            keywordLink: "http://" + e.keywordDomain + "/" + e.keyword
        }), new p.Bitlink(t)
    }

    function s(e, t) {
        var n = {
            longUrl: e.long_url,
            longUrlDomain: f.urlToDomain(e.long_url),
            created: t.created_ts,
            title: t.title || e.long_url,
            userHash: e.user_hash,
            userLink: e.short_url || t.user_link,
            globalHash: e.global_hash,
            globalLink: t.global_link,
            domain: f.urlToDomain(e.short_url) || f.getBitlyRootDomain()
        };
        if (t.keyword_link) {
            var r = f.shortUrlToHash(t.keyword_link), i = f.urlToDomain(t.keyword_link);
            d(n, {keyword: r, keywordLink: t.keyword_link, keywordDomain: i})
        }
        return new p.Bitlink(n)
    }

    function l(e) {
        var t = {
            domain: e.domain,
            created: 1e3 * e.first_created_ts || 1e3 * e.date_created_ts,
            longUrl: e.long_url,
            longUrlDomain: f.urlToDomain(e.long_url),
            userHash: e.user_hash,
            keyword: e.keyword,
            keywordDomain: e.domain,
            keywordLink: "http://" + e.domain + "/" + e.keyword
        };
        return new p.CustomBitlink(t)
    }

    function c(e) {
        var t = f.protocolizeUrl(e.bitlink_id), n = {
            created: 1e3 * e.created_ts,
            domain: f.urlToDomain(t),
            userHash: f.shortUrlToHash(t),
            userLink: t,
            keywordLink: e.keyword_link
        };
        return new p.Bitlink(n)
    }

    Object.defineProperty(t, "__esModule", {value: !0});
    var u = n(2), d = n(14), p = n(28), f = n(17), h = n(13);
    t.parseBitlinkShortenChrome = r, t.parseBitlink = i, t.parseBitlyNetworkLink = a, t.parseBitlinkFromInfoPage = o, t.parseExpandAndInfo = s, t.parseCustomBitlink = l, t.parseBitlinkFromCampaign = c
}, function (e, t, n) {
    "use strict";
    function r(e, t) {
        for (var n = 0, r = c; n < r.length; n++) {
            var i = r[n], a = s(t).endOf(i).diff(s(e).startOf(i), i, !0);
            if (a < l[i])return {timeUnit: i, timeUnitQuantity: Math.ceil(a)}
        }
        var o = c[c.length - 1];
        return {timeUnit: o, timeUnitQuantity: l[o]}
    }

    function i(e, t, n, r) {
        void 0 === n && (n = !1), void 0 === r && (r = u);
        var i = a(e, t, r);
        return i.rollup = n, i
    }

    function a(e, t, n) {
        void 0 === n && (n = u);
        var i, a, o = t.get("unit_reference_ts") ? s.unix(t.get("unit_reference_ts")).utc() : s.utc(), l = s.max(n, u);
        if (i = s.utc().isSame(o, t.get("unit")) ? s.utc() : s(o).endOf(t.get("unit")), -1 === t.get("units"))a = l; else {
            var c = s(i).subtract(t.get("units") - 1, t.get("unit")).startOf(t.get("unit"));
            a = s.max(l, c)
        }
        var d = r(a, s.max(a, i)), p = d.timeUnit;
        return {
            link: e,
            timezone: 0,
            unit: p,
            units: d.timeUnitQuantity,
            unit_reference_ts: "minute" === p ? null : s(i).startOf(p).unix()
        }
    }

    function o(e) {
        var t = e.get("unit_reference_ts") || s().unix();
        return {
            startDate: s.unix(t).utc().subtract(e.get("units") - 1, e.get("unit")).startOf("day").unix(),
            endDate: s.unix(t).utc().endOf("day").unix()
        }
    }

    Object.defineProperty(t, "__esModule", {value: !0});
    var s = n(5), l = {
        minute: 60,
        hour: 90,
        day: 90,
        week: 30,
        month: 48
    }, c = ["minute", "hour", "day", "week", "month"], u = s().utc().subtract(2, "year").startOf(c[c.length - 1]);
    t.dateFilterTimeSeriesParams = i, t.dateFilterParams = a, t.getStartAndEndTime = o
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    var r = n(42), i = n(9), a = n(0), o = n(74), s = n(63), l = n(1), c = n(110), u = {
        componentDidUpdate: function () {
            c.updateChart(this.props.chartData, this.chart)
        }, componentDidMount: function () {
            this.renderChart()
        }, componentWillUnmount: function () {
            this.chart.destroy(), this.chart = null
        }, renderChart: function () {
            r.Highcharts.setOptions({colors: ["#11628d", "#1381b7", "#2292c9", "#29a7e0", "#28b5f0", "#61c7f0", "#86d3f3", "#a8dff5", "#cbeffe", "#e6f7fe", "#F3FCFF"]});
            var e = {chart: {renderTo: this.refs.doughnutChart}}, t = this.props.configs.map(function (e) {
                return s.default[e]
            });
            this.chart = new r.Highcharts.Chart(o.apply(void 0, [this.props.chartData.toJSON(), e].concat(t)))
        }
    };
    t.default = l("DoughnutGraph", [u], function (e) {
        var t = e.total, n = e.aspect, r = void 0 === n ? "MAIN" : n, o = e.section, s = ("bitlinks" === o ? "TOTAL " : "") + (1 === t ? "CLICK" : "CLICKS");
        return a.createElement("div", {className: "doughnut-graph--" + r}, a.createElement("div", {className: "doughnut-graph--total"}, i.commifyNumber(t), a.createElement("span", {className: "doughnut-graph--total-label"}, s)), a.createElement("div", {
            className: "doughnut-graph--chart",
            ref: "doughnutChart"
        }))
    })
}, function (e, t, n) {
    "use strict";
    function r() {
        var e = document.getElementsByClassName("doughnut-graph--legend-labels"), t = this, n = function () {
            for (var e = o.Highcharts.charts.filter(function (e) {
                return !!e
            }), n = 0, r = e; n < r.length; n++) {
                var i = r[n];
                if (i.container.id == t.container.id)return i
            }
            return null
        }, r = function (e, t) {
            var r = n(), i = r.series[0].data[Number(e)];
            (i && i.name) == t && r.tooltip.refresh(i)
        }, i = function (e) {
            n().tooltip.hide(), e.currentTarget.classList.remove("select"), e.currentTarget.parentElement.parentElement.parentElement.parentElement.parentElement.classList.remove("hover")
        };
        a(e, function (e) {
            e.addEventListener("mouseover", function (e) {
                var t = e;
                t.currentTarget.classList.add("select"), e.currentTarget.parentElement.parentElement.parentElement.parentElement.parentElement.classList.add("hover");
                var n = t.target.parentElement.getAttribute("data-index");
                r(n, t.target.textContent)
            }, !1), e.addEventListener("mouseout", function (e) {
                i(e)
            }, !1)
        });
        var s = document.getElementsByClassName("doughnut-graph--chart");
        a(s, function (e) {
            var t = e && e.lastChild && e.lastChild.lastChild;
            t && t.classList && t.classList.contains("highcharts-legend") && e.parentElement.appendChild(t)
        })
    }

    Object.defineProperty(t, "__esModule", {value: !0});
    var i = n(5), a = n(174), o = n(42), s = n(9), l = n(54), c = {
        barChartDefault: {
            yAxis: {
                allowDecimals: !1,
                opposite: !0,
                min: 0,
                gridLineWidth: 0,
                tickPixelInterval: 50,
                title: {enabled: !1},
                labels: {
                    align: "right", x: 0, y: 15, style: {color: "#9B9B9B"}, formatter: function () {
                        return this.isFirst ? "" : this.value
                    }
                }
            },
            xAxis: {
                ceiling: i().utc().valueOf(),
                showLastLabel: !1,
                endOnTick: !0,
                tickInterval: null,
                tickLength: 10,
                labels: {step: 3, align: "center", y: 23, style: {textTransform: "uppercase"}},
                minPadding: .4,
                maxPadding: .4,
                gridZIndex: -10
            },
            tooltip: {backgroundColor: "#FFFFFF", borderColor: "#61b3de", shadow: !1, shape: "square", useHTML: !0},
            title: {text: ""},
            credits: {enabled: !1},
            chart: {
                type: "column",
                backgroundColor: "transparent",
                spacingLeft: 0,
                spacingRight: 0,
                spacingTop: 0,
                style: {fontFamily: "Proxima Nova"}
            },
            plotOptions: {
                column: {pointPlacement: "on"},
                series: {
                    animation: {duration: 300},
                    states: {hover: {size: 0}},
                    borderWidth: 0,
                    pointPadding: 0,
                    groupPadding: .1
                },
                line: {
                    marker: {enabled: !1, states: {hover: {enabled: !1, lineWidthPlus: 0}}},
                    states: {hover: {lineWidthPlus: 0}}
                }
            }
        },
        stackedColumnChart: {
            chart: {type: "bar", margin: [0, 0, 0, 0]},
            title: {text: null},
            xAxis: {
                lineWidth: 0,
                minorGridLineWidth: 0,
                lineColor: "transparent",
                minorTickLength: 0,
                tickLength: 0,
                labels: {enabled: !1}
            },
            yAxis: {
                lineWidth: 0,
                minorGridLineWidth: 0,
                lineColor: "transparent",
                minorTickLength: 0,
                tickLength: 0,
                gridLineColor: "transparent",
                labels: {enabled: !1},
                title: {text: null},
                reversed: !0
            },
            tooltip: {
                pointFormat: '<span style="color:{series.color}">{series.name}</span>: <span>{point.y}</span> ({point.percentage:.0f}%)<br/>',
                shared: !1
            },
            legend: {enabled: !1},
            plotOptions: {series: {stacking: "percent", animation: !1}},
            credits: {enabled: !1}
        },
        "90_day": {plotOptions: {series: {pointPadding: .15}}, xAxis: {tickInterval: 864e5, labels: {step: 7}}},
        "30_day": {xAxis: {tickInterval: 864e5, labels: {step: 7}}},
        timeSeries: {
            xAxis: {
                type: "datetime",
                dateTimeLabelFormats: {
                    millisecond: "%l:%M:%S.%L %p",
                    second: "%l:%M:%S %p",
                    minute: "%l:%M %p",
                    hour: "%l:%M %p",
                    day: "%b %e",
                    week: "Week of %b %e",
                    month: "%b '%y",
                    year: "%Y"
                }
            },
            tooltip: {
                dateTimeLabelFormats: {
                    millisecond: "%l:%M:%S.%L %p",
                    second: "%l:%M:%S %p",
                    minute: "%l:%M %p %A",
                    hour: "%l:%M %p, %b %e",
                    day: "%A, %b %e",
                    week: "Week of %b %e",
                    month: "%B %Y",
                    year: "%Y"
                }
            }
        },
        light: {
            xAxis: {
                startOfWeek: 0,
                lineColor: "#DDE0E2",
                tickColor: "#DDE0E2",
                startOnTick: !1,
                labels: {style: {color: "#9B9B9B", fontSize: "1.1rem"}}
            },
            yAxis: {lineColor: "#DDE0E2", labels: {color: "#9B9B9B", fontSize: "1.1rem"}},
            legend: {enabled: !1},
            tooltip: {
                positioner: function (e, t, n) {
                    var r, i = this.chart, a = i.chartHeight - t - 5;
                    return r = n.plotX + e / 2 > i.plotWidth ? i.plotWidth - e - 1 : n.plotX - e / 2 < 0 ? 1 : n.plotX + i.plotLeft - e / 2, {
                        x: r,
                        y: a
                    }
                },
                headerFormat: "<span style='color:#4A4A4A; text-transform: uppercase; font-size:1.1rem; padding-bottom: 0.25rem;'>{point.key}</span></br>",
                pointFormat: "<div style='background-color:#4DCDFC; width: 10px; height: 10px; display: inline-block; margin-right: 5px;'></div>\n        <span style='color:#4A4A4A; font-size:1.1rem; min-width: 7rem; display: inline-block;'>Total Clicks {point.y}</span>"
            },
            chart: {spacingBottom: 35},
            plotOptions: {column: {color: "#4DCDFC", states: {hover: {color: "#94e1fd"}}}}
        },
        custom: {
            xAxis: {
                startOfWeek: 0,
                lineColor: "#DDE0E2",
                tickColor: "#DDE0E2",
                startOnTick: !1,
                labels: {style: {color: "#9B9B9B", fontSize: "1.1rem"}}
            },
            yAxis: {lineColor: "#DDE0E2", labels: {color: "#9B9B9B", fontSize: "1.1rem"}},
            legend: {enabled: !1},
            tooltip: {
                positioner: function (e, t, n) {
                    var r, i = this.chart, a = i.chartHeight - t - 5;
                    return r = n.plotX + e / 2 > i.plotWidth ? i.plotWidth - e - 1 : n.plotX - e / 2 < 0 ? 1 : n.plotX + i.plotLeft - e / 2, {
                        x: r,
                        y: a
                    }
                }
            },
            chart: {spacingBottom: 35}
        },
        dark: {
            xAxis: {
                startOfWeek: 0,
                lineColor: "#35637C",
                tickColor: "#35637C",
                labels: {style: {color: "#9B9B9B", fontSize: "1.1rem"}}
            },
            yAxis: {lineColor: "#35637C", gridLineColor: "#35637C", labels: {enabled: !1}},
            legend: {
                enabled: !0,
                align: "left",
                width: 0,
                verticalAlign: "top",
                layout: "vertical",
                maxHeight: 200,
                x: -200,
                y: 0,
                itemMarginTop: 10,
                itemMarginBottom: 10,
                itemStyle: {color: "white", textTransform: "capitalize", fontSize: "1.3rem"},
                itemHoverStyle: {color: "white", cursor: "default"}
            },
            plotOptions: {
                allowPointSelect: !0,
                series: {states: {select: {color: "#ee6123"}}},
                column: {color: "rgba(77, 205, 252, 0.5)", cursor: "pointer"},
                states: {hover: {color: "rgba(77, 205, 252, 0.75)"}},
                dataLabels: {enabled: !0, crop: !1, overflow: "none"}
            },
            tooltip: {
                shared: !0, backgroundColor: "transparent", borderWidth: 0, formatter: function () {
                    var e = this.points.map(function (e) {
                        var t = l.default(e.series.name);
                        return '<div style="position: relative; display: inline-block; overflow: auto"><div style=\'background-color:' + e.series.color + "; width: 10px; height: 10px; position: absolute; top: 0; left: 0;'></div>\n            <span style='color:#4A4A4A; font-size:1.1rem; min-width: 7rem; margin-left: 15px;'>" + t + ": " + s.commifyNumber(e.y) + "</span></div>"
                    }).join("<br>");
                    return "<div class='custom-tooltip'>" + ("<span style='color:#4A4A4A; text-transform: uppercase; display: inline-block; margin-bottom: 0.6rem; font-size:1.1rem;'>" + o.Highcharts.dateFormat("%A, %b %e", +new Date(this.x)) + "</span><br>").concat(e) + "</div>"
                }, positioner: function (e, t, n) {
                    var r, i = this.chart, a = i.chartHeight + 100;
                    return r = n.plotX + .3 * e > i.plotWidth ? i.plotWidth - (e - .3 * e) : n.plotX - .3 * e < 0 ? 0 : n.plotX + i.plotLeft - .3 * e, {
                        x: r + 220,
                        y: a
                    }
                }
            }
        },
        doughnutChartDefault: {
            credits: {enabled: !1},
            chart: {
                type: "pie",
                backgroundColor: "transparent",
                margin: [0, 0, 0, 0],
                spacingTop: 0,
                spacingBottom: 0,
                spacingLeft: 0,
                spacingRight: 0,
                events: {load: r, redraw: r}
            },
            title: {text: ""},
            yAxis: {title: {text: ""}},
            plotOptions: {
                size: "100%",
                pie: {shadow: !1, borderWidth: 0},
                series: {
                    point: {
                        events: {
                            legendItemClick: function () {
                                return !1
                            }, mouseOver: function (e) {
                                e.target.legendItem.element.childNodes[0].classList.add("select"), e.target.legendItem.element.parentElement.parentElement.parentElement.parentElement.classList.add("hover")
                            }, mouseOut: function (e) {
                                e.target.legendItem.element.childNodes[0].classList.remove("select"), e.target.legendItem.element.parentElement.parentElement.parentElement.parentElement.classList.remove("hover")
                            }
                        }
                    }
                }
            },
            legend: {
                enabled: !0, layout: "vertical", useHTML: !0, labelFormatter: function () {
                    return "<div data-index=" + this.index + " class='doughnut-graph--legend-labels'>\n                  <div class='doughnut-graph--legend-icon' style='background-color: " + this.color + "'></div>\n                  <span class='doughnut-graph--legend-name'>" + this.name + "</span><span class='doughnut-graph--legend-value'>" + s.commifyNumber(this.y) + "</span>\n                  <div class='doughnut-graph--legend-percentage'>" + Math.round(this.y / this.total * 100) + "%</div>\n                  </div>"
                }
            },
            tooltip: {
                backgroundColor: "transparent",
                borderWidth: 0,
                align: "right",
                verticalAlign: "top",
                shadow: !1,
                useHTML: !0,
                padding: 0,
                formatter: function () {
                    return "<span class='doughnut-graph--tooltip'>" + (Math.round(this.point.y / this.point.total * 100) || "< 1") + "%</span>"
                },
                positioner: function () {
                    return {x: this.chart.plotWidth / 2 - 50, y: this.chart.plotHeight / 2}
                }
            },
            series: [{
                size: "100%",
                innerSize: "75%",
                showInLegend: !0,
                dataLabels: {enabled: !1},
                states: {hover: {brightness: 0, halo: {opacity: 1}}}
            }]
        }
    };
    t.default = c
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    var r = n(0), i = n(1), a = {
        getDefaultProps: function () {
            return {aspect: "SMALL", checked: !1}
        }, getInitialState: function () {
            return {checked: this.props.checked}
        }, componentWillReceiveProps: function (e) {
            this.setState({checked: e.checked})
        }, handleClick: function (e) {
            this.setState({checked: !this.state.checked}), this.props.onClick && this.props.onClick(this.props.id, e)
        }, handleChange: function () {
        }
    }, o = i("Checkbox", [a], function (e) {
        var t = e.id, n = e.aspect, i = (e.checked, e.onClick, e.disabled);
        return r.createElement("div", {
            className: "checkbox--" + n,
            onClick: this.handleClick,
            id: t
        }, r.createElement("input", {
            id: t,
            type: "checkbox",
            className: "checkbox--input",
            onChange: this.handleChange,
            checked: this.state.checked,
            ref: "input",
            disabled: i
        }), r.createElement("label", {htmlFor: t, className: "checkmark-icon checkbox-icon"}))
    });
    t.default = o
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    var r = function (e, t) {
        return 1 === t ? e : e + "s"
    };
    t.default = r
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    var r = n(0), i = n(1), a = n(4), o = {
        componentDidMount: function () {
            this.props.autoFocus && this.refs.search.focus()
        }, getInitialState: function () {
            return {inputValue: "", focus: this.props.autoFocus}
        }, componentWillReceiveProps: function (e) {
            e.query !== this.props.query && this.setState({inputValue: e.query.deref()})
        }, updateInputState: function (e) {
            this.setState({inputValue: e.target.value}), this.props.changeCallback && this.props.changeCallback(e.target.value)
        }, changeValue: function (e) {
            this.refs.search.value = e, this.setState({inputValue: e}), this.props.changeCallback && this.props.changeCallback(e)
        }, onFocus: function () {
            this.setState({focus: !0}), this.props.updateFocusCallback && this.props.updateFocusCallback()
        }, onBlur: function () {
            this.setState({focus: !1}), this.props.updateFocusCallback && this.props.updateFocusCallback()
        }, getDefaultProps: function () {
            return {aspect: "MAIN", autoFocus: !0, placeholder: "SEARCH", maxLength: 100}
        }
    }, s = i("SearchField", o, function (e) {
        var t = this, n = e.aspect, i = e.error, o = e.submitAction, s = e.placeholder, l = e.maxLength, c = (e.autoFocus, null);
        return "MAIN" === n && (c = r.createElement(a.default, {
            iconName: "search-icon",
            iconAction: o
        })), r.createElement("div", {
            className: "search--" + n + " " + (this.state.focus ? "active" : "") + " " + (i ? "error" : ""),
            onClick: function () {
                return t.refs.search.focus()
            }
        }, r.createElement("input", {
            onChange: this.updateInputState,
            ref: "search",
            type: "search",
            maxLength: l,
            className: "search--input-field",
            placeholder: s,
            onFocus: this.onFocus,
            onBlur: this.onBlur,
            value: this.state.inputValue
        }), c, i && r.createElement("p", {className: "text-field--error-text"}, i))
    });
    t.default = s
}, , , function (e, t, n) {
    "use strict";
    var r = {
        bitly_domains: ["bitly.org"],
        shorten_domains: ["bitly.org"],
        mock: !0,
        AudienceMinDate: "2013-05-01",
        logger: "debug",
        trackPageviews: !1,
        trackPerformance: !1,
        trackBlocking: !1,
        trackError: !1,
        debugActions: !1,
        debugState: !1
    };
    e.exports = r
}, function (e, t, n) {
    "use strict";
    var r = {
        bitly_domains: ["bit.ly", "j.mp", "bitly.com", "bitly.net"],
        shorten_domains: ["bit.ly", "bitly.net"],
        mock: !1,
        AudienceMinDate: "2014-05-01",
        logger: "debug",
        trackPageviews: !0,
        trackPerformance: !0,
        trackBlocking: !0,
        trackError: !0,
        debugActions: !1,
        debugState: !1
    };
    e.exports = r
}, , function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    var r = n(127), i = n(559), a = function (e, t) {
        return void 0 === e && (e = r.default), void 0 === t && (t = "/proxy/v4_private"), i.BsdsApiFactory(e, t)
    };
    t.BsdApiFactory = a;
    var o = function (e, t) {
        return void 0 === e && (e = r.default), void 0 === t && (t = "/proxy/v4_private"), i.BrandsApiFactory(e, t)
    };
    t.BrandsApiFactory = o;
    var s = function (e, t) {
        return void 0 === e && (e = r.default), void 0 === t && (t = "/proxy/v4_private"), i.OrganizationsApiFactory(e, t)
    };
    t.OrganizationsApiFactory = s;
    var l = function (e, t) {
        return void 0 === e && (e = r.default), void 0 === t && (t = "/proxy/v4_private"), i.CampaignsApiFactory(e, t)
    };
    t.CampaignsApiFactory = l;
    var c = function (e, t) {
        return void 0 === e && (e = r.default), void 0 === t && (t = "/proxy/v4_private"), i.DeeplinksApiFactory(e, t)
    };
    t.DeeplinksApiFactory = c;
    var u = function (e, t) {
        return void 0 === e && (e = r.default), void 0 === t && (t = "/proxy/v4_private"), i.UsersApiFactory(e, t)
    };
    t.UsersApiFactory = u;
    var d = function (e, t) {
        return void 0 === e && (e = r.default), void 0 === t && (t = "/proxy/v4_private"), i.MetricsApiFactory(e, t)
    };
    t.MetricsApiFactory = d;
    var p = function (e, t) {
        return void 0 === e && (e = r.default), void 0 === t && (t = "/proxy/v4_private"), i.ExportApiFactory(e, t)
    };
    t.ExportApiFactory = p
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    var r = n(2);
    t.routeNotFound = function () {
        return function (e) {
            return e.setIn(["section"], "not_found")
        }
    }, t.routeBitlink = function (e) {
        var t = e.brandGUID, n = e.userHash;
        return function (e) {
            return e.setIn(["section"], "bitlinks").setIn(["session", "activeBrand"], t).setIn(["bitlinks", "activeBitlink"], n)
        }
    }, t.routePerformance = function (e) {
        var t = e.brandGUID, n = e.userHash;
        return function (e) {
            return e.setIn(["section"], "performance").setIn(["session", "activeBrand"], t).setIn(["bitlinks", "activeBitlink"], n)
        }
    }, t.routeDashboard = function (e) {
        var t = e.brandGUID;
        return function (e) {
            return e.setIn(["section"], "dashboard").setIn(["session", "activeBrand"], t)
        }
    }, t.routeCustomBitlinks = function (e) {
        var t = e.brandGUID, n = e.keywordLink;
        return function (e) {
            return e.setIn(["section"], "customlinks").setIn(["session", "activeBrand"], t).setIn(["customBitlinks", "activeKeywordLink"], n)
        }
    }, t.routeOrganization = function (e) {
        var t = e.orgGUID, n = e.orgSectionName;
        return function (e) {
            return e.setIn(["section"], "organization").setIn(["session", "activeOrganization"], t).setIn(["session", "orgSectionName"], n)
        }
    }, t.routeCampaigns = function (e) {
        var t = e.brandGUID, n = e.campaignGUID, r = e.channelGUID;
        return function (e) {
            return e.setIn(["section"], "campaigns").setIn(["session", "activeBrand"], t).setIn(["campaigns", "activeCampaign"], n).setIn(["campaigns", "activeChannel"], r)
        }
    }, t.routeActionSheet = function (e) {
        return function (t) {
            return t.setIn(["actionSheets"], r.List(e))
        }
    }, t.routeBitlinkFilter = function (e) {
        return function (t) {
            return t.setIn(["bitlinks", "filter"], e)
        }
    }
}, , function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    var r = n(42), i = n(0), a = n(74), o = n(63), s = n(1), l = n(76), c = n(45), u = {
        componentDidUpdate: function () {
            var e = this, t = this.props.chartData.toJSON().series;
            this.chart.options.plotOptions.column;
            for (t.forEach(function (t, n) {
                e.chart.series[n] ? e.chart.series[n].update(t, !1) : e.chart.addSeries(t, !1)
            }); this.chart.series.length > t.length;)this.chart.series[t.length].remove();
            this.props.customColor && this.renderChart(), this.chart.redraw()
        }, componentDidMount: function () {
            this.renderChart()
        }, componentWillUnmount: function () {
            this.chart.destroy(), this.chart = null
        }, renderChart: function () {
            var e = {
                chart: {renderTo: this.refs.chart, height: this.props.height},
                xAxis: {min: this.props.min, max: this.props.max}
            }, t = this.props.configs.map(function (e) {
                return o.default[e]
            });
            if (this.props.customColor) {
                var n = {
                    plotOptions: {
                        column: {
                            color: this.props.customColor,
                            states: {hover: {color: l.shadeHex(this.props.customColor, 10)}}
                        }
                    },
                    tooltip: {
                        headerFormat: "<span style='color:#4A4A4A; text-transform: uppercase; font-size:1.1rem; padding-bottom: 0.25rem;'>{point.key}</span></br>",
                        pointFormat: "<div style='background-color:" + this.props.customColor + "; width: 10px; height: 10px; display: inline-block; margin-right: 5px;'></div>\n            <span style='color:#4A4A4A; font-size:1.1rem; min-width: 7rem; display: inline-block;'>Total Clicks {point.y}</span>"
                    }
                };
                t.unshift(n)
            }
            var i = a.apply(void 0, [this.props.chartData.toJSON(), e].concat(t));
            this.chart = new r.Highcharts.Chart(i)
        }
    }, d = s("BarGraph", [u], function () {
        var e = "MAIN";
        return this.props.configs.indexOf("dark") >= 0 && (e = "ALTERNATE"), i.createElement("div", null, i.createElement("div", {
            className: "bar-chart--" + e,
            ref: "chart"
        }), "MAIN" == e ? i.createElement(c.default, {
            text: "Data in UTC",
            content: "All click data is reported in UTC to provide consistent data across timezones"
        }) : null)
    });
    t.default = d
}, function (e, t, n) {
    "use strict";
    function r(e, t) {
        var n = parseInt(e.slice(1), 16), r = Math.round(2.55 * t), i = (n >> 16) + r, a = (n >> 8 & 255) + r, o = (255 & n) + r;
        return "#" + (16777216 + 65536 * (i < 255 ? i < 1 ? 0 : i : 255) + 256 * (a < 255 ? a < 1 ? 0 : a : 255) + (o < 255 ? o < 1 ? 0 : o : 255)).toString(16).slice(1)
    }

    function i(e) {
        return e > a.length - 1 && (e = e % a.length - 1), a[e]
    }

    Object.defineProperty(t, "__esModule", {value: !0});
    var a = ["#F7D391", "#91D3F5", "#9BDCCD", "#EE8A89", "#EEA956", "#97BE7B", "#88CDD3", "#9697DD", "#CA78FF", "#F461E3", "#EB6060", "#FF7E31"];
    t.BAR_COLORS = a, t.shadeHex = r, t.getCurrentHex = i
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), t.default = {
        AF: "Afghanistan",
        AX: "Åland Islands",
        AL: "Albania",
        DZ: "Algeria",
        AS: "American Samoa",
        AD: "Andorra",
        AO: "Angola",
        AI: "Anguilla",
        AQ: "Antarctica",
        AG: "Antigua and Barbuda",
        AR: "Argentina",
        AM: "Armenia",
        AW: "Aruba",
        AU: "Australia",
        AT: "Austria",
        AZ: "Azerbaijan",
        BS: "Bahamas",
        BH: "Bahrain",
        BD: "Bangladesh",
        BB: "Barbados",
        BY: "Belarus",
        BE: "Belgium",
        BZ: "Belize",
        BJ: "Benin",
        BM: "Bermuda",
        BT: "Bhutan",
        BO: "Bolivia, Plurinational State of",
        BQ: "Bonaire, Sint Eustatius and Saba",
        BA: "Bosnia and Herzegovina",
        BW: "Botswana",
        BV: "Bouvet Island",
        BR: "Brazil",
        IO: "British Indian Ocean Territory",
        BN: "Brunei Darussalam",
        BG: "Bulgaria",
        BF: "Burkina Faso",
        BI: "Burundi",
        KH: "Cambodia",
        CM: "Cameroon",
        CA: "Canada",
        CV: "Cape Verde",
        KY: "Cayman Islands",
        CF: "Central African Republic",
        TD: "Chad",
        CL: "Chile",
        CN: "China",
        CX: "Christmas Island",
        CC: "Cocos (Keeling) Islands",
        CO: "Colombia",
        KM: "Comoros",
        CG: "Congo",
        CD: "Congo, the Democratic Republic of the",
        CK: "Cook Islands",
        CR: "Costa Rica",
        CI: "Côte d'Ivoire",
        HR: "Croatia",
        CU: "Cuba",
        CW: "Curaçao",
        CY: "Cyprus",
        CZ: "Czech Republic",
        DK: "Denmark",
        DJ: "Djibouti",
        DM: "Dominica",
        DO: "Dominican Republic",
        EC: "Ecuador",
        EG: "Egypt",
        SV: "El Salvador",
        GQ: "Equatorial Guinea",
        ER: "Eritrea",
        EE: "Estonia",
        ET: "Ethiopia",
        FK: "Falkland Islands (Malvinas)",
        FO: "Faroe Islands",
        FJ: "Fiji",
        FI: "Finland",
        FR: "France",
        GF: "French Guiana",
        PF: "French Polynesia",
        TF: "French Southern Territories",
        GA: "Gabon",
        GM: "Gambia",
        GE: "Georgia",
        DE: "Germany",
        GH: "Ghana",
        GI: "Gibraltar",
        GR: "Greece",
        GL: "Greenland",
        GD: "Grenada",
        GP: "Guadeloupe",
        GU: "Guam",
        GT: "Guatemala",
        GG: "Guernsey",
        GN: "Guinea",
        GW: "Guinea-Bissau",
        GY: "Guyana",
        HT: "Haiti",
        HM: "Heard Island and McDonald Islands",
        VA: "Holy See (Vatican City State)",
        HN: "Honduras",
        HK: "Hong Kong",
        HU: "Hungary",
        IS: "Iceland",
        IN: "India",
        ID: "Indonesia",
        IR: "Iran, Islamic Republic of",
        IQ: "Iraq",
        IE: "Ireland",
        IM: "Isle of Man",
        IL: "Israel",
        IT: "Italy",
        JM: "Jamaica",
        JP: "Japan",
        JE: "Jersey",
        JO: "Jordan",
        KZ: "Kazakhstan",
        KE: "Kenya",
        KI: "Kiribati",
        KP: "Korea, Democratic People's Republic of",
        KR: "Korea, Republic of",
        KW: "Kuwait",
        KG: "Kyrgyzstan",
        LA: "Lao People's Democratic Republic",
        LV: "Latvia",
        LB: "Lebanon",
        LS: "Lesotho",
        LR: "Liberia",
        LY: "Libya",
        LI: "Liechtenstein",
        LT: "Lithuania",
        LU: "Luxembourg",
        MO: "Macao",
        MK: "Macedonia, the former Yugoslav Republic of",
        MG: "Madagascar",
        MW: "Malawi",
        MY: "Malaysia",
        MV: "Maldives",
        ML: "Mali",
        MT: "Malta",
        MH: "Marshall Islands",
        MQ: "Martinique",
        MR: "Mauritania",
        MU: "Mauritius",
        YT: "Mayotte",
        MX: "Mexico",
        FM: "Micronesia, Federated States of",
        MD: "Moldova, Republic of",
        MC: "Monaco",
        MN: "Mongolia",
        ME: "Montenegro",
        MS: "Montserrat",
        MA: "Morocco",
        MZ: "Mozambique",
        MM: "Myanmar",
        NA: "Namibia",
        NR: "Nauru",
        NP: "Nepal",
        NL: "Netherlands",
        NC: "New Caledonia",
        NZ: "New Zealand",
        NI: "Nicaragua",
        NE: "Niger",
        NG: "Nigeria",
        NU: "Niue",
        NF: "Norfolk Island",
        MP: "Northern Mariana Islands",
        NO: "Norway",
        OM: "Oman",
        PK: "Pakistan",
        PW: "Palau",
        PS: "Palestine, State of",
        PA: "Panama",
        PG: "Papua New Guinea",
        PY: "Paraguay",
        PE: "Peru",
        PH: "Philippines",
        PN: "Pitcairn",
        PL: "Poland",
        PT: "Portugal",
        PR: "Puerto Rico",
        QA: "Qatar",
        RE: "Réunion",
        RO: "Romania",
        RU: "Russian Federation",
        RW: "Rwanda",
        BL: "Saint Barthélemy",
        SH: "Saint Helena, Ascension and Tristan da Cunha",
        KN: "Saint Kitts and Nevis",
        LC: "Saint Lucia",
        MF: "Saint Martin (French part)",
        PM: "Saint Pierre and Miquelon",
        VC: "Saint Vincent and the Grenadines",
        WS: "Samoa",
        SM: "San Marino",
        ST: "Sao Tome and Principe",
        SA: "Saudi Arabia",
        SN: "Senegal",
        RS: "Serbia",
        SC: "Seychelles",
        SL: "Sierra Leone",
        SG: "Singapore",
        SX: "Sint Maarten (Dutch part)",
        SK: "Slovakia",
        SI: "Slovenia",
        SB: "Solomon Islands",
        SO: "Somalia",
        ZA: "South Africa",
        GS: "South Georgia and the South Sandwich Islands",
        SS: "South Sudan",
        ES: "Spain",
        LK: "Sri Lanka",
        SD: "Sudan",
        SR: "Suriname",
        SJ: "Svalbard and Jan Mayen",
        SZ: "Swaziland",
        SE: "Sweden",
        CH: "Switzerland",
        SY: "Syrian Arab Republic",
        TW: "Taiwan, Province of China",
        TJ: "Tajikistan",
        TZ: "Tanzania, United Republic of",
        TH: "Thailand",
        TL: "Timor-Leste",
        TG: "Togo",
        TK: "Tokelau",
        TO: "Tonga",
        TT: "Trinidad and Tobago",
        TN: "Tunisia",
        TR: "Turkey",
        TM: "Turkmenistan",
        TC: "Turks and Caicos Islands",
        TV: "Tuvalu",
        UG: "Uganda",
        UA: "Ukraine",
        AE: "United Arab Emirates",
        GB: "United Kingdom",
        US: "United States",
        UM: "United States Minor Outlying Islands",
        UY: "Uruguay",
        UZ: "Uzbekistan",
        VU: "Vanuatu",
        VE: "Venezuela, Bolivarian Republic of",
        VN: "Viet Nam",
        VG: "Virgin Islands, British",
        VI: "Virgin Islands, U.S.",
        WF: "Wallis and Futuna",
        EH: "Western Sahara",
        YE: "Yemen",
        ZM: "Zambia",
        ZW: "Zimbabwe",
        A1: "Anonymous Proxy",
        A2: "Satellite Provider",
        EU: "European Union",
        AP: "Asia/Pacific Region"
    }
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    var r = n(0), i = n(1), a = i("BitlinkLink", function (e) {
        var t = e.bitlink, n = (e.onLinkClick, e.aspect), i = void 0 === n ? "MAIN" : n;
        return r.createElement("div", {
            className: "bitlink--" + i,
            tabIndex: -1
        }, t.get("domain"), r.createElement("span", {className: "bitlink--hash"}, "/" + (t.get("keyword") ? t.get("keyword") : t.get("userHash"))))
    });
    t.default = a
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    var r = n(0), i = n(1), a = n(4), o = {
        getInitialState: function () {
            return {value: this.props.value || this.props.defaultValue, focus: !1, complete: !1, error: ""}
        }, componentWillReceiveProps: function (e) {
            this.props.value !== e.value && this.setState({value: e.value})
        }, onChange: function (e) {
            this.setState({value: e.target.value})
        }, onFocus: function () {
            this.setState({focus: !0})
        }, onBlur: function () {
            this.props.required && !this.state.value ? this.setState({error: "This field is required."}) : this.setState({error: ""}), this.setState({focus: !1}), this.props.validate && this.props.validate(), this.props.onBlurFunction && this.props.onBlurFunction(this.state.value)
        }
    }, s = i("InputField", [o], function (e) {
        var t = this, n = e.placeholder, i = e.staticValue, o = e.type, s = e.label, l = e.error, c = e.autofocus, u = e.aspect, d = void 0 === u ? "MAIN" : u, p = e.errorHtml, f = e.disabled, h = void 0 !== f && f, g = (e.validate, e.icon), m = void 0 === g ? null : g, v = e.iconAction, k = void 0 === v ? null : v, b = (e.onBlurFunction, e.value, e.defaultValue), y = e.text, D = void 0 !== y && y, I = e.required, A = void 0 !== I && I, E = "CUSTOM" === d, w = null, C = l || this.state.error;
        return this.state.focus && !h ? w = "active" : h && (w = "disabled"), r.createElement("div", {
            className: "input-field--wrapper",
            onClick: function () {
                return t.refs.input.focus()
            }
        }, r.createElement("div", {className: "input-field--" + d + " " + (w || "") + " " + (!C && !p || this.state.focus ? "" : "error")}, r.createElement("label", {className: "input-field--label" + (D ? " text" : "")}, s, A ? r.createElement("span", {className: "required"}, " (Required)") : ""), E && r.createElement("div", {className: "input-field--static-value"}, i), r.createElement("div", {className: "input-field--input-wrapper"}, r.createElement("input", {
            type: o,
            placeholder: n,
            className: "input-field--input",
            ref: "input",
            value: this.state.value,
            onChange: this.onChange,
            onFocus: this.onFocus,
            onBlur: this.onBlur,
            autoFocus: c,
            autoComplete: "false",
            disabled: h,
            defaultValue: b
        }), m ? r.createElement("span", {onClick: k}, r.createElement(a.default, {iconName: m})) : null)), C && r.createElement("p", {className: "input-field--error-text"}, C), p)
    });
    t.default = s
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    var r = n(0), i = n(1), a = n(64), o = n(4), s = i("SelectItem", function (e) {
        var t = (e.display, e.label), n = e.secondLabel, i = e.thirdLabel, s = e.thirdLabelClassName, l = e.checkbox, c = e.clickHandler, u = e.aspect, d = void 0 === u ? "MAIN" : u, p = e.iconName, f = void 0 === p ? "selector-icon" : p, h = e.pillLabel, g = e.topBorder, m = e.labelIcon, v = e.fourthLabel;
        return r.createElement("div", {
            className: "select-item--" + d + (g ? " top-border" : ""),
            onClick: c
        }, r.createElement("p", {className: "select-item--label"}, m ? r.createElement(o.default, {iconName: m}) : null, t), r.createElement("span", {className: "select-item--secondary-label"}, n), h ? r.createElement("span", {className: "select-item--pill"}, h) : null, r.createElement("span", {className: "select-item--third-label " + (s || "")}, i), r.createElement("span", {className: "select-item--fourth-label"}, v), l ? r.createElement(a.default, {
            aspect: "LARGE",
            id: "some-id"
        }) : r.createElement(o.default, {iconName: f}))
    });
    t.default = s
}, , , , function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), t.environment = "prod", t.storageEnv = "undefined" == typeof localStorage ? t.environment : localStorage.getItem("env") ? localStorage.getItem("env") : t.environment
}, , , , function (e, t, n) {
    "use strict";
    var r = this && this.__extends || function () {
            var e = Object.setPrototypeOf || {__proto__: []}instanceof Array && function (e, t) {
                    e.__proto__ = t
                } || function (e, t) {
                    for (var n in t)t.hasOwnProperty(n) && (e[n] = t[n])
                };
            return function (t, n) {
                function r() {
                    this.constructor = t
                }

                e(t, n), t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
            }
        }();
    Object.defineProperty(t, "__esModule", {value: !0});
    var i = n(14), a = function (e) {
        function t(t, n) {
            var r = this.constructor, a = e.call(this, t) || this;
            return i(a, n), a.message = t, "function" == typeof Error.captureStackTrace ? Error.captureStackTrace(a, a.constructor) : Error.prototype.stack && (a.stack = (new Error).stack), Object.setPrototypeOf(a, r.prototype), a
        }

        return r(t, e), t
    }(Error), o = function (e) {
        function t(t, n, r) {
            var i = this.constructor, a = e.call(this, t, r) || this;
            return a.name = "APIError", a.status = n, Object.setPrototypeOf(a, i.prototype), a
        }

        return r(t, e), t
    }(a);
    t.APIError = o;
    var s = function (e) {
        function t(t, n) {
            var r = this.constructor, i = e.call(this, t, n) || this;
            return i.name = "NetworkError", Object.setPrototypeOf(i, r.prototype), i
        }

        return r(t, e), t
    }(a);
    t.NetworkError = s
}, function (e, t, n) {
    function r(e) {
        return n(i(e))
    }

    function i(e) {
        var t = a[e];
        if (!(t + 1))throw new Error("Cannot find module '" + e + "'.");
        return t
    }

    var a = {
        "./config.dev": 69,
        "./config.dev.ts": 69,
        "./config.prod": 59,
        "./config.prod.ts": 59,
        "./config.staging": 70,
        "./config.staging.ts": 70,
        "./config.ts": 126
    };
    r.keys = function () {
        return Object.keys(a)
    }, r.resolve = i, e.exports = r, r.id = 89
}, function (e, t, n) {
    "use strict";
    function r() {
        var e = i.get("_xsrf");
        if (!e)throw new Error("Invalid XSRF token");
        return e
    }

    Object.defineProperty(t, "__esModule", {value: !0});
    var i = n(128);
    t.getXSRFToken = r
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    var r = n(36), i = n(108), a = n(2), o = n(72), s = n(92), l = n(170), c = n(49);
    t.baseOrgEntities = function () {
        return {orgUserRoles: {}, brandUserRoles: {}, users: {}, organizations: {}, brands: {}}
    }, t.fetchOrganization = function (e, n) {
        return function (e) {
            return o.OrganizationsApiFactory(n).getOrganization({organizationGUID: e}).then(t.reduceOrganization)
        }
    }, t.reduceOrganization = function (e) {
        return function (n) {
            var r = t.baseOrgEntities();
            return r = u(e)(r), r = d(e)(r), r = p(e)(r), n.mergeDeep(r)
        }
    }, t.fetchOrgLimits = function (e, t) {
        return function (e) {
            return o.OrganizationsApiFactory(t).getLimits({organizationGUID: e}).then(function (t) {
                return function (n) {
                    return n.setIn(["organizationLimits", e], a.fromJS(t.reduce(function (e, t) {
                        return e[t.feature_name] = t, e
                    }, {})))
                }
            })
        }
    };
    var u = function (e) {
        return function (t) {
            var n = t.orgUserRoles[e.guid] = t.orgUserRoles[e.guid] || {};
            return e.users.reduce(function (e, t) {
                return n[t.login] = t.role_name, e.users[t.login] = i(t, "role_name"), e
            }, t)
        }
    };
    t.parseOrgUserRole = function (e) {
        return function (t) {
            return function (n) {
                return function (i) {
                    var a = r(i);
                    return a.orgUserRoles[e] = i.orgUserRoles[e] || {}, a.orgUserRoles[e][t] = n, a
                }
            }
        }
    };
    var d = function (e) {
        return function (t) {
            var n = s.parseOrgBrand()(e.guid);
            return e.brands.reduce(n, t)
        }
    }, p = function (e) {
        return function (t) {
            return t.organizations[e.guid] = f(e), t
        }
    }, f = function (e) {
        var t = (e.users, e.brands), n = void 0 === t ? [] : t, r = i(e, "users", "brands");
        return r.brands = n.map(function (e) {
            return e.guid
        }), r
    };
    t.addUserWithRoleToOrganization = function (e) {
        return function (e, n, r) {
            return o.OrganizationsApiFactory().addUserWithRoleToOrganization({
                login: n,
                roleName: r,
                organizationGUID: e.guid
            }).then(function (i) {
                return c.logger.debug("addUser success"), function (a) {
                    var o = t.baseOrgEntities();
                    return o = l.parseUserOrgRole(i)(e)(o), "admin" === r && (o = a.get("brands").filter(function (t) {
                        return t.get("organizationGuid") === e.guid
                    }).reduce(function (e, t) {
                        return s.parseBrandUserRole(t.get("guid"))(n)("org-admin")(e)
                    }, o)), o = l.parseUser(i)(o), a.mergeDeep(o)
                }
            })
        }
    }, t.removeUser = function (e) {
        return function (e, t, n) {
            return o.OrganizationsApiFactory().removeUserWithRoleFromOrganization({
                login: t,
                organizationGUID: e,
                roleName: n
            }).then(function () {
                return function (n) {
                    return n = n.removeIn(["users", t]), n = n.removeIn(["orgUserRoles", e, t]), n = n.getIn(["organizations", e, "brands"]).reduce(function (e, n) {
                        return e = e.removeIn(["brandUserRoles", n, t])
                    }, n)
                }
            })
        }
    }, t.editOrgName = function (e) {
        return function (e, t) {
            return o.OrganizationsApiFactory().editOrganization({
                organizationGUID: e,
                editOrganizationBody: {name: t}
            }).then(function (t) {
                var n = t.name;
                return function (t) {
                    return t.setIn(["organizations", e, "name"], n), t
                }
            })
        }
    }, t.editOrgUserRole = function (e) {
        return function (e, t, n, r) {
            var i = {role_name: r}, a = n;
            return o.OrganizationsApiFactory().editUserRoleInOrganization({
                login: t,
                organizationGUID: e,
                roleName: a,
                editUserRoleBody: i
            }).then(function () {
                return function (i) {
                    return i = i.setIn(["orgUserRoles", e, t], r), "admin" == n && "user" == r ? i = i.get("brands").filter(function (t) {
                        return t.get("organizationGuid") === e
                    }).reduce(function (e, n) {
                        return e.setIn(["brandUserRoles", n.get("guid"), t], "read-write")
                    }, i) : "user" == n && "admin" == r && (i = i.get("brands").filter(function (t) {
                        return t.get("organizationGuid") === e
                    }).reduce(function (e, n) {
                        return e.setIn(["brandUserRoles", n.get("guid"), t], "org-admin")
                    }, i)), i
                }
            })
        }
    }, t.createBrandAndMakeActiveBrand = function (e) {
        return function (e, t, n) {
            var r = {name: n, admin_login: t};
            return o.OrganizationsApiFactory().createBrand({
                organizationGUID: e,
                createBrandBody: r
            }).then(function (t) {
                return function (n) {
                    return n.setIn(["brands", t.guid], a.fromJS(t)).setIn(["brands", t.guid, "tags"], a.List()).setIn(["brands", t.guid, "organizationGuid"], e).updateIn(["organizations", e, "brands"], function (e) {
                        return e.push(t.guid)
                    }).setIn(["brandUserRoles", t.guid], a.Map(t.users.map(function (e) {
                        return [e.login, e.role_name]
                    }))).setIn(["session", "activeBrand"], t.guid).setIn(["formData", "activeBrandForEdit"], a.Map({
                        name: t.name,
                        guid: t.guid,
                        bsds: a.Set(t.bsds)
                    }))
                }
            })
        }
    }, t.editBrandName = function (e) {
        return function (e, t) {
            return o.OrganizationsApiFactory().editBrand({brandGUID: e, editBrandBody: {name: t}}).then(function () {
                return function (n) {
                    return n.setIn(["brands", e, "name"], t), n
                }
            })
        }
    }, t.removeBrand = function (e) {
        return function (e) {
            return o.OrganizationsApiFactory().removeBrand({brandGUID: e}).then(function () {
                return function (t) {
                    return t = t.setIn(["brands", e, "is_active"], !1), t = t.removeIn(["brandUserRoles", e])
                }
            })
        }
    }, t.setActiveUserForEdit = function (e) {
        return function (t) {
            return t.setIn(["formData", "activeUserForEdit"], e)
        }
    }, t.clearActiveUserForEdit = function () {
        return function (e) {
            return e.setIn(["formData", "activeUserForEdit"], null)
        }
    }, t.setActiveBrandForEdit = function (e) {
        return function (t) {
            var n = a.Map({
                guid: e,
                name: t.getIn(["brands", e, "name"], ""),
                bsds: t.getIn(["brands", e, "bsds"], a.List()).toSet()
            });
            return t.setIn(["formData", "activeBrandForEdit"], n)
        }
    }
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    var r = n(36), i = n(108), a = n(72), o = n(91), s = n(170), l = n(91);
    t.fetchBrand = function (e, n) {
        return function (e) {
            return a.BrandsApiFactory(n).getBrand({brandGUID: e}).then(t.reduceOrgBrand)
        }
    }, t.addUserWithRoleToBrand = function (e) {
        return function (e, n, r) {
            return a.BrandsApiFactory().addUserWithRoleToBrand({
                login: e,
                roleName: n,
                brandGUID: r
            }).then(function (i) {
                return function (a) {
                    var c = a.getIn(["brands", r, "organizationGuid"]), u = o.baseOrgEntities();
                    return u = t.parseBrandUserRole(r)(e)(n)(u), u = l.parseOrgUserRole(c)(e)("user")(u), u = s.parseUser(i)(u), a.mergeDeep(u)
                }
            })
        }
    };
    var c = function (e, t) {
        return function (n) {
            return n.get("brandUserRoles").filter(function (r, i) {
                return n.getIn(["organizations", e, "brands"]).includes(i) && r.has(t)
            })
        }
    };
    t.removeUserWithRoleFromBrand = function (e) {
        return function (e, t, n) {
            return a.BrandsApiFactory().removeUserWithRoleFromBrand({
                login: e,
                roleName: t,
                brandGUID: n
            }).then(function () {
                return function (t) {
                    var r = t.getIn(["brands", n, "organizationGuid"]);
                    return 1 === c(r, e)(t).count() && (t = t.deleteIn(["orgUserRoles", r, e])), t.deleteIn(["brandUserRoles", n, e])
                }
            })
        }
    }, t.editUserRoleInBrand = function (e) {
        return function (e, n, r, i) {
            return a.BrandsApiFactory().editUserRoleInBrand({
                login: e,
                brandGUID: r,
                roleName: n,
                editUserRoleBody: {role_name: i}
            }).then(function () {
                return function (n) {
                    var a = o.baseOrgEntities();
                    return a = t.parseBrandUserRole(r)(e)(i)(a), n.mergeDeep(a)
                }
            })
        }
    }, t.parseBrandUserRole = function (e) {
        return function (t) {
            return function (n) {
                return function (i) {
                    var a = r(i);
                    return a.brandUserRoles[e] = i.brandUserRoles[e] || {}, a.brandUserRoles[e][t] = n, a
                }
            }
        }
    }, t.reduceOrgBrand = function (e) {
        return function (n) {
            var r = n.getIn(["session", "activeOrganization"]), i = n.getIn(["session", "login"]), a = o.baseOrgEntities();
            return a = t.parseOrgBrand(i)(r)(a, e), n.mergeDeep(a)
        }
    }, t.parseOrgBrand = function (e) {
        return function (e) {
            return function (t, n) {
                var r = n.users, a = i(n, "users", "role_name");
                return t.brandUserRoles[n.guid] = {}, r && r.forEach(function (e) {
                    t.brandUserRoles[n.guid][e.login] = e.role_name, t.users[e.login] = t.users[e.login] || i(e, "role_name")
                }), a.organizationGuid = e, t.brands[n.guid] = a, t
            }
        }
    }, t.parseUserOrgBrand = function (e) {
        return function (t) {
            return function (n, r) {
                var a = i(r, "users", "role_name");
                if (n.brandUserRoles[r.guid] = {}, a.organizationGuid = t, r.role_name && r.is_active) {
                    var o = r.role_name;
                    n.brandUserRoles[r.guid][e] = o
                }
                return n.brands[r.guid] = a.is_active ? a : n.brands[r.guid] || a, n
            }
        }
    }
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    var r = n(0), i = n(2), a = n(1), o = n(3), s = n(16), l = n(133), c = n(111), u = n(112), d = n(134), p = n(94), f = n(51), h = n(24), g = n(100), m = n(4), v = n(18), k = n(265), b = n(45), y = function (e) {
        return e.get("tags").sort(function (e, t) {
            return e.toLowerCase() > t.toLowerCase()
        }).map(function (t) {
            return i.fromJS({
                label: "Tag: " + t, iconAction: function () {
                    return o.default.API.removeTag(t, e)
                }, labelAction: function () {
                    return o.default.API.fastFilterByTag(t)
                }
            })
        })
    }, D = {
        web_opens: "Mobile Web",
        app_opens: "App Open",
        store_visits: "Store Visits",
        app_installs: "App Installs"
    }, I = {
        generateCampaignItems: function (e, t) {
            return e.get("campaigns").filter(function (e) {
                return t.get("campaignCache").has(e)
            }).map(function (e) {
                return i.fromJS({
                    label: "Campaign: " + t.getIn(["campaignCache", e, "name"]),
                    iconAction: null,
                    labelAction: function () {
                    }
                })
            })
        }, showDeeplinkMetrics: function (e) {
            return e.map(function (e, t) {
                return r.createElement("div", {
                    className: "info-wrapper--metrics-text",
                    key: t
                }, r.createElement("div", {className: "info-wrapper--metrics-total"}, r.createElement("span", null, D[t]), e.get("ios") + e.get("android")), r.createElement("div", {className: "info-wrapper--metrics-name"}, r.createElement("span", null, "iOS"), e.get("ios")), r.createElement("div", {className: "info-wrapper--metrics-name"}, r.createElement("span", null, "Android"), e.get("android")))
            }).toArray()
        }, metricsSection: function (e, t, n, a, o, p) {
            var f = e.get("channels"), h = e.get("countries"), g = e.get("clickHistory"), m = e.getIn(["clicks", "data", "globalClicks"], 0), v = e.getIn(["clicks", "data", "ownClicks"], 0), k = s.default[t.deref()].MAX_CHANNELS, y = s.default[t.deref()].MAX_LOCATIONS, D = ["ios", "android"], I = p ? p.filter(function (e, t) {
                return -1 !== D.indexOf(t)
            }) : i.Map(), A = I.reduce(function (e, t, n) {
                return e = e.mergeDeep(i.fromJS(t.reduce(function (e, t, r) {
                    return e[r] || (e[r] = {}), e[r][n] = t, e
                }, {})))
            }, i.fromJS({})), E = A.filter(function (e, t) {
                return -1 !== ["web_opens", "app_opens", "store_visits"].indexOf(t)
            }), w = A.filter(function (e, t) {
                return "app_installs" === t
            });
            return r.createElement("div", null, r.createElement("div", {className: "info-wrapper--MAIN"}, r.createElement(u.default, {
                bitlink: n,
                userClicks: v,
                globalClicks: m,
                allTime: "bitlinks" === a
            }), v ? r.createElement(c.default, {clickHistory: g}) : null), p && "enterprise" === t.deref() ? r.createElement("div", {className: "info-wrapper--MAIN"}, r.createElement("div", {className: "info-wrapper--deeplink-metrics"}, r.createElement(b.default, {text: "Mobile Destination"}, r.createElement("div", {className: "tooltip--content"}, "The Bitly SDK is required to capture the full set of mobile metrics. ", r.createElement("a", {
                href: "https://bitly.is/MobileDestinationHelpText",
                className: "tootip--link",
                target: "_blank"
            }, "Learn More"))), r.createElement("div", {className: "info-wrapper--metrics-section"}, this.showDeeplinkMetrics(E))), r.createElement("div", {className: "info-wrapper--deeplink-metrics"}, r.createElement(b.default, {text: "Conversions"}, r.createElement("div", {className: "tooltip--content"}, "Conversion metrics based on deterministic and probabilistic counting of app installs ", r.createElement("a", {
                href: "https://bitly.is/ConversionsHelpText",
                className: "tootip--link",
                target: "_blank"
            }, "Learn More"))), r.createElement("div", {className: "info-wrapper--metrics-section"}, this.showDeeplinkMetrics(w)))) : null, f.get("loadedOnce") && !f.get("loading") && f.getIn(["data", "referring_networks"]).size > 0 && r.createElement(l.default, {
                    activeBrand: o,
                    channels: f,
                    limit: k,
                    total: v,
                    exportLink: n.get("userLink"),
                    exportable: "enterprise" === t.deref(),
                    section: a
                }), h.get("loadedOnce") && !h.get("loading") && h.getIn(["data", "countries"]).size > 0 && r.createElement(d.default, {
                    activeBrand: o,
                    locations: h,
                    limit: y,
                    total: v,
                    exportLink: n.get("userLink"),
                    exportable: "enterprise" === t.deref(),
                    section: a
                }))
        }
    };
    t.default = a("BitlinkDetail", [I], function (e) {
        var t = e.activeBrand, n = e.bitlink, i = e.clicksByHash, a = e.config, s = e.loadable, l = e.open, c = e.section, u = e.productTier, d = e.hideEditButton, b = e.hideShareButton, D = e.hideRedirectButton, I = e.campaigns, A = (e.session, e.deeplinkMetrics), E = null;
        if (s.get("loading"))E = r.createElement(v.default, null); else if (s.get("error"))E = r.createElement(h.default, {
            aspect: "SERVER",
            title: "Server Error",
            link: "Click to retry",
            iconName: "server-error-icon"
        }); else if (n) {
            var w = "anonymous" !== u.deref() && "free" !== u.deref() && n.get("keywordLink") && !a.get("bitly_domains").contains(n.get("keywordDomain")), C = this.generateCampaignItems(n, I);
            E = r.createElement("div", null, r.createElement("span", {className: "item-detail--back-nav"}, "Bitlink Details", r.createElement(m.default, {
                iconName: "close-icon",
                iconAction: o.default.UI.deselect
            })), r.createElement(p.default, {bitlink: n}), n.get("tags").size > 0 && r.createElement(g.default, {
                    aspect: "TAGS",
                    items: y(n)
                }), !n.get("campaigns").isEmpty() && r.createElement(g.default, {
                    aspect: "TAGS",
                    items: C
                }), r.createElement(f.default, {
                bitlink: n,
                hasEditButton: !d && "anonymous" !== u.deref(),
                shareComponent: b ? "" : "anonymous" !== u.deref() && "share",
                hasRedirect: !D && w
            }), i && this.metricsSection(i, u, n, c, t, A), n.get("shares").length > 0 && r.createElement(k.default, {shares: n.get("shares")}), n.get("note") && r.createElement("div", {className: "info-wrapper--MAIN"}, r.createElement("h4", {className: "info-wrapper--header"}, "Notes"), r.createElement("p", {className: "info-wrapper--text"}, n.get("note"))))
        } else E = r.createElement(h.default, {aspect: "BITLINKS", title: "No Bitlink Selected"});
        return r.createElement("div", {className: "item-detail--MAIN" + (l ? " open" : "")}, E)
    })
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    var r = n(0), i = n(5), a = n(1), o = n(22);
    t.default = a("BitlinkMetadata", function (e) {
        var t = e.bitlink, n = e.showUrl, a = void 0 === n || n;
        return r.createElement("div", null, r.createElement("time", {
            className: "item-detail--created-date",
            dateTime: i(t.get("created")).utc().format("YYYY-MM-DD")
        }, o.formatDateShort(t.get("created"))), r.createElement("div", {className: "item-detail--title"}, t.get("title") || t.get("longUrl")), a ? r.createElement("div", null, r.createElement("a", {
            className: "item-detail--url",
            href: t.get("longUrl"),
            target: "_blank"
        }, t.get("longUrl"))) : null)
    })
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    var r = n(0), i = n(19), a = n(2), o = n(1), s = n(3), l = n(66), c = n(8), u = n(4), d = n(175), p = n(17), f = n(10), h = n(20), g = {
        search: function (e) {
            e && e.preventDefault();
            var t = this.refs.search.state.inputValue;
            "OneView" === this.props.pageName ? s.default.Campaigns.search(t) : s.default.API.search(t)
        },
        animationOptions: {
            animationName: "orangePulse",
            animationDuration: 3e3,
            animationIterationCount: "infinite",
            animationTimingFunction: "ease",
            animationFillMode: "forwards",
            animationDelay: 10
        },
        openSheet: function (e) {
            this.props.preferences.get("dismissedContent").has("highlight_creation") || s.default.Preferences.dismissContent("highlight_creation"), s.default.UI.openSheet(e)
        },
        componentWillReceiveProps: function (e) {
            this.refs.create && (e.preferences.get("dismissedContent").has("highlight_creation") ? f.clearAnimation(i.findDOMNode(this.refs.create)) : (f.clearAnimation(i.findDOMNode(this.refs.create)), f.animate(i.findDOMNode(this.refs.create), this.animationOptions)))
        }
    }, m = o("Navigation", g, function (e) {
        var t = this, n = e.query, i = (e.preferences, e.pageName), o = e.showFilter, f = void 0 === o || o, g = e.showSearch, m = void 0 === g || g, v = e.showEditName, k = (e.session, e.productTier), b = e.activeBrand, y = e.showShorten, D = void 0 === y || y, I = e.disableDropdown, A = void 0 !== I && I, E = e.aspect, w = void 0 === E ? null : E, C = w || (f ? "MAIN" : "ALTERNATE"), _ = "enterprise" === k.deref(), U = a.fromJS([{
            label: "DASHBOARD",
            action: "dashboard",
            icon: "clicks-icon",
            display: _
        }, {label: "BITLINKS", action: "bitlinks", icon: "no_bitlinks-icon", display: !0}, {
            label: "CUSTOM BITLINKS",
            action: "customlinks",
            icon: "custom_bitlink-icon",
            display: _
        }, {
            label: "ONEVIEW",
            action: "campaigns",
            icon: "binoculars-icon",
            display: _
        }]), S = !A && U.count(function (e) {
                return e.get("display")
            }) > 1, B = a.fromJS([{label: "BITLINK", action: "create", display: !0}, {
            label: "CAMPAIGN",
            action: "createCampaign",
            display: _
        }]), N = b && b.get("name"), O = B.count(function (e) {
            return e.get("display")
        }) > 1 ? r.createElement(d.default, {
            aspect: "ALTERNATE",
            items: B,
            header: "CREATE",
            onClickHandler: s.default.UI.openSheet,
            clickCallback: function () {
                return s.default.UI.openSheet("create")
            }
        }) : r.createElement("a", {
            onClick: function () {
                return t.openSheet("create")
            }
        }, r.createElement(c.default, {
            aspect: "SOLID-SECONDARY " + (N ? "brand" : ""),
            label: "CREATE BITLINK",
            ref: "create"
        }));
        return r.createElement("nav", {className: "navigation--" + C}, r.createElement("a", {href: p.rootDomainUrl("/")}, r.createElement(u.default, {iconName: "bitly-icon"})), S ? r.createElement(d.default, {
            aspect: "MAIN",
            items: U,
            header: i,
            onClickHandler: s.default.UI.changeSection
        }) : r.createElement("span", {className: "navigation--header"}, i, v ? r.createElement("a", {
            className: "navigation--edit",
            onClick: function () {
                return s.default.UI.openSheet("orgEditName")
            }
        }, "EDIT") : null), r.createElement("a", {
            title: "Settings",
            className: "navigation--icon " + (N ? "" : "border"),
            onClick: function () {
                return s.default.UI.openSheet("accountMain")
            }
        }, r.createElement(u.default, {iconName: "hamburger-icon"})), N ? r.createElement("span", {className: "navigation--switch"}, r.createElement(c.default, {
            aspect: "GHOST-PRIMARY",
            label: h.isDesktop() ? N.substring(0, 5) : N.substring(0, 2),
            clickCallback: function () {
                return s.default.UI.openSheet("brandSwitcher")
            }
        })) : null, D ? O : null, f ? r.createElement("a", {
            onClick: function () {
                return s.default.UI.openSheet("filter")
            }
        }, r.createElement(c.default, {
            aspect: "SOLID-PRIMARY",
            label: "FILTER"
        })) : null, m ? r.createElement("form", {
            action: "#",
            onSubmit: this.search
        }, r.createElement(l.default, {
            aspect: "MAIN",
            ref: "search",
            submitAction: this.search,
            query: n,
            autoFocus: !1
        })) : null)
    });
    t.default = m
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    var r = n(0), i = n(19), a = n(1), o = n(3), s = n(8), l = n(10), c = n(34), u = {
        animationOptions: {
            animationName: "fade-in-out",
            animationDuration: 4e3,
            animationFillMode: "forwards"
        }, componentDidMount: function () {
            if ("MAIN" === this.props.notification.get("aspect") || "ERROR" === this.props.notification.get("aspect"))this.animationOptions.animationDuration = this.props.notification.get("downloadable") ? 1e4 : 4e3, l.animate(i.findDOMNode(this), this.animationOptions, o.default.Notification.closeNotification); else {
                var e = {animationName: "fade-in", animationDuration: 700, animationFillMode: "forwards"};
                l.animate(i.findDOMNode(this), e), window.document.body.addEventListener("keydown", this.onKeyPress, !1)
            }
        }, componentWillReceiveProps: function (e) {
            l.animate(i.findDOMNode(this), this.animationOptions, o.default.Notification.closeNotification)
        }, componentWillUnmount: function () {
            window.document.body.removeEventListener("keydown", this.onKeyPress, !1)
        }, onKeyPress: function (e) {
            e.keyCode === c.keys.ESC ? o.default.Notification.closeNotification() : e.keyCode === c.keys.ENTER && (e.preventDefault(), this.props.notification.get("buttons").first().get("callback")())
        }
    }, d = a("Notification", [u], function (e) {
        var t = e.notification;
        return r.createElement("div", {className: "notification--" + t.get("aspect")}, r.createElement("h4", {className: "notification--title"}, t.get("title")), t.get("text") && r.createElement("p", {className: "notification--text"}, t.get("text")), t.get("html"), t.get("downloadable") && r.createElement("p", {className: "notification--text"}, t.getIn(["downloadable", "linkMessage"]), r.createElement("div", null, r.createElement("a", {
                className: "notification--link",
                download: "result.csv",
                href: t.getIn(["downloadable", "linkDataUri"])
            }, t.getIn(["downloadable", "linkText"])))), t.get("buttons") && t.get("buttons").map(function (e) {
                return r.createElement(s.default, {
                    aspect: e.get("fill") ? "SOLID-PRIMARY" : "GHOST-PRIMARY",
                    label: e.get("text"),
                    clickCallback: e.get("callback"),
                    key: e.get("text")
                })
            }))
    });
    t.default = d
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    var r, i, a, o, s, l, c, u, d, p, f, h, g, m, v, k, b, y, D, I, A, E, w, C, _, U, S, B, N, O, T, R, L, M, P, G, F, z, x, q, j, H, V = n(0), W = n(19), K = n(1), J = n(2), Y = n(3), X = n(18), Q = n(24), Z = n(4), $ = n(10), ee = n(84), te = n(268), ne = n(269), re = n(271), ie = n(272), ae = n(274), oe = n(275), se = n(280), le = n(281), ce = n(282), ue = {
        getInitialState: function () {
            return {
                loadedRedirectSheet: !1,
                loadedSharingAccountSheet: !1,
                loadedAccountSettingsSheet: !1,
                loadedBitlinksFilterSheet: !1,
                loadedDomainListSheet: !1,
                loadedDomainSheet: !1,
                loadedHttpsSheet: !1,
                loadedBitlinkShareSheet: !1,
                loadedFilterTagSheet: !1,
                loadedFilterDeeplinksSheet: !1,
                loadedBitlinkTagSheet: !1,
                loadedDateSelectionSheet: !1,
                loadedCountryCodeSheet: !1,
                loadedSetupSecurityCode: !1,
                loadedAccountResourcesSheet: !1,
                loadedAccountSecuritySheet: !1,
                loadedUserProfileSheet: !1,
                loadedPasswordResetSheet: !1,
                loadedAddDomainSheet: !1,
                loadedAdvancedSettingsSheet: !1,
                loadedApiSupportSheet: !1,
                loadedDeactivateAccount: !1,
                loadedUsersActionSheet: !1,
                loadedBrandUserRoleSheet: !1,
                loadedOrgUserRoleSheet: !1,
                loadedEmailEditSheet: !1,
                loadedEmailListSheet: !1,
                loadedBitlinkDetail: !1,
                loadedCampaignEditSheet: !1,
                loadedChannelsListSheet: !1,
                loadedBulkUploadSheet: !1,
                loadedCampaignFilterSheet: !1,
                loadedOrgDomainAddSheet: !1,
                loadedOrgEditNameSheet: !1,
                loadedOrgDomainEditSheet: !1,
                loadedBrandDomainSheet: !1,
                loadAddUserBrandRoles: !1,
                loadedSetDefaultDomainSheet: !1,
                loadedCampaignChannelSelectionSheet: !1,
                loadedAddDeeplinksAppSheet: !1,
                loadedDeeplinksAppSheet: !1,
                loadedBitlinkMobileBehaviorSheet: !1
            }
        }, closeAllSheets: function () {
            $.closeAllSheetsAnimation()
        }, closeTopSheet: function () {
            $.animate(W.findDOMNode(this), $.closeSheetAnimationOptions, Y.default.UI.closeSheet)
        }, componentWillMount: function () {
            var e = this;
            "brandDomain" === this.props.action || "bitlinkDomain" === this.props.action ? n.e(26).then(function (t) {
                P = n(184).default, e.setState({loadedBrandDomainSheet: !0})
            }.bind(null, n)).catch(n.oe) : "share" === this.props.action || "shareSecondSheet" === this.props.action ? n.e(29).then(function (t) {
                c = n(185).default, e.setState({loadedBitlinkShareSheet: !0})
            }.bind(null, n)).catch(n.oe) : "date" !== this.props.action && "dateFilter" !== this.props.action || n.e(2).then(function (t) {
                p = n(186).default, e.setState({loadedDateSelectionSheet: !0})
            }.bind(null, n)).catch(n.oe)
        }, componentDidMount: function () {
            var e = {animationName: "open-sheet", animationDuration: 600, animationFillMode: "forwards"};
            $.animate(W.findDOMNode(this.refs.actionSheet), e)
        }, stopPropagation: function (e) {
            e.stopPropagation();
            var t = !this.props.preferences.get("dismissedContent").has("customize_coachmark");
            "edit" == this.props.action && t && Y.default.Preferences.dismissContent("customize_coachmark")
        }
    }, de = function (e) {
        return function (t, n) {
            var r = e.getIn(["preferences", "domain_preference"]);
            return r == t ? -1 : r == n ? 1 : t.localeCompare(n)
        }
    }, pe = function (e, t, n, r) {
        return t.deref().getIn([n.get("activeBrand"), "bsds"], J.List()).concat(r).toOrderedSet().sort(de(n))
    }, fe = n(89)("./config." + ee.storageEnv), he = K("ActionSheet", [ue], function (e) {
        var t, W, K, $, ee, ue, de, he, ge = this, me = e.deeplinksFilter, ve = e.action, ke = e.section, be = e.dateFilter, ye = e.page, De = e.userList, Ie = e.activeBitlink, Ae = e.tags, Ee = e.filterSheet, we = e.session, Ce = e.campaigns, _e = e.user, Ue = e.account, Se = e.preferences, Be = e.productTier, Ne = e.config, Oe = e.accountSettings, Te = e.formData, Re = e.brands, Le = e.organizations, Me = e.brandUserRoles, Pe = e.orgUserRoles, Ge = e.shareAccounts, Fe = e.bsds, ze = e.calendar, xe = e.deeplinkApps, qe = e.thirdPartyAppLookup, je = e.siteAssociation, He = e.saf, Ve = "MAIN", We = !0, Ke = J.List(fe.shorten_domains), Je = pe(we.get("activeBrand"), Re, we, Ke), Ye = Ce ? Ce.map(function (e, t) {
            return "campaignCache" !== t ? e : e.filter(function (e, t) {
                return e.get("brand_guid") === we.get("activeBrand")
            })
        }) : null;
        switch (ve) {
            case"edit":
                t = Ie ? V.createElement(ne.default, {
                    bitlink: Ie,
                    bsdRateLimit: Ue.cursor("bsdRateLimit"),
                    bitlinkRateLimit: Ue.cursor("bitlinkRateLimit"),
                    session: we,
                    skipRateLimitChecks: !1,
                    allTags: Ae.get("data"),
                    error: Ae.get("error"),
                    isExtension: !1,
                    displayArchiveBitlink: !0,
                    organizations: Le,
                    campaigns: Ye,
                    formData: Te,
                    deeplinkApps: xe,
                    hasMobileBehavior: "enterprise" === Be.deref() && Re.getIn([we.get("activeBrand"), "bsds"], J.List()).find(function (e) {
                        return e === Ie.get("domain")
                    }),
                    siteAssociation: je,
                    brandGUID: we.get("activeBrand")
                }) : V.createElement(X.default, null), W = "Edit Bitlink";
                break;
            case"create":
                t = V.createElement(te.default, {
                    session: we,
                    selectedDomain: Te.getIn(["createBitlink", "selectedDomain"]),
                    hideHelpText: !1,
                    skipRateLimitChecks: !1,
                    bitlinkRateLimit: Ue.cursor("bitlinkRateLimit"),
                    bsdRateLimit: Ue.cursor("bsdRateLimit"),
                    preferences: Se,
                    bitlyDomains: Ke,
                    domains: Je,
                    accountSettings: Oe
                }), W = "Create Bitlink";
                break;
            case"addBitlinks":
                t = V.createElement(te.default, {
                    session: we,
                    selectedDomain: Te.getIn(["createBitlink", "selectedDomain"]),
                    hideHelpText: !0,
                    skipRateLimitChecks: !1,
                    bitlinkRateLimit: Ue.cursor("bitlinkRateLimit"),
                    bsdRateLimit: Ue.cursor("bsdRateLimit"),
                    preferences: Se,
                    bitlyDomains: Ke,
                    domains: Je,
                    accountSettings: Oe,
                    url: Ie && Ie.size ? Ie.get("longUrl") : null,
                    type: "campaigns",
                    campaigns: Ye,
                    section: ke.deref()
                }), W = "Add Bitlinks", We = !1;
                break;
            case"bulkUpload":
                n.e(7).then(function (e) {
                    T = n(187).default, ge.setState({loadedBulkUploadSheet: !0})
                }.bind(null, n)).catch(n.oe), We = !1, t = this.state.loadedBulkUploadSheet ? V.createElement(T, null) : V.createElement(X.default, null), W = "Bulk Importer";
                break;
            case"createCampaign":
                t = V.createElement(re.default, {
                    campaigns: Ye,
                    edit: !1,
                    user: _e,
                    session: we,
                    brandUserRoles: Me
                }), W = "Create Campaign";
                break;
            case"createCampaignForBitlink":
                t = V.createElement(re.default, {
                    campaigns: Ye,
                    edit: !1,
                    user: _e,
                    session: we,
                    brandUserRoles: Me,
                    willAddLinkToCampaign: !0
                }), We = !1, W = "Create Campaign";
                break;
            case"editCampaign":
                t = V.createElement(re.default, {
                    campaigns: Ye,
                    edit: !0,
                    user: _e,
                    session: we,
                    brandUserRoles: Me
                }), W = "Edit Campaign";
                break;
            case"selectCampaign":
                n.e(3).then(function (e) {
                    R = n(188).default, ge.setState({loadedCampaignFilterSheet: !0})
                }.bind(null, n)).catch(n.oe), t = this.state.loadedCampaignFilterSheet ? V.createElement(R, {
                    campaigns: Ye,
                    campaignList: Ce.getIn(["views", "list", "data"]),
                    selectedCampaign: Te.getIn(["addLinkToCampaign", "selectedCampaign"]),
                    selectedChannel: Te.getIn(["addLinkToCampaign", "selectedChannel"]),
                    bitlink: Ie
                }) : V.createElement(X.default, null), We = !1, W = "Filter Campaigns";
                break;
            case"channelsList":
                n.e(5).then(function (e) {
                    O = n(189).default, ge.setState({loadedChannelsListSheet: !0})
                }.bind(null, n)).catch(n.oe), We = !1, t = this.state.loadedChannelsListSheet ? V.createElement(O, {channels: Ce.get("channelsCache")}) : V.createElement(X.default, null), W = "Manage Channels";
                break;
            case"deeplinkAppsEmptyState":
            case"deeplinkAppsEmptyStateNoScheme":
                var Xe = ["org-admin"].indexOf(Me.getIn([we.get("activeBrand"), we.getIn(["user", "login"])])) > -1;
                We = !1;
                var Qe = "deeplinkAppsEmptyStateNoScheme" === ve;
                t = V.createElement("div", {className: "action-sheet--content-wrapper"}, V.createElement(Q.default, {
                    aspect: "ACTION",
                    iconName: "deeplink-icon",
                    title: Qe ? "NO APPS CONFIGURED CONTAIN APP SCHEMES" : "NO APPS CONFIGURED",
                    text: Qe ? "App schemes are required to create link level deep links" : Xe ? "" : "Contact your administrator to configure a mobile app.",
                    link: Qe ? "Edit Your Mobile Apps" : Xe ? "Setup a Mobile App" : "",
                    clickFunction: Qe ? function () {
                        Y.default.UI.switchOrganizationSection("mobile"), Y.default.UI.manageOrganization(we.get("activeOrganization"))
                    } : function () {
                        return Y.default.UI.openSheet("addDeeplinksApp")
                    }
                })), W = "Mobile Behavior";
                break;
            case"selectOS":
            case"addDeeplinksApp":
                n.e(0).then(function (e) {
                    q = n(190).default, ge.setState({loadedAddDeeplinksAppSheet: !0})
                }.bind(null, n)).catch(n.oe), We = !1, t = this.state.loadedAddDeeplinksAppSheet ? V.createElement(q, {addRule: "selectOS" === ve}) : V.createElement(X.default, null), W = "selectOS" === ve ? "Select OS" : "Add Application";
                break;
            case"addAndroid":
                n.e(0).then(function (e) {
                    j = n(26).default, ge.setState({loadedDeeplinksAppSheet: !0})
                }.bind(null, n)).catch(n.oe), We = !1, t = this.state.loadedDeeplinksAppSheet ? V.createElement(j, {
                    os: "android",
                    type: "add",
                    activeOrganization: we.get("activeOrganization"),
                    thirdPartyAppLookup: qe,
                    isAndroid: !0
                }) : V.createElement(X.default, null), W = "Add Android App";
                break;
            case"addiOS":
                n.e(0).then(function (e) {
                    j = n(26).default, ge.setState({loadedDeeplinksAppSheet: !0})
                }.bind(null, n)).catch(n.oe), We = !1, t = this.state.loadedDeeplinksAppSheet ? V.createElement(j, {
                    os: "ios",
                    type: "add",
                    activeOrganization: we.get("activeOrganization"),
                    thirdPartyAppLookup: qe,
                    isAndroid: !1
                }) : V.createElement(X.default, null), W = "Add iOS App";
                break;
            case"editiOSApp":
                n.e(0).then(function (e) {
                    j = n(26).default, ge.setState({loadedDeeplinksAppSheet: !0})
                }.bind(null, n)).catch(n.oe), We = !1, t = this.state.loadedDeeplinksAppSheet ? V.createElement(j, {
                    activeApp: Te.get("activeDeeplinksAppForEdit"),
                    type: "edit",
                    activeOrganization: we.get("activeOrganization"),
                    thirdPartyAppLookup: qe,
                    isAndroid: !1,
                    os: "ios",
                    deeplinkApps: xe
                }) : V.createElement(X.default, null), W = "Edit iOS App";
                break;
            case"editAndroidApp":
                n.e(0).then(function (e) {
                    j = n(26).default, ge.setState({loadedDeeplinksAppSheet: !0})
                }.bind(null, n)).catch(n.oe), We = !1, t = this.state.loadedDeeplinksAppSheet ? V.createElement(j, {
                    activeApp: Te.get("activeDeeplinksAppForEdit"),
                    type: "edit",
                    activeOrganization: we.get("activeOrganization"),
                    thirdPartyAppLookup: qe,
                    isAndroid: !0,
                    os: "android",
                    deeplinkApps: xe
                }) : V.createElement(X.default, null), W = "Edit Android App";
                break;
            case"bitlinkDetail":
                new Promise(function (e) {
                    e()
                }).then(function (e) {
                    N = n(93).default, ge.setState({loadedBitlinkDetail: !0})
                }.bind(null, n)).catch(n.oe), t = this.state.loadedBitlinkDetail && ye ? V.createElement(N, {
                    loadable: ye.cursor(["views", "detail"]),
                    bitlink: Ie,
                    clicksByHash: ye.cursor(["clickCache", be.deref()]).get(Ie && Ie.get("userHash")),
                    open: !!Ie,
                    productTier: Be,
                    section: ke.deref(),
                    config: Ne,
                    hideEditButton: !1,
                    hideShareButton: !1,
                    hideRedirectButton: !0,
                    campaigns: Ce,
                    deeplinkMetrics: ye.getIn(["deeplinkMetrics", ye.get("activeBitlink")])
                }) : V.createElement(X.default, null), W = "Bitlink Detail", Ve = "LARGE";
                break;
            case"filter":
                n.e(28).then(function (e) {
                    o = n(191).default, ge.setState({loadedBitlinksFilterSheet: !0})
                }.bind(null, n)).catch(n.oe), t = this.state.loadedBitlinksFilterSheet ? V.createElement(o, {
                    filterSheet: Ee,
                    productTier: Be
                }) : V.createElement(X.default, null), W = "Filter Bitlinks By";
                break;
            case"setDefaultDomain":
                n.e(12).then(function (e) {
                    F = n(192).default, ge.setState({loadedSetDefaultDomainSheet: !0})
                }.bind(null, n)).catch(n.oe), We = !1, t = this.state.loadedSetDefaultDomainSheet ? V.createElement(F, {
                    preferences: Se,
                    brand: Re.get(we.get("activeBrand")),
                    bitlyDomains: Ke
                }) : V.createElement(X.default, null), W = "Domain Default";
                break;
            case"users":
                n.e(9).then(function (e) {
                    E = n(193).default, ge.setState({loadedUsersActionSheet: !0})
                }.bind(null, n)).catch(n.oe), We = !1, t = this.state.loadedUsersActionSheet ? V.createElement(E, {
                    users: De,
                    brandUserRoles: Me,
                    formData: Te,
                    session: we
                }) : V.createElement(X.default, null), W = "Users";
                break;
            case"CreateOrgUserRole":
                n.e(15).then(function (e) {
                    C = n(194).default, ge.setState({loadedOrgUserRoleCreateSheet: !0})
                }.bind(null, n)).catch(n.oe), We = !1, ue = we.get("activeOrganization"), t = this.state.loadedOrgUserRoleCreateSheet ? V.createElement(C, {
                    org: Le.get(ue),
                    brands: Re,
                    orgAdmin: !1
                }) : V.createElement(X.default, null), W = "Invite User";
                break;
            case"AddUserBrandRoles":
                n.e(34).then(function (e) {
                    G = n(195).default, ge.setState({loadedAddUserBrandRoles: !0})
                }.bind(null, n)).catch(n.oe), We = !1, K = Te.get("activeUserForEdit"), $ = De.get(K), ue = we.get("activeOrganization"), t = this.state.loadedAddUserBrandRoles ? V.createElement(G, {
                    user: $,
                    org: Le.get(ue),
                    brands: Re,
                    brandUserRoles: Me
                }) : V.createElement(X.default, null), W = $.get("full_name") || $.get("display_name") || $.get("login");
                break;
            case"EditOrgUserRole":
                n.e(14).then(function (e) {
                    _ = n(196).default, ge.setState({loadedOrgUserRoleEditSheet: !0})
                }.bind(null, n)).catch(n.oe), We = !1, K = Te.get("activeUserForEdit"), $ = De.get(K), ue = we.get("activeOrganization");
                var Ze = "admin" === Pe.getIn([ue, K]);
                t = this.state.loadedOrgUserRoleEditSheet ? V.createElement(_, {
                    user: $,
                    org: Le.get(ue),
                    brands: Re,
                    brandUserRoles: Me,
                    orgAdmin: Ze,
                    session: we
                }) : V.createElement(X.default, null), W = $.get("full_name") || $.get("display_name") || $.get("login");
                break;
            case"BrandUserRole":
                n.e(25).then(function (e) {
                    w = n(197).default, ge.setState({loadedBrandUserRoleSheet: !0})
                }.bind(null, n)).catch(n.oe), We = !1, K = Te.get("activeUserForEdit"), $ = De.get(K), ue = we.get("activeOrganization"), he = Te.getIn(["activeBrandForEdit", "guid"]) || we.get("activeBrand"), de = Re.get(he);
                var $e = Me.getIn([he, K]), et = -1 !== ["org-admin", "admin"].indexOf($e);
                t = this.state.loadedBrandUserRoleSheet ? V.createElement(w, {
                    user: $,
                    login: Te.get("activeUserForEdit"),
                    brand: de,
                    isBrandAdmin: et,
                    isOrgAdmin: "org-admin" === $e
                }) : V.createElement(X.default, null), W = $ ? $.get("full_name") || $.get("display_name") || $.get("login") : "Invite To " + (de ? de.get("name") : "Group");
                break;
            case"domainList":
                n.e(22).then(function (e) {
                    s = n(198).default, ge.setState({loadedDomainListSheet: !0})
                }.bind(null, n)).catch(n.oe), We = !1, t = this.state.loadedDomainListSheet ? V.createElement(s, {
                    revalidationLoadingStatus: Ue.get("revalidationLoadingStatus"),
                    brandedShortDomain: Ue.get("brandedShortDomain"),
                    preferences: Se,
                    bsdRateLimit: Ue.cursor("bsdRateLimit"),
                    session: we
                }) : V.createElement(X.default, null), W = "Branded Short Domains";
                break;
            case"createBrand":
            case"editBrand":
                n.e(27).then(function (e) {
                    B = n(199).default, ge.setState({loadedBrandCreateEditSheet: !0})
                }.bind(null, n)).catch(n.oe), We = !1, t = this.state.loadedBrandCreateEditSheet ? V.createElement(B, {
                    session: we,
                    formData: Te.get("activeBrandForEdit"),
                    brand: Re.get(Te.getIn(["activeBrandForEdit", "guid"])),
                    bsds: Fe
                }) : V.createElement(X.default, null), W = "createBrand" === ve ? "Create New Group" : "Edit Group";
                break;
            case"brandDomain":
                We = !1;
                var tt = Fe.keySeq().filter(function (e) {
                    return !Te.getIn(["activeBrandForEdit", "bsds"]).includes(e) && "ok" === Fe.getIn([e, "validation_status"])
                }).toOrderedSet();
                t = this.state.loadedBrandDomainSheet ? V.createElement(P, {
                    listItems: tt,
                    selected: "",
                    selectFunc: Y.default.Forms.stageBrandBSDAddition
                }) : V.createElement(X.default, null), W = "Add Branded Short Domain";
                break;
            case"https":
                n.e(8).then(function (e) {
                    l = n(200).default, ge.setState({loadedHttpsSheet: !0})
                }.bind(null, n)).catch(n.oe), We = !1, t = this.state.loadedHttpsSheet ? V.createElement(l, {v4BSD: Te.get("bsdForAddOrEdit")}) : V.createElement(X.default, null), W = "HTTPS and SSL";
                break;
            case"bitlinkDomain":
                We = !1, t = this.state.loadedBrandDomainSheet ? V.createElement(P, {
                    listItems: Je,
                    selected: Te.getIn(["createBitlink", "selectedDomain"]) || Je.first(),
                    selectFunc: Y.default.Forms.setShortenDomain
                }) : V.createElement(X.default, null), W = "Select a Domain";
                break;
            case"redirect":
                n.e(30).then(function (e) {
                    r = n(201).default, ge.setState({loadedRedirectSheet: !0})
                }.bind(null, n)).catch(n.oe), t = this.state.loadedRedirectSheet ? V.createElement(r, {
                    bitlink: Ie,
                    productTier: Be
                }) : V.createElement(X.default, null), W = "Redirect Custom Bitlink";
                break;
            case"share":
                t = this.state.loadedBitlinkShareSheet ? V.createElement(c, {
                    bitlink: Ie,
                    user: _e,
                    shareAccounts: Ge
                }) : V.createElement(X.default, null), W = "Share Bitlink";
                break;
            case"shareSecondSheet":
                We = !1, t = this.state.loadedBitlinkShareSheet ? V.createElement(c, {
                    bitlink: Ie,
                    user: _e,
                    shareAccounts: Ge
                }) : V.createElement(X.default, null), W = "Share Bitlink";
                break;
            case"sharingAccounts":
                n.e(6).then(function (e) {
                    i = n(202).default, ge.setState({loadedSharingAccountSheet: !0})
                }.bind(null, n)).catch(n.oe), We = !1, t = this.state.loadedSharingAccountSheet ? V.createElement(i, {shareAccounts: Ge}) : V.createElement(X.default, null), W = "Social Sharing";
                break;
            case"bulkTags":
                new Promise(function (e) {
                    e()
                }).then(function (e) {
                    A = n(99).default, ge.setState({loadedBitlinkTagSheet: !0})
                }.bind(null, n)).catch(n.oe), t = Ae.get("loading") || !this.state.loadedBitlinkTagSheet ? V.createElement(X.default, null) : V.createElement(A, {
                    bitlink: Ie,
                    allTags: Ae.get("data"),
                    error: Ae.get("error"),
                    bulkTags: !0
                }), W = "Edit Bitlink Tags";
                break;
            case"tags":
                n.e(19).then(function (e) {
                    u = n(203).default, ge.setState({loadedFilterTagSheet: !0})
                }.bind(null, n)).catch(n.oe), We = !1, t = Ae.get("loading") || !this.state.loadedFilterTagSheet ? V.createElement(X.default, null) : V.createElement(u, {allTags: Ae.get("data")}), W = "Filter Bitlinks By Tags";
                break;
            case"deeplinks":
                n.e(20).then(function (e) {
                    d = n(204).default, ge.setState({loadedFilterDeeplinksSheet: !0})
                }.bind(null, n)).catch(n.oe), t = Ae.get("loading") || !this.state.loadedFilterDeeplinksSheet ? V.createElement(X.default, null) : V.createElement(d, {filters: me}), W = "Filter Bitlinks By Deeplinks";
                break;
            case"bitlinkCampaignChannel":
                n.e(4).then(function (e) {
                    x = n(205).default, ge.setState({loadedCampaignChannelSelectionSheet: !0})
                }.bind(null, n)).catch(n.oe), We = !1, t = Ae.get("loading") || !this.state.loadedCampaignChannelSelectionSheet ? V.createElement(X.default, null) : V.createElement(x, {
                    selectedChannel: Te.getIn(["addLinkToCampaign", "selectedChannel"]),
                    allChannels: Ce.get("channelsCache"),
                    user: _e,
                    session: we,
                    brandUserRoles: Me
                }), W = "Select Channel";
                break;
            case"date":
                var nt = "dashboard" === ke.deref() ? "dashboard" : "graph";
                t = this.state.loadedDateSelectionSheet ? V.createElement(p, {
                    type: nt,
                    calendar: ze
                }) : V.createElement(X.default, null), W = "Select Date Range";
                break;
            case"dateFilter":
                We = !1, t = this.state.loadedDateSelectionSheet ? V.createElement(p, {
                    type: "filter",
                    calendar: ze
                }) : V.createElement(X.default, null), W = "Select Date Range";
                break;
            case"countryCode":
                n.e(24).then(function (e) {
                    f = n(206).default, ge.setState({loadedCountryCodeSheet: !0})
                }.bind(null, n)).catch(n.oe), We = !1, t = Ue.getIn(["twoStepVerification", "countryCodes", "loading"]) || !this.state.loadedCountryCodeSheet ? V.createElement(X.default, null) : V.createElement(f, {countryCodes: Ue.getIn(["twoStepVerification", "countryCodes", "data"])}), W = "Country Code";
                break;
            case"setupSecurityCode":
                n.e(11).then(function (e) {
                    h = n(207).default, ge.setState({loadedSetupSecurityCode: !0})
                }.bind(null, n)).catch(n.oe), We = !1, t = this.state.loadedSetupSecurityCode ? V.createElement(h, null) : V.createElement(X.default, null), W = "Two Step Verification";
                break;
            case"accountMain":
                t = V.createElement(ie.default, {
                    section: ke,
                    user: we.get("user"),
                    bitlinkRateLimit: Ue.cursor("bitlinkRateLimit"),
                    bsdRateLimit: Ue.cursor("bsdRateLimit"),
                    session: we,
                    productTier: Be
                }), W = "Your Account", Ve = "ALTERNATE";
                break;
            case"brandSwitcher":
                t = V.createElement(ae.default, {
                    activeBrandGuid: we.get("activeBrand"),
                    brands: Re,
                    organizations: Le,
                    orgUserRoles: Pe,
                    session: we
                }), W = "Select a Group";
                break;
            case"settings":
                n.e(36).then(function (e) {
                    a = n(208).default, ge.setState({loadedAccountSettingsSheet: !0})
                }.bind(null, n)).catch(n.oe), ee = we.getIn(["user", "login"]), de = we.get("activeBrand"), t = this.state.loadedAccountSettingsSheet ? V.createElement(a, {
                    isBrandAdmin: -1 !== ["org-admin", "admin"].indexOf(Me.getIn([de, ee])),
                    isOrganizationSection: "organization" === ke.deref(),
                    productTier: Be.deref()
                }) : V.createElement(X.default, null), We = !1, W = "Settings", Ve = "ALTERNATE";
                break;
            case"resources":
                n.e(38).then(function (e) {
                    g = n(209).default, ge.setState({loadedAccountResourcesSheet: !0})
                }.bind(null, n)).catch(n.oe), t = this.state.loadedAccountResourcesSheet ? V.createElement(g, null) : V.createElement(X.default, null), We = !1, W = "Resources", Ve = "ALTERNATE";
                break;
            case"security":
                n.e(37).then(function (e) {
                    m = n(210).default, ge.setState({loadedAccountSecuritySheet: !0})
                }.bind(null, n)).catch(n.oe), We = !1, t = this.state.loadedAccountSecuritySheet ? V.createElement(m, {
                    securityLogs: Ue.get("securityLogs"),
                    twoStepVerification: Ue.get("twoStepVerification"),
                    apps: Ue.get("linkedApps")
                }) : V.createElement(X.default, null), W = "Security";
                break;
            case"profile":
                n.e(10).then(function (e) {
                    v = n(211).default, ge.setState({loadedUserProfileSheet: !0})
                }.bind(null, n)).catch(n.oe), We = !1, t = this.state.loadedUserProfileSheet ? V.createElement(v, {
                    user: we.get("user"),
                    session: we
                }) : V.createElement(X.default, null), W = "Edit Profile";
                break;
            case"deactivate":
                n.e(23).then(function (e) {
                    I = n(212).default, ge.setState({loadedDeactivateAccount: !0})
                }.bind(null, n)).catch(n.oe), We = !1, t = this.state.loadedDeactivateAccount ? V.createElement(I, {user: we.get("user")}) : V.createElement(X.default, null), W = "Deactivate Account";
                break;
            case"advancedSettings":
                n.e(33).then(function (e) {
                    y = n(213).default, ge.setState({loadedAdvancedSettingsSheet: !0})
                }.bind(null, n)).catch(n.oe), We = !1, t = this.state.loadedAdvancedSettingsSheet ? V.createElement(y, {
                    preferences: Se,
                    bsdRateLimit: Ue.cursor("bsdRateLimit"),
                    bitlinkRateLimit: Ue.cursor("bitlinkRateLimit"),
                    session: we,
                    brandedShortDomain: Te.get("bsdForAddOrEdit"),
                    productTier: Be
                }) : V.createElement(X.default, null), W = "Advanced";
                break;
            case"addDomain":
                n.e(35).then(function (e) {
                    b = n(214).default, ge.setState({loadedAddDomainSheet: !0})
                }.bind(null, n)).catch(n.oe), We = !1, t = this.state.loadedAddDomainSheet ? V.createElement(b, {account: Ue}) : V.createElement(X.default, null), W = "Add Branded Short Domain";
                break;
            case"orgDomainAdd":
                n.e(18).then(function (e) {
                    L = n(215).default, ge.setState({loadedOrgDomainAddSheet: !0})
                }.bind(null, n)).catch(n.oe), We = !1, t = this.state.loadedOrgDomainAddSheet ? V.createElement(L, {brandedShortDomain: Te.get("bsdForAddOrEdit")}) : V.createElement(X.default, null), W = "Add Branded Short Domain";
                break;
            case"orgEditName":
                n.e(16).then(function (e) {
                    z = n(216).default, ge.setState({loadedOrgEditNameSheet: !0})
                }.bind(null, n)).catch(n.oe), We = !1, ue = we.get("activeOrganization"), t = this.state.loadedOrgEditNameSheet ? V.createElement(z, {orgName: Le.getIn([ue, "name"])}) : V.createElement(X.default, null), W = "Edit Account";
                break;
            case"orgDomainEdit":
                n.e(17).then(function (e) {
                    M = n(217).default, ge.setState({loadedOrgDomainEditSheet: !0})
                }.bind(null, n)).catch(n.oe), We = !1, t = this.state.loadedOrgDomainEditSheet ? V.createElement(M, {brandedShortDomain: Te.get("bsdForAddOrEdit")}) : V.createElement(X.default, null), W = "Domain Options";
                break;
            case"mobileBehavior":
                We = !1, t = V.createElement(oe.default, {
                    brandedShortDomain: Te.get("bsdForAddOrEdit"),
                    session: we,
                    appList: Te.getIn(["siteAssociation", "appList"]),
                    fallbacks: Te.getIn(["siteAssociation", "appFallback"]),
                    fullAppList: xe,
                    siteAssociation: Te.get("siteAssociation"),
                    saf: He
                }), W = "Mobile Behavior";
                break;
            case"bitlinkMobileiOS":
            case"bitlinkMobileAndroid":
            case"createBitlinkiOS":
            case"createBitlinkAndroid":
                n.e(31).then(function (e) {
                    H = n(218).default, ge.setState({loadedBitlinkMobileBehaviorSheet: !0})
                }.bind(null, n)).catch(n.oe), We = !1;
                var rt = "createBitlinkiOS" === ve || "bitlinkMobileiOS" === ve ? "ios" : "android";
                t = this.state.loadedBitlinkMobileBehaviorSheet ? V.createElement(H, {
                    activeRule: Te.get("activeRule"),
                    bitlink: Ie,
                    deeplinkApps: xe,
                    brandGUID: we.get("activeBrand"),
                    create: "createBitlinkiOS" === ve || "createBitlinkAndroid" === ve,
                    installPreference: Te.getIn(["siteAssociation", rt + "_install_preference"]),
                    linkException: Te.getIn(["linkException"]),
                    siteAssociation: je,
                    os: rt
                }) : V.createElement(X.default, null), W = "Mobile Behavior";
                break;
            case"apiSupport":
                n.e(32).then(function (e) {
                    D = n(219).default, ge.setState({loadedApiSupportSheet: !0})
                }.bind(null, n)).catch(n.oe), We = !1, t = this.state.loadedApiSupportSheet ? V.createElement(D, {
                    user: we.get("user"),
                    orgs: Le,
                    brands: Re
                }) : V.createElement(X.default, null), W = "API Support";
                break;
            case"password":
                n.e(13).then(function (e) {
                    k = n(220).default, ge.setState({loadedPasswordResetSheet: !0})
                }.bind(null, n)).catch(n.oe), We = !1, t = this.state.loadedPasswordResetSheet ? V.createElement(k, {user: we.get("user")}) : V.createElement(X.default, null), W = "Change Password";
                break;
            case"editEmail":
                n.e(1).then(function (e) {
                    U = n(81).default, ge.setState({loadedEmailEditSheet: !0})
                }.bind(null, n)).catch(n.oe), We = !1, t = this.state.loadedEmailEditSheet ? V.createElement(U, {
                    user: we.get("user"),
                    session: we,
                    type: "edit",
                    formData: Te
                }) : V.createElement(X.default, null), W = "Edit Email";
                break;
            case"addEmail":
                n.e(1).then(function (e) {
                    U = n(81).default, ge.setState({loadedEmailEditSheet: !0})
                }.bind(null, n)).catch(n.oe), We = !1, t = this.state.loadedEmailEditSheet ? V.createElement(U, {
                    user: we.get("user"),
                    session: we,
                    type: "add",
                    formData: Te
                }) : V.createElement(X.default, null), W = "Add New Email";
                break;
            case"emailList":
                n.e(21).then(function (e) {
                    S = n(221).default, ge.setState({loadedEmailListSheet: !0})
                }.bind(null, n)).catch(n.oe), We = !1, t = this.state.loadedEmailListSheet ? V.createElement(S, {
                    user: we.get("user"),
                    session: we
                }) : V.createElement(X.default, null), W = "Email";
                break;
            case"selectiOSApp":
                t = V.createElement(se.default, {
                    allApps: null,
                    type: "ios",
                    appList: Te.getIn(["siteAssociation", "appList", "ios"]),
                    fullAppList: xe
                }), W = "Select iOS App", We = !1;
                break;
            case"selectAndroidApp":
                t = V.createElement(se.default, {
                    allApps: null,
                    type: "android",
                    appList: Te.getIn(["siteAssociation", "appList", "android"]),
                    fullAppList: xe
                }), W = "Select Android App", We = !1;
                break;
            case"selectLinkiOSApp":
            case"selectLinkAndroidApp":
                var it = "selectLinkiOSApp" === ve ? "ios" : "android";
                t = V.createElement(le.default, {
                    type: it,
                    app: Te.getIn(["linkException", it]),
                    fullAppList: xe
                }), W = "Select " + it + " App", We = !1;
                break;
            case"dataExport":
                t = V.createElement(ce.default, {
                    section: ke.deref(),
                    emails: we.getIn(["user", "emails"], J.List()),
                    email: Te.get("emailForExport")
                }), W = "Export Results";
                break;
            case"hideSheet":
                t = null, W = "", Ve = "hideSheet";
                break;
            default:
                t = V.createElement("div", null), W = "No Action Selected"
        }
        return V.createElement("div", {
            key: ve,
            className: "action-sheet--wrapper-" + ("LARGE" !== Ve ? "MAIN" : Ve),
            onClick: this.stopPropagation
        }, V.createElement("div", {
            className: "action-sheet--" + Ve,
            "data-selected-sheet": ve,
            ref: "actionSheet"
        }, V.createElement("div", {className: "action-sheet--header"}, We ? null : V.createElement("a", {onClick: this.closeTopSheet}, " ", V.createElement(Z.default, {iconName: "back_btn-icon"}), " "), V.createElement("h4", {className: "action-sheet--header-text"}, W), V.createElement("span", null, V.createElement("a", {onClick: "bitlinkDetail" === ve ? Y.default.UI.closeSheet : this.closeAllSheets}, V.createElement(Z.default, {iconName: "close-icon"})))), t))
    });
    t.default = he
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    var r = n(0), i = n(1), a = n(66), o = n(52), s = n(34), l = {
        getInitialState: function () {
            return {
                searchActive: !this.props.search,
                searchIsFocused: !1,
                hasQuery: !1,
                highlightedLabel: "",
                showAll: !1
            }
        }, componentWillReceiveProps: function (e) {
            var t = this.getNewItem(e), n = this.getSuggestedItems(e);
            (t.size || n.size) && (this.state.hasQuery || this.state.showAll) ? this.setState({highlightedLabel: t.size ? t.first().get("label") : n.first().get("label")}) : this.setState({highlightedLabel: ""})
        }, onSearch: function (e) {
            this.setState({hasQuery: !!e}), e && this.props.searchChangeCallback(e)
        }, showAll: function () {
            this.state.showAll ? this.setState({showAll: !1}) : (this.setState({showAll: !0}), this.props.searchChangeCallback(""))
        }, onFocus: function () {
            this.setState({searchIsFocused: !this.state.searchIsFocused})
        }, onKeyPress: function (e) {
            var t = this;
            if (this.state.searchIsFocused || this.state.showAll)if (e.keyCode === s.keys.ENTER && (this.state.hasQuery || this.state.showAll))this.clickCall(this.getFocusedItem()); else if (e.keyCode === s.keys.UP || e.keyCode === s.keys.DOWN) {
                var n = void 0, r = this.getSuggestedItems(this.props), i = this.getNewItem(this.props);
                i.size && (r = r.push(i.first()));
                var a = r.size;
                n = r.findIndex(function (e) {
                    return e.get("label") === t.state.highlightedLabel
                }), n = e.keyCode === s.keys.DOWN ? n < a - 1 ? n + 1 : 0 : n > 0 ? n - 1 : a - 1, r && r.count() && this.setState({highlightedLabel: r.get(n).get("label")})
            }
        }, componentDidMount: function () {
            document.body.addEventListener("keydown", this.onKeyPress, !1)
        }, getFocusedItem: function () {
            var e = this;
            return this.props.allItems.filter(function (t) {
                return t.get("label") === e.state.highlightedLabel
            }).first()
        }, getNewItem: function (e) {
            return e.allItems.filter(function (e) {
                return e.get("new") && !e.get("enabled")
            })
        }, getSuggestedItems: function (e) {
            return e.allItems.filter(function (e) {
                return !e.get("enabled") && e.get("showing") && !e.get("new")
            }).take(e.maxItems)
        }, componentWillUnmount: function () {
            document.body.removeEventListener("keydown", this.onKeyPress, !1)
        }, clickCall: function (e) {
            this.props.error || (e && this.props.itemClickCallback(e), this.setState({hasQuery: !1}), this.setState({showAll: !1}), this.refs.search.setState({inputValue: ""}))
        }
    }, c = i("DynamicSearchList", [l], function (e) {
        var t, n = this, i = (e.searchChangeCallback, e.searchPlaceholder), s = e.allItems, l = e.itemClickCallback, c = e.error, u = e.header, d = e.maxItems, p = e.type, f = e.link, h = e.search, g = void 0 === h || h, m = e.showAll, v = void 0 !== m && m, k = e.bottomBorder, b = void 0 !== k && k, y = s.filter(function (e) {
            return e.get("enabled")
        }), D = s.filter(function (e) {
            return !e.get("enabled")
        }), I = D.filter(function (e) {
            return e.get("showing") && !e.get("new")
        }).take(d), A = (D.count() > d && D.take(d), D.filter(function (e) {
            return e.get("new")
        }));
        if ((this.state.searchActive || this.state.hasQuery || this.state.showAll) && !I.isEmpty()) {
            var E = (this.state.hasQuery ? "SUGGESTED " : "ALL ") + p;
            t = r.createElement("ul", {className: "dynamic-search-list--list"}, r.createElement("p", {className: "dynamic-search-list--result-header"}, E), I.map(function (e) {
                return r.createElement("li", {
                    className: "dynamic-search-list--list-item  " + (e.get("label") === n.state.highlightedLabel ? "focused" : ""),
                    key: e.get("label"),
                    onClick: function () {
                        return n.clickCall(e)
                    }
                }, e.get("label"))
            }), A.isEmpty() ? null : r.createElement("a", {
                href: "#",
                className: "dynamic-search-list--list-item " + (A.first().get("label") === this.state.highlightedLabel ? "focused" : ""),
                onClick: function () {
                    return n.clickCall(A.first())
                }
            }, " ", "Create '" + A.first().get("label") + "'"))
        } else if (this.state.hasQuery && !A.isEmpty()) {
            var w = "Create " + A.first().get("label");
            t = r.createElement("ul", {className: "dynamic-search-list--list"}, r.createElement("p", {className: "dynamic-search-list--result-header"}, p), r.createElement("li", {className: "dynamic-search-list--list-no-item"}, "There is no result for '" + A.first().get("label") + "'"), r.createElement("a", {
                href: "#",
                className: "dynamic-search-list--list-item\n          " + (A.first().get("label") === this.state.highlightedLabel ? "focused" : ""),
                onClick: function () {
                    return n.clickCall(A.first())
                }
            }, w))
        }
        return r.createElement("div", {className: "dynamic-search-list--" + ("CHANNELS" === p ? "ALTERNATE" : "MAIN")}, u && r.createElement("h5", {className: "dynamic-search-list--header"}, u, " ", y.isEmpty() ? "( 0 )" : "( " + y.count() + " )", " ", f ? r.createElement("a", {
                className: "dynamic-search-list--help-link",
                href: f.url,
                target: "_blank"
            }, f.text) : null), v ? r.createElement("a", {
            className: "search-view-all",
            onClick: this.showAll
        }, "View All") : null, g ? r.createElement(a.default, {
            aspect: "ALTERNATE",
            ref: "search",
            placeholder: i,
            changeCallback: this.onSearch,
            updateFocusCallback: this.onFocus,
            error: c,
            autoFocus: !1
        }) : null, g ? t : null, r.createElement("div", {className: "dynamic-search-list--filter-pills " + (b ? " border-bottom" : "")}, y.map(function (e) {
            var t = l ? function () {
                return l(e)
            } : null;
            return r.createElement(o.default, {
                key: e.get("label"),
                filterName: e.get("label"),
                iconAction: t,
                labelAction: t,
                aspect: l ? "ALTERNATE" : "MAIN"
            })
        })))
    });
    t.default = c
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    var r = n(0), i = n(1), a = n(7), o = n(3), s = n(8), l = n(98), c = n(23), u = {
        getInitialState: function () {
            return {item: this.props.item}
        }, filterTags: function (e) {
            o.default.UI.filterTags(e, !1)
        }, componentWillUnmount: function () {
            o.default.UI.filterTags(null, !1)
        }, componentDidMount: function () {
            o.default.API.loadTags()
        }, stateUpdated: function (e) {
            var t = e.set("enabled", !e.get("enabled"));
            this.setState({item: t}), o.default.UI.toggleTag(t), e.get("new") && this.refs.dynamicSearch.refs.search.changeValue(""), this.props.applyButton && (this.refs.applyButton = this.props.applyButton), this.showApplyButton()
        }, submitBulkTags: function (e) {
            e.preventDefault(), o.default.API.bulkEditTags()
        }
    }, d = i("BitlinkTagSheet", [u, a.ActionSheetMixin], function (e) {
        var t = e.allTags, n = (e.bitlink, e.error), i = e.bulkTags, a = (e.applyButton, t.filter(function (e) {
            return e.get("showing")
        })), o = (a.filter(function (e) {
            return e.get("label")
        }).toList(), r.createElement(l.default, {
            maxItems: 100,
            allItems: t,
            search: !0,
            itemClickCallback: this.stateUpdated,
            searchChangeCallback: this.filterTags,
            searchPlaceholder: "Add or create tag",
            ref: "dynamicSearch",
            type: "TAGS",
            error: c.bitlinkTagErrors[n],
            bottomBorder: !0
        }));
        return i ? r.createElement("form", {
            className: "action-sheet--content-wrapper",
            onSubmit: this.submitBulkTags
        }, o, r.createElement("div", {
            className: "action-sheet--button-wrapper",
            ref: "applyButton"
        }, r.createElement(s.default, {aspect: "SOLID-SECONDARY", label: "SAVE"}))) : o
    });
    t.default = d
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    var r = n(0), i = n(1), a = n(3), o = n(4), s = n(135), l = n(52), c = function () {
        return a.default.UI.clearAllFilters()
    }, u = i("FilterList", function (e) {
        var t = e.aspect, n = e.filterLabel, i = e.filterIcon, a = e.items, u = e.dateRangeLabel, d = e.isDateSelected, p = void 0 !== d && d, f = e.showIcons, h = void 0 === f || f, g = e.exportFn;
        return r.createElement("div", {className: "filter-list--" + t}, n && r.createElement("span", {className: "filter-list--label"}, n), i && r.createElement(o.default, {iconName: i}), a.map(function (e) {
            return r.createElement(l.default, {
                key: e.get("label"),
                filterName: e.get("label"),
                iconAction: e.get("iconAction"),
                labelAction: e.get("labelAction"),
                aspect: "FILTER" === t || "DOMAINS" === t ? "ALTERNATE" : "MAIN"
            })
        }), "FILTER" === t && h ? r.createElement("div", null, r.createElement("a", {
            href: "#",
            className: "filter-list--clear",
            onClick: c
        }, "Clear All"), r.createElement(s.default, {
            aspect: "BLUE",
            showFilter: !0,
            dateRangeLabel: u,
            isDateSelected: p,
            exportFn: g || null
        })) : null)
    });
    t.default = u
}, , , , , , function (e, t, n) {
    "use strict";
    function r() {
        var e = {eventLabel: "action", emitter: new a.EventEmitter}, t = function () {
            for (var e = [], n = 0; n < arguments.length; n++)e[n] = arguments[n];
            return t.trigger.apply(t, e)
        };
        return i(t, o, e), t
    }

    Object.defineProperty(t, "__esModule", {value: !0});
    var i = n(160), a = n(161), o = {
        listen: function (e, t) {
            void 0 === t && (t = this);
            var n = function () {
                for (var n = [], r = 0; r < arguments.length; r++)n[r] = arguments[r];
                e.apply(t, n)
            }, r = this;
            return r.emitter.addListener(r.eventLabel, n), function () {
                return r.emitter.removeListener(r.eventLabel, n)
            }
        }, trigger: function () {
            for (var e = [], t = 0; t < arguments.length; t++)e[t] = arguments[t];
            var n = this;
            (r = n.emitter).emit.apply(r, [n.eventLabel].concat(e));
            var r
        }
    }, s = r;
    t.createTypedAction = s
}, , , function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    var r = n(2), i = n(28), a = n(73), o = r.Set(["archived", "custom_bitlink", "query", "link_deeplinks", "domain_deeplinks"]), s = r.Set(["limit", "offset"]), l = r.Set(["created_after", "created_before"]), c = r.Set(["filterActive"]), u = o.union(s).union(c).union(l), d = new i.BitlinkFilter;
    t.decodeBitlinkFilter = function (e) {
        var t = e.filter(function (e) {
            return o.contains(e.key)
        }).map(function (e) {
            return [e.key, e.value]
        }), n = e.filter(function (e) {
            return s.contains(e.key)
        }).map(function (e) {
            var t = e.key, n = e.value;
            return [t, n ? +n : NaN]
        }).filter(function (e) {
            var t = (e[0], e[1]);
            return isFinite(t)
        }), u = e.filter(function (e) {
            return l.contains(e.key)
        }).map(function (e) {
            var t = e.key, n = e.value;
            return [t, n ? +n : NaN]
        }).filter(function (e) {
            var t = (e[0], e[1]);
            return isFinite(t)
        }), d = e.filter(function (e) {
            return c.contains(e.key)
        }).map(function (e) {
            return [e.key, "true" === e.value]
        }), p = e.filter(function (e) {
            return "link" === e.key
        }).map(function (e) {
            return e.value
        }), f = e.filter(function (e) {
            return "tags" === e.key
        }).map(function (e) {
            return e.value
        }), h = e.filter(function (e) {
            return "domain_deeplinks" === e.key
        }), g = e.filter(function (e) {
            return "link_deeplinks" === e.key
        }), m = t.concat(n, d);
        if (2 === u.length) {
            var v = new i.BitlinkFilter(u);
            v.get("created_after") < v.get("created_before") && (m = m.concat(u))
        }
        var k = r.Map(m).set("link", r.List(p)).set("tags", r.List(f));
        return h[0] && (k = k.setIn(["deeplinks", "domain"], h[0].value)), g[0] && (k = k.setIn(["deeplinks", "link"], g[0].value)), [a.routeBitlinkFilter(new i.BitlinkFilter(k))]
    }, t.encodeBitlinkFilter = function (e) {
        return e.cursor(["bitlinks", "filter"]).map(function (e, t) {
            return {key: t, value: e}
        }).filter(function (e) {
            var t = e.key, n = e.value;
            return u.contains(t) && n !== d.get(t)
        }).map(function (e) {
            return {key: e.key, value: "" + e.value}
        }).toArray().concat(e.cursor(["bitlinks", "filter", "tags"]).map(function (e) {
            return {key: "tags", value: e}
        }).toArray(), e.cursor(["bitlinks", "filter", "deeplinks"]).filter(function (e) {
            return "on" === e
        }).map(function (e, t) {
            return {key: "link" === t ? "link_deeplinks" : "domain_deeplinks", value: e}
        }).toArray(), e.cursor(["bitlinks", "filter", "link"]).map(function (e) {
            return {key: "link", value: e}
        }).toArray())
    }, t.decodeActionSheet = function (e) {
        var t = e.filter(function (e) {
            return "actions" === e.key
        }).map(function (e) {
            return e.value
        }).filter(function (e) {
            return e && "hideSheet" !== e
        });
        return [a.routeActionSheet(t)]
    }, t.encodeActionSheet = function (e) {
        return e.cursor(["actionSheets"]).filter(function (e) {
            return e && "hideSheet" !== e
        }).map(function (e) {
            return {key: "actions", value: e}
        }).toArray()
    }
}, function (e, t, n) {
    "use strict";
    function r(e, t) {
        var n = e.toJSON().series;
        for (n.forEach(function (e, n) {
            t.series[n] ? t.series[n].update(e, !1) : t.addSeries(e, !1)
        }); t.series.length > n.length;)t.series[n.length].remove();
        t.redraw()
    }

    Object.defineProperty(t, "__esModule", {value: !0}), t.updateChart = r
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    var r = n(0), i = n(1), a = n(2), o = n(75), s = n(18), l = n(9), c = function (e) {
        return e.get("clicks")
    };
    t.default = i("BitlinkClicksGraph", function (e) {
        var t = e.clickHistory, n = e.envelopName;
        if (t.get("loading") || !t.get("loadedOnce"))return r.createElement(s.default, null);
        var i = t.getIn(["data", n || "link_clicks"]).deref().reverse(), u = t.getIn(["data", "unit"]), d = a.fromJS({
            series: [{
                data: i.map(c).toArray(),
                pointStart: 1e3 * i.first().get("dt"),
                pointIntervalUnit: "month" === u ? u : null,
                pointInterval: l.POINT_INTERVALS[u] ? l.POINT_INTERVALS[u] : 1
            }]
        });
        return r.createElement(o.default, {
            chartData: d,
            height: 200,
            configs: ["light", "timeSeries", "barChartDefault"],
            seriesUnit: u,
            ref: "clickGraph"
        })
    })
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    var r = n(0), i = n(1), a = n(9), o = n(4);
    t.default = i("BitlinkClickStats", function (e) {
        var t, n, i = e.bitlink, s = e.userClicks, l = e.globalClicks, c = e.allTime, u = l > s && i.getIn(["globalEncoders", "loadedOnce"]);
        return u && (t = i.getIn(["globalEncoders", "data", "encoderCounts"]), n = l - s), r.createElement("div", {className: "item-detail--click-stats-wrapper"}, r.createElement("div", {className: "info-wrapper--user-clicks"}, r.createElement("div", {className: "info-wrapper--header"}, r.createElement("span", {className: "info-wrapper--clicks-text"}, a.commifyNumber(s)), r.createElement(o.default, {iconName: "clicks-icon"})), r.createElement("div", {className: "item-detail--selected-day"}, (c ? "TOTAL " : "") + (1 === s ? "CLICK" : "CLICKS"))), u && r.createElement("div", {className: "info-wrapper--global-clicks"}, "Bitly Network: ", r.createElement("strong", null, a.commifyNumber(n)), " ", 1 === n ? "click" : "clicks", " from ", r.createElement("strong", null, a.commifyNumber(t)), " other Bitlinks"))
    })
}, , , function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    var r = n(2), i = n(3), a = n(15), o = function (e, t) {
        return function (n, o) {
            var s = r.fromJS([{
                text: "CONFIRM", fill: !0, callback: function () {
                    return n(o)
                }
            }, {
                text: "CANCEL", fill: !1, callback: function () {
                    return i.default.Notification.closeNotification()
                }
            }]);
            return i.default.Notification.openNotification(new a.default({
                aspect: "ACTION",
                title: e,
                text: t,
                buttons: s
            }))
        }
    };
    t.default = o
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    var r = n(0), i = n(1), a = n(277), o = {
        getDefaultProps: function () {
            return {aspect: "MAIN"}
        }, getInitialState: function () {
            return this.getValues()
        }, getValues: function () {
            return a(this.props.values, function (e, t) {
                return "checked" === t.checked || !0 === t.checked ? e[t.value] = !0 : e[t.value] = !1, e
            }, {})
        }, onChange: function (e, t) {
            var n = {};
            for (var r in this.state)n[r] = !1;
            n[e] = !0, this.setState(n)
        }, handleClick: function (e, t) {
            this.props.onClick && this.props.onClick(e, t)
        }
    }, s = i("RadioButton", o, function (e) {
        var t = this, n = e.aspect, i = e.name, a = e.values;
        e.onClick;
        return r.createElement("div", {className: "radio-button--" + n}, a.map(function (e) {
            return r.createElement("span", {
                className: "radio-button--item",
                key: e.value
            }, r.createElement("input", {
                type: "radio",
                className: "radio-button--input",
                name: i,
                id: e.value,
                value: e.value,
                defaultChecked: e.checked,
                onChange: function (n) {
                    return t.onChange(e.value, n)
                },
                onClick: function (n) {
                    return t.handleClick(e.value, n)
                },
                checked: t.state[e.value]
            }), r.createElement("label", {
                className: "radio-button--button",
                htmlFor: e.value
            }, " "), r.createElement("span", {className: "radio-button--label"}, e.label))
        }))
    });
    t.default = s
}, , , , , , , , , , function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0})
}, function (e, t, n) {
    "use strict";
    function r(e, t) {
        return t.headers = t.headers || {}, t.headers["X-Xsrftoken"] = i.getXSRFToken(), t.headers["X-Bitly-Client"] = "bbt2", t.credentials = "same-origin", fetch(e, t)
    }

    Object.defineProperty(t, "__esModule", {value: !0});
    var i = n(90);
    t.default = r
}, function (e, t, n) {
    "use strict";
    function r(e) {
        return a[e]
    }

    Object.defineProperty(t, "__esModule", {value: !0});
    var i = n(85), a = function () {
        return "undefined" != typeof document && null !== document ? i.parse(document.cookie, {delimiter: "; "}) : {}
    }();
    t.get = r
}, function (e, t, n) {
    "use strict";
    function r(e, t) {
        return e.reduce(function (e, n) {
            return e[n.get(t)] = n, e
        }, {})
    }

    function i(e, t) {
        return e.reduce(function (e, n) {
            return e[t(n)] = n, e
        }, {})
    }

    function a(e, t) {
        return e + t
    }

    Object.defineProperty(t, "__esModule", {value: !0}), t.reduceByKey = r, t.indexBy = i, t.sum = a
}, , function (e, t, n) {
    "use strict";
    var r = this && this.__extends || function () {
            var e = Object.setPrototypeOf || {__proto__: []}instanceof Array && function (e, t) {
                    e.__proto__ = t
                } || function (e, t) {
                    for (var n in t)t.hasOwnProperty(n) && (e[n] = t[n])
                };
            return function (t, n) {
                function r() {
                    this.constructor = t
                }

                e(t, n), t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
            }
        }();
    Object.defineProperty(t, "__esModule", {value: !0});
    var i = n(2), a = new Date("2009-01-01").getTime() / 1e3, o = function (e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }

        return r(t, e), t
    }(i.Record({
        apiKey: "",
        domain_options: i.Set([]),
        guid: "",
        is_enterprise: !1,
        is_verified: !1,
        login: "",
        member_since: a,
        users: i.Set([]),
        display_name: "",
        full_name: "",
        emails: i.List(),
        has_password: !0,
        errors: i.Map(),
        organizations: i.List(),
        legacyBrandGUID: null,
        legacyOrgGUID: null
    }));
    t.User = o;
    var s = function (e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }

        return r(t, e), t
    }(i.Record({
        dismissedContent: i.Set(),
        domain_preference: "bit.ly",
        bbt2_graph_panel_state: "open",
        preferred_brand: null
    }));
    t.UserPreferences = s
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), t.defaultPathEncoder = function (e) {
        for (var t = [], n = 1; n < arguments.length; n++)t[n - 1] = arguments[n];
        return t.map(function (t) {
            return e.cursor(t).deref() || ""
        })
    }
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    var r = n(0), i = n(1), a = n(2), o = n(7), s = n(62), l = n(37), c = n(38), u = function (e) {
        return ["Unknown" === e.get("display_name") ? "Email, SMS, Direct" : "Other" === e.get("display_name") ? "Other Websites" : e.get("display_name"), e.get("total_clicks")]
    }, d = function (e) {
        return [e.get("domain"), e.get("clicks")]
    };
    t.default = i("BitlinkChannelsGraph", [o.TruncateSeriesMixin], function (e) {
        var t = e.channels, n = e.limit, i = e.total, o = e.exportable, p = e.exportLink, f = e.section, h = e.activeBrand, g = t.getIn(["data", "referring_networks"]).filter(function (e, t) {
            return "other" !== t
        }).map(u).toList(), m = t.getIn(["data", "referring_networks"]).getIn(["other", "referrers"], a.List()).map(d).toList(), v = g.concat(m).toList(), k = a.fromJS({
            series: [{
                name: "Channels",
                data: this.truncateGraphSeries(n, v, i)
            }]
        });
        return r.createElement("div", {className: "info-wrapper--ALTERNATE"}, r.createElement("h4", {className: "info-wrapper--header"}, "Referrers"), o && r.createElement(l.default, {
                action: c.exportUrl("/proxy/v3/link/referrers_by_network", h),
                link: p,
                extraParams: a.fromJS({limit: 1e3})
            }), r.createElement(s.default, {configs: ["doughnutChartDefault"], chartData: k, total: i, section: f}))
    })
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    var r = n(0), i = n(1), a = n(2), o = n(77), s = n(7), l = n(62), c = n(37), u = n(38);
    t.default = i("BitlinkLocationsGraph", [s.TruncateSeriesMixin], function (e) {
        var t = e.locations, n = e.limit, i = e.total, s = e.exportable, d = e.exportLink, p = e.section, f = e.activeBrand;
        if (!t.get("loadedOnce") || t.get("loading"))return null;
        var h = t.getIn(["data", "countries"]);
        if (!h.size)return null;
        var g = h.map(function (e) {
            return ["None" !== e.get("country") ? o.default[e.get("country")] : e.get("country"), e.get("clicks")]
        }), m = a.fromJS({series: [{name: "Countries", data: this.truncateGraphSeries(n, g, i)}]});
        return r.createElement("div", {className: "info-wrapper--ALTERNATE"}, r.createElement("h4", {className: "info-wrapper--header"}, "Locations"), s && r.createElement(c.default, {
                action: u.exportUrl("/proxy/v3/link/countries", f),
                link: d,
                extraParams: a.fromJS({limit: 500})
            }), r.createElement(l.default, {configs: ["doughnutChartDefault"], chartData: m, total: i, section: p}))
    })
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    var r = n(0), i = n(1), a = n(3), o = n(4), s = n(8), l = function () {
        return null
    }, c = i("FilterHandlers", [], function (e) {
        var t = e.aspect, n = void 0 === t ? "DARK" : t, i = e.showFilter, c = void 0 === i || i, u = e.dateRangeLabel, d = e.isDateSelected, p = void 0 !== d && d, f = e.clearFn, h = void 0 === f ? a.default.UI.clearDateFilter : f, g = e.exportFn, m = e.exportDisabled, v = void 0 !== m && m;
        return r.createElement("div", {className: "filter-list--" + n}, "function" == typeof g ? r.createElement(s.default, {
            aspect: "MAIN",
            clickCallback: v ? l : g,
            label: "Export",
            disabled: v
        }) : null, r.createElement("div", {className: "button--MAIN"}, r.createElement("a", {
            onClick: function () {
                return a.default.UI.openOnlySheet("date")
            }
        }, u), p ? r.createElement(o.default, {
            iconName: "close-icon", iconAction: function () {
                return h()
            }
        }) : null), c ? r.createElement(o.default, {
            iconName: "filter-icon", iconAction: function () {
                return a.default.UI.openSheet("filter")
            }
        }) : null)
    });
    t.default = c
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    var r = n(0), i = n(1), a = {
        getDefaultProps: function () {
            return {checked: !1}
        }, getInitialState: function () {
            return {checked: this.props.checked}
        }, componentWillReceiveProps: function (e) {
            this.setState({checked: e.checked})
        }, handleClick: function () {
            this.setState({checked: !0})
        }
    }, o = i("RadioCheck", [a], function (e) {
        var t = e.id, n = e.name, i = e.aspect, a = void 0 === i ? "SMALL" : i;
        return r.createElement("div", {
            className: "radio-check--" + a,
            onClick: this.handleClick,
            id: t
        }, r.createElement("input", {
            id: t,
            value: t,
            type: "radio",
            name: n,
            className: "checkbox--input",
            onChange: function () {
            },
            checked: this.state.checked
        }), r.createElement("label", {htmlFor: t, className: "checkmark-icon"}))
    });
    t.default = o
}, function (e, t, n) {
    "use strict";
    var r = this && this.__extends || function () {
            var e = Object.setPrototypeOf || {__proto__: []}instanceof Array && function (e, t) {
                    e.__proto__ = t
                } || function (e, t) {
                    for (var n in t)t.hasOwnProperty(n) && (e[n] = t[n])
                };
            return function (t, n) {
                function r() {
                    this.constructor = t
                }

                e(t, n), t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
            }
        }();
    Object.defineProperty(t, "__esModule", {value: !0});
    var i = n(2), a = n(13), o = function (e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }

        return r(t, e), t
    }(i.Record({stat: new a.Loadable, description: "", label: null}));
    t.PerformanceSummaryItemRD = o;
    var s = function (e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }

        return r(t, e), t
    }(i.Record({maxTimespanInDays: 365, minDate: 0, selectedDateStart: null, selectedDateEnd: null}));
    t.CalendarRD = s
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    var r = n(0), i = n(19), a = n(1), o = n(3), s = n(139), l = n(283), c = n(24), u = n(18), d = n(39), p = {
        INFINITE_SCROLL_THRESHOLD: 100,
        componentDidMount: function () {
            i.findDOMNode(this).addEventListener("scroll", this.onScroll)
        },
        componentWillUnmount: function () {
            i.findDOMNode(this).removeEventListener("scroll", this.onScroll)
        },
        onScroll: function (e) {
            var t = e.target;
            t.scrollHeight - (t.offsetHeight + t.scrollTop) < this.INFINITE_SCROLL_THRESHOLD && !this.props.loadable.get("loading") && this.loadMoreItems(), document.getElementsByClassName("layout--MAIN")[0].scrollTop += t.scrollTop
        },
        loadMoreItems: function () {
            "campaigns" == this.props.section ? o.default.Campaigns.loadCampaignsNextPage() : "customlinks" == this.props.section ? o.default.API.loadCustomLinkNextPage() : o.default.API.loadNextPage()
        }
    }, f = {
        dismissMultiselectCoachmark: function (e) {
            o.default.Preferences.dismissContent("multiselect_coachmark"), e.stopPropagation()
        }
    };
    t.default = a("List", [p, f], function (e) {
        var t, n = e.section, i = e.loadable, a = e.items, o = e.clicksByDate, p = e.dateFilter, f = e.dateRangeLabel, h = e.activeItem, g = e.activeChannel, m = e.selectedBitlinks, v = e.session, k = e.filterActive, b = e.easterEgg;
        if (i.get("error"))t = r.createElement(c.default, {
            aspect: "SERVER",
            title: "Server Error",
            link: "Click to retry",
            iconName: "server-error-icon"
        }); else if (a.isEmpty())k ? t = r.createElement(c.default, {
            aspect: "RESULTS",
            title: "No Results",
            text: "Try broadening your search",
            iconName: "search-icon"
        }) : ("bitlinks" != n && "performance" != n && "customlinks" != n || (t = r.createElement(c.default, {
            aspect: "BITLINKS",
            title: "No Bitlinks",
            text: 'Click the "create bitlink" button to get started!',
            iconName: "no-bitlinks-icon"
        })), "customlinks" == n ? t = r.createElement(c.default, {
            aspect: "BITLINKS",
            title: "No Custom Bitlinks",
            text: "",
            iconName: "no-bitlinks-icon"
        }) : "campaigns" == n && (t = r.createElement(c.default, {
            aspect: "CAMPAIGNS",
            title: "No Campaigns",
            text: 'Click the "create campaign" button to get started!',
            iconName: "campaign-icon"
        }))); else if ("bitlinks" == n || "performance" == n) {
            var y = v.getIn(["preferences", "dismissedContent"]) && !v.getIn(["preferences", "dismissedContent"]).has("multiselect_coachmark") && a.size > 2;
            t = r.createElement("div", null, y ? r.createElement(d.default, {
                aspect: "CUSTOMIZE",
                text: "Save time by selecting multiple Bitlinks to tag or hide.",
                button: {aspect: "SOLID-SECONDARY", label: "Ok, I got it!", callback: this.dismissMultiselectCoachmark}
            }) : null, a.valueSeq().map(function (e, t) {
                return r.createElement(s.default, {
                    key: e.get("userHash"),
                    isActive: h === e.get("userHash"),
                    isSelected: m.includes(e.get("userHash")),
                    bitlink: e,
                    clicks: o.getIn([e.get("userHash"), "clicks", "data", "ownClicks"], 0),
                    index: t,
                    easterEgg: b,
                    showExport: !0,
                    showEncoder: !1,
                    isCustomBitlink: !1
                })
            }))
        } else"campaigns" == n ? t = a.map(function (e, t) {
            return r.createElement(l.default, {
                key: e.get("guid"),
                campaign: e,
                activeChannel: g,
                isActive: h === e.get("guid"),
                clicks: o
            })
        }) : "customlinks" == n && (t = a.valueSeq().map(function (e, t) {
            return r.createElement(s.default, {
                key: e.get("keywordLink"),
                isActive: h === e.get("keywordLink"),
                isSelected: m.includes(e.get("keywordLink")),
                bitlink: e,
                clicks: e.getIn(["totalClicks", "data"], 0),
                index: t,
                easterEgg: null,
                showExport: !1,
                showEncoder: !1,
                isCustomBitlink: !0
            })
        }));
        var D, I;
        switch (n) {
            case"campaigns":
                D = "Campaign", I = "Sorted by date created";
                break;
            case"customlinks":
                D = "Custom Bitlink", I = "Sorted by last edit";
                break;
            default:
                D = "Bitlink", I = "performance" === n ? p.get("unit_reference_ts") ? "Clicks " + f : "Clicks " + p.get("units") + " days" : "Clicks all time"
        }
        return r.createElement("div", {className: "list--MAIN"}, r.createElement("span", {className: "list--total"}, i.get("total"), " ", D, 1 !== a.size ? "s" : ""), r.createElement("span", {className: "list--filter"}, I), t, i.get("loading") ? r.createElement(u.default, null) : i.get("total") > a.count() ? r.createElement("div", {className: "list--load-more-wrapper"}, r.createElement("a", {
            onClick: this.loadMoreItems,
            className: "list--load-more"
        }, "Load more")) : null)
    })
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    var r = n(0), i = n(5), a = n(1), o = n(3), s = n(78), l = n(4), c = n(64), u = n(22), d = n(9), p = n(10), f = {
        toggleBitlinkState: function (e) {
            this.props.isSelected ? o.default.UI.bulkDeselect(this.props.bitlink.get("userHash")) : o.default.UI.bulkSelect(this.props.bitlink.get("userHash")), e.stopPropagation()
        }, selectByUserHash: function () {
            this.props.changeSectionTo && o.default.UI.changeSection(this.props.changeSectionTo), this.props.isCustomBitlink ? o.default.UI.selectCustomLink({keywordLink: this.props.bitlink.get("keywordLink")}) : o.default.UI.select(this.props.bitlink.get("userHash"))
        }, navByLongUrl: function (e) {
            e && window.open(e, "_blank")
        }
    }, h = {
        removeAnimation: function () {
            p.clearAnimation(this.refs.bitlinkItem)
        }
    };
    t.default = a("BitlinkItem", [f, h], function (e) {
        var t = e.bitlink, n = e.clicks, a = e.isActive, o = e.isSelected, f = e.index, h = e.easterEgg, g = e.showExport, m = void 0 !== g && g, v = e.clickable, k = void 0 === v || v, b = (e.changeSectionTo, e.showEncoder), y = e.isCustomBitlink;
        if (h && "disco" === h.deref()) {
            var D = {
                animationName: "rainbow-animation",
                animationDuration: 3e3,
                animationIterationCount: "infinite",
                animationTimingFunction: "infinite",
                animationDirection: "normal",
                animationFillMode: "both",
                animationDelay: 500 * f
            };
            p.animate(this.refs.bitlinkItem, D), setTimeout(this.removeAnimation, 1e4)
        }
        return r.createElement("a", {
            onClick: k ? b ? this.navByLongUrl.bind(null, t.get("longUrl")) : this.selectByUserHash : null,
            className: a || o ? "bitlink-item--ACTIVE" : "bitlink-item--MAIN",
            ref: "bitlinkItem"
        }, m ? r.createElement("span", {
            onClick: k ? this.toggleBitlinkState : null,
            className: "bitlink-item--checkbox"
        }, r.createElement(c.default, {
            id: t.get("userHash"),
            aspect: "SMALL",
            checked: o,
            ref: "checkbox"
        })) : null, r.createElement("time", {
            className: "bitlink-item--created-date",
            dateTime: i(t.get("created")).utc().format("YYYY-MM-DD")
        }, u.formatDateShort(t.get("created"))), t.get("tags") && 0 !== t.get("tags").size && !y ? r.createElement(l.default, {iconName: "tag-icon"}) : null, !t.get("hasLinkDeeplinks") && !t.get("hasDomainDeeplinks") || y ? null : r.createElement(l.default, {iconName: "deeplink-icon"}), y ? null : r.createElement("div", {className: "bitlink-item--title"}, t.get("title") ? t.get("title") : t.get("longUrl")), r.createElement("div", null, b ? r.createElement("div", {className: "bitlink-item--encoder-count"}, t.getIn(["globalEncoders", "data", "encoderCounts"], 0), " Bitlinks to this content") : r.createElement(s.default, {
            bitlink: t,
            aspect: y ? "CUSTOM" : "MAIN"
        }), r.createElement("span", {className: "click-count--MAIN"}, d.commifyNumber(n), r.createElement(l.default, {iconName: "clicks-icon"}))))
    })
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    var r = n(0), i = n(1), a = {
        componentDidMount: function () {
            var e = document.getElementById("static-message");
            e && e.parentNode.removeChild(e)
        }
    }, o = i("SiteWideMessage", a, function (e) {
        var t = e.message, n = decodeURIComponent(t.deref());
        return r.createElement("div", {className: "sitewide-message--MAIN", dangerouslySetInnerHTML: {__html: n}})
    });
    t.default = o
}, , , , , , function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    var r = function (e) {
        return e.get("emails").filter(function (e) {
            return e.get("is_primary")
        }).map(function (e) {
            return e.get("email")
        }).first()
    };
    t.getUserPrimaryEmail = r
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    var r = n(0), i = n(1), a = n(22), o = n(7), s = n(9), l = i("RateLimitProgressBar", [o.BSDRateLimitMixin], function (e) {
        var t = e.header, n = e.usageRate, i = e.usageLimit, o = e.aspect, l = e.countdown, c = e.url, u = s.percentage(n, i);
        return r.createElement("div", {className: "rate-limit-progress-bar--" + o}, r.createElement("div", {className: "rate-limit-progress-bar--header"}, t), r.createElement("a", {
            href: c,
            className: "rate-limit-progress-bar--link"
        }, "Upgrade"), r.createElement("div", {className: "rate-limit-progress-bar--counter"}, s.commifyNumber(n) + " / " + s.commifyNumber(i)), r.createElement("div", {className: "rate-limit-progress-bar--total"}, r.createElement("div", {
            className: "rate-limit-progress-bar--usage",
            style: {width: u + "%"}
        })), l ? r.createElement("p", {className: "rate-limit-progress-bar--text"}, "Your monthly limit resets in ", a.daysUntilEndOfMonth(), " days") : null)
    });
    t.default = l
}, , , , , , , , , , , , , , , function (e, t, n) {
    "use strict";
    function r(e, t) {
        if (e)try {
            t.incr(i.statsDKeyName.apply(void 0, o.concat([s(e)])))
        } catch (e) {
        }
    }

    Object.defineProperty(t, "__esModule", {value: !0});
    var i = n(48), a = function (e) {
        window.addEventListener("error", function (t) {
            return r(t.error, e)
        })
    };
    t.registerJSErrorTracking = a;
    var o = ["errors", "bbt2", "js_errors"], s = function (e) {
        return e.name
    };
    t.trackJSError = r
}, , , , , , function (e, t, n) {
    "use strict";
    function r(e) {
        return e.reduce(function (e, t) {
            return e.setIn([t.user_hash, "clicks"], new a.LoadableMap({
                loading: !1,
                loadedOnce: !0,
                data: i.Map({globalClicks: t.global_clicks, ownClicks: t.user_clicks})
            }))
        }, i.Map())
    }

    Object.defineProperty(t, "__esModule", {value: !0});
    var i = n(2), a = n(13);
    t.parseClicks = r
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    var r = n(2), i = n(13), a = n(16), o = n(256), s = n(246);
    t.initBSD = function (e) {
        return function (t) {
            return t.setIn(["accountSettings", "brandedShortDomain"], new i.Loadable({
                loading: !1,
                loadedOnce: !0,
                data: new s.BSDInfo(e)
            }))
        }
    }, t.initFeatureFlags = function (e) {
        return function (t) {
            return t.setIn(["session", "featureFlags"], r.Set(e))
        }
    }, t.initPreferences = function (e) {
        return function (t) {
            return t.setIn(["session", "preferences"], o.parsePreferences(e))
        }
    };
    var l = function (e, t) {
        var n = e.get("tier_name"), r = t.get("tier_name"), i = e.get("name").toLowerCase(), a = t.get("name").toLowerCase(), o = e.get("guid"), s = t.get("guid"), l = e.get("is_active"), c = t.get("is_active");
        return l && !c ? -1 : !l && c ? 1 : "enterprise" == n && "enterprise" != r ? -1 : "enterprise" != n && "enterprise" == r ? 1 : i < a ? -1 : i > a ? 1 : o < s ? -1 : o > s ? -1 : 0
    }, c = function () {
        return function (e) {
            var n = e.get("organizations");
            if (!n || n.isEmpty())return e.setIn(["session", "activeOrganization"], "default").setIn(["session", "activeBrand"], "default");
            var r = e.getIn(["session", "preferences", "preferred_brand"], null), i = e.getIn(["brands", r, "organizationGuid"], null), a = e.getIn(["brands", r, "is_active"], !1);
            if (r && i && a)return e.setIn(["session", "activeOrganization"], i).setIn(["session", "activeBrand"], r);
            var o = e.getIn(["brands"]).filter(function (e) {
                return e.get("is_active")
            }).map(function (e) {
                return e.get("organizationGuid")
            }).toSet(), s = n.filter(function (e) {
                return e.get("is_active") && o.contains(e.get("guid"))
            }).sort(l).first();
            return t.selectDefaultBrand(s.get("guid"))(e)
        }
    };
    t.setBrand = function (e) {
        return function (t) {
            var n = t.getIn(["brands", e, "organizationGuid"]);
            if (!n) {
                if (t.get("organizations").isEmpty())return c()(t);
                throw new Error("Invalid brandGUID " + e)
            }
            return t.setIn(["session", "activeOrganization"], n).setIn(["session", "activeBrand"], e)
        }
    }, t.selectDefaultBrand = function (e) {
        return function (t) {
            var n = t.getIn(["brands"]).findKey(function (t) {
                return t.get("is_active") && t.get("organizationGuid") == e
            }), r = n || "brandless";
            return t.setIn(["session", "activeOrganization"], e).setIn(["session", "activeBrand"], r)
        }
    }, t.setSection = function (e) {
        return function (t) {
            return t.set("section", e)
        }
    }, t.setDefaultSection = function () {
        return function (e) {
            var t = e.getIn(["productTier"]), n = a.default[t];
            return e.setIn(["section"], n.DEFAULT_SECTION)
        }
    }, t.setOrganizationSubsection = function (e) {
        return function (t) {
            return t.setIn(["session", "orgSectionName"], e)
        }
    }, t.validateOrganization = function () {
        return function (e) {
            var t = e.get("organizations");
            if (t.isEmpty())return c()(e);
            var n = e.getIn(["session", "activeOrganization"], "default"), r = e.getIn(["session", "user", "login"]);
            if ("default" !== n && t.getIn([n, "is_active"], !1)) {
                if (e.get("brands").find(function (e) {
                        return e.get("is_active") && e.get("organizationGuid") == n
                    }))return e;
                return "admin" === e.getIn(["orgUserRoles", n, r]) ? e.setIn(["session", "activeBrand"], "brandless").setIn(["section"], "organization") : c()(e)
            }
            "organization" === e.getIn(["section"]) && (e = e.setIn(["section"], "dashboard"));
            var i = e.getIn(["session", "activeBrand"], "default");
            if ("default" === i)return c()(e);
            if (e.getIn(["brands", i, "is_active"])) {
                var a = e.getIn(["brands", i, "organizationGuid"]);
                if (t.getIn([a, "is_active"], !1))return e.setIn(["session", "activeOrganization"], a)
            }
            return c()(e)
        }
    }, t.enforceProductTier = function () {
        return function (e) {
            var t, n = e.getIn(["session", "activeOrganization"], "default");
            t = "default" !== n ? e.getIn(["organizations", n, "tier_name"], "free") : e.getIn(["session", "user", "is_enterprise"]) ? "enterprise" : "free";
            var r = a.default[t];
            return e.setIn(["productTier"], t).setIn(["performance", "limit"], r.MAX_CLICK_DAYS).setIn(["sectionDateFilters", "performance"], r.PERF_DATE_FILTER).setIn(["sectionDateFilters", "bitlinks"], r.BITLINK_DATE_FILTER).setIn(["sectionDateFilters", "dashboard"], r.DASHBOARD_DATE_FILTER)
        }
    }, t.enforceSection = function () {
        return function (e) {
            var t = e.getIn(["productTier"]), n = a.default[t], r = e.getIn(["section"]);
            if (!r || !n.VALID_SECTIONS.contains(r))return e.setIn(["section"], n.DEFAULT_SECTION);
            if ("organization" === r) {
                var i = e.getIn(["session", "user", "login"]), o = e.getIn(["session", "activeOrganization"], "default");
                if ("admin" !== e.getIn(["orgUserRoles", o, i]))return e.setIn(["section"], n.DEFAULT_SECTION)
            }
            return e
        }
    }, t.validateBrand = function () {
        return function (e) {
            var n = e.getIn(["session", "activeOrganization"], "default");
            if ("default" === n)return e;
            if (e.getIn(["organizations", n, "brands"]).isEmpty()) {
                var r = e.getIn(["session", "user", "login"]);
                return "admin" === e.getIn(["orgUserRoles", n, r]) ? e.setIn(["session", "activeBrand"], "brandless") : c()(e)
            }
            var i = e.getIn(["session", "activeBrand"], "default");
            return "default" !== i && e.getIn(["brands", i, "organizationGuid"]) === n ? e : t.selectDefaultBrand(n)(e)
        }
    }
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    var r = n(36), i = n(108), a = n(2), o = n(72), s = n(91), l = n(92);
    t.fetchUser = function (e) {
        return function (e) {
            return o.UsersApiFactory().getUser({login: e}).then(t.reduceFullUser)
        }
    }, t.reduceUser = function (e) {
        return function (n) {
            var r = s.baseOrgEntities();
            return r = t.parseUser(e)(r), n.mergeDeep(r)
        }
    }, t.setEmailForEdit = function (e) {
        return function (t) {
            return t.setIn(["formData", "emailForEdit", "login"], e.login).setIn(["formData", "emailForEdit", "isPrimary"], e.isPrimary).setIn(["formData", "emailForEdit", "is_verified"], e.isVerified).setIn(["formData", "emailForEdit", "email"], e.email)
        }
    }, t.addEmail = function (e) {
        return function (e) {
            return o.UsersApiFactory().addEmailToUser({
                login: e.login,
                emailBody: {is_primary: e.isPrimary, email: e.email}
            }).then(function (t) {
                return function (t) {
                    return t.updateIn(["session", "user", "emails"], function (t) {
                        return t.concat(a.fromJS([{email: e.email, is_primary: e.isPrimary}]))
                    })
                }
            })
        }
    }, t.updateEmailForUser = function (e) {
        return function (e) {
            return o.UsersApiFactory().updateEmailForUser({
                login: e.login,
                email: e.email,
                emailBody: {is_primary: e.isPrimary, email: e.newEmail}
            }).then(function (t) {
                return function (t) {
                    return t.updateIn(["session", "user", "emails"], function (t) {
                        return t.map(function (t) {
                            return e.isPrimary && t.set("is_primary", t.get("email") == e.email), t.get("email") == e.email && t.set("email", e.newEmail), t
                        })
                    })
                }
            })
        }
    }, t.removeEmail = function (e) {
        return function (e) {
            return o.UsersApiFactory().deleteEmailForUser({login: e.login, email: e.email}).then(function (t) {
                return function (t) {
                    return t.updateIn(["session", "user", "emails"], function (t) {
                        return a.List(t.filter(function (t) {
                            return t.get("email") !== e.email
                        }))
                    })
                }
            })
        }
    }, t.reduceFullUser = function (e) {
        return function (n) {
            var r = s.baseOrgEntities();
            return r = e.organizations.reduce(function (t, n) {
                return t = c(e.login)(n)(t), t = u(e.login)(n)(t), t = d(n)(t)
            }, r), r = t.parseUser(e)(r), n.mergeDeep(r)
        }
    }, t.resendVerificationEmail = function (e) {
        return function (e) {
            return o.UsersApiFactory().reVerifyEmailForUser({login: e.login, email: e.email}).then(function () {
                return function (e) {
                    return e
                }
            })
        }
    };
    var c = function (e) {
        return function (t) {
            return function (n) {
                return n.orgUserRoles[t.guid] = n.orgUserRoles[t.guid] || {}, n.orgUserRoles[t.guid][e] = t.role_name, n
            }
        }
    };
    t.parseUserOrgRole = function (e) {
        return function (t) {
            return function (n) {
                return n.orgUserRoles[t.guid] = n.orgUserRoles[t.guid] || {}, n.orgUserRoles[t.guid][e.login] = e.role_name, n
            }
        }
    };
    var u = function (e) {
        return function (t) {
            return function (n) {
                return t.brands.reduce(function (n, r) {
                    return l.parseUserOrgBrand(e)(t.guid)(n, r)
                }, n)
            }
        }
    }, d = function (e) {
        return function (t) {
            var n = e.brands, r = void 0 === n ? [] : n, a = i(e, "brands", "role_name");
            return a.brands = r.map(function (e) {
                return e.guid
            }), t.organizations[a.guid] = a, t
        }
    };
    t.parseUser = function (e) {
        return function (t) {
            var n = r(e);
            return n.role_name && delete n.role_name, e.organizations && delete n.organizations, t.users[n.login] = n, t
        }
    }
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    var r = n(261), i = n(25);
    t.initShareAccountsFromObject = function (e) {
        return function (t) {
            var n = r.remapShareAccounts(e || []), i = n.twitter, a = n.facebook;
            return t.setIn(["shareAccounts", "twitter"], i).setIn(["shareAccounts", "facebook"], a)
        }
    }, t.initLegacyBrandUser = function (e) {
        return function (t) {
            return i.V3TransitionFactory(e, t).getLegacyBrandUserInfo().then(function (e) {
                return function (t) {
                    var n = r.remapShareAccounts(e.shareAccounts || []), i = n.twitter, a = n.facebook;
                    return t.setIn(["shareAccounts", "twitter"], i).setIn(["shareAccounts", "facebook"], a)
                }
            })
        }
    }, t.initLegacyBrandUserApikeyInfo = function (e) {
        return function () {
            return i.V3TransitionFactory().getUserApikey().then(function (e) {
                return function (t) {
                    return t.setIn(["session", "user", "apiKey"], e.apiKey).setIn(["session", "user", "legacyBrandGUID"], e.legacyBrandGUID).setIn(["session", "user", "legacyOrgGUID"], e.legacyOrgGUID)
                }
            })
        }
    }, t.removeShareAccount = function (e) {
        return function (e, t) {
            return i.V3Transition.removeShareAccount({account_type: e, account_login: t}).then(function (n) {
                return function (n) {
                    var r = n.getIn(["shareAccounts", e]).filter(function (e) {
                        return e.get("account_login") !== t
                    });
                    return n.setIn(["shareAccounts", e], r)
                }
            })
        }
    }
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    var r = n(2), i = n(72), a = n(246), o = function (e, t, n) {
        var i = r.fromJS(t.reduce(function (e, t) {
            return t.deeplink_apps = {
                ios: t.deeplink_apps.filter(function (e) {
                    return "ios" === e.os
                }).map(function (e) {
                    return e.guid
                }), android: t.deeplink_apps.filter(function (e) {
                    return "android" === e.os
                }).map(function (e) {
                    return e.guid
                })
            }, e[t.branded_short_domain] = new a.BSDInfo(r.fromJS(t)), e
        }, {}));
        return n.setIn(["bsds", e], i).setIn(["formData", "bsdForAddOrEdit"], i.first())
    };
    t.setBsdForAddOrEdit = function (e) {
        return function (t) {
            return t.setIn(["formData", "bsdForAddOrEdit"], r.fromJS(e))
        }
    }, t.stageBrandBSDAddition = function (e) {
        return function (t) {
            return t.updateIn(["formData", "activeBrandForEdit", "bsds"], function (t) {
                return t.add(e)
            })
        }
    }, t.stageBrandBSDRemoval = function (e) {
        return function (t) {
            return t.updateIn(["formData", "activeBrandForEdit", "bsds"], function (t) {
                return t.delete(e)
            })
        }
    }, t.fetchOrgBSDs = function (e, t) {
        return function (e) {
            return i.BsdApiFactory(t).getBSDs({organizationGUID: e}).then(function (t) {
                return function (n) {
                    return t.forEach(function (e) {
                        e.brand_guids.forEach(function (t) {
                            n = n.updateIn(["brands", t, "bsds"], function (t) {
                                return t.includes(e.branded_short_domain) ? t : t.concat(e.branded_short_domain)
                            })
                        })
                    }), o(e, t, n)
                }
            })
        }
    }, t.addOrgBSD = function (e, t) {
        return function (e, n) {
            return i.BsdApiFactory(t).addBSD({organizationGUID: e, bsd: n}).then(function (t) {
                return function (t) {
                    return t.setIn(["bsds", e, n], new a.BSDInfo({branded_short_domain: n}))
                }
            })
        }
    }, t.updateOrgBSD = function (e, t) {
        return function (e, n, a) {
            return i.BsdApiFactory(t).updateBSD({organizationGUID: e, bsd: n, updateBSDBody: a}).then(function () {
                return function (t) {
                    return t.setIn(["bsds", e, n], r.fromJS(a)).setIn(["formData", "bsdForAddOrEdit"], r.fromJS(a))
                }
            })
        }
    }, t.removeOrgBSD = function (e, t) {
        return function (e, n) {
            return i.BsdApiFactory(t).removeBSD({organizationGUID: e, bsd: n}).then(function () {
                return function (t) {
                    return t.update("brands", function (e) {
                        return e.map(function (e, t) {
                            return e.set("bsds", e.get("bsds").filterNot(function (e) {
                                return e === n
                            }))
                        })
                    }).deleteIn(["bsds", e, n])
                }
            })
        }
    }, t.revalidateOrgBSD = function (e, t) {
        return function (e, n) {
            return i.BsdApiFactory(t).validateBSD({organizationGUID: e, bsd: n}).then(function () {
                return function (t) {
                    return t.updateIn(["bsds", e, n, "validation_status"], "pending")
                }
            })
        }
    }, t.addBrandBSD = function (e, t) {
        return function (e, n) {
            return i.BsdApiFactory(t).addBrandBSD({brandGUID: e, bsd: n}).then(function (t) {
                return function (t) {
                    return t.updateIn(["brands", e, "bsds"], function (e) {
                        return e.includes(n) ? e : e.push(n)
                    })
                }
            })
        }
    }, t.removeBrandBSD = function (e, t) {
        return function (e, n) {
            return i.BsdApiFactory(t).removeBrandBSD({brandGUID: e, bsd: n}).then(function (t) {
                return function (t) {
                    return t.updateIn(["brands", e, "bsds"], function (e) {
                        return e.filterNot(function (e) {
                            return e === n
                        })
                    })
                }
            })
        }
    }, t.clearBsdForEdit = function () {
        return function (e) {
            return e.setIn(["formData", "bsdForAddOrEdit"], r.Map())
        }
    }
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    var r = n(2), i = n(3), a = n(589), o = n(72);
    t.setLoadingState = function () {
        return function (e) {
            return e.setIn(["deeplinkApps", "loading"], !0)
        }
    }, t.updateDeeplinkFlag = function (e, t) {
        return function (n) {
            if (t) {
                var i = n.getIn(["siteAssociation", t, "data", "android_apps"], r.List()).count() || n.getIn(["siteAssociation", t, "data", "ios_apps"], r.List()).count();
                n = n.setIn(["bitlinks", "cache", e, "hasDomainDeeplinks"], i)
            }
            return n.setIn(["bitlinks", "cache", e, "hasLinkDeeplinks"], !!n.getIn(["bitlinks", "cache", e, "rules"], r.List()).count())
        }
    }, t.getDeeplinkApps = function (e, t) {
        return function (e) {
            return o.DeeplinksApiFactory(t).getDeeplinkApps({organizationGUID: e}).then(function (e) {
                return function (t) {
                    return t.setIn(["deeplinkApps", "data"], a.parseDeeplinkApps(e)).setIn(["deeplinkApps", "loading"], !1).setIn(["deeplinkApps", "loadedOnce"], !0)
                }
            })
        }
    }, t.getDeeplinkRules = function (e, t) {
        return function (e, n, r) {
            return o.DeeplinksApiFactory(t).getDeeplinkRules({brandGUID: e, domain: n, id: r}).then(function (e) {
                return function (t) {
                    return t.setIn(["bitlinks", "cache", r, "rules"], a.parseDeeplinkRules(e))
                }
            })
        }
    }, t.editDeeplinkRule = function (e, t) {
        return function (e) {
            var n = e.brandGUID, r = e.domain, i = e.id, s = e.deeplinkRuleGUID, l = e.deeplinkRule;
            return o.DeeplinksApiFactory(t).updateDeeplinkRule({
                brandGUID: n,
                domain: r,
                id: i,
                deeplinkRuleGUID: s,
                deeplinkRule: l
            }).then(function (e) {
                return function (t) {
                    return t.setIn(["bitlinks", "cache", i, "rules", e.guid], a.parseDeeplinksRule(e))
                }
            })
        }
    }, t.createDeeplinkApp = function (e, t) {
        return function (e, n) {
            return o.DeeplinksApiFactory(t).createDeeplinkApp({organizationGUID: e, deeplinkApp: n}).then(function (e) {
                return function (t) {
                    return t.setIn(["deeplinkApps", "data", e.guid], a.parseDeeplinksApp(e))
                }
            })
        }
    }, t.createDeeplinkRule = function (e, t) {
        return function (e) {
            var n = e.brandGUID, r = e.domain, i = e.id, s = e.deeplinkRule;
            return o.DeeplinksApiFactory(t).createDeeplinkRule({
                brandGUID: n,
                domain: r,
                id: i,
                deeplinkRule: s
            }).then(function (e) {
                return function (t) {
                    return t.setIn(["bitlinks", "cache", i, "rules", e.guid], a.parseDeeplinksRule(e))
                }
            })
        }
    }, t.deactivateDeeplinkRule = function (e, t) {
        return function (e) {
            var n = e.brandGUID, r = e.domain, i = e.id, a = e.deeplinkRuleGUID;
            return o.DeeplinksApiFactory(t).deleteDeeplinkRule({
                brandGUID: n,
                domain: r,
                id: i,
                deeplinkRuleGUID: a
            }).then(function () {
                return function (e) {
                    return e.setIn(["bitlinks", "cache", i, "rules"], e.getIn(["bitlinks", "cache", i, "rules"]).filter(function (e) {
                        return a !== e.get("guid")
                    }))
                }
            })
        }
    }, t.getDeeplinkMetrics = function (e, t) {
        return function (e) {
            return o.DeeplinksApiFactory(t).getDeeplinkMetricsRollup(e).then(function (t) {
                return function (n) {
                    return n.setIn(["bitlinks", "deeplinkMetrics", e.id], a.parseMetricsRollup(t))
                }
            })
        }
    }, t.editDeeplinkApp = function (e, t) {
        return function (e, n, r) {
            return o.DeeplinksApiFactory(t).updateDeeplinkApp({
                organizationGUID: e,
                deeplinkAppGuid: n,
                deeplinkApp: r
            }).then(function (e) {
                return function (t) {
                    return t.setIn(["deeplinkApps", "data", e.guid], a.parseDeeplinksApp(e))
                }
            })
        }
    }, t.setActiveDeeplinksAppForEdit = function (e) {
        return function (t) {
            return t.setIn(["formData", "activeDeeplinksAppForEdit"], e)
        }
    }, t.deactivateDeeplinkApp = function (e, t) {
        return function (e, n) {
            return o.DeeplinksApiFactory(t).deactivateDeeplinkApp({
                organizationGUID: e,
                deeplinkAppGuid: n
            }).then(function () {
                return function (t) {
                    var i = t.getIn(["deeplinkApps", "data"]).filter(function (e) {
                        return n !== e.get("guid")
                    });
                    return t.getIn(["bsds", e]).forEach(function (i) {
                        t = t.setIn(["siteAssociation", i, "data", "android_apps"], t.getIn(["siteAssociation", i, "data", "android_apps"], r.List()).filter(function (e) {
                            return n !== e.get("app_guid")
                        })).setIn(["siteAssociation", i, "data", "ios_apps"], t.getIn(["siteAssociation", i, "data", "ios_apps"], r.List()).filter(function (e) {
                            return n !== e.get("app_guid")
                        })).updateIn(["bsds", e, i, "deeplink_apps", "android"], function (e) {
                            return e && e.filter(function (e) {
                                    return n !== e
                                })
                        }).updateIn(["bsds", e, i, "deeplink_apps", "ios"], function (e) {
                            return e && e.filter(function (e) {
                                    return n !== e
                                })
                        }).setIn(["formData", "siteAssociation", "appList"], t.getIn(["bsds", e, i, "deeplink_apps"]))
                    }), t = t.setIn(["deeplinkApps", "data"], i)
                }
            })
        }
    }, t.thirdPartyAppLookup = function (e, t) {
        return function (e, n, r) {
            return o.DeeplinksApiFactory(t).thirdPartyAppLookup({
                organizationGUID: e,
                thirdPartyAppId: n,
                os: r
            }).then(function (e) {
                return function (t) {
                    return t.setIn(["thirdPartyAppLookup", e.third_party_app_id], a.parseThirdPartyAppData(e))
                }
            }).catch(function () {
                return i.default.Notification.openDefaultNotification("MAIN", "App not found", "Only apps live in the store can be automatically imported. Please manually add app information."), function (e) {
                    return e.setIn(["thirdPartyAppLookup", n], a.parseThirdPartyAppData({third_party_app_id: n}))
                }
            })
        }
    }, t.updateAppAssociations = function (e) {
        return function (e) {
            return o.DeeplinksApiFactory().updateAppAssociations(e).then(function (t) {
                return function (n) {
                    return n.mergeIn(["siteAssociation"], a.parseAssociation(t, e.bsd)).updateIn(["bsds", e.organizationGUID, e.bsd, "deeplink_apps"], function (e) {
                        return a.parseBSDAssociation(t, e)
                    })
                }
            })
        }
    }, t.getAppAssociations = function (e) {
        return function (e) {
            return o.DeeplinksApiFactory().getAppAssociations(e).then(function (t) {
                return function (n) {
                    return n.mergeIn(["siteAssociation"], a.parseAssociation(t, e.bsd)).updateIn(["bsds", e.organizationGUID, e.bsd, "deeplink_apps"], function (e) {
                        return a.parseBSDAssociation(t, e)
                    })
                }
            })
        }
    }, t.setSiteAssociationssLoadingState = function (e) {
        return function (t) {
            return t = t.mergeIn(["siteAssociation"], a.parseAssociationLoadingState(e))
        }
    }, t.toggleApp = function (e, t) {
        return function (n) {
            return n.setIn(["formData", "siteAssociation", "appList", t], e), 1 !== e.count() || e.contains(n.getIn(["formData", "siteAssociation", "appFallback", t])) || n.setIn(["formData", "siteAssociation", "appFallback", t], e.first()), n
        }
    }, t.setAppForLinkException = function (e, t, n) {
        return function (r) {
            return r.setIn(["formData", "linkException", t], e).setIn(["formData", "activeRule"], n)
        }
    }, t.setAppFallback = function (e, t) {
        return function (n) {
            return n.setIn(["formData", "siteAssociation", "appFallback", t], e), n
        }
    }, t.setInstallPreference = function (e, t) {
        return function (n) {
            return n.setIn(["formData", "siteAssociation", t + "_install_preference"], e), n
        }
    }, t.setSiteAssociationForm = function (e, t) {
        return function (n) {
            var i = n.getIn(["siteAssociation", t, "data", "android_apps"], r.List()).filter(function (e) {
                return e.get("fallback")
            }), a = n.getIn(["siteAssociation", t, "data", "ios_apps"], r.List()).filter(function (e) {
                return e.get("fallback")
            });
            return n = n.setIn(["formData", "siteAssociation", "android_install_preference"], n.getIn(["siteAssociation", t, "data", "android_install_preference"])).setIn(["formData", "siteAssociation", "ios_install_preference"], n.getIn(["siteAssociation", t, "data", "ios_install_preference"])).setIn(["formData", "siteAssociation", "appList"], n.getIn(["bsds", e, t, "deeplink_apps"])).setIn(["formData", "siteAssociation", "appFallback", "android"], i.count() ? i.first().get("app_guid") : null).setIn(["formData", "siteAssociation", "appFallback", "ios"], a.count() ? a.first().get("app_guid") : null)
        }
    }
}, , function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    var r = n(0), i = n(1), a = n(4), o = {
        getInitialState: function () {
            return {selected: ""}
        }, select: function () {
            this.setState({selected: "selected"})
        }, deselect: function () {
            this.setState({selected: ""})
        }
    }, s = i("Dropdown", o, function (e) {
        var t = e.aspect, n = e.items, i = e.header, o = e.onClickHandler, s = e.clickCallback;
        return r.createElement("div", {
            className: "dropdown--" + t + " " + this.state.selected,
            onMouseLeave: this.deselect
        }, r.createElement("div", {className: "dropdown--header"}, r.createElement("span", {
            className: "dropdown--text",
            onMouseEnter: this.deselect,
            onClick: s
        }, i), r.createElement("span", {onMouseOver: this.select}, r.createElement(a.default, {iconName: "selector-icon"}))), r.createElement("ul", {className: "dropdown--list"}, n.map(function (e) {
            return e.get("display") ? r.createElement("li", {
                className: "dropdown--item " + (i.toUpperCase() === e.get("label") ? "selected" : ""),
                key: e.get("label"),
                onClick: function () {
                    return o(e.get("action"))
                }
            }, e.get("label"), e.get("icon") ? r.createElement(a.default, {iconName: e.get("icon")}) : null) : null
        })))
    });
    t.default = s
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    var r = n(0), i = n(1), a = n(636), o = n(637), s = i("EasterEgg", function (e) {
        var t = e.type;
        return r.createElement("div", null, "chauncey" == t.deref() ? r.createElement(a.default, null) : null, "disco" == t.deref() ? r.createElement(o.default, null) : null)
    });
    t.default = s
}, , , , , , function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    var r = n(0), i = n(1), a = n(34), o = {
        getInitialState: function () {
            return {value: this.props.value, timer: null, focus: !1}
        }, getDefaultProps: function () {
            return {value: "", expandable: !0}
        }, componentDidMount: function () {
            this.props.expandable && this.adjustTextArea()
        }, adjustTextArea: function () {
            if (this.props.expandable) {
                var e = this.refs.textarea;
                e && (e.style.height = "1px", e.style.height = 10 + e.scrollHeight + "px", this.setState({timer: null}))
            }
        }, onChange: function (e) {
            this.setState({value: e.target.value})
        }, onKeyUp: function (e) {
            this.props.expandable && null === this.state.timer && this.setState({timer: setTimeout(this.adjustTextArea, 200)}), "function" == typeof this.props.onEnterAction && this.props.onEnterAction(e)
        }, onKeyDown: function (e) {
            e.keyCode === a.keys.ENTER && e.preventDefault()
        }, onClipboardEvent: function () {
            this.props.expandable && setTimeout(this.adjustTextArea, 0)
        }, onPaste: function (e) {
            this.onClipboardEvent(), "function" == typeof this.props.onPasteAction && this.props.onPasteAction(e)
        }, onFocus: function () {
            this.setState({focus: !0})
        }, onBlur: function () {
            this.setState({focus: !1})
        }, componentWillReceiveProps: function (e) {
            e.value !== this.props.value && this.setState({value: e.value})
        }
    }, s = i("TextField", [o], function (e) {
        var t = this, n = e.label, i = e.error, a = e.placeholder, o = e.autofocus, s = e.maxLength, l = void 0 === s ? 500 : s, c = e.expandable, u = void 0 !== c && c;
        return r.createElement("div", {
            className: "text-field--wrapper", onClick: function () {
                return t.refs.textarea.focus()
            }
        }, r.createElement("div", {className: "text-field--MAIN " + (this.state.focus ? "active" : "") + " " + (i ? "error" : "")}, r.createElement("label", {className: "text-field--label"}, n), r.createElement("div", {className: "text-field--textarea-wrapper"}, r.createElement("textarea", {
            type: "text",
            placeholder: a,
            rows: u ? 2 : 1,
            className: "text-field--textarea",
            ref: "textarea",
            value: this.state.value,
            maxLength: l,
            onChange: this.onChange,
            onKeyUp: this.onKeyUp,
            onKeyDown: this.onKeyDown,
            onPaste: this.onPaste,
            onCut: this.onClipboardEvent,
            onFocus: this.onFocus,
            onBlur: this.onBlur,
            autoFocus: o,
            autoComplete: "false"
        }))), i && r.createElement("p", {className: "text-field--error-text"}, i))
    });
    t.default = s
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    var r = n(0), i = n(1), a = n(116), o = n(3), s = {
        getInitialState: function () {
            return {appInstall: this.props.installPreference || "no_install"}
        }, componentWillReceiveProps: function (e) {
            this.props.installPreference !== e.installPreference && this.setState({appInstall: e.installPreference})
        }, onClick: function (e, t) {
            var n = e.substring(t.length);
            o.default.UI.setInstallPreference(n, t), this.props.onClick && this.props.onClick()
        }, componentWillUnmount: function () {
            o.default.UI.setInstallPreference("", "")
        }, getInstallPreferences: function (e) {
            var t = this.state.appInstall;
            return [{label: "Off", value: e + "no_install", checked: "no_install" === t}, {
                label: "Interstitial",
                value: e + "promote_install",
                checked: "promote_install" === t
            }, {label: "App store", value: e + "auto_install", checked: "auto_install" === t}]
        }
    }, l = i("InstallPreference", s, function (e) {
        var t = this, n = e.type, i = e.title, o = (e.onClick, e.lightenHeader), s = void 0 !== o && o;
        return r.createElement("div", null, r.createElement("div", {className: "action-sheet--sub-header" + (s ? " light" : "")}, i, " install preference"), r.createElement(a.default, {
            ref: n + "Install",
            name: n + "Install",
            aspect: "MAIN",
            values: this.getInstallPreferences(n),
            onClick: function (e) {
                return t.onClick(e, n)
            }
        }))
    });
    t.default = l
}, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function (e, t, n) {
    "use strict";
    function r(e) {
        var t = {};
        if ("string" == typeof e) {
            t[e] = 1
        } else if ("object" == typeof e && e.slice)for (var n = 0, r = e.length; n < r; n++)t[e[n]] = 1; else t = e;
        return t
    }

    function i(e, t) {
        var n = !1, r = {};
        for (var i in e)this._history.hasOwnProperty(t) && (this._history[t].hasOwnProperty(i) || (r[i] = e[i], n = !0));
        return n ? r : null
    }

    function a(e, t) {
        for (var n in e)this._history.hasOwnProperty(t) && (this._history[t][n] = !0)
    }

    function o(e) {
        for (var t, n = this._queues[e], r = {}, i = {}, a = 0; n.length;) {
            i = n.pop();
            for (var o in i)t = this.STAT_PREFIX + (this.STAT_PREFIX ? this.PREFIX_SEPARATOR : "") + o, a = r[t] || 0, r[t] = a + i[o]
        }
        return r
    }

    function s(e) {
        if (!this._can_send)return Promise.resolve(!1);
        var t = this._queues[e], n = {}, r = this.API_PREFIX + e;
        if (!t)throw new Error("Invalid Queue Name: " + e + "- BITLY.tracking.statsd");
        return t.length ? (n = o.call(this, e), c.api(r, n).catch(function (e) {
            return !1
        })) : Promise.resolve(!1)
    }

    function l(e, t) {
        if ("string" != typeof e)throw new Error("Invalid name (" + e + ") passed to StatsDTimer");
        this.name = e, this.tracker = t, this.start()
    }

    Object.defineProperty(t, "__esModule", {value: !0});
    var c = n(57), u = function (e) {
        void 0 === e && (e = {}), this._can_send = !e.disable_sending, this._queues = {
            incr: [],
            timing: []
        }, this._history = {incr: {}, timing: {}};
        for (var t = ["timeout", "api_prefix", "stat_prefix", "prefix_separator"], n = 0, r = t.length; n < r; n++) {
            var i = t[n];
            i in e && (this[i.toUpperCase()] = e[i])
        }
    };
    l.prototype = {
        constructor: l.prototype.constructor, start: function () {
            return this.start_time = +new Date, this
        }, stop: function () {
            return this.end_time = +new Date, this.diff = 0, this.start_time && this.end_time >= this.start_time && (this.diff = this.end_time - this.start_time), this.tracker.timing(this.name, this.diff), this
        }
    }, u.prototype = {
        constructor: u.prototype.constructor,
        TIMEOUT: 500,
        API_PREFIX: "/data/statsd/",
        STAT_PREFIX: "",
        PREFIX_SEPARATOR: ".",
        incr: function (e) {
            var t = r(e);
            return a.call(this, t, "incr"), this._queues.incr.push(t), s.call(this, "incr")
        },
        incrOnce: function (e) {
            var t = r(e), n = i.call(this, t, "incr");
            if (n)return this.incr(n)
        },
        pageView: function () {
            return this.incr("page_view")
        },
        timing: function (e, t) {
            var n = e;
            "string" == typeof n && "number" == typeof t && (n = {}, n[e] = t), this._queues.timing.push(n), s.call(this, "timing")
        },
        getTimer: function (e) {
            return new l(e, this)
        },
        flushQueues: function () {
            var e = this.isSendingEnabled();
            this.enableSending(), s.call(this, "incr"), s.call(this, "timing"), e || this.disableSending()
        },
        enableSending: function () {
            this._can_send = !0
        },
        disableSending: function () {
            this._can_send = !1
        },
        isSendingEnabled: function () {
            return this._can_send
        },
        setStatPrefix: function (e, t) {
            this.STAT_PREFIX = e
        },
        clone: function (e) {
            return new u(e)
        }
    }, t.default = u
}, , , function (e, t, n) {
    "use strict";
    function r(e, t) {
        var n = new RegExp("^" + e + "$", "i");
        return t.some(function (e) {
            return n.test(e)
        })
    }

    function i(e, t) {
        var n = new RegExp(e, "i");
        return t.filter(function (e) {
            return n.test(e)
        }).toSeq()
    }

    function a(e, t, n) {
        var a = e ? e.trim() : "";
        if (!a)return {isNewElement: !1, filteredList: t, error: null};
        if (a.length > o)return {isNewElement: !1, filteredList: t, error: "QUERY_TOO_LONG"};
        if (!a.match(/^[A-Za-z0-9_\- ]+$/))return {isNewElement: !1, filteredList: t, error: "INVALID_QUERY"};
        var s = i(a, t), l = !0;
        return (n || r(a, s)) && (l = !1), {isNewElement: l, filteredList: s.cacheResult(), error: null}
    }

    Object.defineProperty(t, "__esModule", {value: !0});
    var o = 50;
    t.filterAndCreate = a
}, function (e, t, n) {
    "use strict";
    var r = this && this.__extends || function () {
            var e = Object.setPrototypeOf || {__proto__: []}instanceof Array && function (e, t) {
                    e.__proto__ = t
                } || function (e, t) {
                    for (var n in t)t.hasOwnProperty(n) && (e[n] = t[n])
                };
            return function (t, n) {
                function r() {
                    this.constructor = t
                }

                e(t, n), t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
            }
        }();
    Object.defineProperty(t, "__esModule", {value: !0});
    var i = n(2), a = n(2), o = function (e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }

        return r(t, e), t
    }(i.Record({
        deeplink_apps: a.fromJS({ios: [], android: []}),
        branded_short_domain: null,
        https_bitlinks: !1,
        pending_domain: null,
        ssl_autoconfigure_error: !1,
        validating_domain: null,
        configuration_last_check_ts: null,
        validate_domain_error: null,
        ssl_cert: a.Map({custom_cert: null, valid_end: null, issuer: null}),
        configuration_error: null,
        https_enabled: !1,
        root_redirect: "",
        created: 0,
        is_active: !0,
        wildcard_redirect: "",
        validation_status: "pending"
    }));
    t.BSDInfo = o
}, , , , , function (e, t, n) {
    "use strict";
    function r(e) {
        if (null == e)throw new s.APIError("NOT_FOUND", 404);
        if (e.error)throw new s.APIError(e.error, 400);
        return e
    }

    Object.defineProperty(t, "__esModule", {value: !0});
    var i = n(14), a = n(247), o = n(17), s = n(88), l = n(57), c = n(25), u = function () {
        function e(e) {
            void 0 === e && (e = {}), this.v3api = c.V3TransitionFactory(e.api || l.api), this.now = e.now || function () {
                    return Date.now()
                }
        }

        return e.prototype.normalizeExpand = function (e) {
            return {
                user_link: e.short_url,
                domain: o.urlToDomain(e.short_url),
                long_url: e.long_url,
                long_url_domain: o.urlToDomain(e.long_url),
                user_hash: e.user_hash,
                global_hash: e.global_hash,
                global_link: o.hashToShortUrl(e.global_hash)
            }
        }, e.prototype.callExpand = function (e) {
            var t = this;
            return this.v3api.getExpand(e).then(function (e) {
                return e.data.expand.map(r)
            }).then(function (e) {
                return e.map(t.normalizeExpand)
            })
        }, e.prototype.normalizeInfo = function (e) {
            return {
                user_link: e.short_url,
                domain: o.urlToDomain(e.short_url),
                user_hash: e.user_hash,
                global_hash: e.global_hash,
                global_link: o.hashToShortUrl(e.global_hash),
                created_ts: 1e3 * e.created_at,
                title: e.title
            }
        }, e.prototype.callInfo = function (e) {
            var t = this;
            return this.v3api.getInfo(e).then(function (e) {
                return e.data.info.map(r)
            }).then(function (e) {
                return e.map(t.normalizeInfo)
            })
        }, e.prototype.callLinkEdit = function (e) {
            var t = a(e, ["title", "archived"]), n = Object.keys(t);
            0 === n.length && Promise.reject(new s.APIError("MISSING_ARG_EDIT", 400));
            var r = {link: e.short_url, edit: n};
            return this.v3api.editLink(i(r, t)).then(function (e) {
                return e.data.link_edit
            }).then(function (e) {
                return i({user_link: e.link, domain: o.urlToDomain(e.link)}, t)
            })
        }, e.prototype.callUserLinkSave = function (e) {
            var t = this, n = a(e, "title", "domain"), r = function (e) {
                return i(n, {
                    user_link: e.link,
                    domain: o.urlToDomain(e.link),
                    long_url: e.long_url,
                    long_url_domain: o.urlToDomain(e.long_url),
                    user_hash: o.shortUrlToHash(e.link),
                    global_hash: o.shortUrlToHash(e.aggregate_link),
                    global_link: e.aggregate_link,
                    new_link: e.new_link,
                    created_ts: t.now(),
                    modified_ts: t.now()
                })
            };
            return this.v3api.saveLink(i({longUrl: e.long_url}, n)).then(function (e) {
                return e.data.link_save
            }).then(r)
        }, e.prototype.normalizeUserLinkHistory = function (e) {
            return {
                user_link: e.link,
                domain: o.urlToDomain(e.link),
                long_url: e.long_url,
                long_url_domain: o.urlToDomain(e.long_url),
                user_hash: o.shortUrlToHash(e.link),
                global_hash: o.shortUrlToHash(e.aggregate_link),
                global_link: e.aggregate_link,
                created_ts: 1e3 * e.created_at,
                modified_ts: 1e3 * e.modified_at,
                user_ts: 1e3 * e.user_ts,
                client_id: e.client_id,
                title: e.title,
                archived: e.archived,
                note: e.note,
                keyword_link: e.keyword_link,
                keyword: o.shortUrlToHash(e.keyword_link),
                shares: e.shares || [],
                tags: e.tags || []
            }
        }, e.prototype.callUserLinkHistory = function (e) {
            return this.v3api.getBitlink(e.short_url).then(function (e) {
                return r(e.data.link_history[0])
            }).then(this.normalizeUserLinkHistory)
        }, e.prototype.normalizeDataTitle = function (e) {
            return {long_url: e.url, long_url_domain: o.urlToDomain(e.url), title: e.title}
        }, e.prototype.callDataTitle = function (e) {
            return this.v3api.getLinkTitle(e.long_url).then(function (e) {
                return r(e.data[0])
            }).then(this.normalizeDataTitle).then(function (e) {
                if (e.title)return e;
                throw new s.APIError("NO_DATA", 400, {data: e})
            })
        }, e
    }();
    t.default = u
}, , , , function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    var r = n(2), i = n(5), a = n(130), o = n(13), s = n(61), l = n(168), c = n(25), u = function () {
        function e(e, t, n) {
            this.v3api = c.V3TransitionFactory(n), this.ref = e, this.page = t
        }

        return e.prototype.getSectionDateFilter = function () {
            return this.ref.cursor(["sectionDateFilters", this.ref.cursor("section").deref()]).deref()
        }, e.prototype.onLoadGlobalEncoders = function (e) {
            if (!this.page.cursor(["cache", e]).getIn(["globalEncoders", "loadedOnce"])) {
                var t = this.page.cursor(["cache", e]);
                t.setIn(["globalEncoders", "loading"], !0), this.v3api.getLinkEncodersCount(t.get("userLink")).then(function (e) {
                    t.set("globalEncoders", r.fromJS({loading: !1, loadedOnce: !0, data: {encoderCounts: e.count}}))
                })
            }
        }, e.prototype.onLoadClicks = function (e) {
            var t = this, n = e.filter(function (e) {
                var n = t.page.cursor(["clickCache", t.getSectionDateFilter(), e, "clicks"]), r = n.get("loading", !1) || n.get("loadedOnce", !1);
                return t.page.cursor("cache").has(e) && !r
            });
            n.length > 0 && (this.page.cursor("clickCache").update(this.getSectionDateFilter(), r.Map(), function (e) {
                return e.mergeDeep(n.reduce(function (t, n) {
                    return t.setIn([n, "clicks"], new o.LoadableMap({
                        loading: !0,
                        loadedOnce: e.getIn([n, "loadedOnce"], !1),
                        data: e.getIn([n, "data"], r.Map())
                    }))
                }, r.Map()))
            }), a(n, 15).forEach(function (e) {
                t.v3api.getClicks(e).then(l.parseClicks).then(function (e) {
                    t.page.cursor("clickCache").mergeDeep(r.Map([[t.getSectionDateFilter(), e]]))
                })
            }))
        }, e.prototype.loadClickData = function (e, t, n, a) {
            var l = this, c = this.getSectionDateFilter(), u = ["clickCache", c, n], d = this.page.cursor(u).get(t, new o.LoadableMap);
            if (!d.get("loading") && !d.get("loadedOnce")) {
                this.page.cursor(u).set(t, new o.LoadableMap({loading: !0}));
                var p;
                p = null === a ? s.dateFilterParams(this.page.cursor(["cache", n]).get("userLink"), c, i.utc(this.page.cursor(["cache", n]).get("created"))) : s.dateFilterTimeSeriesParams(this.page.cursor(["cache", n]).get("userLink"), c, a, i.utc(this.page.cursor(["cache", n]).get("created"))), e(p).then(function (e) {
                    var n = new o.LoadableMap({data: r.fromJS(e), loadedOnce: !0});
                    l.page.cursor(u).set(t, n)
                }).catch(function (e) {
                    l.page.cursor(u).set(t, new o.LoadableMap({error: e}))
                })
            }
        }, e.prototype.onLoadChannels = function (e) {
            var t = this;
            this.loadClickData(function (e) {
                return t.v3api.getLinkReferrersByNetwork(e)
            }, "channels", e)
        }, e.prototype.onLoadClickHistory = function (e) {
            var t = this;
            this.loadClickData(function (e) {
                return t.v3api.getLinkClicks(e)
            }, "clickHistory", e, !1)
        }, e.prototype.onLoadCountries = function (e) {
            var t = this;
            this.loadClickData(function (e) {
                return t.v3api.getLinkCountries(e)
            }, "countries", e, !1)
        }, e
    }();
    t.default = u
}, function (e, t, n) {
    "use strict";
    function r(e) {
        return new a.UserPreferences({
            dismissedContent: i.Set(e.dismissed_content),
            domain_preference: e.domain_preference,
            bbt2_graph_panel_state: "closed" === e.bbt2_graph_panel_state ? "closed" : "open",
            preferred_brand: e.preferred_brand
        })
    }

    Object.defineProperty(t, "__esModule", {value: !0});
    var i = n(2), a = n(131);
    t.parsePreferences = r
}, function (e, t) {
    var n = e.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
    "number" == typeof __g && (__g = n)
}, function (e, t) {
    e.exports = function (e) {
        return "object" == typeof e ? null !== e : "function" == typeof e
    }
}, function (e, t, n) {
    e.exports = !n(260)(function () {
        return 7 != Object.defineProperty({}, "a", {
                get: function () {
                    return 7
                }
            }).a
    })
}, function (e, t) {
    e.exports = function (e) {
        try {
            return !!e()
        } catch (e) {
            return !0
        }
    }
}, function (e, t, n) {
    "use strict";
    function r(e) {
        return void 0 === e && (e = []), {
            twitter: i.List(e.filter(function (e) {
                return "twitter" === e.account_type
            }).map(function (e) {
                return new a.ShareAccount(e)
            })), facebook: i.List(e.filter(function (e) {
                return "facebook" === e.account_type
            }).map(function (e) {
                return new a.ShareAccount(e)
            }))
        }
    }

    Object.defineProperty(t, "__esModule", {value: !0});
    var i = n(2), a = n(262);
    t.remapShareAccounts = r
}, function (e, t, n) {
    "use strict";
    var r = this && this.__extends || function () {
            var e = Object.setPrototypeOf || {__proto__: []}instanceof Array && function (e, t) {
                    e.__proto__ = t
                } || function (e, t) {
                    for (var n in t)t.hasOwnProperty(n) && (e[n] = t[n])
                };
            return function (t, n) {
                function r() {
                    this.constructor = t
                }

                e(t, n), t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
            }
        }();
    Object.defineProperty(t, "__esModule", {value: !0});
    var i = n(2), a = function (e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }

        return r(t, e), t
    }(i.Record({
        numeric_id: "",
        account_login: "",
        account_id: "",
        primary: !1,
        visible: !0,
        is_delegated: !1,
        full_name: "",
        account_name: "",
        connected: 0,
        errors: i.Map(),
        oauth_error: null
    }));
    t.ShareAccount = a
}, function (e, t, n) {
    "use strict";
    function r(e, t) {
        return new s.User(a.fromJS(o({
            email: e.email,
            is_verified: e.is_verified,
            display_name: e.display_name,
            full_name: e.full_name
        }, t), l))
    }

    function i(e) {
        return new s.User(a.fromJS(e, l))
    }

    Object.defineProperty(t, "__esModule", {value: !0});
    var a = n(2), o = n(14), s = n(131), l = function (e, t) {
        return "domain_options" === e ? a.Set(t) : a.Iterable.isIterable(t) ? a.Iterable.isKeyed(t) ? t.toMap() : t.toList() : t
    };
    t.parseUser = r, t.parseUserInfo = i
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    var r = n(2), i = n(25);
    t.setPreference = function (e) {
        return function (t) {
            return i.V3TransitionFactory(e).setPreferenceForUser({pref: t}).then(function () {
                return function (e) {
                    return e.setIn(["session", "preferences", t[0]], t[1])
                }
            })
        }
    }, t.setUnsafePreference = function (e, t, n) {
        return function (r) {
            return i.V3TransitionFactory(e).setPreferenceForUser({pref: [t, n]}), r.setIn(["session", "preferences", t], n), r
        }
    }, t.setUnsafeDismissedContent = function (e, t) {
        return function (n) {
            var a = ["session", "preferences", "dismissedContent"], o = n.getIn(a, r.Set()).add(t);
            return i.V3TransitionFactory(e).setPreferenceForUser({pref: ["dismissed_content", o.toJS().join(",")]}), n.setIn(a, o), n
        }
    }, t.fetchDomainPreference = function (e) {
        return function (t) {
            return i.V3TransitionFactory(e, t).getDomainPreference().then(function (e) {
                return function (t) {
                    return t.setIn(["session", "preferences", "domain_preference"], e.data.preferences.domain_preference)
                }
            })
        }
    }, t.setDomainPreference = function (e) {
        return function (t) {
            return i.V3TransitionFactory(e).setDomainPreference({domain_preference: t}).then(function () {
                return function (e) {
                    return e.setIn(["session", "preferences", "domain_preference"], t)
                }
            })
        }
    }
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    var r = n(0), i = n(1), a = n(266);
    t.default = i("ShareList", function (e) {
        var t = e.shares;
        return r.createElement("div", {className: "info-wrapper--MAIN"}, r.createElement("h4", {className: "info-wrapper--header"}, "Share History"), t.map(function (e) {
            return r.createElement(a.default, {
                key: e.share_type + "-" + e.ts,
                date: e.ts,
                email: e.email,
                type: e.share_type,
                text: e.text,
                accountName: e.account_name
            })
        }))
    })
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    var r = n(0), i = n(1), a = n(5), o = n(4), s = i("Share", function (e) {
        var t, n, i = e.email, s = e.date, l = e.type, c = e.accountName, u = e.text;
        switch (l) {
            case"twitter":
                t = r.createElement(o.default, {iconName: "twitter-icon"}), n = r.createElement("p", {className: "share--name"}, c, " ", r.createElement("span", {className: "share--account"}, "@", c));
                break;
            case"facebook":
                t = r.createElement(o.default, {iconName: "facebook-icon"}), n = r.createElement("p", {className: "share--date"}, "via Facebook ", a(s).format("MMM DD, YYYY HH:mm"));
                break;
            case"email":
                t = r.createElement(o.default, {iconName: "email-shared-icon"}), n = r.createElement("div", null, " ", r.createElement("p", {className: "share--name"}, "Emailed to: ", i), r.createElement("p", {className: "share--date"}, a(s).format("MMM DD, YYYY HH:mm")))
        }
        return r.createElement("div", {className: "share--MAIN"}, t, n, r.createElement("p", {className: "share--summary"}, u))
    });
    t.default = s
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    var r = n(0), i = n(5), a = n(2), o = n(1), s = n(3), l = n(9), c = n(61), u = n(4), d = n(8), p = n(37), f = n(38), h = {
        bulkArchive: function (e) {
            e.preventDefault();
            var t = "on" == this.props.filter.cursor("archived").deref();
            s.default.API.bulkArchiveBitlink(this.props.selectedBitlinks, t)
        }, bulkTag: function (e) {
            e.preventDefault(), s.default.UI.openSheet("bulkTags")
        }, createExportParams: function () {
            var e, t = this, n = this.props.selectedBitlinks.map(function (e) {
                return t.props.cache.getIn([e, "userHash"])
            });
            if (this.props.dateFilter.get("unit_reference_ts")) {
                var r = c.getStartAndEndTime(this.props.dateFilter);
                e = {hash: n, start_ts: r.startDate, stop_ts: r.endDate}
            } else e = {hash: n, start_ts: this.props.user.get("member_since"), stop_ts: i.utc().unix()};
            return a.fromJS(e)
        }
    };
    t.default = o("Multiselect", [h], function (e) {
        var t = (e.bitlink, e.activeBrand), n = (e.dateFilter, e.cache, e.filter), i = e.selectedBitlinks, a = e.productTier, o = e.totalSelectedClicks, s = this.createExportParams(), c = "enterprise" == a.deref();
        return r.createElement("div", {className: "multiselect--MAIN"}, r.createElement("div", {className: "multiselect--actions"}, r.createElement(d.default, {
            aspect: "GHOST-PRIMARY",
            clickCallback: this.bulkTag,
            label: "TAG"
        }), r.createElement(d.default, {
            aspect: "GHOST-PRIMARY",
            clickCallback: this.bulkArchive,
            label: "off" == n.get("archived") ? "HIDE" : "UNHIDE"
        }), c ? r.createElement(p.default, {
            action: f.exportUrl("/data/clicks/export_by_date", t),
            link: null,
            extraParams: s,
            buttonAspect: "GHOST-PRIMARY"
        }) : null, r.createElement("div", {className: "multiselect--header"}, i.count(), " ", "Bitlink" + (i.count() > 1 ? "s" : ""), " Selected"), r.createElement("div", {className: "multiselect--icon"}, i.take(3).map(function (e) {
            return r.createElement(u.default, {key: e, iconName: "item-selected-icon"})
        })), r.createElement("span", {className: "multiselect--total"}, l.commifyNumber(o)), r.createElement("span", {className: "multiselect--total-label"}, "TOTAL CLICKS")))
    })
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    var r = n(0), i = n(1), a = n(2), o = n(7), s = n(17), l = n(8), c = n(53), u = n(29), d = n(182), p = n(80), f = n(3), h = n(44), g = n(98), m = n(34), v = n(16), k = n(23), b = n(65), y = {
        getInitialState: function () {
            return {selectedChannels: this.getChannels(), selectAll: !1, utmParams: !1}
        }, componentDidUpdate: function () {
            this.refs.longUrl.refs.textarea.focus(), this.state.selectedChannels || this.setState({selectedChannels: this.getChannels()}), this.props.preferences.get("domain_preference") || "bitly.org" === this.props.bitlyDomains.first() || f.default.Preferences.setDomainPreference(this.props.bitlyDomains.first())
        }, componentDidMount: function () {
            this.showApplyButton()
        }, componentWillUnmount: function () {
            f.default.Forms.setShortenDomain(null)
        }, getChannels: function () {
            var e, t = this.props.campaigns;
            if (t)if (t.get("activeChannel"))e = t.get("channelsCache").filter(function (e, n) {
                return n === t.get("activeChannel")
            }).map(function (e) {
                return e.set("enabled", !0)
            }); else {
                var n = t.getIn(["campaignCache", t.get("activeCampaign"), "campaign_channels", "channels"], a.List()).filter(function (e) {
                    return t.get("channelsCache").has(e.get("guid"))
                });
                e = a.fromJS(n.reduce(function (e, t) {
                    return e[t.get("guid")] = {id: t.get("guid"), label: t.get("name"), enabled: !1}, e
                }, {}))
            }
            return e
        }, clickChannel: function (e) {
            var t, n;
            this.state.utmParams ? "selectall" === e.get("id") ? (t = e.get("enabled"), n = this.state.selectedChannels.map(function (t) {
                return t.set("enabled", e.get("enabled"))
            })) : (n = this.state.selectedChannels.setIn([e.get("id"), "enabled"], e.get("enabled")), t = this.state.selectedChannels.count() === n.filter(function (e) {
                    return e.get("enabled")
                }).count()) : n = this.state.selectedChannels.update(function (t) {
                return t.map(function (t) {
                    return t = t.get("id") == e.get("id") && e.get("enabled") ? t.set("enabled", e.get("enabled")) : t.set("enabled", !1)
                })
            }), this.setState({selectAll: t, selectedChannels: n})
        }, updateParams: function (e) {
            var t = this.state.selectedChannels, n = {utmParams: e.get("enabled")};
            t && t.delete && (n.selectAll = !1, n.selectedChannels = t.map(function (e) {
                return e.set("enabled", !1)
            })), this.setState(n)
        }
    }, D = !!navigator.userAgent.match(/Trident\/7\./), I = {
        submitCreateBitlinkForm: function (e) {
            e.preventDefault(), "chauncey" === this.refs.longUrl.state.value.trim().toLowerCase() ? (f.default.EasterEgg.startEasterEgg("chauncey"), f.default.UI.closeSheet()) : this.submitLink(this.refs.longUrl.state.value)
        }, submitLink: function (e) {
            var t = this.refs.domain ? this.refs.domain.props.label : "", n = s.protocolizeUrl(e.trim());
            if (s.isUrl(n))"campaigns" == this.props.type ? f.default.Campaigns.addUrlToChannels({
                url: n,
                channel_guids: this.state.selectedChannels.filter(function (e) {
                    return e.get("enabled")
                }).keySeq().toArray(),
                add_utm_params: this.state.utmParams
            }) : f.default.API.createBitlink(n, t); else {
                var r = k.bitlinkShortenErrors.INVALID_URI;
                f.default.Notification.openDefaultNotification("ERROR", r.title, r.text)
            }
        }, submitOnPaste: function (e) {
            "campaigns" != this.props.type && (D || (window.clipboardData ? this.submitLink(window.clipboardData.getData("Text")) : e.clipboardData && this.submitLink(e.clipboardData.getData("text/plain"))))
        }, submitOnEnter: function (e) {
            e.keyCode === m.keys.ENTER && this.submitCreateBitlinkForm(e)
        }
    }, A = i("BitlinkCreateSheet", [y, I, o.ActionSheetMixin, o.BSDRateLimitMixin], function (e) {
        var t = e.session, n = (e.bitlinkRateLimit, e.bsdRateLimit, e.preferences), i = e.bitlyDomains, o = e.domains, s = e.selectedDomain, m = e.skipRateLimitChecks, k = e.hideHelpText, y = e.onDomainClick, D = e.accountSettings, I = e.url, A = e.type, E = void 0 === A ? "bitlink" : A, w = e.campaigns, C = e.section, _ = "campaigns" === E && w, U = this.state.selectedChannels && this.state.selectedChannels.delete, S = !m && this.bsdRateLimitCheck(), B = !m && this.encodeRateLimitCheck(), N = S || B ? r.createElement(h.default, {
            aspect: "MAIN",
            content: this.createUsageMonitoringMarketingModule(S, B)
        }) : null, O = o, T = D && !!D.getIn(["brandedShortDomain", "data", "configuration_error"]), R = O.count() > 1 && !S && !T, L = R ? y || function () {
            return f.default.UI.openSheet("bitlinkDomain")
        } : null, M = R ? "MAIN" : "DISABLED", P = o.filter(function (e) {
            return n.get("domain_preference") === e
        }), G = R && s ? s : P.count() ? P.first() : o.count() ? o.first() : i.first(), F = (this.refs.utm_params, this.state.selectedChannels && this.state.selectedChannels.count() && _);
        return r.createElement("form", {onSubmit: this.submitCreateBitlinkForm}, r.createElement("div", {className: "action-sheet--content-wrapper"}, _ ? r.createElement("h5", {className: "action-sheet--content-header"}, w.getIn(["campaignCache", w.get("activeCampaign"), "name"], null)) : null, N, _ ? null : r.createElement(p.default, {
            ref: "domain",
            checkbox: !1,
            label: G,
            clickHandler: L,
            aspect: M
        }), r.createElement("div", {className: "action-sheet--help-text"}, r.createElement("div", {
            className: "action-sheet--text",
            dangerouslySetInnerHTML: this.createSheetHelpText(O.count() < 1, T, G)
        })), r.createElement(d.default, {
            label: "Paste Long URL",
            ref: "longUrl",
            expandable: !0,
            autofocus: !0,
            maxLength: v.MAX_LONG_URL_LENGTH,
            onPasteAction: this.submitOnPaste,
            onEnterAction: this.submitOnEnter,
            value: "bitlinks" === C ? I : ""
        }), _ ? r.createElement(c.default, {
            ref: "utm_params",
            item: a.fromJS({
                html: '<h5 className=\'action-sheet--content-header\'>AUTO-ADD UTM PARAMETERS</h5>Select to generate Bitlinks for multiple Channels. <a href="https://bitly.is/KB-OneViewParameterAdding" target="_blank">Learn More</a>',
                name: "utm",
                enabled: this.state.utmParams
            }),
            aspect: "CHECKBOX",
            clickCallback: this.updateParams
        }) : null, F && U ? r.createElement("h5", {className: "action-sheet--content-header"}, "SELECT ", b.default("CHANNEL", this.state.selectedChannels.count())) : null, F && U ? r.createElement(u.default, {
            items: this.state.selectedChannels.toList(),
            selectAllItem: this.state.utmParams ? a.fromJS({
                html: "<b>Select All</b>",
                id: "selectall",
                enabled: this.state.selectAll
            }) : null,
            itemClickCallback: this.clickChannel,
            radio: !this.state.utmParams
        }) : this.state.selectedChannels ? r.createElement(g.default, {
            allItems: this.state.selectedChannels.toList(),
            header: "INCLUDED CHANNELS",
            searchPlaceholder: "Search channels",
            search: !1,
            ref: "dynamicSearch",
            type: "CHANNELS",
            maxItems: 10,
            itemClickCallback: null,
            link: {text: "Learn more", url: "https://bitly.is/KB-ChannelManagement"}
        }) : null, k ? null : r.createElement("div", {className: "action-sheet--tooltip"}, "To create a Bitlink from your ", r.createElement("br", null), " dashboard, press 'b'"), _ && t.get("featureFlags").has("bbt2_campaigns_bulk_import") ? r.createElement("div", {
            className: "action-sheet--link",
            onClick: function () {
                return f.default.UI.openSheet("bulkUpload")
            }
        }, "Bulk import URLS from CSV") : null, r.createElement("div", {
            className: "action-sheet--button-wrapper",
            ref: "applyButton"
        }, r.createElement(l.default, {
            aspect: "SOLID-SECONDARY",
            label: "CREATE",
            type: "submit",
            ref: "submitButton"
        }))))
    });
    t.default = A
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    var r = n(0), i = n(5), a = n(1), o = n(2), s = n(22), l = n(23), c = n(3), u = n(7), d = n(51), p = n(99), f = n(8), h = n(44), g = n(39), m = n(79), v = n(53), k = n(270), b = n(52), y = n(16), D = n(115), I = {
        submitEditBitlinkForm: function (e) {
            e.preventDefault(), this.hideApplyButton(), this.refs.tagSheet.refs.dynamicSearch.state.searchIsFocused || (c.default.API.editTags(this.props.bitlink), c.default.API.editBitlink(this.props.bitlink.get("userHash"), {title: this.refs.title.state.value}, this.refs.keyword.state.value, !1))
        }
    }, A = {
        componentDidMount: function () {
            this.props.hasMobileBehavior && c.default.Deeplinks.getDeeplinkRules(this.props.session.get("activeBrand"), this.props.bitlink.get("domain"), this.props.bitlink.get("userHash"))
        }, componentWillUnmount: function () {
            c.default.UI.clearBitlinkErrors(this.props.bitlink.get("userHash"))
        }, archiveNotification: function () {
            c.default.UI.archiveBitlink(this.props.bitlink)
        }, dismissCustomizeCoachmark: function (e) {
            c.default.Preferences.dismissContent("customize_coachmark"), e.stopPropagation()
        }, getAssociatedChannelAndCampaigns: function (e) {
            var t = this;
            if (e.isEmpty())return o.fromJS({channel: null, bitlinkCampaigns: o.Map()});
            var n = e.map(function (e) {
                var n = t.props.campaigns.getIn(["campaignCache", e, "name"], null), r = {guid: e};
                return n && (r.name = n), r
            }), r = n.filter(function (e) {
                return e.name
            }), i = (n.filter(function (e) {
                return !e.name
            }).map(function (e) {
                return e.guid
            }).toArray(), null);
            if (!r.isEmpty()) {
                var a = r.map(function (e) {
                    return t.props.campaigns.getIn(["campaignCache", e.guid, "campaign_channels", "channels"]).filter(function (e) {
                        return !e.getIn(["channel_bitlinks", "bitlinks"], o.List()).filter(function (e) {
                            return e.get("userHash") === t.props.bitlink.get("userHash") && e.get("domain") === t.props.bitlink.get("domain")
                        }).isEmpty()
                    })
                }), s = a && a.first().first();
                i = s ? s.get("channel_name") : "", c.default.Forms.setCampaignChannel(s ? s.get("channel_guid") : "")
            }
            return o.fromJS({channel: i, bitlinkCampaigns: n})
        }, addToCampaign: function () {
            this.props.bitlink.get("campaigns").isEmpty() ? c.default.UI.openSheet("bitlinkCampaignChannel") : (c.default.Campaigns.getChannels(), c.default.UI.openSheet("selectCampaign"))
        }, removeCampaignFromBitlink: function (e, t, n, r) {
            D.default("REMOVE FROM CAMPAIGN", "Are you sure you want to remove this Bitlink from this Campaign")(c.default.Campaigns.removeCampaignBitlink, {
                id: e,
                domain: t,
                campaignGUID: n,
                channelGUID: r
            })
        }
    }, E = a("BitlinkEditSheet", [I, A, u.ActionSheetMixin, u.BSDRateLimitMixin], function (e) {
        var t = this, n = e.brandGUID, a = e.bitlink, c = (e.bsdRateLimit, e.bitlinkRateLimit, e.session), u = e.allTags, D = (e.error, e.skipRateLimitChecks), I = e.organizations, A = (e.campaigns, e.formData), E = e.hasMobileBehavior, w = e.deeplinkApps, C = void 0 === w ? null : w, _ = e.siteAssociation, U = I.getIn([c.get("activeOrganization"), "tier_name"]), S = !!c && y.default[U].VALID_SECTIONS.has("campaigns"), B = !c.getIn(["preferences", "dismissedContent"]).has("customize_coachmark"), N = a.get("archived") ? "Unhide Bitlink" : "Hide Bitlink", O = "", T = null, R = "", L = null, M = a.get("campaigns"), P = this.getAssociatedChannelAndCampaigns(M), G = P.get("channel"), F = A ? A.getIn(["addLinkToCampaign", "selectedChannel"]) : null;
        if (a.get("errors")) {
            var z = l.bitlinkCustomizeErrors[a.getIn(["errors", "customize"])];
            z && (z.text ? O = z.text : T = z.html);
            var x = l.bitlinkTitleErrors[a.getIn(["errors", "title"])];
            x && (x.text ? R = x.text : L = x.html)
        }
        var q = a.get("keywordDomain") || a.get("domain"), j = D ? null : this.createUsageMonitoringMarketingModule(this.bsdRateLimitCheck(), this.encodeRateLimitCheck());
        return r.createElement("form", {
            onSubmit: this.submitEditBitlinkForm,
            onFocus: this.showApplyButton
        }, r.createElement(d.default, {
            bitlink: a,
            hasEditButton: !1,
            shareComponent: "shareSecondSheet"
        }), r.createElement("div", {className: "action-sheet--content-wrapper"}, r.createElement("div", null, r.createElement("time", {
            dateTime: i(a.get("created")).utc().format("YYYY-MM-DD"),
            className: "action-sheet--created-date"
        }, "Created " + s.formatDateShort(a.get("created"))), this.props.displayArchiveBitlink && r.createElement("span", {className: "action-sheet--text"}, r.createElement("a", {
                className: "archive-link",
                title: N,
                onClick: this.archiveNotification
            }, N)), r.createElement("div", {className: "title-wrapper"}, r.createElement(m.default, {
            type: "text",
            value: a.get("title"),
            label: "Title",
            ref: "title",
            placeholder: "Add a title.",
            error: R,
            errorHtml: L
        })), j ? r.createElement(h.default, {
            aspect: "MAIN",
            content: j
        }) : null, r.createElement("div", {className: "coachmark-wrapper"}, r.createElement(m.default, {
            type: "text",
            aspect: "CUSTOM",
            ref: "keyword",
            staticValue: q + "/",
            value: a.get("keyword") || a.get("userHash"),
            label: "Customize",
            error: O,
            errorHtml: T
        }), B && r.createElement(g.default, {
                text: "Customize the back half of your links to make them meaningful and memorable!",
                button: {aspect: "SOLID-SECONDARY", label: "Ok, I got it!", callback: this.dismissCustomizeCoachmark}
            })), this.props.displayDomainHelpText && r.createElement("div", {className: "action-sheet--section-wrapper"}, r.createElement("h5", {className: "action-sheet--content-header"}, "CHANGE DEFAULT DOMAIN"), r.createElement("div", {className: "action-sheet--help-text"}, "You can change your default domain in your ", r.createElement("a", {
                href: "http://bit.ly",
                className: "action-sheet--root-url",
                target: "_blank"
            }, "bit.ly"), " account advanced settings."), r.createElement("div", {className: "action-sheet--help-text"}, "Settings > Advanced Settings > Branded Short Domains"))), r.createElement(p.default, {
            ref: "tagSheet",
            bitlink: a,
            allTags: u,
            error: this.props.error,
            applyButton: this.refs.applyButton
        }), S ? r.createElement("div", null, !M.isEmpty() && G ? r.createElement("div", {className: "action-sheet--campaign-wrapper"}, r.createElement("div", {className: "action-sheet--channel"}, r.createElement("div", {className: "action-sheet--content-header"}, "ASSOCIATED CHANNEL"), r.createElement("div", {className: "filter-list--wrapper"}, r.createElement(b.default, {
            key: "Channel",
            filterName: G,
            iconAction: null,
            labelAction: null,
            aspect: "ALTERNATE"
        }))), r.createElement("div", {className: "action-sheet--campaign-header"}, "ASSOCIATED CAMPAIGN"), r.createElement("div", {className: "filter-list--wrapper"}, P.get("bitlinkCampaigns").toSeq().map(function (e, n) {
            return e.name ? r.createElement(b.default, {
                key: n, filterName: e.name, iconAction: function () {
                    return t.removeCampaignFromBitlink(a.get("userHash"), a.get("domain"), e.guid, F)
                }, labelAction: null, aspect: "ALTERNATE"
            }) : null
        }))) : null, r.createElement(v.default, {
            ref: "addToCampaign",
            aspect: "CONTENT",
            blueLink: !0,
            item: o.fromJS({label: "+ Add to Campaign"}),
            clickCallback: this.addToCampaign
        })) : null, E ? r.createElement(k.default, {
            brandGUID: n,
            bitlink: a,
            siteAssociation: _,
            deeplinkApps: C
        }) : null), r.createElement("div", {
            className: "action-sheet--button-wrapper",
            ref: "applyButton"
        }, r.createElement(f.default, {aspect: "SOLID-SECONDARY", label: "SAVE"})))
    });
    t.default = E
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    var r = n(0), i = n(1), a = n(2), o = n(3), s = n(52), l = n(53), c = n(115), u = {
        addMobileBehavior: function () {
            var e = this.props.deeplinkApps, t = (this.props.bitlink.get("rules"), e && e.filter(function (e) {
                return e.get("scheme")
            }));
            e && !e.count() ? o.default.UI.openSheet("deeplinkAppsEmptyState") : t && !t.count() ? o.default.UI.openSheet("deeplinkAppsEmptyStateNoScheme") : o.default.UI.openSheet("selectOS")
        }, addRule: function (e, t, n, r, i, a) {
            var s = i ? "createBitlink" : "bitlinkMobile";
            e.preventDefault(), o.default.UI.setAppForLinkException(t, n.get("os"), a), o.default.UI.setInstallPreference(n.get("install_type"), n.get("os")), o.default.UI.openSheet(s + r)
        }, removeBitlink: function (e) {
            var t = this.props.bitlink.get("hasDomainDeeplinks"), n = {
                brandGUID: this.props.brandGUID,
                domain: this.props.bitlink.get("domain"),
                id: this.props.bitlink.get("userHash"),
                deeplinkRuleGUID: e
            }, r = t ? "REMOVE DEEP LINK OVERRIDE" : "REMOVE FROM BITLINK", i = t ? "Deep link will revert back to domain level behavior." : "Are you sure you want to remove this rule from this Bitlink?";
            c.default(r, i)(o.default.Deeplinks.deactivateDeeplinkRule, n)
        }, generatePill: function (e, t, n, i) {
            var a = this, l = t ? e.get("app_guid") : e.get("guid"), c = t ? e.get("guid") : "", u = "ios" === e.get("os") ? "iOS" : "Android", d = this.props.deeplinkApps && this.props.deeplinkApps.get(l), p = e.get("third_party_app_id"), f = "ios" === e.get("os") ? "Android" : "iOS";
            return d ? r.createElement("div", null, r.createElement("div", {
                className: "action-sheet--scheme",
                key: l
            }, r.createElement(s.default, {
                filterName: d.get("name"),
                aspect: "ALTERNATE",
                preIcon: d.get("os"),
                iconAction: t ? function () {
                    return a.removeBitlink(c)
                } : null
            }), d.get("scheme") ? r.createElement("div", {
                className: "action-sheet--link edit " + u, onClick: function (t) {
                    return a.addRule(t, l, e, u, p, c)
                }
            }, "EDIT") : r.createElement("div", {className: "action-sheet--help-text"}, "Custom schemes not supported."), 1 !== this.props.bitlink.get("rules").count() || this.props.bitlink.get("hasDomainDeeplinks") ? null : r.createElement("div", {
                className: "action-sheet--link",
                onClick: function () {
                    return o.default.UI.openSheet("selectLink" + f + "App")
                }
            }, "+ Add ", f, " Behavior"))) : null
        }
    }, d = i("BitlinkRulePills", u, function (e) {
        var t = this, n = e.bitlink, i = e.siteAssociation, o = e.deeplinkApps, s = n.get("rules"), c = i.getIn([n.get("domain"), "data"]), u = c && c.get("android_apps"), d = c && c.get("ios_apps"), p = u && u.count() ? o.get(u.first().get("app_guid")) : null, f = d && d.count() ? o.get(d.first().get("app_guid")) : null, h = n.get("hasDomainDeeplinks"), g = s.count();
        return r.createElement("div", null, g || h ? r.createElement("div", {className: "action-sheet--scheme-wrapper"}, r.createElement("div", {className: "action-sheet--content-header"}, "Mobile Behavior"), s && s.map(function (e) {
                return t.generatePill(e, !0, p, f)
            }), p && !s.filter(function (e) {
            return "android" === e.get("os")
        }).count() ? this.generatePill(p) : null, f && !s.filter(function (e) {
            return "ios" === e.get("os")
        }).count() ? this.generatePill(f) : null) : null, 0 !== g || h ? null : r.createElement("div", {className: "action-sheet--add-rule"}, r.createElement(l.default, {
            ref: "mobileBehavior",
            clickCallback: this.addMobileBehavior,
            blueLink: !0,
            item: a.fromJS({label: "+ Add Mobile Behavior"}),
            aspect: "CONTENT"
        })))
    });
    t.default = d
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    var r = n(0), i = n(1), a = n(2), o = n(8), s = n(79), l = n(3), c = n(98), u = n(18), d = n(15), p = {
        componentWillMount: function () {
            l.default.Campaigns.getChannels()
        }, createOrEditCampaign: function (e, t) {
            if (e.preventDefault(), !this.refs.dynamicSearch.state.searchIsFocused) {
                var n = this.getParams();
                n.name && (n.openAddLinkSheet = t, this.props.edit ? l.default.Campaigns.editCampaign(n) : this.props.willAddLinkToCampaign ? l.default.Campaigns.createCampaignForBitlink(n) : l.default.Campaigns.createCampaign(n))
            }
        }, createOrEditAndAdd: function (e) {
            this.createOrEditCampaign(e, !0)
        }, onlyCreateOrEditCampaign: function (e) {
            this.createOrEditCampaign(e, !1), l.default.UI.closeSheet()
        }, manageChannels: function () {
            l.default.UI.openSheet("channelsList")
        }, filterChannels: function (e) {
            l.default.Campaigns.filterChannels({query: e, ignoreNew: !0})
        }, stateUpdated: function (e) {
            var t = a.fromJS({
                label: e.get("label"),
                id: e.get("id"),
                enabled: !e.get("enabled"),
                showing: e.get("showing"),
                new: !!e.get("new")
            }), n = this.props.campaigns.getIn(["campaignCache", this.props.campaigns.get("activeCampaign"), "campaign_channels", "channels"], a.List());
            if (n && this.props.edit && !e.get("new") && e.get("enabled") && n.filter(function (t) {
                    return t.get("guid") === e.get("id")
                }).count()) {
                var r = a.fromJS([{
                    text: "CONFIRM", fill: !0, callback: function () {
                        return l.default.Campaigns.removeChannelFromCampaign(e.get("id"))
                    }
                }, {
                    text: "CANCEL", fill: !1, callback: function () {
                        return l.default.Notification.closeNotification()
                    }
                }]);
                l.default.Notification.openNotification(new d.default({
                    aspect: "ACTION",
                    title: "REMOVE CHANNEL",
                    text: "Remove channel from the campaign",
                    buttons: r
                }))
            } else l.default.Campaigns.toggleChannels(t);
            e.get("new") && this.refs.dynamicSearch.refs.search.changeValue("")
        }, getParams: function () {
            var e = this.refs.title.state.value || this.props.campaigns.getIn(["campaignCache", this.props.campaigns.get("activeCampaign", null), "name"], null);
            e || l.default.Notification.openNotification(new d.default({
                aspect: "ERROR",
                title: "Oops, there's been an error",
                text: "Campaign Title Required"
            }));
            var t = a.List();
            this.props.edit && (t = this.props.campaigns.getIn(["campaignCache", this.props.campaigns.get("activeCampaign"), "campaign_channels", "channels"]).map(function (e) {
                return e.get("guid")
            }));
            var n = this.props.campaigns.get("channelsCache").filter(function (e) {
                return e.get("enabled") && !t.includes(e.get("id"))
            }).map(function (e) {
                return e.get("id")
            }).toArray(), r = this.refs.description.state.value;
            return {
                campaignGUID: this.props.edit ? this.props.campaigns.get("activeCampaign") : null,
                name: e,
                description: r,
                channelIDs: n
            }
        }
    }, f = i("CampaignSheet", p, function (e) {
        var t, n, i = e.campaigns, l = e.edit, d = e.user, p = e.session, f = e.brandUserRoles, h = e.willAddLinkToCampaign, g = void 0 !== h && h, m = l ? i.get("activeCampaign") : null, v = i.getIn(["campaignCache", m, "campaign_channels", "channels"], a.List());
        v && (t = v.map(function (e) {
            return e.get("guid")
        })), i.get("channelsCache") && (n = i.get("channelsCache").map(function (e, n) {
            return t.includes(n) ? e.set("enabled", !0) : e
        }));
        var k = -1 !== ["org-admin", "admin"].indexOf(f.getIn([p.get("activeBrand"), d.get("login")])), b = n && n.count() > 0 ? "Manage Channels" : "To select channels, you must first create them in Manage Channels";
        return r.createElement("form", {onSubmit: this.createOrEditAndAdd}, r.createElement("div", {className: "action-sheet--content-wrapper"}, r.createElement(s.default, {
            label: "Title",
            ref: "title",
            error: null,
            placeholder: "Required",
            defaultValue: i.getIn(["campaignCache", m, "name"], null)
        }), r.createElement(s.default, {
            label: "Description",
            ref: "description",
            error: null,
            placeholder: "Optional",
            defaultValue: i.getIn(["campaignCache", m, "description"], null)
        }), n ? r.createElement(c.default, {
            allItems: n.toList(),
            maxItems: 500,
            itemClickCallback: this.stateUpdated,
            searchChangeCallback: this.filterChannels,
            header: "SELECT CHANNELS",
            searchPlaceholder: "Search channels",
            search: !0,
            ref: "dynamicSearch",
            type: "CHANNELS",
            showAll: !0
        }) : r.createElement(u.default, null), k && !g ? r.createElement("div", {
            className: "action-sheet--link-channel",
            onClick: this.manageChannels
        }, b) : null, g ? null : r.createElement("div", {
            className: "action-sheet--link-save-add",
            onClick: this.onlyCreateOrEditCampaign
        }, "Save and Add Bitlinks Later"), r.createElement("div", {
            className: "action-sheet--button-wrapper-visible",
            ref: "applyButton"
        }, r.createElement(o.default, {
            aspect: "SOLID-SECONDARY",
            label: g ? "SAVE CAMPAIGN" : "ADD BITLINKS",
            ref: "submitButton",
            type: "submit"
        }))))
    });
    t.default = f
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    var r = n(0), i = n(1), a = n(17), o = n(20), s = n(2), l = n(3), c = n(80), u = n(29), d = n(273), p = n(147), f = n(7), h = n(9), g = n(39), m = n(20), v = n(146), k = {
        getAccountOptions: function () {
            return s.fromJS([{label: "Settings", name: "settings"}, {label: "Resources", name: "resources"}])
        }, openAppPage: function (e) {
            l.default.UI.closeAllSheets(), l.default.UI.changeSection(e)
        }, dismissFeatureSwitcherCoachmark: function (e) {
            e.stopPropagation(), l.default.Preferences.dismissContent("feature_switcher_coachmark")
        }
    }, b = i("AccountMainSheet", [k, f.BSDRateLimitMixin], function (e) {
        var t = this, n = e.user, i = e.bitlinkRateLimit, l = e.bsdRateLimit, f = e.session, k = e.productTier, b = e.section, y = "organization" === b.deref(), D = "free" === k.deref(), I = f.hasIn(["featureFlags", "admin"]), A = this.getAccountOptions(), E = i.getIn(["data", "usage"], 0), w = i.getIn(["data", "limit"], 5e3), C = l.getIn(["data", "usage"], 0), _ = l.getIn(["data", "limit"]), U = !f.getIn(["preferences", "dismissedContent"]).has("feature_switcher_coachmark"), S = this.marketingUsageMonitoringLink(h.percentage(E, w), "encode"), B = this.marketingUsageMonitoringLink(h.percentage(C, _), "bsd"), N = s.fromJS([{
            label: "Daily Dashboard",
            iconName: "clicks-icon",
            link: "dashboard",
            display: !D
        }, {
            label: "Bitlink Management",
            iconName: "no_bitlinks-icon",
            link: "bitlinks",
            display: !D
        }, {
            label: "Custom Bitlinks",
            iconName: "custom_bitlink-icon",
            link: "customlinks",
            display: !D && o.isMobileDevice()
        }, {label: "OneView", iconName: "binoculars-icon", link: "campaigns", display: !D}]);
        return r.createElement("div", {className: "action-sheet--content-wrapper"}, r.createElement(d.default, {
            aspect: "ALTERNATE",
            image: !0,
            name: n.get("full_name") || n.get("display_name") || n.get("login"),
            email: v.getUserPrimaryEmail(n),
            session: f
        }), y ? null : r.createElement("div", null, r.createElement(p.default, {
            header: "Total Bitlinks",
            usageRate: E,
            usageLimit: w,
            url: S,
            aspect: "ALTERNATE"
        }), l.getIn(["data", "active"]) && D ? r.createElement(p.default, {
            header: "Branded Bitlinks",
            usageRate: C,
            usageLimit: _,
            url: B,
            aspect: "ALTERNATE",
            countdown: !0
        }) : null, I ? r.createElement("a", {
            key: "admin",
            href: a.rootDomainUrl("/_admin/")
        }, r.createElement(c.default, {
            aspect: "ALTERNATE",
            checkbox: !1,
            label: "Admin Tools",
            iconName: "none"
        })) : null), m.isDesktop() || y ? null : r.createElement("div", null, N.count(function (e) {
            return e.get("display")
        }) > 1 ? r.createElement("h5", {className: "action-sheet--brand-view-header"}, "Brand Views") : null, N.map(function (e) {
            return e.get("display") ? r.createElement("a", {
                key: e.get("label"),
                onClick: t.openAppPage.bind(null, e.get("link"))
            }, r.createElement(c.default, {
                aspect: "ALTERNATE",
                checkbox: !1,
                label: e.get("label"),
                iconName: e.get("iconName")
            })) : null
        }), !D && U ? r.createElement(g.default, {
            text: "Access all of your great Bitly Enterprise tools here.",
            button: {aspect: "SOLID-SECONDARY", label: "Ok, I got it!", callback: this.dismissFeatureSwitcherCoachmark}
        }) : null), y ? null : r.createElement("div", null, r.createElement("h5", {className: "action-sheet--brand-view-header"}, "Options"), r.createElement(u.default, {items: A})), r.createElement("a", {
            key: "log-out",
            href: a.rootDomainUrl("/a/sign_out")
        }, r.createElement(c.default, {
            aspect: "ALTERNATE",
            checkbox: !1,
            label: "Sign Out",
            iconName: "none",
            topBorder: y
        })))
    });
    t.default = b
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    var r = n(0), i = n(1), a = n(4), o = n(3), s = i("UserAccount", function (e) {
        var t = e.name, n = e.email, i = e.aspect, s = void 0 === i ? "MAIN" : i, l = e.image, c = void 0 !== l && l;
        e.session;
        return r.createElement("div", {
            className: "user-account--" + s, onClick: function () {
                return o.default.UI.openSheet("profile")
            }
        }, c ? r.createElement("img", {
            className: "user-account--image",
            src: "/s/bbt2/images/chauncey.svg"
        }) : null, r.createElement("div", {className: "user-account--user-name"}, t), r.createElement("div", {className: "user-account--email"}, n), r.createElement("div", {className: "user-account--icon"}, r.createElement(a.default, {iconName: "selector-icon"})))
    });
    t.default = s
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    var r = n(0), i = n(2), a = n(1), o = n(29), s = n(39), l = n(4), c = n(3), u = n(44), d = n(10), p = function (e) {
        c.default.UI.manageOrganization(e)
    }, f = function (e) {
        e.get("name") ? d.closeAllSheetsAnimation().then(function () {
            c.default.UI.switchBrand(e.get("name"))
        }) : p(e.get("organizationGUID"))
    }, h = function (e, t, n) {
        return e.filter(function (e) {
            return e.get("is_active")
        }).sort(function (e, t) {
            return e.get("name", "").localeCompare(t.get("name", ""))
        }).map(function (e) {
            return i.fromJS({
                id: e.get("guid"),
                label: n ? "Free Account" : e.get("name"),
                secondLabel: n ? e.get("name") : null,
                name: e.get("guid"),
                organizationGUID: e.get("organizationGuid"),
                enabled: e.get("guid") === t
            })
        }).toArray()
    }, g = function (e) {
        return [i.Map({label: "(this Bitly Account has no Groups)", name: "", organizationGUID: e.get("guid")})]
    }, m = function (e) {
        e.stopPropagation(), c.default.Preferences.dismissContent("brand_switcher_coachmark")
    }, v = function (e, t) {
        return e.get("tier_name") === t.get("tier_name") ? e.get("name", "").localeCompare(t.get("name", "")) : "free" === e.get("tier_name") ? 1 : -1
    }, k = a("BrandSwitcherSheet", function (e) {
        var t = e.activeBrandGuid, n = e.organizations, i = e.brands, a = e.orgUserRoles, c = e.session;
        return r.createElement("div", {className: "action-sheet--content-wrapper"}, n && n.sort(v).map(function (e) {
                var n = e.get("brands").map(function (e) {
                    return i.get(e)
                }), u = e.get("guid"), d = !c.getIn(["preferences", "dismissedContent"]).has("brand_switcher_coachmark"), v = "enterprise" === e.get("tier_name") && "admin" === a.getIn([u, c.getIn(["user", "login"])]), k = h(n, t, "enterprise" !== e.get("tier_name"));
                return 0 !== k.length || v ? r.createElement("div", {
                    className: "action-sheet--organization",
                    key: u
                }, r.createElement("div", {className: "action-sheet--content-header"}, r.createElement(l.default, {iconName: "enterprise" === e.get("tier_name") ? "enterprise-icon" : "personal-icon"}), "enterprise" === e.get("tier_name") ? e.get("name") : "Personal", r.createElement("span", {className: "action-sheet--text"}, v ? r.createElement("a", {
                    onClick: function () {
                        return p(u)
                    }
                }, "Manage") : null)), r.createElement("div", {className: "checklist--wrapper"}, r.createElement(o.default, {
                    radio: !0,
                    items: 0 !== k.length ? k : g(e),
                    itemClickCallback: f
                })), d ? r.createElement(s.default, {
                    text: "Quickly switch between your personal and enterprise groups.",
                    button: {aspect: "SOLID-SECONDARY", label: "Ok, I got it!", callback: m}
                }) : null) : null
            }).toArray(), r.createElement(u.default, {
            content: {
                header: "RETHINK THE LINK",
                text: "Check out our blog to learn advanced ways to use Bitly!",
                link: "",
                url: "https://bitly.is/blog"
            }, aspect: "GHOST"
        }))
    });
    t.default = k
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    var r = n(0), i = n(2), a = n(7), o = n(1), s = n(8), l = n(3), c = n(4), u = n(276), d = {
        componentDidMount: function () {
            this.showApplyButton(), l.default.Forms.setSiteAssociationForm(this.props.brandedShortDomain.get("branded_short_domain"))
        }, updateSiteAssociation: function (e) {
            e.preventDefault(), l.default.Deeplinks.updateAppAssociations()
        }
    }, p = o("MobileBehaviorSheet", [a.ActionSheetMixin, d], function (e) {
        var t = e.brandedShortDomain, n = (e.session, e.appList), a = e.fallbacks, o = e.fullAppList, l = e.siteAssociation, d = e.saf, p = n.get("ios").count(), f = n.get("android").count(), h = p + f, g = d.getIn([t.get("branded_short_domain"), "data", "ios_apps"], i.List()).count() || d.getIn([t.get("branded_short_domain"), "data", "android_apps"], i.List()).count(), m = g || h && (p && a.get("ios") || !p) && (f && a.get("android") || !f);
        return r.createElement("div", {className: "action-sheet--content-wrapper"}, r.createElement("div", {className: "action-sheet--help-text"}, "Apps will be give priority in the order shown. Drag and drop app to adjust order."), r.createElement("form", {
            className: "mobile-behavior--saf",
            onSubmit: this.updateSiteAssociation
        }, r.createElement(u.default, {
            appList: n.get("ios"),
            type: "ios",
            fallback: a.get("ios"),
            fullAppList: o,
            installPreference: l.get("ios_install_preference")
        }), r.createElement("br", null), r.createElement(u.default, {
            appList: n.get("android"),
            type: "android",
            fallback: a.get("android"),
            fullAppList: o,
            installPreference: l.get("android_install_preference")
        }), r.createElement("div", {className: "action-sheet--info"}, r.createElement("div", null, "Finish enabling this app's mobile behavior for the domain ", r.createElement("strong", null, t.getIn(["branded_short_domain"])), " by installing the Bitly SDK."), r.createElement("a", {
            href: "https://bitly.is/KB_MobileBehaviorSetup",
            target: "_blank",
            className: "action-sheet--clickable"
        }, "Learn more ", r.createElement(c.default, {iconName: "arrow-icon"}))), r.createElement("div", {
            className: "action-sheet--button-wrapper " + (m ? "" : "disabled"),
            ref: "applyButton"
        }, r.createElement(s.default, {
            aspect: "SOLID-SECONDARY",
            label: g ? "Save Domain Behaviors" : "Add Apps to Domain",
            type: "submit"
        }))))
    });
    t.default = p
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    var r = n(0), i = n(2), a = n(7), o = n(1), s = n(3), l = n(45), c = n(183), u = n(278), d = {
        getAppList: function () {
            var e = this, t = this.props.fullAppList;
            return this.props.appList.filter(function (e) {
                var n = t.get(e);
                return n && (n.get("android_sha256") && n.get("android_sha256", i.List()).count() || n.get("apple_app_entitlement_id"))
            }).map(function (n) {
                return i.Map({id: n, label: t.get(n).get("name"), name: n, enabled: e.props.fallback === n})
            })
        }, setAppFallback: function (e, t) {
            s.default.UI.setAppFallback(e.get("id"), t)
        }
    }, p = o("MobileBehaviorSection", [a.ActionSheetMixin, d], function (e) {
        var t = this, n = e.appList, i = e.type, a = (e.fallback, e.fullAppList, e.installPreference), o = n.count(), d = "ios" === i ? "iOS" : "Android";
        return r.createElement("div", null, r.createElement("div", {className: "action-sheet--content-header"}, d, " App", o ? r.createElement(l.default, {
            text: "Fallback",
            content: "The fallback app determines which install URLs will be promoted when these apps are not already installed on a user’s device."
        }) : null), r.createElement(u.default, {
            items: this.getAppList(), itemClickCallback: function (e) {
                return t.setAppFallback(e, i)
            }, os: i
        }), r.createElement("div", {
            className: "mobile-behavior--select-app", onClick: function () {
                return "ios" === i ? s.default.UI.openSheet("selectiOSApp") : s.default.UI.openSheet("selectAndroidApp")
            }
        }, "Select ", d, " Apps"), o ? r.createElement(c.default, {type: i, title: d, installPreference: a}) : null)
    });
    t.default = p
}, , function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    var r = n(0), i = n(1), a = n(3), o = n(279), s = {
        getInitialState: function () {
            return {data: this.props.items}
        }, componentWillReceiveProps: function (e) {
            this.props !== e && this.setState({data: e.items})
        }, componentDidMount: function () {
            this.placeholder = this.createPlaceholder()
        }, createPlaceholder: function () {
            var e = document.createElement("div");
            return e.className = "mobile-behavior--placeholder", e
        }, dragStart: function (e) {
            this.dragged = e.currentTarget, e.dataTransfer.effectAllowed = "move", e.dataTransfer.setData("text/html", e.currentTarget)
        }, dragEnd: function (e) {
            this.dragged.style.display = "block", this.dragged.parentNode.removeChild(this.placeholder);
            var t = this.state.data, n = Number(this.dragged.dataset.id), r = Number(this.over.dataset.id);
            n < r && r--, "after" == this.nodePlacement && r++;
            var i = t.get(n), o = t.splice(n, 1), s = o.splice(r, 0, i);
            this.setState({data: s});
            var l = s.map(function (e) {
                return e.get("id")
            });
            a.default.UI.toggleApp(l, this.props.os)
        }, dragOver: function (e) {
            if (e.preventDefault(), this.dragged.style.display = "none", "mobile-behavior--placeholder" != e.target.className && (this.over = e.target.closest(".draggable-item"), this.over)) {
                var t = e.clientY - this.over.offsetTop, n = this.over.offsetHeight / 2, r = e.target.parentNode.closest(".checklist--wrapper");
                t > n ? (this.nodePlacement = "after", r.insertBefore(this.placeholder, this.over.nextElementSibling)) : t < n && (this.nodePlacement = "before", r.insertBefore(this.placeholder, this.over))
            }
        }
    }, l = i("DraggableList", [s], function (e) {
        var t = this, n = (e.items, e.itemClickCallback), i = (e.os, 1 === this.state.data.count());
        return r.createElement("div", {
            className: "checklist--wrapper",
            onDragOver: this.dragOver
        }, this.state.data.map(function (e, a) {
            return r.createElement("div", {
                "data-id": a,
                key: a,
                draggable: !0,
                onDragEnd: t.dragEnd,
                onDragStart: t.dragStart,
                className: "draggable-item"
            }, r.createElement(o.default, {
                item: e,
                key: e.get("id", e.get("label") + e.get("secondLabel", "")),
                clickCallback: n,
                hideIcon: i
            }))
        }))
    });
    t.default = l
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    var r = n(0), i = n(1), a = n(136), o = n(4), s = {
        handleClick: function () {
            this.props.clickCallback && this.props.clickCallback(this.state.item)
        }
    }, l = {
        getInitialState: function () {
            return {item: this.props.item}
        }, componentWillReceiveProps: function (e) {
            this.setState({item: e.item})
        }
    }, c = i("DraggableMobileApp", [s, l], function (e) {
        var t = e.item, n = (e.clickCallback, e.hideIcon), i = r.createElement(a.default, {
            id: t.get("label"),
            name: t.get("name"),
            aspect: "LARGE",
            checked: this.state.item.get("enabled"),
            ref: "radioButton"
        });
        return r.createElement("div", {
            className: "checklist-row--MAIN",
            key: t.get("label"),
            onClick: this.handleClick
        }, n ? null : r.createElement(o.default, {iconName: "dragdrop-icon"}), r.createElement("div", {className: "checklist-row--text"}, t.get("label")), r.createElement("span", {className: "checklist-row--icon"}, i))
    });
    t.default = c
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    var r = n(0), i = n(2), a = n(1), o = n(7), s = n(3), l = n(29), c = n(8), u = {
        getInitialState: function () {
            return {appList: this.props.appList || i.List()}
        }, selectApps: function (e) {
            e.preventDefault(), s.default.UI.toggleApp(this.state.appList, this.props.type), s.default.UI.closeSheet()
        }, componentDidMount: function () {
            this.showApplyButton()
        }, stateUpdated: function (e) {
            if (this.state.appList.contains(e.get("id"))) {
                var t = this.state.appList.filter(function (t) {
                    return t !== e.get("id")
                });
                this.setState({appList: t.count() ? t : i.List()})
            } else this.setState({appList: this.state.appList.toList().push(e.get("id"))})
        }, getAppList: function (e) {
            var t = this, n = i.List(), r = this.state.appList.filter(function (e) {
                return t.props.fullAppList.get(e)
            }).map(function (e) {
                return i.Map({id: e, label: t.props.fullAppList.get(e).get("name"), enabled: !0, showing: !0, new: !1})
            }).toList();
            r.count() && (n = n.concat(r).toList());
            var a = this.props.fullAppList.filter(function (n, r) {
                return n.get("os") === e && !t.state.appList.contains(r)
            }).map(function (e, t) {
                return i.fromJS({enabled: !1, label: e.get("name"), new: !1, showing: !0, id: t})
            }).toList();
            return n.concat(a).toList()
        }
    }, d = a("SelectAppSheet", [u, o.ActionSheetMixin], function (e) {
        var t = e.allApps, n = e.type, a = (e.appList, e.fullAppList);
        t = this.getAppList(n);
        var o = t.filter(function (e) {
            var t = a.get(e && e.get("id")), n = t && (t.get("android_sha256") && t.get("android_sha256", i.List()).count() || t.get("apple_app_entitlement_id"));
            return e && n && e.get("label")
        }).toList();
        return r.createElement("div", {className: "action-sheet--content-wrapper"}, r.createElement("form", {
            ref: "form",
            onSubmit: this.selectApps,
            action: "#"
        }, r.createElement(l.default, {
            items: o,
            ref: "checklist",
            itemClickCallback: this.stateUpdated
        }), r.createElement("div", {
            className: "action-sheet--button-wrapper",
            ref: "applyButton"
        }, r.createElement(c.default, {aspect: "SOLID-SECONDARY", label: "APPLY", type: "submit"}))))
    });
    t.default = d
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    var r = n(0), i = n(2), a = n(1), o = n(7), s = n(3), l = n(29), c = n(8), u = n(4), d = {
        stateUpdated: function (e) {
            this.showApplyButton(), s.default.UI.setAppForLinkException(e.get("id"), this.props.type, null)
        }, onSubmit: function (e) {
            e.preventDefault(), s.default.UI.openSheet("createBitlink" + ("ios" === this.props.type ? "iOS" : "Android"))
        }, componentDidMount: function () {
            this.getApps().filter(function (e) {
                return e.get("enabled")
            }).count() && this.showApplyButton()
        }, getApps: function () {
            var e = this;
            return this.props.fullAppList && this.props.fullAppList.filter(function (t) {
                    return t.get("os") === e.props.type && t.get("scheme")
                }).toList().map(function (t, n) {
                    return i.Map({
                        id: t.get("guid"),
                        label: t.get("name"),
                        name: t.get("name"),
                        enabled: t.get("guid") === e.props.app
                    })
                })
        }, componentWillUnmount: function () {
            s.default.UI.setAppForLinkException("", "", null)
        }
    }, p = a("SelectLinkExceptionApp", [d, o.ActionSheetMixin], function (e) {
        var t = e.type, n = (e.app, e.fullAppList, this.getApps());
        return r.createElement("div", {className: "action-sheet--content-wrapper"}, r.createElement("div", {className: "action-sheet--help-text"}, "Select the mobile apps users on mobile devices will be sent to for this Bitlink"), r.createElement("div", {className: "action-sheet--icon-header"}, r.createElement(u.default, {iconName: t + "-icon"}), " ", r.createElement("span", null, "ios" === t ? "iOS" : "Android")), r.createElement("form", {
            ref: "form",
            onSubmit: this.onSubmit,
            action: "#"
        }, r.createElement(l.default, {
            radio: !0,
            items: n,
            ref: "checklist",
            itemClickCallback: this.stateUpdated
        }), r.createElement("div", {
            className: "action-sheet--button-wrapper",
            ref: "applyButton"
        }, r.createElement(c.default, {aspect: "SOLID-SECONDARY", label: "Next", type: "submit"}))))
    });
    t.default = p
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    var r = n(0), i = n(2), a = n(1), o = n(7), s = n(3), l = n(29), c = n(8), u = n(4), d = {
        componentDidMount: function () {
            this.showApplyButton();
            var e = this.props.emails.filter(function (e) {
                return e.get("is_verified") && e.get("is_primary")
            });
            e.isEmpty() || s.default.UI.setEmailForExport(e.first().get("email"))
        }, stateUpdated: function (e) {
            s.default.UI.setEmailForExport(e.get("id"))
        }, exportReport: function (e) {
            e.preventDefault(), "bitlinks" === this.props.section ? s.default.DataExport.exportBitlinkData({type: "date_created"}) : s.default.DataExport.exportPerformanceData({type: "performance"})
        }
    }, p = a("DataExportSheet", [d, o.ActionSheetMixin], function (e) {
        var t = (e.section, e.emails), n = e.email, a = t.filter(function (e) {
            return e.get("is_verified")
        }).toList().map(function (e, t) {
            var r = e.get("email");
            return i.Map({id: r, label: r, name: r, enabled: r === n})
        });
        return r.createElement("div", {className: "action-sheet--content-wrapper"}, a && !a.isEmpty() ? r.createElement("form", {
            ref: "form",
            onSubmit: this.exportReport,
            action: "#"
        }, r.createElement("div", {className: "action-sheet--help-text"}, "Select the email address to send your filtered result as a csv file."), r.createElement(l.default, {
            radio: !0,
            items: a,
            ref: "checklist",
            itemClickCallback: this.stateUpdated
        }), r.createElement("div", {
            className: "action-sheet--button-wrapper",
            ref: "applyButton"
        }, r.createElement(c.default, {
            aspect: "SOLID-SECONDARY",
            label: "Confirm",
            type: "submit"
        }))) : r.createElement("div", null, r.createElement("p", {className: "action-sheet--help-text"}, "Your email address has not been verified. Only verified addresses can receive exports. Go to your email setup to finish verification."), r.createElement("a", {
            onClick: function () {
                return s.default.UI.openSheet("emailList")
            }, className: "action-sheet--clickable"
        }, "View Email Setup ", r.createElement(u.default, {iconName: "arrow-icon"}))))
    });
    t.default = p
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    var r = n(0), i = n(2), a = n(1), o = n(4), s = n(3), l = n(65), c = n(9), u = {
        getInitialState: function () {
            return {channelSelected: !!this.props.activeChannel}
        }, toggleItem: function (e, t) {
            "channel" === t ? (s.default.Campaigns.setActiveChannel(e), this.setState({channelSelected: !0})) : (s.default.Campaigns.setActiveCampaign(e), this.setState({channelSelected: !1}))
        }
    }, d = a("CampaignItem", [u], function (e) {
        var t = this, n = e.campaign, a = e.isActive, s = e.activeChannel, u = e.clicks, d = n.getIn(["total_bitlinks"], 0), p = n.getIn(["campaign_channels", "total"], 0), f = u.getIn([n.get("guid"), "data", "data", "total_clicks"], 0), h = u.getIn([n.get("guid"), "data", "data", "campaign_channels"]);
        return r.createElement("div", {className: "campaign-item--wrapper " + (a ? "open" : "closed")}, r.createElement("a", {
            className: a ? "campaign-item--ACTIVE " + (this.props.channelSelected ? "dropdown-only" : "") : "campaign-item--MAIN",
            onClick: function () {
                return t.toggleItem(n.get("guid"), "campaign")
            }
        }, r.createElement("span", {className: "campaign-item--dropdown-icon"}, r.createElement(o.default, {iconName: "selector-icon"})), r.createElement("h3", {className: "campaign-item--header"}, n.get("name")), r.createElement("span", {className: "click-count--MAIN"}, c.commifyNumber(f), r.createElement(o.default, {iconName: "clicks-icon"})), r.createElement("p", {className: "campaign-item--child-stats"}, r.createElement("span", null, p + " " + l.default("Channel", p)), r.createElement("span", null, d + " " + l.default("Bitlink", d)))), n.getIn(["campaign_channels", "channels"], i.List()).toList().map(function (e) {
            var n = h && h.filter(function (t) {
                    return t.get("channel_guid") === e.get("guid")
                }).first(), i = n ? n.get("total_clicks", 0) : "0";
            return r.createElement("div", {
                className: "campaign-item--child " + (s == e.get("guid") ? "active" : null),
                key: e.get("guid"),
                onClick: function () {
                    return t.toggleItem(e.get("guid"), "channel")
                }
            }, r.createElement("h5", {className: "campaign-item--child-header"}, e.get("name")), r.createElement("span", {className: "campaign-item--child-stats"}, e.getIn(["channel_bitlinks", "total"], 0) + " " + l.default("Bitlink", e.getIn(["channel_bitlinks", "total"], 0))), r.createElement("span", {className: "click-count--MAIN"}, c.commifyNumber(i), r.createElement(o.default, {iconName: "clicks-icon"})))
        }))
    });
    t.default = d
}, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function (e, t, n) {
    "use strict";
    var r = this && this.__extends || function () {
            var e = Object.setPrototypeOf || {__proto__: []}instanceof Array && function (e, t) {
                    e.__proto__ = t
                } || function (e, t) {
                    for (var n in t)t.hasOwnProperty(n) && (e[n] = t[n])
                };
            return function (t, n) {
                function r() {
                    this.constructor = t
                }

                e(t, n), t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
            }
        }();
    Object.defineProperty(t, "__esModule", {value: !0});
    var i = n(2), a = function (e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }

        return r(t, e), t
    }(i.Record({label: "", showing: !0, new: !1, enabled: !1}));
    t.default = a
}, , , , , , , , , , , , , , , , , , function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    var r = n(2), i = n(365);
    t.resetBrandSpecificBaseState = function () {
        return function (e) {
            return e.mergeDeep(r.fromJS(i.default).filter(function (e, t) {
                return !i.BRAND_AGNOSTIC_TOP_LEVEL_KEYS.contains(t)
            }))
        }
    }, t.initConfig = function (e) {
        return function (t) {
            return t.set("config", r.fromJS(e))
        }
    }, t.initUser = function (e) {
        return function (t) {
            return t.setIn(["session", "user"], e)
        }
    }
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    var r = n(2), i = n(556), a = n(28), o = n(557), s = n(13), l = n(558), c = n(16), u = r.Set(["session", "config", "siteWideMessage", "productTier", "deeplinkApps", "siteAssociation"]);
    t.BRAND_AGNOSTIC_TOP_LEVEL_KEYS = u;
    var d = {
        config: r.Map(),
        session: {
            activeOrganization: "default",
            activeBrand: "default",
            activeCampaign: "default",
            activeChannel: "default",
            orgSectionName: c.DEFAULT_ORG_SUBSECTION
        },
        productTier: null,
        performance: new i.default,
        actionSheets: r.List(),
        notification: null,
        dashboardOverview: {
            totalClicks: new s.Loadable,
            totalBrandClicksPerUnique: new s.Loadable,
            totalNetworkClicks: new s.Loadable,
            clickCache: r.Map(),
            linksCreated: new s.Loadable,
            bitlyNetworkLinksCreated: new s.LoadableList,
            totalUniques: new s.Loadable,
            topBrandLinks: new s.LoadableList,
            topBitlyNetworkLinks: new s.LoadableList
        },
        bitlinks: {
            linksCreated: new s.LoadableList,
            allTags: new s.LoadableList,
            cache: {},
            clickCache: r.Map(),
            activeBitlink: null,
            selectedBitlinks: r.List(),
            filter: new a.BitlinkFilter,
            filterSheet: r.List(o.default),
            views: {list: new s.LoadableListWithTotal, detail: new s.Loadable},
            bitlyNetwork: {loading: !1, error: null, data: r.List()},
            deeplinkMetrics: r.Map()
        },
        customBitlinks: {
            cache: {},
            clickCache: r.Map(),
            activeKeywordLink: null,
            selectedBitlinks: r.List(),
            views: {list: new s.LoadableListWithTotal, detail: new s.Loadable, historyList: new s.Loadable},
            filter: {limit: 30, offset: 0}
        },
        campaigns: {
            campaignCache: {},
            channelsCache: {},
            clickCache: {},
            activeCampaign: null,
            activeChannel: null,
            views: {list: new s.LoadableListWithTotal, detail: new s.Loadable},
            filter: {limit: 10, offset: 0, query: ""}
        },
        section: "uninitialized",
        sectionDateFilters: {
            performance: new a.DateFilter,
            bitlinks: new a.DateFilter,
            organization: new a.DateFilter,
            dashboard: new a.DateFilter,
            customlinks: new a.DateFilter,
            campaigns: new a.DateFilter
        },
        easterEgg: null,
        accountSettings: {
            twoStepVerification: new l.default,
            securityLogs: new s.LoadableList,
            bitlinkRateLimit: new s.LoadableMap,
            bsdRateLimit: new s.LoadableMap,
            brandedShortDomain: new s.LoadableMap,
            revalidationLoadingStatus: null,
            rootRedirect: new s.LoadableMap,
            linkedApps: new s.LoadableMap
        },
        brands: r.Map(),
        organizations: r.Map(),
        thirdPartyAppLookup: r.Map(),
        deeplinkApps: {loading: !0, error: null, data: r.Map(), loadedOnce: !1},
        organizationLimits: r.Map(),
        bsds: r.Map(),
        users: r.Map(),
        siteWideMessage: null,
        siteAssociation: r.Map(),
        formData: {
            activeUserForEdit: null,
            activeDeeplinksAppForEdit: null,
            activeBrandForEdit: r.Map({guid: "", name: "", bsds: r.Set()}),
            createBitlink: r.Map({selectedDomain: null}),
            emailForEdit: r.Map(),
            bsdForAddOrEdit: r.Map(),
            siteAssociation: {
                ios_install_preference: "no_install",
                android_install_preference: "no_install",
                appFallback: {ios: null, android: null},
                appList: {ios: r.List(), android: r.List()}
            },
            linkException: {ios: null, android: null},
            emailForExport: null
        },
        shareAccounts: {twitter: r.List(), facebook: r.List()},
        addLinkToCampaign: r.Map({selectedChannel: null, selectedCampaign: null})
    };
    t.default = d
}, function (e, t) {
    var n = e.exports = {version: "2.4.0"};
    "number" == typeof __e && (__e = n)
}, function (e, t, n) {
    var r = n(368), i = n(369);
    e.exports = function (e) {
        return r(i(e))
    }
}, function (e, t, n) {
    var r = n(577);
    e.exports = Object("z").propertyIsEnumerable(0) ? Object : function (e) {
        return "String" == r(e) ? e.split("") : Object(e)
    }
}, function (e, t) {
    e.exports = function (e) {
        if (void 0 == e)throw TypeError("Can't call method on  " + e);
        return e
    }
}, function (e, t) {
    var n = Math.ceil, r = Math.floor;
    e.exports = function (e) {
        return isNaN(e = +e) ? 0 : (e > 0 ? r : n)(e)
    }
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    var r = n(2), i = n(14), a = n(60), o = n(25), s = n(17), l = n(251), c = n(60), u = function (e, t) {
        return t.withMutations(function (t) {
            var n = e.get("userHash");
            return t.setIn(["bitlinks", "cache", n], e).setIn(["bitlinks", "activeBitlink"], n).setIn(["bitlinks", "selectedBitlinks"], r.List()).updateIn(["bitlinks", "views", "list", "data"], function (e) {
                return e.unshift(n)
            }).setIn(["bitlinks", "views", "list", "loading"], !1).setIn(["bitlinks", "views", "detail", "loading"], !1)
        })
    };
    t.loadBitlinkWithKeywordLink = function (e) {
        return function (t) {
            var n = t.keywordLink, r = t.userHash;
            return o.V3TransitionFactory(e).getBitlink(s.hashToShortUrl(r)).then(function (e) {
                return e.data.link_history[0]
            }).then(function (e) {
                return function (t) {
                    if (!e)throw new Error("NOT_FOUND");
                    e.keyword_link = n;
                    var r = a.parseBitlink(e);
                    return u(r, t)
                }
            })
        }
    }, t.loadBitlinkFromInfo = function (e) {
        return function (t) {
            var n = t.keywordLink, r = t.userHash, a = new l.default({api: e});
            return Promise.all([a.callExpand({hash: [r]}), a.callInfo({hash: [r]})]).then(function (e) {
                var t = e[0], r = e[1];
                return function (e) {
                    var a = {keyword_link: n};
                    i(a, r[0]);
                    var o = c.parseExpandAndInfo(t[0], a);
                    return u(o, e)
                }
            })
        }
    }, t.deselectAll = function () {
        return function (e) {
            return e.setIn(["selectedBitlinks"], r.List()).setIn(["bitlinks", "activeBitlink"], null)
        }
    }, t.setShortenDomain = function (e) {
        return function (t) {
            return t.setIn(["formData", "createBitlink", "selectedDomain"], e)
        }
    }
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    var r = n(3);
    t.initCallsPerSection = function (e) {
        "dashboard" === e ? r.default.Dashboard.loadDashboard() : "bitlinks" === e ? r.default.API.loadLinkHistory() : "performance" === e ? r.default.API.loadPopularClicks() : "campaigns" === e ? r.default.Campaigns.setSection() : "customlinks" === e && r.default.API.loadCustomBitlinks()
    }
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    var r = n(2), i = n(21), a = n(173), o = n(50);
    t.getBsdSiteAssociation = function (e, t) {
        return function () {
            var n = e.cursor("session").get("activeOrganization"), s = e.cursor("bsds").get(n, r.Map()), l = e.cursor("brands").getIn([e.cursor("session").get("activeBrand"), "bsds"]), c = e.cursor("siteAssociation"), u = s.filter(function (e, t) {
                return "ok" === e.get("validation_status")
            }), d = u.keySeq().concat(l).toSet().filter(function (e) {
                return !(c.getIn([e, "loading"], !1) || c.getIn([e, "loadedOnce"], !1))
            }), p = [a.setSiteAssociationssLoadingState(d.toArray())];
            return i.default(e)(p).then(function () {
                d.keySeq().map(function (r) {
                    return i.default(e)([a.getAppAssociations(t)({organizationGUID: n, bsd: r})])
                }).toArray()
            }).catch(o.genericErrorMsg)
        }
    }
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    var r = n(132), i = n(109), a = n(73), o = {
        decode: function (e) {
            var t = e.path, n = e.qs, r = t[0], o = (t[1], t[2]);
            return [a.routeBitlink({
                brandGUID: r || "default",
                userHash: o
            })].concat(i.decodeActionSheet(n), i.decodeBitlinkFilter(n))
        }, encode: function (e) {
            return {
                path: r.defaultPathEncoder(e, ["session", "activeBrand"], ["section"], ["bitlinks", "activeBitlink"]),
                qs: i.encodeActionSheet(e).concat(i.encodeBitlinkFilter(e))
            }
        }
    };
    t.default = o
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    var r = n(132), i = n(109), a = n(73), o = {
        decode: function (e) {
            var t = e.path, n = e.qs, r = t[0];
            t[1];
            return [a.routeDashboard({brandGUID: r || "default"})].concat(i.decodeActionSheet(n))
        }, encode: function (e) {
            return {
                path: r.defaultPathEncoder(e, ["session", "activeBrand"], ["section"]).concat([""]),
                qs: i.encodeActionSheet(e).slice()
            }
        }
    };
    t.default = o
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    var r = n(109), i = n(73), a = n(17), o = {
        decode: function (e) {
            var t = e.path, n = e.qs, a = t[0], o = (t[1], t[2]), s = t[3], l = o && s ? "http://" + o + "/" + s : null;
            return [i.routeCustomBitlinks({brandGUID: a || "default", keywordLink: l})].concat(r.decodeActionSheet(n))
        }, encode: function (e) {
            var t, n = e.cursor(["session", "activeBrand"]).deref(), i = e.cursor(["section"]).deref(), o = e.cursor(["customBitlinks", "activeKeywordLink"]).deref();
            if (o) {
                t = [n, i, a.urlToDomain(o), a.shortUrlToHash(o)]
            } else t = [n, i, ""];
            return {path: t, qs: r.encodeActionSheet(e).slice()}
        }
    };
    t.default = o
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    var r = n(132), i = n(109), a = n(73), o = {
        decode: function (e) {
            var t = e.path, n = e.qs, r = t[0], o = (t[1], t[2]), s = t[3];
            return [a.routeCampaigns({
                brandGUID: r || "default",
                campaignGUID: o,
                channelGUID: s
            })].concat(i.decodeActionSheet(n))
        }, encode: function (e) {
            return {
                path: r.defaultPathEncoder(e, ["session", "activeBrand"], ["section"], ["campaigns", "activeCampaign"], ["campaigns", "activeChannel"]),
                qs: i.encodeActionSheet(e).slice()
            }
        }
    };
    t.default = o
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    var r = n(132), i = n(109), a = n(73), o = n(16), s = {
        decode: function (e) {
            var t = e.path, n = e.qs, r = (t[0], t[1]), s = t[2];
            return o.VALID_ORG_SUBSECTIONS.contains(s) || (s = o.DEFAULT_ORG_SUBSECTION), [a.routeOrganization({
                orgGUID: r || "default",
                orgSectionName: s
            })].concat(i.decodeActionSheet(n))
        }, encode: function (e) {
            return {
                path: r.defaultPathEncoder(e, ["section"], ["session", "activeOrganization"], ["session", "orgSectionName"]),
                qs: i.encodeActionSheet(e).slice()
            }
        }
    };
    t.default = s
}, function (e, t, n) {
    "use strict";
    function r(e) {
        var t = e.pathname ? e.pathname.replace(/^\//, "") : "", n = t ? t.split("/") : [], r = e.search ? e.search.replace(/^\?/, "") : "";
        return {
            path: n, qs: (r ? r.split("&") : []).map(function (e) {
                var t = e.split("=");
                if (2 !== t.length)return a.logger.error('QueryStringEntry "' + e + '" is malformed and has been discarded.'), null;
                var n = t[0], r = t[1];
                if (!n)return a.logger.error('QueryStringEntry "' + e + '" is malformed and has been discarded.'), null;
                try {
                    return {key: decodeURIComponent(n), value: decodeURIComponent(r)}
                } catch (t) {
                    return a.logger.error('QueryStringEntry "' + e + '" is malformed and has been discarded.'), null
                }
            }).filter(function (e) {
                return !!e
            })
        }
    }

    function i(e) {
        var t = e.path.map(function (e) {
            return "string" == typeof e ? e : ""
        }), n = e.qs, r = n.filter(function (e) {
            var t = e.key, n = e.value;
            return "string" != typeof t ? (a.logger.error('QueryStringEntry key "' + t + '" is not a string and has been discarded.'), !1) : o.test(t) ? "string" == typeof n || (a.logger.error('QueryStringEntry value "' + n + '" is not a string and has been discarded.'), !1) : (a.logger.error('QueryStringEntry key "' + t + '" is malformed and has been discarded.'), !1)
        }).map(function (e) {
            var t = e.key, n = e.value;
            return encodeURIComponent(t) + "=" + encodeURIComponent(n)
        }).join("&"), i = ("/" + t.join("/")).replace(/\/+$/g, "/");
        return 0 === r.length ? i : i + "?" + r
    }

    Object.defineProperty(t, "__esModule", {value: !0});
    var a = n(49), o = /^\w+$/;
    t.deserializeUrl = r, t.serializeUrl = i
}, function (e, t, n) {
    "use strict";
    var r = this && this.__extends || function () {
            var e = Object.setPrototypeOf || {__proto__: []}instanceof Array && function (e, t) {
                    e.__proto__ = t
                } || function (e, t) {
                    for (var n in t)t.hasOwnProperty(n) && (e[n] = t[n])
                };
            return function (t, n) {
                function r() {
                    this.constructor = t
                }

                e(t, n), t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
            }
        }();
    Object.defineProperty(t, "__esModule", {value: !0});
    var i = n(2), a = function (e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }

        return r(t, e), t
    }(i.Record({guid: null, name: null, channels: i.List()}));
    t.Campaign = a;
    var o = function (e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }

        return r(t, e), t
    }(i.Record({bitlinks: i.List(), total: 0}));
    t.ChannelBitlink = o
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    var r = n(2), i = n(107), a = n(14), o = n(5), s = n(130), l = n(25), c = n(72), u = n(251), d = n(60), p = n(13), f = n(16), h = n(17), g = n(129), m = new p.LoadableMap, v = function (e) {
        var t = e.data.result_count, n = e.data.link_history.map(d.parseBitlink);
        return {
            total: t, bitlinks: n, hashes: i(n.map(function (e) {
                return e.userHash
            }))
        }
    }, k = function (e, t) {
        var n = t.popular_links;
        return function (t) {
            var r = n.map(function (e) {
                return e.hash
            }).filter(function (e) {
                return -1 === t.bitlinks.map(function (e) {
                        return e.get("userHash")
                    }).indexOf(e)
            });
            if (!r.length)return Promise.resolve(t);
            var i = new u.default({api: e});
            return Promise.all(s(r, 15).map(function (e) {
                return Promise.all([i.callExpand({hash: e}), i.callInfo({hash: e})]).then(function (e) {
                    var t = e[0], n = e[1];
                    return t.map(function (e, t) {
                        return d.parseExpandAndInfo(e, n[t])
                    })
                })
            })).then(function (e) {
                return {total: t.total, hashes: t.hashes, bitlinks: t.bitlinks.concat([].concat.apply([], e))}
            })
        }
    }, b = function (e) {
        return e.popular_links.reduce(function (e, t) {
            return e.updateIn([t.hash, "clicks"], m, function (e) {
                return new p.LoadableMap({
                    loading: !1,
                    loadedOnce: !0,
                    data: r.Map({ownClicks: t.clicks + e.getIn(["data", "ownClicks"], 0)})
                })
            })
        }, r.Map())
    };
    t.popularLinksFetcherHelper = function (e, t, n, i) {
        return l.V3TransitionFactory(e, t).getBitlinks(n.data.popular_links.map(function (e) {
            return e.link
        })).then(v).then(k(e, n.data)).then(function (e) {
            var t = (e.total, e.bitlinks);
            e.hashes;
            return function (e) {
                var a = r.fromJS(t).reduce(function (e, t) {
                    return e.set(t.get("userHash"), t)
                }, r.Map());
                return e = e.mergeDeepIn(["bitlinks", "clickCache"], r.Map([[i, b(n.data)]])).mergeIn(["bitlinks", "cache"], a)
            }
        })
    }, t.popularLinksLodableList = function (e) {
        return new p.LoadableListWithTotal({
            loading: !1,
            loadedOnce: !0,
            total: e.data.popular_links.length,
            data: r.List(e.data.popular_links.map(function (e) {
                return e.hash
            }))
        })
    }, t.loadingBrandPopularLinks = function () {
        return D(["dashboardOverview", "topBrandLinks"])
    }, t.errorBrandPopularLinks = function (e) {
        return I(["dashboardOverview", "topBrandLinks"], e)
    }, t.fetchBrandPopularLinks = function (e) {
        return function (n, r, i) {
            return l.V3TransitionFactory(e, n).getUserPopularLinks(i ? a(r.toJS(), {limit: i}) : r.toJS()).then(function (i) {
                return t.popularLinksFetcherHelper(e, n, i, r).then(function (e) {
                    return function (n) {
                        return e(n).setIn(["dashboardOverview", "topBrandLinks"], t.popularLinksLodableList(i))
                    }
                })
            })
        }
    }, t.loadingBitlyNetworkPopularLinks = function () {
        return D(["dashboardOverview", "topBitlyNetworkLinks"])
    }, t.errorBitlyNetworkPopularLinks = function (e) {
        return I(["dashboardOverview", "topBitlyNetworkLinks"], e)
    }, t.fetchBitlyNetworkPopularLinks = function (e) {
        return function (t, n, i) {
            return l.V3TransitionFactory(e, t).getOrganizationMissedOpportunities(a(n.toJS(), {limit: i})).then(function (n) {
                var i = n.data.missed_opportunities.map(function (e) {
                    return e.link
                });
                if (!i.length)return function (e) {
                    return e.setIn(["dashboardOverview", "topBitlyNetworkLinks"], new p.LoadableList({
                        loadedOnce: !0,
                        data: r.fromJS(i.map(h.shortUrlToHash))
                    }))
                };
                var a = i.map(function (t) {
                    return l.V3TransitionFactory(e).getLinkEncodersCount(t)
                });
                return Promise.all([l.V3TransitionFactory(e, t).getInfo({shortUrl: i}), l.V3TransitionFactory(e, t).getExpand({shortUrl: i})]).then(function (e) {
                    var t = e[0].data.info.map(function (t) {
                        return d.parseBitlyNetworkLink(t, n.data.missed_opportunities, e[1].data.expand)
                    });
                    return r.fromJS(t).reduce(function (e, t) {
                        return e.set(t.get("globalHash"), t)
                    }, r.Map())
                }).then(function (e) {
                    return Promise.all(a).then(function (t) {
                        return t.reduce(function (e, t) {
                            var n = h.shortUrlToHash(t.aggregate_link);
                            return e.setIn([n, "globalEncoders"], new p.LoadableMap({
                                loading: !1,
                                loadedOnce: !0,
                                data: r.Map({encoderCounts: t.count})
                            }))
                        }, e)
                    }).then(function (e) {
                        return function (t) {
                            return t.setIn(["bitlinks", "bitlyNetwork"], new p.LoadableMap({
                                loading: !1,
                                loadedOnce: !0,
                                data: e
                            })).setIn(["dashboardOverview", "topBitlyNetworkLinks"], new p.LoadableList({
                                loadedOnce: !0,
                                data: r.fromJS(i.map(h.shortUrlToHash))
                            }))
                        }
                    })
                })
            })
        }
    }, t.loadingBrandClicks = function () {
        return D(["dashboardOverview", "totalClicks"])
    }, t.errorBrandClicks = function (e) {
        return I(["dashboardOverview", "totalClicks"], e)
    }, t.fetchBrandClicks = function (e) {
        return function (t, n) {
            var r = {
                rollup: !0,
                units: n.units,
                unit: n.unit,
                timezone: n.timezone,
                unit_reference_ts: n.unit_reference_ts
            };
            return l.V3TransitionFactory(e, t).getUserClicks(r).then(function (e) {
                return function (t) {
                    return t.setIn(["dashboardOverview", "totalClicks"], new p.Loadable({
                        loading: !1,
                        loadedOnce: !0,
                        data: e.data.user_clicks
                    }))
                }
            })
        }
    }, t.loadingBrandReferrers = function () {
        return D(["performance", "topReferrers"])
    }, t.errorBrandReferrers = function (e) {
        return I(["performance", "topReferrers"], e)
    }, t.fetchBrandReferrers = function (e) {
        return function (t, n, i) {
            var a = {
                limit: i,
                units: n.units,
                unit: n.unit,
                timezone: n.timezone,
                unit_reference_ts: n.unit_reference_ts
            };
            return l.V3TransitionFactory(e, t).getReferringNetworksForUser(a).then(function (e) {
                return function (t) {
                    return t.setIn(["performance", "topReferrers"], new p.LoadableMap({
                        loading: !1,
                        loadedOnce: !0,
                        data: r.fromJS(e.data.user_referring_networks)
                    }))
                }
            })
        }
    }, t.loadingBrandCountries = function () {
        return D(["performance", "allCountries"])
    }, t.errorBrandCountries = function (e) {
        return I(["performance", "allCountries"], e)
    }, t.fetchBrandCountries = function (e) {
        return function (t, n, i) {
            var a = {
                rollup: !0,
                limit: i,
                units: n.units,
                unit: n.unit,
                timezone: n.timezone,
                unit_reference_ts: n.unit_reference_ts
            };
            return l.V3TransitionFactory(e, t).getCountriesForUser(a).then(function (e) {
                return function (t) {
                    return t.setIn(["performance", "allCountries"], new p.LoadableMap({
                        loading: !1,
                        loadedOnce: !0,
                        data: r.fromJS(e.data.user_countries)
                    }))
                }
            })
        }
    }, t.loadingLinksCreated = function () {
        return D(["dashboardOverview", "linksCreated"])
    }, t.errorLinksCreated = function (e) {
        return I(["dashboardOverview", "linksCreated"], e)
    }, t.fetchLinksCreated = function (e) {
        return function (t, n) {
            var r = {
                units: n.units,
                unit: n.unit,
                timezone: n.timezone,
                unit_reference_ts: n.unit_reference_ts,
                rollup: !0
            };
            return l.V3TransitionFactory(e, t).getShortenCountsForUser(r).then(function (e) {
                return function (t) {
                    return t.setIn(["dashboardOverview", "linksCreated"], new p.Loadable({
                        loading: !1,
                        loadedOnce: !0,
                        data: e.data.user_shorten_counts
                    }))
                }
            })
        }
    }, t.loadingBitlyNetworkLinksCreated = function () {
        return D(["dashboardOverview", "bitlyNetworkLinksCreated"])
    }, t.errorBitlyNetworkLinksCreated = function (e) {
        return I(["dashboardOverview", "bitlyNetworkLinksCreated"], e)
    }, t.fetchBitlyNetworkLinksCreated = function (e) {
        return function (t, n) {
            var i = {
                login: "!",
                units: n.units,
                unit: n.unit,
                timezone: n.timezone,
                unit_reference_ts: n.unit_reference_ts
            };
            return l.V3TransitionFactory(e, t).getShortenCountsForOrganization(i).then(function (e) {
                return function (t) {
                    return t.setIn(["dashboardOverview", "bitlyNetworkLinksCreated"], new p.LoadableList({
                        loading: !1,
                        loadedOnce: !0,
                        data: r.fromJS(e.data.organization_shorten_counts)
                    }))
                }
            })
        }
    };
    var y = function (e, t) {
        return {brandGUID: e, unit: t.unit, unitRefTs: t.unit_reference_ts, units: t.units}
    };
    t.loadingTotalUniques = function () {
        return D(["dashboardOverview", "totalUniques"])
    }, t.errorTotalUniques = function (e) {
        return I(["dashboardOverview", "totalUniques"], e)
    }, t.fetchTotalUniques = function (e, t) {
        return function (e, n) {
            return c.MetricsApiFactory(t).getBrandTotalUniques(y(e, n)).then(function (e) {
                return function (t) {
                    return t.setIn(["dashboardOverview", "totalUniques"], new p.Loadable({
                        loading: !1,
                        loadedOnce: !0,
                        data: e.brand_total_uniques
                    }))
                }
            })
        }
    }, t.loadingTotalBrandClicksPerUnique = function () {
        return D(["dashboardOverview", "totalBrandClicksPerUnique"])
    }, t.errorTotalBrandClicksPerUnique = function (e) {
        return I(["dashboardOverview", "totalBrandClicksPerUnique"], e)
    }, t.fetchTotalBrandClicksPerUnique = function (e, t) {
        return function (e, n) {
            return c.MetricsApiFactory(t).getBrandClicksPerUnique(y(e, n)).then(function (e) {
                return function (t) {
                    return t.setIn(["dashboardOverview", "totalBrandClicksPerUnique"], new p.Loadable({
                        loading: !1,
                        loadedOnce: !0,
                        data: e.brand_clicks_per_unique
                    }))
                }
            })
        }
    }, t.loadingTotalNetworkClicks = function () {
        return D(["dashboardOverview", "totalNetworkClicks"])
    }, t.errorTotalNetworkClicks = function (e) {
        return I(["dashboardOverview", "totalNetworkClicks"], e)
    }, t.fetchTotalNetworkClicks = function (e, t) {
        return function (t, n) {
            var r = {
                login: "!",
                unit: n.unit,
                unit_reference_ts: n.unit_reference_ts,
                units: n.units,
                timezone: n.timezone
            };
            return l.V3TransitionFactory(e, t).getClicksForOrganization(r).then(function (e) {
                return function (t) {
                    return t.setIn(["dashboardOverview", "totalNetworkClicks"], new p.Loadable({
                        loading: !1,
                        loadedOnce: !0,
                        data: e.data.organization_clicks.map(function (e) {
                            return e.clicks
                        }).reduce(g.sum, 0)
                    }))
                }
            })
        }
    };
    var D = function (e) {
        return function (t) {
            return t.updateIn(e, function (e) {
                return e.set("loading", !0)
            })
        }
    }, I = function (e, t) {
        return function (n) {
            return n.updateIn(e, function (e) {
                return e.set("loading", !1).set("error", t)
            })
        }
    };
    t.setDateFilter = function (e, t) {
        return function (n) {
            return n.updateIn(["sectionDateFilters", "dashboard"], function (n) {
                var r = t / 1e3, i = o(t).utc().diff(o(e).utc(), "day") + 1;
                return n.set("unit_reference_ts", r).set("units", i)
            })
        }
    }, t.resetDateFilter = function () {
        return function (e) {
            return e.setIn(["sectionDateFilters", "dashboard"], f.default[e.get("productTier", "free")].DASHBOARD_DATE_FILTER)
        }
    }
}, function (e, t, n) {
    "use strict";
    function r(e, t) {
        window.addEventListener("load", function () {
            return s(i, e, t)
        })
    }

    function i(e, t) {
        var n = window.performance.timing, r = n.navigationStart, i = {};
        for (var a in n) {
            var o = n[a];
            if (o && "function" != typeof o) {
                i[l.statsDKeyName("page_timings", e, "performance", a)] = o - r
            }
        }
        return t.timing(i)
    }

    function a(e, t) {
        var n = window.performance.timing, r = (new Date).getTime();
        return t.timing(l.statsDKeyName("page_timings", "bbt2Pageload", "appLoaded", e), r - n.navigationStart)
    }

    function o() {
        return window && window.performance && window.performance.navigation
    }

    Object.defineProperty(t, "__esModule", {value: !0});
    var s = n(383), l = n(48);
    t.sendPerformanceData = r, t.trackPageLoadTimings = a, t.supportPerformance = o
}, function (e, t, n) {
    var r = n(615), i = n(125), a = i(function (e, t) {
        return r(e, 1, t)
    });
    e.exports = a
}, , , function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    var r = n(0), i = n(1), a = n(4), o = n(634), s = n(635), l = i("PerformanceSummaryItem", function (e) {
        var t = e.items, n = e.iconName, i = void 0 === n ? null : n, l = e.socialIconName, c = void 0 === l ? null : l;
        return r.createElement("div", {className: "performance-summary--total"}, i ? r.createElement(a.default, {iconName: i}) : r.createElement(o.default, {type: c}), t.map(function (e, t) {
            return r.createElement("div", {key: t}, s.mapLoadableToView(e.stat, {
                success: function (e) {
                    return r.createElement("h6", {className: "performance-summary--total-clicks"}, e)
                },
                error: r.createElement("h6", {className: "performance-summary--total-clicks"}, r.createElement(a.default, {iconName: "server-error-icon"})),
                loading: r.createElement("h6", {className: "performance-summary--total-clicks"}, " ")
            }), e.get("label") ? r.createElement("h6", {className: "performance-summary--label"}, e.get("label"), " ") : null, r.createElement("h5", {className: "performance-summary--channels-header"}, e.get("description")))
        }))
    });
    t.default = l
}, , , , , , , , , , , , , , , , , , , , , function (e, t, n) {
    "use strict";
    var r = this && this.__extends || function () {
            var e = Object.setPrototypeOf || {__proto__: []}instanceof Array && function (e, t) {
                    e.__proto__ = t
                } || function (e, t) {
                    for (var n in t)t.hasOwnProperty(n) && (e[n] = t[n])
                };
            return function (t, n) {
                function r() {
                    this.constructor = t
                }

                e(t, n), t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
            }
        }();
    Object.defineProperty(t, "__esModule", {value: !0});
    var i = n(2), a = function (e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }

        return r(t, e), t
    }(i.Record({
        is_active: !0,
        third_party_app_id: "com.google.android",
        install_url: "",
        name: "name",
        icon_url: "http://placehold.it/73x73",
        organization_guid: "1234",
        os: "android",
        android_sha256: i.List(),
        apple_app_entitlement_id: "",
        scheme: "",
        legacy_app_id: "",
        guid: "123",
        created_ts: 0,
        site_associations: i.List(),
        modified_ts: 0
    }));
    t.DeeplinkApp = a;
    var o = function (e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }

        return r(t, e), t
    }(i.Record({
        guid: "123",
        bitlink: "",
        app_guid: "",
        app_uri_path: "",
        os: "android",
        install_type: "no_install",
        created_ts: 0,
        modified_ts: 0,
        install_url: "",
        brand_guid: "1234"
    }));
    t.DeeplinkRule = o;
    var s = function (e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }

        return r(t, e), t
    }(i.Record({ios: i.Map(), android: i.Map(), other: i.Map(), unit: "", units: "", unit_ref_ts: 0}));
    t.DeeplinkMetricsRollup = s;
    var l = function (e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }

        return r(t, e), t
    }(i.Record({third_party_app_id: "", os: "", install_url: "", icon_url: "", name: ""}));
    t.ThirdPartyAppData = l
}, , , function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    var r = n(0), i = n(19), a = n(2), o = n(122), s = n(84), l = n(482), c = n(554), u = n(555), d = n(588), p = n(590), f = n(593), h = n(594), g = n(597), m = n(599), v = n(600), k = n(601), b = n(602), y = n(603), D = n(604), I = n(605), A = n(607), E = n(609), w = n(611), C = n(612), _ = n(365), U = n(3), S = n(614), B = n(49), N = n(127), O = n(57), T = n(48), R = n(382), L = n(616), M = n(162), P = n(617), G = n(653);
    t.trackjs = G;
    var F = n(89)("./config." + s.environment), z = function (e) {
        function t(t, o, s, l) {
            if (void 0 === s && (s = []), void 0 === l && (l = {}), !S.isBrowserSupported())return void i.render(r.createElement(c.default, {text: "Your browser version is no longer supported. Please upgrade to a supported browser."}), document.getElementById("main"));
            var u = a.Set(s);
            if (!o.organizations || 0 === o.organizations.length)return void i.render(r.createElement(c.default, {text: "Feature Flag Error: Your account is configured with Brand & Org feature, however it is missing Brand & Org data. If you are not expecting this, try hit refresh to see if it persists."}), document.getElementById("main"));
            U.default.Init.init(t, o, s, l), u.contains("bbt2_statsD_tracking") && (e.trackError && M.registerJSErrorTracking(T.statsD), R.supportPerformance() && e.trackPerformance && R.sendPerformanceData("bbt2", T.statsD), e.trackBlocking && L.default("bbt2", T.statsD)), function () {
                n.on("next-animation-frame", function () {
                    i.render(r.createElement(P.default, {
                        cursor: n.cursor(),
                        featureFlags: u
                    }), document.getElementById("main"))
                }), U.default.Init.initRoute(window.location), window.addEventListener("popstate", function (e) {
                    if (e.state && e.state.url) {
                        var t = e.state.url.split("?"), n = t[0], r = t[1];
                        U.default.Init.initRoute({pathname: n, search: r})
                    }
                })
            }()
        }

        var n = o("app", _.default), s = l.default(n);
        return u.default(n.reference(), O.api), d.default(n.reference(), O.api, N.default), p.default(n.reference(), O.api, N.default), f.default(n.reference(), O.api), h.default(n.reference(), O.api, N.default), g.default(n.reference(), O.api), m.default(n.reference(), O.api, N.default), v.default(n.reference(), O.api), k.default(n.reference(), O.api, N.default), w.default(n.reference(), O.api, N.default), b.default(n.reference(), O.api), y.default(n.reference(), O.api), D.default(n.reference(), O.api), I.default(n.reference(), O.api, N.default), A.default(n.reference(), O.api), E.default(n.reference(), O.api, N.default), C.default(n.reference(), O.api, N.default), e.debugActions && B.logActions(U.default), e.debugState && B.logState(n), U.default.Init.initConfig(e), {
            Actions: U.default,
            bbt2Fetch: N.default,
            State: n,
            Stores: s,
            start: t
        }
    }(F);
    t.App = z
}, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function (e, t, n) {
    "use strict";
    function r(e) {
        return {
            bitlink: new o.default(e.reference(), e.reference("section"), e.reference("bitlinks"), e.reference(["session", "preferences"]), i.api),
            customBitlink: new h.default(e.reference(), e.reference("section"), e.reference("customBitlinks"), e.reference(["session", "preferences"]), i.api),
            notification: new l.default(e.reference("notification")),
            easterEgg: new f.default(e.reference("easterEgg")),
            tags: new p.default(e.reference("bitlinks")),
            filterStore: new s.default(e.reference("bitlinks"), e.reference()),
            performance: new c.default(e.reference("performance"), e.reference("bitlinks")),
            session: new u.default({
                user: e.reference(["session", "user"]),
                featureFlags: e.reference(["session", "featureFlags"]),
                preferences: e.reference(["session", "preferences"])
            }),
            siteWideMessageStore: new d.default(e.reference("siteWideMessage")),
            accountSettingsStore: new a.default({
                twoStepVerification: e.reference(["accountSettings", "twoStepVerification"]),
                securityLogs: e.reference(["accountSettings", "securityLogs"]),
                bitlinkRateLimit: e.reference(["accountSettings", "bitlinkRateLimit"]),
                bsdRateLimit: e.reference(["accountSettings", "bsdRateLimit"]),
                brandedShortDomain: e.reference(["accountSettings", "brandedShortDomain"]),
                revalidationLoadingStatus: e.reference(["accountSettings", "revalidationLoadingStatus"]),
                rootRedirect: e.reference(["accountSettings", "rootRedirect"]),
                linkedApps: e.reference(["accountSettings", "linkedApps"]),
                featureFlags: e.reference(["session", "featureFlags"])
            })
        }
    }

    Object.defineProperty(t, "__esModule", {value: !0});
    var i = n(57), a = n(492), o = n(493), s = n(545), l = n(546), c = n(547), u = n(548), d = n(549), p = n(550), f = n(552), h = n(553);
    t.default = r
}, , , , , , , , , , function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    var r = n(2), i = n(164), a = n(88), o = n(3), s = n(245), l = n(346), c = n(15), u = n(13), d = n(246), p = n(25), f = function () {
        function e(e) {
            this.twoStepVerification = e.twoStepVerification, this.securityLogs = e.securityLogs, this.bitlinkRateLimit = e.bitlinkRateLimit, this.bsdRateLimit = e.bsdRateLimit, this.brandedShortDomain = e.brandedShortDomain, this.revalidationLoadingStatus = e.revalidationLoadingStatus, this.linkedApps = e.linkedApps, this.featureFlags = e.featureFlags, this.rootRedirect = e.rootRedirect, o.default.API.loadCountryCodes.listen(this.onLoadCountryCodes, this), o.default.UI.filterCountryCodes.listen(this.onFilterCountryCodes, this), o.default.UI.selectCountryCode.listen(this.onSelectCountryCode, this), o.default.API.setPhoneNumber.listen(this.onSetPhoneNumber, this), o.default.API.verifyCode.listen(this.onVerifyCode, this), o.default.API.loadTfaStatus.listen(this.onLoadTfaStatus, this), o.default.API.disableTfa.listen(this.onDisableTfa, this), o.default.API.loadSecurityLogs.listen(this.onLoadSecurityLogs, this), o.default.API.loadBitlinkRateLimit.listen(this.onLoadBitlinkRateLimit, this), o.default.API.loadBSDRateLimit.listen(this.onLoadBSDRateLimit, this), o.default.API.setShortDomain.listen(this.onSetShortDomain, this), o.default.API.getShortDomainStatus.listen(this.onGetShortDomainStatus, this), o.default.API.deleteShortDomain.listen(this.onDeleteShortDomain, this), o.default.API.getLinkedApps.listen(this.onGetLinkedApps, this), o.default.API.revokeAuthorization.listen(this.onRevokeAuthorization, this), o.default.API.resendVerification.listen(this.onResendVerification, this), o.default.API.setRedirectUrl.listen(this.onSetRedirectUrl, this), o.default.API.getRedirectUrl.listen(this.onGetRedirectUrl, this), o.default.API.resendVerificationPrompt.listen(this.onResendVerificationPrompt, this), o.default.API.revalidate.listen(this.onRevalidate, this), o.default.API.pullingStatus.listen(this.onPullingStatus, this), o.default.API.setHttps.listen(this.onSetHttps, this)
        }

        return e.prototype.onLoadBitlinkRateLimit = function (e, t) {
            var n = this;
            this.bitlinkRateLimit.cursor().get("loadedOnce") || (this.bitlinkRateLimit.cursor("loading").update(function () {
                return !0
            }), p.V3TransitionFactory(e, t).getRateLimitForUser({method: "m_shorten"}).then(function (e) {
                return e.data
            }).then(function (e) {
                n.bitlinkRateLimit.cursor().update(function (t) {
                    return t.withMutations(function (t) {
                        return t.set("loading", !1).set("loadedOnce", !0).set("data", r.fromJS(e))
                    })
                })
            }).catch(function () {
                var e = {aspect: "ERROR", text: "Oops, something went wrong."};
                o.default.Notification.openNotification(new c.default(e))
            }))
        }, e.prototype.onLoadBSDRateLimit = function (e, t) {
            var n = this;
            this.bsdRateLimit.cursor().get("loadedOnce") || (this.bsdRateLimit.cursor("loading").update(function () {
                return !0
            }), p.V3TransitionFactory(e, t).getRateLimitForUser({method: "b_shorten"}).then(function (e) {
                return e.data
            }).then(function (e) {
                n.bsdRateLimit.cursor().update(function (t) {
                    return t.withMutations(function (t) {
                        return t.set("loading", !1).set("loadedOnce", !0).set("data", r.fromJS(e))
                    })
                })
            }).catch(function () {
                var e = {aspect: "ERROR", text: "Oops, something went wrong."};
                o.default.Notification.openNotification(new c.default(e))
            }))
        }, e.prototype.onDisableTfa = function () {
            var e = this;
            p.V3Transition.disable2fa().then(function (t) {
                "disabled" === t.data.status && e.twoStepVerification.cursor().set("status", !1)
            })
        }, e.prototype.onLoadSecurityLogs = function () {
            var e = this;
            this.securityLogs.cursor().get("loading") || this.securityLogs.cursor().get("loadedOnce") || (this.securityLogs.cursor().set("loading", !0), p.V3Transition.getSecurityLogForUser().then(function (t) {
                e.securityLogs.cursor().update(function (e) {
                    return e.withMutations(function (e) {
                        return e.setIn(["loadedOnce"], !0).setIn(["loading"], !1).setIn(["data"], r.List(t.data.security_log))
                    })
                })
            }))
        }, e.prototype.onLoadTfaStatus = function () {
            var e = this;
            p.V3Transition.get2faStatus().then(function (t) {
                return "verified" === t.data.status && p.V3Transition.get2faPhoneNumber().then(function (t) {
                    e.twoStepVerification.cursor().update(function (e) {
                        return e.withMutations(function (e) {
                            return e.setIn(["status"], !0).setIn(["countryCode"], t.data.country_code).setIn(["phoneNumber"], t.data.phone_number)
                        })
                    })
                }), null
            })
        }, e.prototype.onSetPhoneNumber = function (e) {
            var t, n = this.twoStepVerification.cursor().get("selectedCode");
            n ? t = n.slice(n.indexOf("+"), n.indexOf(")")) : (this.twoStepVerification.cursor().set("selectedCode", "United States (+1)"), t = "1"), p.V3Transition.set2faPhoneNumber({
                country_code: t,
                phone_number: e
            }).then(function () {
                o.default.UI.openSheet("setupSecurityCode")
            }).catch(function () {
                var e = {aspect: "ERROR", title: "Error", text: "Failed to set phone number"};
                o.default.Notification.openNotification(new c.default(e))
            })
        }, e.prototype.onVerifyCode = function (e) {
            var t = this;
            p.V3Transition.verifyCodeFor2fa({verification_code: e}).then(function (e) {
                if (e.data.is_valid)t.twoStepVerification.cursor().set("status", !0), o.default.UI.closeSheet(); else {
                    var n = {aspect: "ERROR", title: "Wrong code", text: "Please enter the code again"};
                    o.default.Notification.openNotification(new c.default(n))
                }
            })
        }, e.prototype.onSelectCountryCode = function (e) {
            this.twoStepVerification.cursor().set("selectedCode", e.get("label"))
        }, e.prototype.onFilterCountryCodes = function (e) {
            var t, n = this.twoStepVerification.cursor(["countryCodes", "data"]).map(function (e) {
                return e.get("label")
            }), i = s.filterAndCreate(e, n, !0);
            i.error ? (this.twoStepVerification.cursor("countryCodes").set("error", i.error), t = r.List()) : (this.twoStepVerification.cursor("countryCodes").set("error", null), t = i.filteredList), this.twoStepVerification.cursor(["countryCodes", "data"]).update(function (e) {
                return e.map(function (e) {
                    return e.set("showing", t.includes(e.get("label")))
                })
            })
        }, e.prototype.onLoadCountryCodes = function () {
            var e = this;
            if (this.twoStepVerification.cursor("countryCodes").get("loadedOnce")) {
                var t = this.twoStepVerification.cursor("selectedCode").deref(), n = this.twoStepVerification.cursor(["countryCodes", "data"]), i = n.deref(), a = i.map(function (e) {
                    return t === e.get("label") ? e.set("enabled", !0) : e.set("enabled", !1)
                });
                return void n.update(function () {
                    return a
                })
            }
            this.twoStepVerification.cursor(["countryCodes", "loading"]).update(function () {
                return !0
            }), p.V3Transition.getAllCountryCallingCodesFor2fa().then(function (e) {
                return e.data.data
            }).then(function (t) {
                var n = r.List(t.map(function (e) {
                    return new l.default({
                        label: e.country_name + " (+" + e.calling_code + ")",
                        showing: !0,
                        new: !1,
                        enabled: !1
                    })
                }));
                e.twoStepVerification.cursor().update(function (e) {
                    return e.withMutations(function (e) {
                        return e.setIn(["selectedCode"], "United States (+1)").setIn(["countryCodes", "loading"], !1).setIn(["countryCodes", "loadedOnce"], !0).setIn(["countryCodes", "data"], n)
                    })
                })
            })
        }, e.prototype.onSetShortDomain = function (e) {
            var t = this;
            p.V3Transition.validateBrandedShortDomain({branded_short_domain: e}).then(function () {
                t.onGetShortDomainStatus(), o.default.UI.closeSheet();
                var e = {
                    aspect: "MAIN",
                    title: "Just a moment please…",
                    text: "your branded short domain is being verified"
                };
                o.default.Notification.openNotification(new c.default(e))
            }).catch(function (e) {
                var t = {aspect: "ERROR", title: "ERROR", text: e.data || e.json.status_txt};
                o.default.Notification.openNotification(new c.default(t))
            })
        }, e.prototype.onRevalidate = function (e) {
            p.V3Transition.revalidateBrandedShortDomain({branded_short_domain: e}).then(function () {
                o.default.API.pullingStatus()
            }).catch(function (e) {
                var t = {aspect: "ERROR", title: "ERROR", text: e.data || e.json.status_txt};
                o.default.Notification.openNotification(new c.default(t))
            })
        }, e.prototype.onPullingStatus = function () {
            var e = this;
            this.revalidationLoadingStatus.cursor().update(function () {
                return !0
            });
            var t = {
                aspect: "MAIN",
                title: "Just a moment please…",
                text: "your branded short domain is being verified"
            };
            o.default.Notification.openNotification(new c.default(t)), this.getStatusCall(1, {}).then(function (t) {
                e.revalidationLoadingStatus.cursor().update(function () {
                    return !1
                })
            }).catch(function (t) {
                e.revalidationLoadingStatus.cursor().update(function () {
                    return !1
                });
                var n = {aspect: "ERROR", title: "VALIDATION ERROR", text: "Please come back later and try again"};
                o.default.Notification.openNotification(new c.default(n))
            })
        }, e.prototype.getStatusCall = function (e, t) {
            var n = this;
            return void 0 === e && (e = 0), void 0 === t && (t = {}), e > 5 ? Promise.reject(new a.APIError("TIMEOUT", 599, {errors: ["Please try it later"]})) : i(t) ? p.V3Transition.getBrandedShortDomainStatus().then(function (t) {
                return new Promise(function (r, i) {
                    setTimeout(function () {
                        r(t.data.configuration_last_check_ts ? !n.brandedShortDomain.cursor().getIn(["data", "configuration_last_check_ts"]) || t.data.configuration_last_check_ts > n.brandedShortDomain.cursor().getIn(["data", "configuration_last_check_ts"]) ? n.getStatusCall(e + 1, t.data) : n.getStatusCall(e + 1, {}) : n.getStatusCall(e + 1, {}))
                    }, 2e3)
                })
            }) : (this.brandedShortDomain.cursor().update(function () {
                return new u.LoadableMap({loading: !1, loadedOnce: !0, data: r.fromJS(t)})
            }), Promise.resolve(t))
        }, e.prototype.onSetHttps = function (e) {
            var t = this;
            p.V3Transition.setHttpsBitlinksForBrandedShortDomain({https_bitlinks: e}).then(function (e) {
                t.brandedShortDomain.cursor().setIn(["data", "https_bitlinks"], e.data.https_bitlinks)
            }).catch(function (e) {
                var t = {aspect: "ERROR", title: "Error", text: "Sorry, something went wrong."};
                o.default.Notification.openNotification(new c.default(t))
            })
        }, e.prototype.onGetShortDomainStatus = function () {
            var e = this;
            this.brandedShortDomain.cursor("loading").update(function () {
                return !0
            }), p.V3Transition.getBrandedShortDomainStatus().then(function (t) {
                if (null !== t.data.validate_domain_error) {
                    var n = {aspect: "ERROR", title: "Error", text: t.data.validate_domain_error};
                    o.default.Notification.openNotification(new c.default(n))
                } else e.brandedShortDomain.cursor().update(function () {
                    return new u.LoadableMap({loading: !1, loadedOnce: !0, data: new d.BSDInfo(t.data)})
                })
            }).catch(function (t) {
                if ("INVALID_USER_EMAIL_NOT_VERIFIED" === t.json.status_txt) {
                    var n = r.fromJS([{
                        text: "Resend",
                        fill: !0,
                        callback: o.default.API.resendVerificationPrompt
                    }, {text: "Ignore", fill: !1, callback: o.default.Notification.closeNotification}]);
                    o.default.Notification.openNotification(new c.default({
                        aspect: "ACTION",
                        title: "EMAIL NOT VERIFIED",
                        text: "Some features require a verified email address. Please check your inbox for verification email or resend.",
                        buttons: n
                    }))
                } else o.default.Notification.openNotification(new c.default({
                    aspect: "ERROR",
                    title: "ERROR",
                    text: t.json.status_txt
                }));
                e.brandedShortDomain.cursor().update(function () {
                    return new u.LoadableMap({error: r.fromJS(t)})
                })
            })
        }, e.prototype.onDeleteShortDomain = function () {
            var e = this;
            p.V3Transition.deleteBrandedShortDomain().then(function () {
                o.default.Notification.closeNotification(), e.brandedShortDomain.cursor().update(function () {
                    return new u.LoadableMap({loadedOnce: !0})
                })
            }).catch(function (e) {
                var t = {aspect: "ERROR", title: "ERROR", text: e.json.status_txt};
                o.default.Notification.openNotification(new c.default(t))
            })
        }, e.prototype.onGetLinkedApps = function () {
            var e = this;
            this.linkedApps.cursor().get("loadedOnce") || (this.linkedApps.cursor("loading").update(function () {
                return !0
            }), p.V3Transition.getAuthorizationsForOauth().then(function (t) {
                e.linkedApps.cursor().update(function () {
                    return new u.LoadableMap({loading: !1, loadedOnce: !0, data: r.fromJS(t.data)})
                })
            }).catch(function (t) {
                var n = {aspect: "ERROR", title: "ERROR", text: t.json.status_txt};
                o.default.Notification.openNotification(new c.default(n)), e.linkedApps.cursor().update(function () {
                    return new u.LoadableMap({error: r.fromJS(t)})
                })
            }))
        }, e.prototype.onRevokeAuthorization = function (e) {
            var t = this;
            p.V3Transition.revokeAuthorizationForOauth({authorization_id: e}).then(function () {
                var n = t.linkedApps.cursor(["data", "authorizations"]).filter(function (t) {
                    return t.get("id") !== e
                });
                t.linkedApps.cursor().update(function (e) {
                    return e.withMutations(function (e) {
                        return e.setIn(["loading"], !1).setIn(["loadedOnce"], !0).setIn(["data", "authorizations"], n)
                    })
                })
            })
        }, e.prototype.onResendVerification = function () {
            p.V3Transition.resendVerificationForUser().then(function () {
                var e = {
                    aspect: "MAIN",
                    title: "Verification Sent",
                    text: "Check your email for your verification token"
                };
                o.default.Notification.openNotification(new c.default(e))
            })
        }, e.prototype.onSetRedirectUrl = function (e) {
            var t = this;
            p.V3Transition.setCnameRootRedirectForBrandedShortDomain({cname_root_redirect: e}).then(function () {
                var e = {aspect: "MAIN", title: "SUCCESS", text: "Your root domain redirect has been set"};
                o.default.Notification.openNotification(new c.default(e))
            }).catch(function (e) {
                var n = {aspect: "ERROR", title: "ERROR", text: e.json.status_txt};
                o.default.Notification.openNotification(new c.default(n)), t.linkedApps.cursor().update(function () {
                    return new u.LoadableMap({error: r.fromJS(e)})
                })
            })
        }, e.prototype.onGetRedirectUrl = function () {
            var e = this;
            p.V3Transition.getCnameRootRedirectForBrandedShortDomain().then(function (t) {
                e.rootRedirect.cursor().update(function () {
                    return new u.LoadableMap({loading: !1, loadedOnce: !0, data: r.fromJS(t.data)})
                })
            })
        }, e.prototype.onResendVerificationPrompt = function () {
            o.default.Notification.closeNotification(), o.default.API.resendVerification()
        }, e
    }();
    t.default = f
}, function (e, t, n) {
    "use strict";
    var r = this && this.__extends || function () {
            var e = Object.setPrototypeOf || {__proto__: []}instanceof Array && function (e, t) {
                    e.__proto__ = t
                } || function (e, t) {
                    for (var n in t)t.hasOwnProperty(n) && (e[n] = t[n])
                };
            return function (t, n) {
                function r() {
                    this.constructor = t
                }

                e(t, n), t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
            }
        }();
    Object.defineProperty(t, "__esModule", {value: !0});
    var i = n(2), a = n(247), o = n(107), s = n(14), l = n(514), c = n(17), u = n(129), d = n(3), p = n(60), f = n(23), h = n(15), g = n(28), m = n(13), v = n(543), k = n(255), b = n(20), y = n(544), D = {
        views: {
            list: {loading: !0},
            detail: {loading: !0}
        }
    }, I = {views: {list: {loading: !1}, detail: {loading: !1}}}, A = function (e) {
        function t(t, n, r, i, a) {
            var o = e.call(this, t, r, a) || this;
            return o.preferences = i, o.section = n, d.default.API.loadLinkHistory.listen(o.onLoad, o), d.default.API.loadClicks.listen(o.onLoadClicks, o), d.default.API.loadGlobalEncoders.listen(o.onLoadGlobalEncoders, o), d.default.API.loadClickHistory.listen(o.onLoadClickHistory, o), d.default.API.loadChannels.listen(o.onLoadChannels, o), d.default.API.loadNextPage.listen(o.onLoadNextPage, o), d.default.API.search.listen(o.onSearch, o), d.default.UI.select.listen(o.onSelect, o), d.default.UI.deselect.listen(o.onDeselect, o), d.default.UI.bulkSelect.listen(o.onBulkSelect, o), d.default.UI.bulkDeselect.listen(o.onBulkDeselect, o), d.default.UI.deselectAll.listen(o.onDeselectAll, o), d.default.API.editBitlink.listen(o.onEditBitlink, o), d.default.API.createBitlink.listen(o.onCreateBitlink, o), d.default.UI.clearBitlinkErrors.listen(o.onClearBitlinkErrors, o), d.default.API.shareBitlink.listen(o.onShareBitlink, o), d.default.UI.archiveBitlink.listen(o.onArchiveBitlink, o), d.default.API.loadCountries.listen(o.onLoadCountries, o), d.default.UI.overwriteKeyword.listen(o.onOverwriteKeyword, o), d.default.API.redirectBitlink.listen(o.onRedirectBitlink, o), d.default.API.bulkArchiveBitlink.listen(o.onBulkArchiveBitlink, o), o
        }

        return r(t, e), t.prototype.onArchiveBitlink = function (e) {
            var t = e || this.page.cursor(["cache", this.page.cursor().get("activeBitlink")]);
            if (t) {
                var n = t.get("archived"), r = i.fromJS([{
                    text: "Confirm", fill: !0, callback: function () {
                        return d.default.Notification.confirmArchive(t, !n)
                    }
                }, {
                    text: "Cancel",
                    fill: !1,
                    callback: d.default.Notification.closeNotification
                }]), a = n ? "Unhide Bitlink" : "Hide Bitlink", o = n ? "It can be found in your Bitlinks list" : "It can be found with the hidden Bitlinks filter", s = {
                    aspect: "ACTION",
                    title: a,
                    text: o,
                    buttons: r
                };
                d.default.Notification.openNotification(new h.default(s))
            }
        }, t.prototype.onBulkArchiveBitlink = function (e, t) {
            var n = this, r = i.fromJS([{
                text: "Confirm", fill: !0, callback: function () {
                    return n.confirmBulkArchiveBitlink(e, t)
                }
            }, {
                text: "Cancel",
                fill: !1,
                callback: d.default.Notification.closeNotification
            }]), a = t ? "Unhide Bitlinks" : "Hide Bitlinks", o = t ? "They can be found in your Bitlinks list" : "They can be found with the hidden Bitlinks filter", s = {
                aspect: "ACTION",
                title: a,
                text: o,
                buttons: r
            };
            d.default.Notification.openNotification(new h.default(s))
        }, t.prototype.onOverwriteKeyword = function (e, t) {
            var n = i.fromJS([{
                text: "Confirm", fill: !0, callback: function () {
                    return d.default.Notification.confirmOverwrite(e, t)
                }
            }, {text: "Cancel", fill: !1, callback: d.default.Notification.closeNotification}]), r = {
                aspect: "ACTION",
                title: "Overwrite Keyword",
                text: "Would you like to overwrite the destination URL?",
                buttons: n
            };
            d.default.Notification.openNotification(new h.default(r))
        }, t.prototype.onShareBitlink = function (e, t) {
            this.v3api.shareBitlink(t, e).then(function (e) {
                var t = e.data.share[0].error;
                if (void 0 !== t) {
                    var n = {aspect: "ERROR", title: "ERROR", text: t};
                    d.default.Notification.openNotification(new h.default(n))
                } else {
                    var n = {aspect: "MAIN", title: "Your Bitlink has been shared!", text: ""};
                    d.default.Notification.openNotification(new h.default(n))
                }
            }).catch(function (e) {
                var t = {aspect: "ERROR", title: "ERROR", text: f.bitlinkShareErrors[e.json.status_txt]};
                d.default.Notification.openNotification(new h.default(t))
            })
        }, t.prototype.onEditBitlink = function (e, t, n, r) {
            var o = this, s = a(t, ["title", "archived"]), l = this.page.cursor(["cache", e]), u = {
                edit: Object.keys(s).filter(function (e) {
                    return s[e] !== l.get(e)
                }), link: l.get("userLink")
            };
            for (var p in s)u[p] = s[p];
            var f = this.v3api.editLink(u);
            f.then(function () {
                l = o.page.cursor(["cache", e]), l = l.update(function (e) {
                    return e.setIn(["errors"], i.Map())
                }), l.merge(s);
                var t = l.get("userHash");
                if (s.hasOwnProperty("archived")) {
                    var n = i.List(o.page.cursor(["views", "list", "data"]).filter(function (e) {
                        return e !== t
                    }));
                    if (v.isSmallBreakPoint && !i.List(n).size)return void d.default.UI.clearAllFilters();
                    o.page.cursor(["views", "list"]).update(function (e) {
                        return e.withMutations(function (e) {
                            return e.setIn(["data"], n).setIn(["total"], o.page.cursor(["views", "list", "total"]).deref() - 1)
                        })
                    }), n.size && o.page.cursor().get("activeBitlink") === t ? d.default.UI.select(o.page.cursor(["views", "list", "data"]).first()) : o.page.cursor("activeBitlink").update(function () {
                        return null
                    })
                }
            }).catch(function (t) {
                var n = t.json.status_txt ? t.json.status_txt : "UNKNOWN";
                l = o.page.cursor(["cache", e]), l.update(function (e) {
                    return e.setIn(["errors", "title"], n)
                })
            });
            var k;
            n && (n !== l.get("keyword") && n !== l.get("userHash") && "" !== n || l.get("keywordDomain") && l.get("keywordDomain") !== l.get("domain")) && (k = this.v3api.setKeyword({
                domain: l.get("keywordDomain") || l.get("domain"),
                keyword: n,
                link: l.get("userLink"),
                overwrite: r
            }), k.then(function (t) {
                if (l = o.page.cursor(["cache", e]), 0 === t.data.new_keyword && !1 === r && "free" === o.ref.cursor("productTier").deref())return void l.update(function (e) {
                    return e.setIn(["errors", "customize"], "KEYWORD_UNAVAILABLE")
                });
                var n = c.urlToDomain(t.data.keyword_link);
                if (l.update(function (e) {
                        return e.withMutations(function (e) {
                            return e.setIn(["errors", "customize"], null).setIn(["keyword"], t.data.keyword).setIn(["keywordLink"], t.data.keyword_link).setIn(["domain"], n).setIn(["keywordDomain"], n)
                        })
                    }), "customlinks" === o.ref.cursor("section").deref() && !o.ref.cursor(["config", "bitly_domains"]).includes(n)) {
                    var a = new g.CustomBitlink({
                        domain: n,
                        created: null,
                        longUrl: l.get("longUrl"),
                        longUrlDomain: l.get("longUrlDomain"),
                        userHash: l.get("userHash"),
                        keyword: t.data.keyword,
                        keywordDomain: n,
                        keywordLink: t.data.keyword_link,
                        tags: i.List(),
                        pastUrls: new m.LoadableList
                    });
                    o.ref.cursor("customBitlinks").update(function (e) {
                        return e.withMutations(function (e) {
                            return e.setIn(["cache", t.data.keyword_link], a).setIn(["views", "list", "total"], e.getIn(["views", "list", "total"], 0) + 1).setIn(["views", "list", "data"], e.getIn(["views", "list", "data"], i.List()).unshift(t.data.keyword_link))
                        })
                    }), d.default.UI.selectCustomLink({keywordLink: t.data.keyword_link})
                }
            }).catch(function (t) {
                var r = t.json.status_txt ? t.json.status_txt : "UNKNOWN";
                if (l = o.page.cursor(["cache", e]), l.update(function (e) {
                        return e.setIn(["errors", "customize"], r)
                    }), "UNKNOWN" === r)throw t;
                "WOULD_OVERWRITE" === r && d.default.UI.overwriteKeyword(e, n)
            }));
            var b = function () {
                d.default.Notification.openDefaultNotification("MAIN", "BITLINK HAS BEEN EDITED", "")
            };
            k ? Promise.all([f, k]).then(b).catch(function (e) {
                "KEYWORD_UNAVAILABLE" !== e.json.status_txt && "WOULD_OVERWRITE" !== e.json.status_txt && d.default.Notification.openNotification(new h.default({
                    aspect: "ERROR",
                    title: "Bitlink Edit Failed",
                    text: "Please try again"
                }))
            }) : f.then(b)
        }, t.prototype.confirmBulkArchiveBitlink = function (e, t) {
            var n = this, r = this.page.cursor("cache"), a = e.map(function (e) {
                return r.get(e).get("userLink")
            }), o = t ? "off" : "on";
            this.v3api.bulkArchive({link: a.toJS(), archive: o}).then(function () {
                n.page.cursor("activeBitlink").update(function () {
                    return i.List()
                });
                var t = i.List(n.page.cursor(["views", "list", "data"]).filter(function (t) {
                    return !e.includes(t)
                }));
                if (v.isSmallBreakPoint && !i.List(t).size)return void d.default.UI.clearAllFilters();
                n.page.cursor(["views", "list"]).update(function (r) {
                    return r.withMutations(function (r) {
                        return r.setIn(["data"], t).setIn(["total"], n.page.cursor(["views", "list", "total"]).deref() - e.size)
                    })
                }), d.default.UI.select(n.page.cursor(["views", "list", "data"]).first()), d.default.Notification.closeNotification()
            }).catch(function () {
                d.default.Notification.closeNotification();
                var e = {aspect: "ERROR", title: "Error", text: "Sorry, bulk hide failed. Please try again."};
                d.default.Notification.openNotification(new h.default(e))
            })
        }, t.prototype.onClearBitlinkErrors = function (e) {
            this.page.cursor("cache").has(e) && this.page.cursor(["cache", e]).update(function (e) {
                return e.set("errors", i.Map())
            })
        }, t.prototype.getSectionDateFilter = function () {
            return this.ref.cursor(["sectionDateFilters", this.section.cursor().deref()]).deref()
        }, t.prototype.onRedirectBitlink = function (e, t) {
            var n = this, r = t.get("keywordDomain"), i = t.get("keyword"), a = new l.default({bitly_domains: this.ref.cursor().getIn(["config", "bitly_domains"])});
            if (c.isUrl(e) && i) {
                var o = {long_url: e, domain: r};
                a.execute(o).then(function (a) {
                    n.setNewLink(a), n.v3api.setKeyword({
                        domain: r,
                        keyword: i,
                        link: a.user_link,
                        overwrite: !0
                    }).then(function (i) {
                        if (d.default.UI.closeSheet(), "customlinks" === n.ref.cursor("section").deref()) {
                            var o = i.data.keyword_link.match(/^http:/) ? "https" : "http", s = n.ref.cursor(["customBitlinks", "cache"]).has(i.data.keyword_link) ? i.data.keyword_link : i.data.keyword_link.replace(/^https?/, o);
                            return void n.ref.cursor(["customBitlinks", "cache", s, "pastUrls", "data"]).update(function (t) {
                                return t.unshift(new g.PastUrl({
                                    date_created_localized: null,
                                    date_created_ts: Math.floor(a.created_ts / 1e3),
                                    date_deactivated_localized: null,
                                    date_deactivated_ts: null,
                                    domain: r,
                                    login: null,
                                    long_url: e,
                                    user_hash: a.user_hash
                                }))
                            })
                        }
                        d.default.UI.openSheet("edit"), n.page.cursor(["cache", t.get("user_hash")]).setIn(["keyword"], null).setIn(["keywordLink"], null), n.page.cursor(["cache", a.user_hash]).update(function (e) {
                            return e.withMutations(function (e) {
                                var t = c.urlToDomain(i.data.keyword_link);
                                return e.setIn(["errors", "customize"], null).setIn(["keyword"], i.data.keyword).setIn(["keywordLink"], i.data.keyword_link).setIn(["domain"], t).setIn(["keywordDomain"], t)
                            })
                        })
                    }).catch(function (e) {
                        var t = {aspect: "ERROR", title: "Error", text: "Redirect Custom Bitlink Failed."};
                        d.default.Notification.openNotification(new h.default(t))
                    })
                }).catch(function (e) {
                    var t = f.bitlinkShortenErrors[e.message] || f.genericErrors.UNKNOWN, n = {
                        aspect: "ERROR",
                        title: t.title,
                        html: t.html,
                        text: t.text
                    };
                    d.default.Notification.openNotification(new h.default(n))
                })
            } else d.default.Notification.openNotification(new h.default({
                aspect: "ERROR",
                title: f.bitlinkShortenErrors.INVALID_URI.title,
                text: f.bitlinkShortenErrors.INVALID_URI.text
            }))
        }, t.prototype.setNewLink = function (e) {
            var t = this, n = e.user_hash, r = new m.LoadableMap({
                loadedOnce: !0,
                data: i.Map({ownClicks: 0, globalClicks: 0})
            });
            if (!this.page.cursor("cache").has(n)) {
                var a = new g.Bitlink({
                    userHash: n,
                    userLink: e.user_link,
                    globalHash: e.global_hash,
                    globalLink: e.global_link,
                    title: e.title,
                    longUrl: e.long_url,
                    longUrlDomain: e.long_url_domain,
                    domain: e.domain,
                    archived: !1,
                    hasLinkDeeplinks: e.has_link_deeplinks,
                    hasDomainDeeplinks: e.is_domain_deeplink,
                    created: (new Date).toISOString()
                });
                this.page.cursor().update(function (e) {
                    return e.withMutations(function (e) {
                        return e.setIn(["cache", n], a).setIn(["clickCache", t.getSectionDateFilter(), n, "clicks"], r).setIn(["views", "list", "total"], e.getIn(["views", "list", "total"], 0) + 1).setIn(["views", "list", "data"], e.getIn(["views", "list", "data"], i.List()).unshift(n))
                    })
                })
            }
            e.archived ? this.v3api.editLink({edit: ["archived"], link: e.user_link, archived: !1}).then(function () {
                t.page.cursor(["cache", n, "archived"]).update(function () {
                    return !1
                }), t.page.cursor("activeBitlink").update(function () {
                    return i.List()
                }), d.default.UI.select(n)
            }) : (this.page.cursor("activeBitlink").update(function () {
                return i.List()
            }), d.default.UI.select(n))
        }, t.prototype.onCreateBitlink = function (e, t) {
            var n = this;
            void 0 === t && (t = null);
            var r = new l.default({bitly_domains: this.ref.cursor().getIn(["config", "bitly_domains"])});
            if (c.isUrl(e)) {
                var i = t ? {long_url: e, domain: t} : {long_url: e};
                r.execute(i).then(function (e) {
                    n.setNewLink(s(e, {domain: c.urlToDomain(e.user_link)})), d.default.UI.closeSheet(), d.default.Deeplinks.updateDeeplinkFlag({
                        id: e.user_hash,
                        domain: c.urlToDomain(e.user_link)
                    }), d.default.UI.openSheet("edit")
                }).catch(function (e) {
                    var t = f.bitlinkShortenErrors[e.message] || f.genericErrors.UNKNOWN, n = {
                        aspect: "ERROR",
                        title: t.title,
                        html: t.html,
                        text: t.text
                    };
                    if (d.default.Notification.openNotification(new h.default(n)), t === f.genericErrors.UNKNOWN)throw e
                })
            } else d.default.Notification.openNotification(new h.default({
                aspect: "ERROR",
                title: f.bitlinkShortenErrors.INVALID_URI.title,
                text: f.bitlinkShortenErrors.INVALID_URI.text
            }))
        }, t.prototype.onDeselect = function () {
            this.page.cursor("activeBitlink").update(function () {
                return null
            })
        }, t.prototype.onBulkDeselect = function (e) {
            var t = this;
            this.page.cursor("selectedBitlinks").update(function () {
                return t.page.cursor("selectedBitlinks").filter(function (t) {
                    return !e.includes(t)
                })
            }), this.page.cursor("selectedBitlinks").isEmpty() && this.selectHash()
        }, t.prototype.onDeselectAll = function () {
            this.page.cursor("selectedBitlinks").update(function () {
                return i.List()
            }), this.page.cursor("activeBitlink").update(function () {
                return null
            })
        }, t.prototype.onSearch = function (e) {
            (this.page.cursor("filter").get("query").length || e.length) && (this.page.cursor("filter").merge({
                query: e,
                offset: 0,
                filterActive: !!e.length
            }), d.default.UI.changeSection("bitlinks"))
        }, t.prototype.onSelect = function (e) {
            var t = this;
            return "campaigns" === this.ref.cursor("section").deref() && this.page.cursor(["views", "detail", "loading"]).update(function () {
                return !0
            }), this.page.cursor(["views", "list", "data"]).includes(e) ? (this.page.cursor().update(function (t) {
                return t.withMutations(function (t) {
                    return t.setIn(["activeBitlink"], e).setIn(["selectedBitlinks"], i.List()).setIn(["views", "detail", "loading"], !1).setIn(["views", "detail", "data"], e)
                })
            }), void this.afterOnSelectCalls(e)) : this.page.cursor("cache").find(function (t) {
                return t.get("userHash") === e
            }) ? (this.page.cursor().update(function (t) {
                return t.withMutations(function (t) {
                    return t.setIn(["activeBitlink"], e).setIn(["selectedBitlinks"], i.List()).updateIn(["views", "list", "data"], function (t) {
                        return t.unshift(e)
                    }).setIn(["views", "list", "loading"], !1).setIn(["views", "detail", "loading"], !1)
                })
            }), void this.afterOnSelectCalls(e)) : (this.page.cursor(["views", "list", "loading"]).update(function () {
                return !0
            }), void this.v3api.getBitlink(c.hashToShortUrl(e)).then(function (e) {
                return e.data.link_history[0]
            }).then(function (n) {
                var r = i.fromJS(p.parseBitlink(n));
                t.page.cursor().update(function (t) {
                    return t.withMutations(function (t) {
                        return t.setIn(["cache", e], r).setIn(["activeBitlink"], e).setIn(["selectedBitlinks"], i.List()).updateIn(["views", "list", "data"], function (t) {
                            return t.unshift(e)
                        }).setIn(["views", "list", "loading"], !1).setIn(["views", "detail", "loading"], !1)
                    })
                }), d.default.API.loadClicks([e]), t.afterOnSelectCalls(e)
            }).catch(function () {
                if (t.page.cursor(["views", "list", "data"]).size > 0) {
                    var e = t.page.cursor(["views", "list", "data"]).first();
                    t.page.cursor().mergeDeep({
                        activeBitlink: e,
                        views: {list: {loading: !1}, detail: {loading: !1}}
                    }), d.default.API.loadChannels(e), d.default.API.loadCountries(e), d.default.API.loadGlobalEncoders(e)
                } else t.page.cursor().mergeDeep({
                    activeBitlink: null,
                    views: {list: {loading: !1}, detail: {loading: !1}}
                })
            }))
        }, t.prototype.afterOnSelectCalls = function (e) {
            d.default.API.loadChannels(e), d.default.API.loadClickHistory(e), d.default.API.loadGlobalEncoders(e), d.default.API.loadCountries(e), d.default.Campaigns.getCampaignsNotInCache(e), d.default.Deeplinks.getDeeplinkMetrics()
        }, t.prototype.onBulkSelect = function (e) {
            this.page.cursor(["views", "list", "data"]).includes(e) && this.page.cursor().update(function (t) {
                return t.withMutations(function (t) {
                    return t.setIn(["activeBitlink"], null).updateIn(["selectedBitlinks"], function (t) {
                        return t.includes(e) ? t : t.concat(e)
                    })
                })
            })
        }, t.prototype.parseLinkHistory = function (e) {
            var t = e.data.result_count, n = e.data.link_history.map(p.parseBitlink);
            return {
                total: t, bitlinks: n, hashes: o(n.map(function (e) {
                    return e.userHash
                }))
            }
        }, t.prototype.mergeLinkHistory = function (e) {
            var t = e.total, n = e.bitlinks, r = e.hashes, a = this.page.cursor("cache"), o = i.Map(u.reduceByKey(i.fromJS(n), "userHash")).filter(function (e) {
                return !a.has(e.get("userHash"))
            });
            this.page.cursor().update(function (e) {
                return e.withMutations(function (e) {
                    return e.mergeIn(["cache"], o).setIn(["views", "detail", "loading"], !1).setIn(["views", "detail", "loadedOnce"], !0).setIn(["views", "list"], i.fromJS({
                        total: t,
                        loading: !1,
                        loadedOnce: !0,
                        data: i.List(r)
                    }))
                })
            })
        }, t.prototype.selectHash = function () {
            var e = this.ref.cursor(["bitlinks", "views", "list", "data"]).first(), t = this.ref.cursor(["bitlinks"]).get("activeBitlink");
            (t || e) && this.onSelect(t || e)
        }, t.prototype.onLoad = function () {
            var e = this.getSectionDateFilter().unit_reference_ts;
            this.ref.cursor("section").deref(), this.ref.cursor("productTier").deref();
            this.page.cursor("filter").merge(new y.default), this.loadLinkHistorySortedByDate(e), d.default.API.loadShortensByDay(), d.default.API.loadPerformanceData()
        }, t.prototype.loadLinkHistorySortedByDate = function (e) {
            var t = this, n = this.page.cursor("filter").toJS(), r = !e && n.link.size ? {link: n.link} : n;
            this.ref.cursor(["bitlinks"]).mergeDeep(D), r = s(r, {
                link_deeplinks: n.deeplinks.link,
                domain_deeplinks: n.deeplinks.domain
            }), this.v3api.getLinkHistory(r).then(this.parseLinkHistory).then(function (e) {
                var n = e.bitlinks, r = e.total, i = e.hashes;
                t.mergeLinkHistory({
                    bitlinks: n,
                    total: r,
                    hashes: i
                }), d.default.API.loadClicks(i), t.page.cursor("filter").get("query") && d.default.UI.deselectAll(), b.isDesktop() && t.selectHash()
            }).catch(function (e) {
                t.page.cursor().mergeDeep(I)
            })
        }, t.prototype.onLoadNextPage = function () {
            var e = this, t = this.page.cursor(["views", "list"]);
            if ("performance" !== this.ref.cursor("section").deref() && !(t.get("loading") || t.get("data").size >= t.get("total"))) {
                var n = this.page.cursor(["filter"]);
                this.page.cursor().mergeDeep({
                    filter: {offset: n.get("offset") + n.get("limit")},
                    views: {list: {loading: !0}}
                });
                var r = s(this.page.cursor("filter").toJS(), {
                    link_deeplinks: n.getIn(["deeplinks", "link"]),
                    domain_deeplinks: n.getIn(["deeplinks", "domain"])
                });
                this.v3api.getLinkHistory(r).then(function (t) {
                    var n = t.data.link_history.map(p.parseBitlink), r = e.page.cursor(["views", "list", "data"]).deref().toArray(), a = i.Map(u.reduceByKey(i.fromJS(n), "userHash")).filter(function (t) {
                        return !e.page.cursor("cache").deref().has(t.get("userHash"))
                    }), s = n.map(function (e) {
                        return e.userHash
                    }), l = o(r.concat(s));
                    e.page.cursor().mergeDeep({
                        cache: a,
                        views: {list: {loading: !1, data: l}}
                    }), d.default.API.loadClicks(s)
                }, function () {
                    e.page.cursor(["views", "list"]).set("loading", !1)
                })
            }
        }, t
    }(k.default);
    t.default = A
}, , , , , , , , , , , , , , , , , , , , , function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    var r = n(36), i = n(14), a = n(108), o = n(17), s = n(88), l = n(251), c = n(526), u = function () {
        function e(e) {
            void 0 === e && (e = {bitly_domains: []}), this.builder = new c.default, this.fetcher = e.fetcher || new l.default, this.bitly_domains = e.bitly_domains
        }

        return e.prototype.transition = function (e) {
            var t = this, n = this.builder;
            switch (e) {
                case"SHORTEN_LINK":
                    return this.fetcher.callUserLinkSave({
                        long_url: n.getAttrib("long_url"),
                        domain: n.getAttrib("domain")
                    }).then(function (e) {
                        return n.addData(e), t.transition("LINK_SAVED_WITHOUT_TITLE")
                    }).catch(function (e) {
                        if (!(e instanceof s.APIError))throw e;
                        switch (n.addError(e), e.message) {
                            case"INVALID_URI":
                                return t.transition("INVALID_URI");
                            case"LINK_ALREADY_EXISTS":
                                var r = e.json ? e.json : e;
                                if (!(r && r.data && r.data.link_save && r.data.link_save.link))return t.transition("LINK_ALREADY_EXISTS_RESPONSE_HAS_NO_DATA");
                                var i = r.data.link_save;
                                return n.addData({
                                    user_link: i.link,
                                    domain: o.urlToDomain(i.link),
                                    long_url: i.long_url,
                                    long_url_domain: o.urlToDomain(i.long_url),
                                    new_link: i.new_link
                                }), t.transition("LINK_ALREADY_EXISTS");
                            case"ALREADY_A_BITLY_LINK":
                                var a = n.getAttrib("long_url");
                                return n.addData({
                                    user_link: a,
                                    domain: o.urlToDomain(a),
                                    long_url: void 0
                                }), t.transition("ALREADY_A_BITLY_LINK");
                            default:
                                throw e
                        }
                    });
                case"LINK_SAVED_WITHOUT_TITLE":
                    return this.fetcher.callDataTitle({long_url: n.getAttrib("long_url")}).then(function (e) {
                        return n.addData(e), t.transition("LINK_SAVED_PENDING_TITLE_SAVE")
                    }).catch(function (e) {
                        if (!(e instanceof s.APIError))throw e;
                        return n.addError(e), t.transition("SUCCESS")
                    });
                case"LINK_SAVED_PENDING_TITLE_SAVE":
                    return this.fetcher.callLinkEdit({
                        short_url: n.getAttrib("user_link"),
                        title: n.getAttrib("title")
                    }).then(function (e) {
                        return n.addData(e), t.transition("SUCCESS")
                    }).catch(function (e) {
                        if (!(e instanceof s.APIError))throw e;
                        return n.addError(e), n.addData({title: void 0}), t.transition("SUCCESS")
                    });
                case"LINK_ALREADY_EXISTS":
                    return this.fetcher.callUserLinkHistory({short_url: n.getAttrib("user_link")}).then(function (e) {
                        return n.addData(e), t.transition("SUCCESS")
                    }).catch(function (e) {
                        if (!(e instanceof s.APIError))throw e;
                        if ("NOT_FOUND" !== e.message)throw e;
                        return n.addError(e), t.transition("LINK_ALREADY_EXISTS_NOT_FOUND_IN_LINK_HISTORY")
                    });
                case"LINK_ALREADY_EXISTS_NOT_FOUND_IN_LINK_HISTORY":
                    return this.fetcher.callInfo({shortUrl: [n.getAttrib("user_link")]}).then(function (e) {
                        return e[0]
                    }).then(function (e) {
                        return n.addData(e), t.transition("SUCCESS")
                    }).catch(function (e) {
                        if (!(e instanceof s.APIError))throw e;
                        if ("NOT_FOUND" !== e.message)throw e;
                        return n.addError(e), t.transition("INCONSISTENT_DATA")
                    });
                case"ALREADY_A_BITLY_LINK":
                    return this.fetcher.callExpand({shortUrl: [n.getAttrib("user_link")]}).then(function (e) {
                        return e[0]
                    }).then(function (e) {
                        return n.addData(e), t.transition("SHORTEN_LINK")
                    }).catch(function (e) {
                        if (!(e instanceof s.APIError))throw e;
                        return n.addError(e), t.transition("SHORTENING_NONEXISTENT_SHORT_URL")
                    });
                case"SUCCESS":
                    return n.getData();
                case"SHORTENING_NONEXISTENT_SHORT_URL":
                    throw new s.APIError("SHORTENING_NONEXISTENT_SHORT_URL", 400, {errors: n.getErrors()});
                case"INVALID_URI":
                    throw new s.APIError("INVALID_URI", 400, {errors: n.getErrors()});
                case"LINK_ALREADY_EXISTS_RESPONSE_HAS_NO_DATA":
                    throw new s.APIError("LINK_ALREADY_EXISTS_RESPONSE_HAS_NO_DATA", 400, {errors: n.getErrors()});
                case"INCONSISTENT_DATA":
                    throw new s.APIError("INCONSISTENT_DATA", 400, {errors: n.getErrors()});
                default:
                    throw new s.APIError(n.getErrors().join(" "), 400, {errors: n.getErrors()})
            }
        }, e.prototype.execute = function (e) {
            var t = this, n = this;
            return new Promise(function (s) {
                if (o.isBitlyLink(e.long_url, t.bitly_domains)) {
                    var l = a(e, "long_url");
                    return i(l, {
                        user_link: e.long_url,
                        domain: o.urlToDomain(e.long_url),
                        user_hash: o.shortUrlToHash(e.long_url)
                    }), n.builder.addData(l), s(n.transition("ALREADY_A_BITLY_LINK"))
                }
                return n.builder.addData(r(e)), s(n.transition("SHORTEN_LINK"))
            })
        }, e
    }();
    t.default = u
}, , , , , , , , , , , , function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    var r = n(14), i = n(108), a = function () {
        function e() {
            this.data = [], this.errors = []
        }

        return e.prototype.addData = function (e) {
            if (this.data.length > 100)throw new Error("LinkDataBuilder can only merge up to 100 pieces of data");
            return this.data.push(e)
        }, e.prototype.addError = function (e) {
            if (!(e && e instanceof Error))throw new TypeError("Failure result must be an Error");
            return this.errors.push(e)
        }, e.prototype.getData = function () {
            var e = r.apply(void 0, [{}].concat(this.data));
            return i(e, function (e) {
                return void 0 === e
            })
        }, e.prototype.getErrors = function () {
            return this.errors
        }, e.prototype.getAttrib = function (e) {
            return this.getData()[e]
        }, e
    }();
    t.default = a
}, , , , , , , , , , , , , , , , , function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    var r = "undefined" != typeof window;
    t.isSmallBreakPoint = r && window.innerWidth <= 600
}, function (e, t, n) {
    "use strict";
    var r = this && this.__extends || function () {
            var e = Object.setPrototypeOf || {__proto__: []}instanceof Array && function (e, t) {
                    e.__proto__ = t
                } || function (e, t) {
                    for (var n in t)t.hasOwnProperty(n) && (e[n] = t[n])
                };
            return function (t, n) {
                function r() {
                    this.constructor = t
                }

                e(t, n), t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
            }
        }();
    Object.defineProperty(t, "__esModule", {value: !0});
    var i = n(2), a = function (e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }

        return r(t, e), t
    }(i.Record({limit: 30, offset: 0}));
    t.default = a
}, function (e, t, n) {
    "use strict";
    function r(e, t) {
        return e.find(function (e) {
            return e.get("name") === t
        }).get("enabled")
    }

    function i(e, t) {
        return e.find(function (e) {
            return e.get("name") === t
        })
    }

    function a(e, t) {
        e.set(t, d.get(t))
    }

    Object.defineProperty(t, "__esModule", {value: !0});
    var o = n(2), s = n(5), l = n(3), c = n(28), u = n(16), d = new c.BitlinkFilter, p = function () {
        function e(e, t) {
            this.page = e, this.ref = t, l.default.API.filter.listen(this.onFilter, this), l.default.API.fastFilterByTag.listen(this.onfastFilterByTag, this), l.default.UI.setFilter.listen(this.onSetFilter, this), l.default.UI.selectFilterTags.listen(this.onSelectFilterTags, this), l.default.UI.filterByDateRange.listen(this.onFilterByDateRange, this), l.default.UI.filterDate.listen(this.onFilterDate, this), l.default.UI.filterDeeplinks.listen(this.onFilterDeeplinks, this), l.default.UI.clearDeeplinks.listen(this.onClearDeeplinks, this), l.default.UI.clearGeneralFilter.listen(this.onClearGeneralFilter, this), l.default.UI.clearTagsFilter.listen(this.onClearTagsFilter, this), l.default.UI.clearDateFilter.listen(this.onClearDateFilter, this), l.default.UI.clearAllFilters.listen(this.onClearAllFilters, this)
        }

        return e.prototype.onFilterDeeplinks = function (e) {
            this.page.cursor("filter").set("deeplinks", e), this.updatePage()
        }, e.prototype.onClearDeeplinks = function (e) {
            var t = this.page.cursor("filter");
            switch (e) {
                case"domain":
                    t.setIn(["deeplinks", "domain"], "both");
                    break;
                case"link":
                    t.setIn(["deeplinks", "link"], "both");
                    break;
                default:
                    t.setIn(["deeplinks", "domain"], "both"), t.setIn(["deeplinks", "link"], "both")
            }
            this.updatePage()
        }, e.prototype.onClearGeneralFilter = function (e) {
            a(this.page.cursor("filter"), e), this.updatePage()
        }, e.prototype.onClearTagsFilter = function (e) {
            var t = this.page.cursor("filter");
            t.set("tags", o.List(t.get("tags").filter(function (t) {
                return t !== e
            }))), this.updatePage()
        }, e.prototype.onClearDateFilter = function () {
            var e = this.page.cursor("filter"), t = this.ref.cursor("productTier").deref();
            e.set("created_before", null), e.set("created_after", null), this.ref.cursor(["sectionDateFilters", this.ref.cursor("section").deref()]).update(function () {
                return u.default[t].BITLINK_DATE_FILTER
            });
            var n = i(this.page.cursor("filterSheet"), "dateFilter");
            n.set("start", null), n.set("end", null), n.set("count", 0), this.updatePage()
        }, e.prototype.onClearAllFilters = function () {
            var e = this.ref.cursor("productTier").deref();
            this.page.cursor().update(function (e) {
                return e.withMutations(function (e) {
                    return e.setIn(["filter"], d)
                })
            }), "performance" === this.ref.cursor("section").deref() ? this.ref.cursor(["sectionDateFilters", "performance"]).update(function () {
                return u.default[e].PERF_DATE_FILTER
            }) : this.ref.cursor(["sectionDateFilters", "bitlinks"]).update(function () {
                return u.default[e].BITLINK_DATE_FILTER
            }), this.updatePage()
        }, e.prototype.updatePage = function () {
            l.default.UI.setFilter(), l.default.UI.deselectAll(), this.page.cursor("filter").set("filterActive", this.checkFilterState()), this.loadBitlinks()
        }, e.prototype.checkFilterState = function () {
            var e = i(this.page.cursor("filterSheet"), "dateFilter"), t = i(this.page.cursor("filterSheet"), "tags"), n = i(this.page.cursor("filterSheet"), "archived"), r = i(this.page.cursor("filterSheet"), "custom_bitlink"), a = this.page.cursor(["filter", "deeplinks"]);
            return e.get("start") || t.get("count") || n.get("enabled") || r.get("enabled") || "on" === a.get("domain") || "on" === a.get("link")
        }, e.prototype.onFilter = function () {
            var e = this, t = i(this.page.cursor("filterSheet"), "tags").get("content"), n = {
                offset: 0,
                link: o.List(),
                custom_bitlink: r(this.page.cursor("filterSheet"), "custom_bitlink") ? "on" : "both",
                archived: r(this.page.cursor("filterSheet"), "archived") ? "on" : "off",
                tags: t.size ? t : o.List()
            }, a = this.page.cursor("filter");
            this.page.cursor("filter").merge(n), l.default.UI.changeSection("bitlinks");
            var s = i(this.page.cursor("filterSheet"), "dateFilter");
            s.get("start") ? this.setDateFilter(s.get("start"), s.get("end")) : this.ref.cursor(["sectionDateFilters", "bitlinks"]).update(function () {
                return u.default[e.ref.cursor("productTier").deref()].BITLINK_DATE_FILTER
            }), this.checkFilterState() && this.page.cursor(["filter", "filterActive"]).update(function () {
                return !0
            }), a.equals(this.page.cursor("filter")) || (l.default.UI.deselectAll(), l.default.API.loadLinkHistory())
        }, e.prototype.onSelectFilterTags = function () {
            var e = this.page.cursor(["allTags", "data"]).filter(function (e) {
                return e.get("enabled")
            }), t = o.List(e.map(function (e) {
                return e.get("label")
            })), n = i(this.page.cursor("filterSheet"), "tags");
            n.set("content", t), n.set("count", t.size)
        }, e.prototype.onfastFilterByTag = function (e) {
            i(this.page.cursor("filterSheet"), "tags").set("content", o.List([e])).set("count", 1), l.default.API.filter()
        }, e.prototype.setDateFilter = function (e, t) {
            var n = e / 1e3, r = t / 1e3;
            if ("bitlinks" == this.ref.cursor("section").deref())this.page.cursor("filter").merge(o.Map({
                created_after: n,
                created_before: s.unix(r).utc().endOf("day").unix(),
                offset: 0
            })); else {
                var i = s.unix(r).utc().diff(s.unix(n).utc(), "day") + 1;
                this.ref.cursor(["sectionDateFilters", this.ref.cursor("section").deref()]).merge(o.Map({
                    unit_reference_ts: r,
                    units: i
                }))
            }
        }, e.prototype.onFilterByDateRange = function (e, t) {
            this.setDateFilter(e, t), l.default.UI.deselectAll(), this.loadBitlinks()
        }, e.prototype.onSetFilter = function () {
            i(this.page.cursor("filterSheet"), "custom_bitlink").set("enabled", "both" !== this.page.cursor("filter").get("custom_bitlink")), i(this.page.cursor("filterSheet"), "archived").set("enabled", "off" !== this.page.cursor("filter").get("archived")), i(this.page.cursor("filterSheet"), "deeplinks").set("content", this.page.cursor("filter").get("deeplinks"));
            var e = i(this.page.cursor("filterSheet"), "tags");
            e.set("count", this.page.cursor("filter").get("tags").size), e.set("content", this.page.cursor("filter").get("tags"))
        }, e.prototype.onFilterDate = function (e, t) {
            var n = i(this.page.cursor("filterSheet"), "dateFilter");
            n.set("start", e), n.set("end", t), n.set("count", 1)
        }, e.prototype.loadBitlinks = function () {
            "bitlinks" === this.ref.cursor("section").deref() ? l.default.API.loadLinkHistory() : l.default.API.loadPopularClicks()
        }, e
    }();
    t.default = p
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    var r = n(3), i = n(15), a = n(25), o = function () {
        function e(e) {
            this.page = e, r.default.Notification.openDefaultNotification.listen(this.onDefaultNotification, this), r.default.Notification.openNotification.listen(this.onOpenNotification, this), r.default.Notification.closeNotification.listen(this.onCloseNotification, this), r.default.Notification.confirmArchive.listen(this.onConfirmArchive, this), r.default.Notification.confirmResetAPIKey.listen(this.onConfirmResetAPIKey, this), r.default.Notification.confirmRemoveSharedAccount.listen(this.onConfirmRemoveSharedAccount, this), r.default.Notification.confirmOverwrite.listen(this.onConfirmOverwrite, this)
        }

        return e.prototype.onDefaultNotification = function (e, t, n) {
            this.page.cursor().update(function () {
                return new i.default({aspect: e, title: t, text: n})
            })
        }, e.prototype.onOpenNotification = function (e) {
            this.page.cursor().update(function () {
                return e
            })
        }, e.prototype.onCloseNotification = function () {
            this.page.cursor().update(function () {
                return null
            })
        }, e.prototype.onConfirmArchive = function (e, t) {
            r.default.API.editBitlink(e.get("userHash"), {archived: t}, null, !1), r.default.Notification.closeNotification()
        }, e.prototype.onConfirmOverwrite = function (e, t) {
            r.default.API.editBitlink(e, {}, t, !0), r.default.Notification.closeNotification()
        }, e.prototype.onConfirmRemoveSharedAccount = function (e, t) {
            r.default.API.removeSharedAccount(e, t), r.default.Notification.closeNotification()
        }, e.prototype.onConfirmResetAPIKey = function (e) {
            a.V3Transition.resetApiKeyForUser().then(function (t) {
                e.cursor().set("apiKey", t.data.api_key), r.default.Notification.closeNotification()
            }).catch(function (e) {
                var t = {aspect: "ERROR", title: "ERROR", text: e.json.status_txt};
                r.default.Notification.openNotification(new i.default(t))
            })
        }, e
    }();
    t.default = o
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    var r = n(2), i = n(3), a = n(25), o = function () {
        function e(e, t) {
            this.page = e, this.bitlinks = t, i.default.API.loadShortensByDay.listen(this.onLoadShortensByDay, this), i.default.API.loadPerformanceData.listen(this.onLoadPerformanceData, this)
        }

        return e.prototype.loadClicksByDay = function (e) {
            var t = this;
            return a.V3Transition.getUserClicks(e).then(function (e) {
                return e.data.user_clicks
            }).then(function (e) {
                var n;
                e.length && (n = e.reduce(function (e, t) {
                    return {clicks: e.clicks + t.clicks}
                })), t.page.cursor().update(function (t) {
                    return t.withMutations(function (t) {
                        return t.setIn(["totalClicks", "data"], n.clicks).setIn(["totalClicks", "loading"], !1).setIn(["totalClicks", "loadedOnce"], !0).setIn(["totalClicksSeries", "data"], r.fromJS(e)).setIn(["totalClicksSeries", "loading"], !1).setIn(["totalClicksSeries", "loadedOnce"], !0)
                    })
                })
            })
        }, e.prototype.loadClicksByCountry = function (e) {
            var t = this;
            return a.V3Transition.getTopCountriesForUser(e).then(function (e) {
                return e.data.user_top_countries
            }).then(function (e) {
                var n, i;
                if (e.length) {
                    var a = e[0];
                    n = Object.keys(a)[0], i = a[n].map(function (e) {
                        return e.clicks
                    }).reduce(function (e, t) {
                        return e + t
                    })
                }
                t.page.cursor().update(function (t) {
                    return t.withMutations(function (t) {
                        return t.mergeIn(["topCountry", "data"], {
                            countryCode: n,
                            clicks: i
                        }).setIn(["topCountry", "loading"], !1).setIn(["topCountry", "loadedOnce"], !0).setIn(["topCountrySeries", "data"], r.List(e)).setIn(["topCountrySeries", "loading"], !1).setIn(["topCountrySeries", "loadedOnce"], !0)
                    })
                })
            })
        }, e.prototype.loadClicksByChannel = function (e) {
            var t = this;
            return a.V3Transition.getTopReferringNetworksForUser(e).then(function (e) {
                return e.data.user_top_referring_networks
            }).then(function (e) {
                var n, i;
                if (e.length) {
                    var a = e[0];
                    n = Object.keys(a)[0], i = a[n].map(function (e) {
                        return e.clicks
                    }).reduce(function (e, t) {
                        return e + t
                    })
                }
                t.page.cursor().update(function (t) {
                    return t.withMutations(function (t) {
                        return t.mergeIn(["topChannel", "data"], {
                            channelName: n,
                            clicks: i
                        }).setIn(["topChannel", "loading"], !1).setIn(["topChannel", "loadedOnce"], !0).setIn(["topChannelSeries", "data"], r.List(e)).setIn(["topChannelSeries", "loading"], !1).setIn(["topChannelSeries", "loadedOnce"], !0)
                    })
                })
            })
        }, e.prototype.onLoadShortensByDay = function () {
            var e = this, t = {units: this.page.cursor("limit").deref(), unit: "day", rollup: !1, timezone: 0};
            a.V3Transition.getShortenCountsForUser(t).then(function (e) {
                return e.data.user_shorten_counts
            }).then(function (t) {
                e.bitlinks.cursor().update(function (e) {
                    return e.withMutations(function (e) {
                        return e.setIn(["linksCreated", "data"], r.fromJS(t)).setIn(["linksCreated", "loading"], !1).setIn(["linksCreated", "loadedOnce"], !0)
                    })
                })
            }).catch(function (t) {
                e.bitlinks.cursor().setIn(["linksCreated", "loading"], !1).setIn(["linksCreated", "error"], t)
            })
        }, e.prototype.onLoadPerformanceData = function () {
            var e = {units: this.page.cursor("limit").deref(), unit: "day", rollup: !1, timezone: 0};
            this.loadClicksByDay(e), this.loadClicksByCountry(e), this.loadClicksByChannel(e)
        }, e
    }();
    t.default = o
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    var r = n(2), i = n(3), a = n(15), o = n(25), s = n(146), l = function () {
        function e(e) {
            this.user = e.user, this.featureFlags = e.featureFlags, this.preferences = e.preferences, i.default.Preferences.updateUserProfile.listen(this.onUpdateUserProfile, this), i.default.Preferences.resetPassword.listen(this.onResetPassword, this), i.default.Preferences.clearUserErrors.listen(this.onClearUserErrors, this), i.default.API.resetAPIKey.listen(this.onResetAPIKey, this), i.default.API.setBitlinkDomainPreference.listen(this.onSetBitlinkDomainPreference, this), i.default.API.signOutSessions.listen(this.onSignOutSessions, this), i.default.API.deactivateAccount.listen(this.onDeactivateAccount, this), i.default.API.verifyEmail.listen(this.onVerifyEmail, this), i.default.Preferences.addPasswordMismatchError.listen(this.onAddPasswordMismatchError, this)
        }

        return e.prototype.onUpdateUserProfile = function (e) {
            var t = this, n = [];
            if (e.fullName !== this.user.cursor().get("full_name")) {
                var r = o.V3Transition.setDisplayNameForUser({display_name: e.fullName});
                n.push(r), r.then(function () {
                    t.user.cursor().set("full_name", e.fullName)
                }).catch(function (e) {
                    t.user.cursor("errors").set("full_name", e.json.status_txt)
                })
            }
            if (e.email !== s.getUserPrimaryEmail(this.user.cursor())) {
                var a = o.V3Transition.setEmailForUser({email_address: e.email});
                n.push(a), a.then(function () {
                    t.user.cursor().update(function (t) {
                        return t.withMutations(function (t) {
                            return t.setIn(["email"], e.email).setIn(["is_verified"], !1)
                        })
                    })
                }).catch(function (e) {
                    t.user.cursor("errors").set("email", e.json.status_txt)
                })
            }
            Promise.all(n).then(function () {
                i.default.UI.closeSheet()
            })
        }, e.prototype.onResetPassword = function (e) {
            var t = this;
            e.newPassword && o.V3Transition.changePasswordForUser({
                original_password: e.currentPassword,
                new_password: e.newPassword,
                confirm_new_password: e.confirmPassword
            }).then(function () {
                var e = {aspect: "MAIN", title: "Success", text: "Your password has been successfully reset."};
                i.default.Notification.openNotification(new a.default(e)), i.default.UI.closeSheet()
            }).catch(function (e) {
                var n = e.json.status_txt ? e.json.status_txt : "UNKNOWN";
                t.user.cursor("errors").set("password", n)
            })
        }, e.prototype.onAddPasswordMismatchError = function (e) {
            this.user.cursor("errors").set("password", e)
        }, e.prototype.onClearUserErrors = function () {
            this.user.cursor().set("errors", r.Map())
        }, e.prototype.onResetAPIKey = function () {
            var e = this, t = r.fromJS([{
                text: "Reset Key", fill: !0, callback: function () {
                    return i.default.Notification.confirmResetAPIKey(e.user)
                }
            }, {text: "Cancel", fill: !1, callback: i.default.Notification.closeNotification}]), n = {
                aspect: "ACTION",
                title: "Reset API Key",
                text: "This action cannot be undone and will disable existing integrations",
                buttons: t
            };
            i.default.Notification.openNotification(new a.default(n))
        }, e.prototype.onSetBitlinkDomainPreference = function (e, t) {
            t.set("keywordDomain", e)
        }, e.prototype.onDeactivateAccount = function (e) {
            o.V3Transition.deactivateAccountForUser(e).then(function () {
                var e = {aspect: "MAIN", title: "Success", text: "Your account has been successfully deactivated."};
                i.default.Notification.openNotification(new a.default(e))
            }).catch(function (e) {
                var t = {aspect: "ERROR", title: "ERROR", text: e.json.status_txt};
                i.default.Notification.openNotification(new a.default(t))
            })
        }, e.prototype.onSignOutSessions = function () {
            o.V3Transition.invalidateOtherSessionsForData().then(function () {
                var e = {
                    aspect: "MAIN",
                    title: "Success!",
                    text: "You have been signed out of all your other active sessions"
                };
                i.default.Notification.openNotification(new a.default(e))
            }).catch(function (e) {
                var t = {aspect: "ERROR", title: "ERROR", text: e.json.status_txt};
                i.default.Notification.openNotification(new a.default(t))
            })
        }, e.prototype.onVerifyEmail = function () {
            this.user.cursor().set("is_verified", !0)
        }, e
    }();
    t.default = l
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    var r = n(3), i = function () {
        function e(e) {
            this.siteWideMessage = e, r.default.UI.setSiteWideMessage.listen(this.onSetSiteWideMessage, this)
        }

        return e.prototype.onSetSiteWideMessage = function (e) {
            this.siteWideMessage.cursor().deref() !== e && this.siteWideMessage.cursor().set(e)
        }, e
    }();
    t.default = i
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    var r = n(2), i = n(3), a = n(551), o = n(346), s = n(245), l = n(23), c = n(15), u = n(25), d = function () {
        function e(e) {
            this.page = e, i.default.API.loadTags.listen(this.onLoadTags, this), i.default.UI.filterTags.listen(this.onFilterTags, this), i.default.UI.toggleTag.listen(this.onToggleTag, this), i.default.API.removeTag.listen(this.onRemoveTag, this), i.default.API.editTags.listen(this.onEditTags, this), i.default.API.bulkEditTags.listen(this.onBulkEditTags, this), i.default.API.fetchTags.listen(this.onFetchTags, this)
        }

        return e.prototype.onLoadTags = function () {
            var e, t = this, n = this.page.cursor("activeBitlink").deref(), o = this.page.cursor("selectedBitlinks");
            if (n)e = this.page.cursor("cache").getIn([n, "tags"]); else if (o.isEmpty()) {
                var s = this.page.cursor("filterSheet").find(function (e) {
                    return "tags" === e.get("name")
                });
                e = r.List(s.get("content"))
            } else e = o.flatMap(function (e) {
                return t.page.cursor("cache").getIn([e, "tags"])
            });
            if (this.page.cursor("allTags").get("loadedOnce")) {
                var l = this.page.cursor(["allTags", "data"]), c = function (t) {
                    return t.map(function (t) {
                        return e.includes(t.get("label")) ? t.set("enabled", !0) : t.set("enabled", !1)
                    }).sort(a.tagsComparator)
                };
                return void l.update(c)
            }
            i.default.API.fetchTags(e)
        }, e.prototype.onFetchTags = function (e) {
            var t = this;
            this.page.cursor(["allTags", "loading"]).update(function () {
                return !0
            }), u.V3Transition.getUserTags().then(function (e) {
                return e.data.tags
            }).then(function (n) {
                var i = r.List(n.map(function (t) {
                    return new o.default({label: t.tag, showing: !0, new: !1, enabled: e && e.includes(t.tag)})
                }));
                t.page.cursor("allTags").mergeDeep({loading: !1, loadedOnce: !0, data: i.sort(a.tagsComparator)})
            })
        }, e.prototype.onFilterTags = function (e, t) {
            var n, i = this.page.cursor(["allTags", "data"]).update(function (t) {
                return null === e ? t.filter(function (e) {
                    return !e.get("new")
                }) : t.filter(function (e) {
                    return !e.get("new") || e.get("enabled")
                })
            }), a = i.map(function (e) {
                return e.get("label")
            }), l = s.filterAndCreate(e, a, t);
            l.error ? (this.page.cursor("allTags").set("error", l.error), n = r.List()) : (this.page.cursor("allTags").set("error", null), n = l.filteredList), this.page.cursor(["allTags", "data"]).update(function (t) {
                var r = t.map(function (e) {
                    return e.set("showing", n.includes(e.get("label")))
                });
                return l.isNewElement && (r = r.unshift(new o.default({label: e, showing: !0, new: !0}))), r
            })
        }, e.prototype.onToggleTag = function (e) {
            this.page.cursor(["allTags", "data"]).update(function (t) {
                return t.map(function (t) {
                    return t.get("label") === e.get("label") ? e : t
                })
            })
        }, e.prototype.onRemoveTag = function (e, t) {
            var n = this, r = t.get("userHash");
            u.V3Transition.editTagForUser({link: t.get("userLink"), add_tag: [], remove_tag: [e]}).then(function () {
                var t = n.page.cursor("cache").getIn([r, "tags"]).filter(function (t) {
                    return t !== e
                });
                n.page.cursor("cache").update(function (e) {
                    return e.setIn([r, "tags"], t.toList())
                })
            })
        }, e.prototype.onEditTags = function (e) {
            var t = this, n = e.get("userHash"), r = this.page.cursor().getIn(["allTags", "data"]), a = this.page.cursor("cache").getIn([n, "tags"]), o = r.filter(function (e) {
                return e.get("enabled")
            }), s = o.map(function (e) {
                return e.get("label")
            }), d = r.filter(function (e) {
                return !e.get("enabled")
            }).map(function (e) {
                return e.get("label")
            }), p = s.toSet().subtract(a.toSet()), f = a.toSet().intersect(d.toSet());
            (p.size || f.size) && (this.page.cursor(["allTags", "data"]).update(function (e) {
                return e.map(function (e) {
                    return e.set("new", !1)
                }).toList()
            }), u.V3Transition.editTagForUser({
                link: e.get("userLink"),
                add_tag: p.toJS(),
                remove_tag: f.toJS()
            }).then(function () {
                var e = a.toSet().union(p).subtract(f);
                t.page.cursor("cache").update(function (t) {
                    return t.setIn([n, "tags"], e.toList())
                })
            }).catch(function (e) {
                var t = l.tagsCreateEditErrors[e.message] || l.genericErrors.UNKNOWN, n = {
                    aspect: "ERROR",
                    title: t.title,
                    html: t.html,
                    text: t.text
                };
                i.default.Notification.openNotification(new c.default(n))
            }))
        }, e.prototype.onBulkEditTags = function () {
            var e, t = this, n = this.page.cursor().get("selectedBitlinks");
            n.isEmpty() || (e = n.flatMap(function (e) {
                return t.page.cursor("cache").getIn([e, "tags"])
            }));
            var r = this.page.cursor().getIn(["allTags", "data"]), a = r.filter(function (e) {
                return e.get("enabled")
            }), o = a.map(function (e) {
                return e.get("label")
            }), s = r.filter(function (e) {
                return !e.get("enabled")
            }).map(function (e) {
                return e.get("label")
            }), d = o.toSet().subtract(e.toSet()), p = e.toSet().intersect(s.toSet());
            if (d.size || p.size) {
                var f = n.map(function (e) {
                    return t.page.cursor("cache").getIn([e, "userLink"])
                });
                u.V3Transition.bulkEditTagsForUser({
                    link: f.toJS(),
                    add_tag: d.toJS(),
                    remove_tag: p.toJS(),
                    action: "edit_tags"
                }).then(function () {
                    n.forEach(function (e) {
                        t.page.cursor("cache").update(function (t) {
                            return t.setIn([e, "tags"], t.getIn([e, "tags"]).toSet().union(d).subtract(p))
                        })
                    }), t.page.cursor(["allTags", "data"]).update(function (e) {
                        return e.map(function (e) {
                            return e.set("new", !1)
                        }).toList()
                    }), i.default.UI.deselectAll(), i.default.UI.select(t.page.cursor(["views", "list", "data"]).first())
                }).catch(function (e) {
                    var t = l.tagsCreateEditErrors[e.message] || l.genericErrors.UNKNOWN, n = {
                        aspect: "ERROR",
                        title: t.title,
                        html: t.html,
                        text: t.text
                    };
                    i.default.Notification.openNotification(new c.default(n))
                })
            }
        }, e
    }();
    t.default = d
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    var r = function (e, t) {
        var n = e.get("new");
        if (n == t.get("new")) {
            var r = e.get("enabled");
            return r == t.get("enabled") ? e.get("label").localeCompare(t.get("label")) : r ? -1 : 1
        }
        return n ? -1 : 1
    };
    t.tagsComparator = r
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    var r = n(3), i = function () {
        function e(e) {
            this.easterEgg = e, r.default.EasterEgg.startEasterEgg.listen(this.onStartEasterEgg, this), r.default.EasterEgg.removeEasterEgg.listen(this.onRemoveEasterEgg, this)
        }

        return e.prototype.onStartEasterEgg = function (e) {
            this.easterEgg.cursor().update(function () {
                return e
            }), setTimeout(r.default.EasterEgg.removeEasterEgg, 1e4)
        }, e.prototype.onRemoveEasterEgg = function () {
            this.easterEgg.cursor().update(function () {
                return null
            })
        }, e
    }();
    t.default = i
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    var r = n(2), i = n(107), a = n(130), o = n(129), s = n(17), l = n(3), c = n(60), u = n(28), d = n(25), p = n(20), f = {
        views: {
            list: {loading: !0},
            detail: {loading: !0}
        }
    }, h = {views: {list: {loading: !1}, detail: {loading: !1}}}, g = function () {
        function e(e, t, n, r, i) {
            this.ref = e, this.api = i, this.page = n, this.preferences = r, this.section = t, l.default.API.loadCustomBitlinks.listen(this.loadCustomBitlinks, this), l.default.API.loadCustomLinkNextPage.listen(this.onLoadNextPage, this), l.default.UI.selectCustomLink.listen(this.onSelect, this), l.default.API.loadCustomBitlinkDetail.listen(this.onLoadCustomBitlinkDetail, this), l.default.UI.deselectCustomLink.listen(this.onDeselect, this), l.default.UI.clearBitlinkErrors.listen(this.onClearBitlinkErrors, this)
        }

        return e.prototype.onClearBitlinkErrors = function (e) {
            this.page.cursor("cache").has(e) && this.page.cursor(["cache", e]).update(function (e) {
                return e.set("errors", r.Map())
            })
        }, e.prototype.onLoadCustomBitlinkDetail = function (e) {
            var t = this, n = e.keywordLink, i = this.page.cursor(["cache", n, "pastUrls"]);
            i.get("loading") || i.get("loadedOnce") || (i.set("loading", !0), d.V3Transition.getCustomBitlinkHistory(n).then(function (e) {
                if (i.update(function (t) {
                        return t.withMutations(function (t) {
                            return t.set("data", r.List(e.data.map(function (e) {
                                return new u.PastUrl(e)
                            }))).set("loading", !1).set("loadedOnce", !0)
                        })
                    }), e.data.length) {
                    l.default.API.loadCustomBitlinkPastUrlClicks({keywordLink: n}), l.default.API.loadCustomBitlinkTotalClicks({keywordLink: n});
                    var a = {keywordLink: n, dateCreated: t.page.cursor("cache").get(n).get("created")};
                    l.default.API.loadCustomBitlinkTimeSeriesClicks(a)
                }
            }))
        }, e.prototype.onDeselect = function () {
            this.page.cursor("activeKeywordLink").update(function () {
                return null
            })
        }, e.prototype.onSelect = function (e) {
            var t = this, n = e.keywordLink;
            return this.page.cursor("cache").get(n) && l.default.API.loadBitlinkForCustomBitlinksPage({
                userHash: this.page.cursor("cache").get(n).get("userHash"),
                keywordLink: n
            }), this.page.cursor(["views", "list", "data"]).includes(n) ? (this.page.cursor().update(function (e) {
                return e.withMutations(function (e) {
                    return e.setIn(["activeKeywordLink"], n).setIn(["selectedBitlinks"], r.List()).setIn(["views", "detail", "loading"], !1).setIn(["views", "detail", "data"], n)
                })
            }), void this.onLoadCustomBitlinkDetail({keywordLink: n})) : this.page.cursor("cache").find(function (e) {
                return e.get("keywordLink") === n
            }) ? void this.page.cursor().update(function (e) {
                return e.withMutations(function (e) {
                    return e.setIn(["activeKeywordLink"], n).setIn(["selectedBitlinks"], r.List()).updateIn(["views", "list", "data"], function (e) {
                        return e.unshift(n)
                    }).setIn(["views", "list", "loading"], !1).setIn(["views", "detail", "loading"], !1)
                })
            }) : (this.page.cursor(["views", "list", "loading"]).update(function () {
                return !0
            }), void d.V3Transition.getCustomBitlinkHistory(n).then(function (e) {
                if (e.data.length) {
                    var r = new u.CustomBitlink({
                        domain: s.urlToDomain(n),
                        keyword: s.shortUrlToHash(n),
                        keywordDomain: s.urlToDomain(n),
                        keywordLink: n
                    });
                    t.page.cursor().update(function (e) {
                        return e.withMutations(function (e) {
                            return e.setIn(["cache", n], r).setIn(["activeKeywordLink"], n).updateIn(["views", "list", "data"], function (e) {
                                return e.unshift(n)
                            }).setIn(["views", "list", "loading"], !1).setIn(["views", "detail", "loading"], !1)
                        })
                    });
                    var i = e.data[0];
                    t.page.cursor(["cache", n]).merge({
                        userHash: i.user_hash,
                        longUrl: i.long_url,
                        created: 1e3 * e.data.pop().date_created_ts
                    }), t.ref.cursor(["bitlinks"]).set("activeBitlink", i.user_hash), l.default.API.loadBitlinkForCustomBitlinksPage({
                        userHash: i.user_hash,
                        keywordLink: n
                    }), t.onLoadCustomBitlinkDetail({keywordLink: n})
                }
            }))
        }, e.prototype.parseCustomLinkHistory = function (e) {
            var t = e.data.result_count, n = e.data.custom_bitlinks.map(c.parseCustomBitlink);
            return {
                total: t, bitlinks: n, keywordLinks: i(n.map(function (e) {
                    return e.get("keywordLink")
                }))
            }
        }, e.prototype.mergeLinkHistory = function (e) {
            var t = e.total, n = e.bitlinks, i = e.keywordLinks, a = this.page.cursor("cache"), s = r.Map(o.reduceByKey(r.fromJS(n), "keywordLink")).filter(function (e) {
                return !a.has(e.get("keywordLink"))
            });
            this.page.cursor().update(function (e) {
                return e.withMutations(function (e) {
                    return e.mergeIn(["cache"], s).setIn(["views", "detail", "loading"], !1).setIn(["views", "detail", "loadedOnce"], !0).setIn(["views", "list", "loading"], !1).setIn(["views", "list", "loadedOnce"], !0).setIn(["views", "list", "total"], t).setIn(["views", "list", "data"], r.List(i))
                })
            })
        }, e.prototype.selectHash = function () {
            var e = this.ref.cursor(["customBitlinks", "views", "list", "data"]).first(), t = this.ref.cursor(["customBitlinks"]).get("activeKeywordLink");
            this.onSelect({keywordLink: t || e})
        }, e.prototype.loadCustomBitlinks = function () {
            var e = this;
            this.ref.cursor(["customBitlinks"]).mergeDeep(f), d.V3Transition.getCustomBitlinks({
                limit: 30,
                offset: 0
            }).then(this.parseCustomLinkHistory).then(function (t) {
                var n = t.bitlinks, r = t.total, i = t.keywordLinks, o = n.map(function (e) {
                    return e.get("keywordLink")
                });
                a(o, 15).forEach(function (e) {
                    l.default.API.loadCustomBitlinkBatchClicks(e)
                }), e.mergeLinkHistory({bitlinks: n, total: r, keywordLinks: i}), p.isDesktop() && e.selectHash()
            }).catch(function (t) {
                e.page.cursor().mergeDeep(h)
            })
        }, e.prototype.onLoadNextPage = function () {
            var e = this, t = this.page.cursor(["views", "list"]);
            if (!(t.get("loading") || t.get("data").size >= t.get("total"))) {
                var n = this.page.cursor(["filter"]);
                this.page.cursor().mergeDeep({
                    filter: {offset: n.get("offset") + n.get("limit")},
                    views: {list: {loading: !0}}
                }), d.V3Transition.getCustomBitlinks(this.page.cursor("filter").toJS()).then(function (t) {
                    var n = t.data.custom_bitlinks.map(c.parseCustomBitlink), s = e.page.cursor(["views", "list", "data"]).deref().toArray(), u = r.Map(o.reduceByKey(r.fromJS(n), "keywordLink")).filter(function (t) {
                        return !e.page.cursor("cache").deref().has(t.get("keywordLink"))
                    }), d = n.map(function (e) {
                        return e.get("keywordLink")
                    }), p = i(s.concat(d));
                    e.page.cursor().mergeDeep({cache: u, views: {list: {loading: !1, data: p}}});
                    var f = n.map(function (e) {
                        return e.get("keywordLink")
                    });
                    a(f, 15).forEach(function (e) {
                        l.default.API.loadCustomBitlinkBatchClicks(e)
                    })
                }, function () {
                    e.page.cursor(["views", "list"]).set("loading", !1)
                })
            }
        }, e
    }();
    t.default = g
}, function (e, t, n) {
    "use strict";
    var r = this && this.__extends || function () {
            var e = Object.setPrototypeOf || {__proto__: []}instanceof Array && function (e, t) {
                    e.__proto__ = t
                } || function (e, t) {
                    for (var n in t)t.hasOwnProperty(n) && (e[n] = t[n])
                };
            return function (t, n) {
                function r() {
                    this.constructor = t
                }

                e(t, n), t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
            }
        }();
    Object.defineProperty(t, "__esModule", {value: !0});
    var i = n(0), a = function (e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }

        return r(t, e), t.prototype.render = function () {
            return i.createElement("div", {
                style: {
                    color: "#fff",
                    font: '1.6rem/2.2rem "Proxima Nova", sans-serif',
                    textTransform: "uppercase"
                }
            }, this.props.text)
        }, t
    }(i.Component);
    t.default = a
}, function (e, t, n) {
    "use strict";
    function r(e, t) {
        i.default.Init.init.listen(p(e, t)), i.default.Init.initConfig.listen(d(e, t))
    }

    Object.defineProperty(t, "__esModule", {value: !0});
    var i = n(3), a = n(364), o = n(169), s = n(170), l = n(171), c = n(21), u = n(263), d = function (e, t) {
        return function (t) {
            return c.default(e)([a.initConfig(t)])
        }
    }, p = function (e, t) {
        return function (n, r, i, d) {
            return r.organizations ? c.default(e)([a.initUser(u.parseUser(n, r)), s.reduceFullUser(r), o.initBSD(r.branded_short_domain_status), o.initFeatureFlags(i), o.initPreferences(d)]).then(function () {
                return c.default(e)([l.initLegacyBrandUserApikeyInfo(t)()])
            }) : c.default(e)([a.initUser(u.parseUser(n, r)), s.reduceUser(r), o.initFeatureFlags(i), o.initPreferences(d), l.initShareAccountsFromObject(r.share_accounts)]).then(function () {
                return c.default(e)([l.initLegacyBrandUserApikeyInfo(t)()])
            })
        }
    };
    t.default = r
}, function (e, t, n) {
    "use strict";
    var r = this && this.__extends || function () {
            var e = Object.setPrototypeOf || {__proto__: []}instanceof Array && function (e, t) {
                    e.__proto__ = t
                } || function (e, t) {
                    for (var n in t)t.hasOwnProperty(n) && (e[n] = t[n])
                };
            return function (t, n) {
                function r() {
                    this.constructor = t
                }

                e(t, n), t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
            }
        }();
    Object.defineProperty(t, "__esModule", {value: !0});
    var i = n(2), a = n(13), o = function (e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }

        return r(t, e), t
    }(i.Record({
        totalClicks: new a.Loadable,
        topChannel: new a.LoadableMap,
        topCountry: new a.LoadableMap,
        totalClicksSeries: new a.LoadableList,
        topChannelSeries: new a.LoadableList,
        topCountrySeries: new a.LoadableList,
        topReferrers: new a.LoadableList,
        allCountries: new a.LoadableList,
        limit: 30
    }));
    t.default = o
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    var r = n(2), i = n(20), a = r.fromJS([{
        name: "dateFilter",
        label: "Date Range",
        start: 0,
        end: 0,
        count: 0,
        hide: i.isDesktop()
    }, {name: "tags", label: "Tags", count: 0, content: []}, {
        name: "custom_bitlink",
        label: "Only Custom Bitlinks",
        enabled: !1
    }, {name: "archived", label: "Only Hidden Bitlinks", enabled: !1}, {
        name: "deeplinks",
        label: "Deeplinks",
        content: {domain: "both", link: "both"}
    }]);
    t.default = a
}, function (e, t, n) {
    "use strict";
    var r = this && this.__extends || function () {
            var e = Object.setPrototypeOf || {__proto__: []}instanceof Array && function (e, t) {
                    e.__proto__ = t
                } || function (e, t) {
                    for (var n in t)t.hasOwnProperty(n) && (e[n] = t[n])
                };
            return function (t, n) {
                function r() {
                    this.constructor = t
                }

                e(t, n), t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
            }
        }();
    Object.defineProperty(t, "__esModule", {value: !0});
    var i = n(2), a = n(13), o = function (e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }

        return r(t, e), t
    }(i.Record({
        status: !1,
        phoneNumber: null,
        countryCode: null,
        countryCodes: new a.LoadableList,
        selectedCode: null
    }));
    t.default = o
}, function (e, t, n) {
    "use strict";
    var r = this && this.__extends || function () {
            var e = Object.setPrototypeOf || {__proto__: []}instanceof Array && function (e, t) {
                    e.__proto__ = t
                } || function (e, t) {
                    for (var n in t)t.hasOwnProperty(n) && (e[n] = t[n])
                };
            return function (t, n) {
                function r() {
                    this.constructor = t
                }

                e(t, n), t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
            }
        }();
    Object.defineProperty(t, "__esModule", {value: !0});
    var i = n(361), a = n(71), o = n(560), s = n(561), l = "https://api-ssl.bitly.org/v4_private".replace(/\/+$/, ""), c = function () {
        function e(e, t) {
            void 0 === e && (e = o), void 0 === t && (t = l), this.basePath = t, this.fetch = e
        }

        return e
    }();
    t.BaseAPI = c, t.BrandsApiFetchParamCreator = {
        addBrandBSD: function (e, t) {
            if (null == e.brandGUID)throw new Error("Missing required parameter brandGUID when calling addBrandBSD");
            if (null == e.bsd)throw new Error("Missing required parameter bsd when calling addBrandBSD");
            var n = "/brands/{brandGUID}/bsds/{bsd}".replace("{brandGUID}", "" + e.brandGUID).replace("{bsd}", "" + e.bsd), r = a.parse(n, !0), i = s({}, {method: "POST"}, t), o = {};
            return o && (i.headers = o), {url: a.format(r), options: i}
        }, addURLToCampaignChannels: function (e, t) {
            if (null == e.addURLBody)throw new Error("Missing required parameter addURLBody when calling addURLToCampaignChannels");
            if (null == e.brandGUID)throw new Error("Missing required parameter brandGUID when calling addURLToCampaignChannels");
            if (null == e.campaignGUID)throw new Error("Missing required parameter campaignGUID when calling addURLToCampaignChannels");
            var n = "/brands/{brandGUID}/campaigns/{campaignGUID}/addURL".replace("{brandGUID}", "" + e.brandGUID).replace("{campaignGUID}", "" + e.campaignGUID), r = a.parse(n, !0), i = s({}, {method: "POST"}, t), o = {};
            return o = {"Content-Type": "application/json"}, e.addURLBody && (i.body = JSON.stringify(e.addURLBody || {})), o && (i.headers = o), {
                url: a.format(r),
                options: i
            }
        }, addUserWithRoleToBrand: function (e, t) {
            if (null == e.login)throw new Error("Missing required parameter login when calling addUserWithRoleToBrand");
            if (null == e.brandGUID)throw new Error("Missing required parameter brandGUID when calling addUserWithRoleToBrand");
            if (null == e.roleName)throw new Error("Missing required parameter roleName when calling addUserWithRoleToBrand");
            var n = "/brands/{brandGUID}/users/{login}/roles/{roleName}".replace("{login}", "" + e.login).replace("{brandGUID}", "" + e.brandGUID).replace("{roleName}", "" + e.roleName), r = a.parse(n, !0), i = s({}, {method: "POST"}, t), o = {};
            return o && (i.headers = o), {url: a.format(r), options: i}
        }, bulkAdd: function (e, t) {
            if (null == e.file)throw new Error("Missing required parameter file when calling bulkAdd");
            if (null == e.brandGUID)throw new Error("Missing required parameter brandGUID when calling bulkAdd");
            if (null == e.campaignGUID)throw new Error("Missing required parameter campaignGUID when calling bulkAdd");
            var n = "/brands/{brandGUID}/campaigns/{campaignGUID}/addURLs".replace("{brandGUID}", "" + e.brandGUID).replace("{campaignGUID}", "" + e.campaignGUID), r = a.parse(n, !0), o = s({}, {method: "POST"}, t), l = {}, c = {}, u = !1;
            if (u = !0, c.file = e.file, u) {
                var d = new FormData;
                for (var p in c)d.append(p, c[p]);
                o.body = d
            } else o.body = i.stringify(c), l = {"Content-Type": "application/x-www-form-urlencoded"};
            return l && (o.headers = l), {url: a.format(r), options: o}
        }, createBrand: function (e, t) {
            if (null == e.organizationGUID)throw new Error("Missing required parameter organizationGUID when calling createBrand");
            if (null == e.createBrandBody)throw new Error("Missing required parameter createBrandBody when calling createBrand");
            var n = "/organizations/{organizationGUID}/brands".replace("{organizationGUID}", "" + e.organizationGUID), r = a.parse(n, !0), i = s({}, {method: "POST"}, t), o = {};
            return o = {"Content-Type": "application/json"}, e.createBrandBody && (i.body = JSON.stringify(e.createBrandBody || {})), o && (i.headers = o), {
                url: a.format(r),
                options: i
            }
        }, createBrandCampaign: function (e, t) {
            if (null == e.createBrandCampaignBody)throw new Error("Missing required parameter createBrandCampaignBody when calling createBrandCampaign");
            if (null == e.brandGUID)throw new Error("Missing required parameter brandGUID when calling createBrandCampaign");
            var n = "/brands/{brandGUID}/campaigns".replace("{brandGUID}", "" + e.brandGUID), r = a.parse(n, !0), i = s({}, {method: "POST"}, t), o = {};
            return o = {"Content-Type": "application/json"}, e.createBrandCampaignBody && (i.body = JSON.stringify(e.createBrandCampaignBody || {})), o && (i.headers = o), {
                url: a.format(r),
                options: i
            }
        }, createBrandChannel: function (e, t) {
            if (null == e.createChannelBody)throw new Error("Missing required parameter createChannelBody when calling createBrandChannel");
            if (null == e.brandGUID)throw new Error("Missing required parameter brandGUID when calling createBrandChannel");
            var n = "/brands/{brandGUID}/channels".replace("{brandGUID}", "" + e.brandGUID), r = a.parse(n, !0), i = s({}, {method: "POST"}, t), o = {};
            return o = {"Content-Type": "application/json"}, e.createChannelBody && (i.body = JSON.stringify(e.createChannelBody || {})), o && (i.headers = o), {
                url: a.format(r),
                options: i
            }
        }, createCampaignChannel: function (e, t) {
            if (null == e.brandGUID)throw new Error("Missing required parameter brandGUID when calling createCampaignChannel");
            if (null == e.campaignGUID)throw new Error("Missing required parameter campaignGUID when calling createCampaignChannel");
            if (null == e.channelGUID)throw new Error("Missing required parameter channelGUID when calling createCampaignChannel");
            var n = "/brands/{brandGUID}/campaigns/{campaignGUID}/channels/{channelGUID}".replace("{brandGUID}", "" + e.brandGUID).replace("{campaignGUID}", "" + e.campaignGUID).replace("{channelGUID}", "" + e.channelGUID), r = a.parse(n, !0), i = s({}, {method: "POST"}, t), o = {};
            return o && (i.headers = o), {url: a.format(r), options: i}
        }, createChannelBitlink: function (e, t) {
            if (null == e.brandGUID)throw new Error("Missing required parameter brandGUID when calling createChannelBitlink");
            if (null == e.campaignGUID)throw new Error("Missing required parameter campaignGUID when calling createChannelBitlink");
            if (null == e.channelGUID)throw new Error("Missing required parameter channelGUID when calling createChannelBitlink");
            if (null == e.domain)throw new Error("Missing required parameter domain when calling createChannelBitlink");
            if (null == e.id)throw new Error("Missing required parameter id when calling createChannelBitlink");
            var n = "/brands/{brandGUID}/campaigns/{campaignGUID}/channels/{channelGUID}/domain/{domain}/id/{id}".replace("{brandGUID}", "" + e.brandGUID).replace("{campaignGUID}", "" + e.campaignGUID).replace("{channelGUID}", "" + e.channelGUID).replace("{domain}", "" + e.domain).replace("{id}", "" + e.id), r = a.parse(n, !0), i = s({}, {method: "POST"}, t), o = {};
            return o && (i.headers = o), {url: a.format(r), options: i}
        }, createMultipleCampaignChannels: function (e, t) {
            if (null == e.brandGUID)throw new Error("Missing required parameter brandGUID when calling createMultipleCampaignChannels");
            if (null == e.campaignGUID)throw new Error("Missing required parameter campaignGUID when calling createMultipleCampaignChannels");
            if (null == e.createMultipleCampaignChannelsBody)throw new Error("Missing required parameter createMultipleCampaignChannelsBody when calling createMultipleCampaignChannels");
            var n = "/brands/{brandGUID}/campaigns/{campaignGUID}/channels".replace("{brandGUID}", "" + e.brandGUID).replace("{campaignGUID}", "" + e.campaignGUID), r = a.parse(n, !0), i = s({}, {method: "POST"}, t), o = {};
            return o = {"Content-Type": "application/json"}, e.createMultipleCampaignChannelsBody && (i.body = JSON.stringify(e.createMultipleCampaignChannelsBody || {})), o && (i.headers = o), {
                url: a.format(r),
                options: i
            }
        }, deleteBrandCampaign: function (e, t) {
            if (null == e.brandGUID)throw new Error("Missing required parameter brandGUID when calling deleteBrandCampaign");
            if (null == e.campaignGUID)throw new Error("Missing required parameter campaignGUID when calling deleteBrandCampaign");
            var n = "/brands/{brandGUID}/campaigns/{campaignGUID}".replace("{brandGUID}", "" + e.brandGUID).replace("{campaignGUID}", "" + e.campaignGUID), r = a.parse(n, !0), i = s({}, {method: "DELETE"}, t), o = {};
            return o && (i.headers = o), {url: a.format(r), options: i}
        }, deleteBrandChannel: function (e, t) {
            if (null == e.brandGUID)throw new Error("Missing required parameter brandGUID when calling deleteBrandChannel");
            if (null == e.channelGUID)throw new Error("Missing required parameter channelGUID when calling deleteBrandChannel");
            var n = "/brands/{brandGUID}/channels/{channelGUID}".replace("{brandGUID}", "" + e.brandGUID).replace("{channelGUID}", "" + e.channelGUID), r = a.parse(n, !0), i = s({}, {method: "DELETE"}, t), o = {};
            return o && (i.headers = o), {url: a.format(r), options: i}
        }, deleteCampaignChannel: function (e, t) {
            if (null == e.brandGUID)throw new Error("Missing required parameter brandGUID when calling deleteCampaignChannel");
            if (null == e.campaignGUID)throw new Error("Missing required parameter campaignGUID when calling deleteCampaignChannel");
            if (null == e.channelGUID)throw new Error("Missing required parameter channelGUID when calling deleteCampaignChannel");
            var n = "/brands/{brandGUID}/campaigns/{campaignGUID}/channels/{channelGUID}".replace("{brandGUID}", "" + e.brandGUID).replace("{campaignGUID}", "" + e.campaignGUID).replace("{channelGUID}", "" + e.channelGUID), r = a.parse(n, !0), i = s({}, {method: "DELETE"}, t), o = {};
            return o && (i.headers = o), {url: a.format(r), options: i}
        }, deleteChannelBitlink: function (e, t) {
            if (null == e.brandGUID)throw new Error("Missing required parameter brandGUID when calling deleteChannelBitlink");
            if (null == e.campaignGUID)throw new Error("Missing required parameter campaignGUID when calling deleteChannelBitlink");
            if (null == e.channelGUID)throw new Error("Missing required parameter channelGUID when calling deleteChannelBitlink");
            if (null == e.domain)throw new Error("Missing required parameter domain when calling deleteChannelBitlink");
            if (null == e.id)throw new Error("Missing required parameter id when calling deleteChannelBitlink");
            var n = "/brands/{brandGUID}/campaigns/{campaignGUID}/channels/{channelGUID}/domain/{domain}/id/{id}".replace("{brandGUID}", "" + e.brandGUID).replace("{campaignGUID}", "" + e.campaignGUID).replace("{channelGUID}", "" + e.channelGUID).replace("{domain}", "" + e.domain).replace("{id}", "" + e.id), r = a.parse(n, !0), i = s({}, {method: "DELETE"}, t), o = {};
            return o && (i.headers = o), {url: a.format(r), options: i}
        }, editBrand: function (e, t) {
            if (null == e.brandGUID)throw new Error("Missing required parameter brandGUID when calling editBrand");
            if (null == e.editBrandBody)throw new Error("Missing required parameter editBrandBody when calling editBrand");
            var n = "/brands/{brandGUID}".replace("{brandGUID}", "" + e.brandGUID), r = a.parse(n, !0), i = s({}, {method: "PUT"}, t), o = {};
            return o = {"Content-Type": "application/json"}, e.editBrandBody && (i.body = JSON.stringify(e.editBrandBody || {})), o && (i.headers = o), {
                url: a.format(r),
                options: i
            }
        }, editUserRoleInBrand: function (e, t) {
            if (null == e.login)throw new Error("Missing required parameter login when calling editUserRoleInBrand");
            if (null == e.brandGUID)throw new Error("Missing required parameter brandGUID when calling editUserRoleInBrand");
            if (null == e.roleName)throw new Error("Missing required parameter roleName when calling editUserRoleInBrand");
            if (null == e.editUserRoleBody)throw new Error("Missing required parameter editUserRoleBody when calling editUserRoleInBrand");
            var n = "/brands/{brandGUID}/users/{login}/roles/{roleName}".replace("{login}", "" + e.login).replace("{brandGUID}", "" + e.brandGUID).replace("{roleName}", "" + e.roleName), r = a.parse(n, !0), i = s({}, {method: "PUT"}, t), o = {};
            return o = {"Content-Type": "application/json"}, e.editUserRoleBody && (i.body = JSON.stringify(e.editUserRoleBody || {})), o && (i.headers = o), {
                url: a.format(r),
                options: i
            }
        }, getAllBrandCampaigns: function (e, t) {
            if (null == e.brandGUID)throw new Error("Missing required parameter brandGUID when calling getAllBrandCampaigns");
            var n = "/brands/{brandGUID}/campaigns".replace("{brandGUID}", "" + e.brandGUID), r = a.parse(n, !0);
            r.query = s({}, r.query, {
                limit: e.limit,
                offset: e.offset,
                search: e.search,
                campaign_guid: e.campaignGuid
            });
            var i = s({}, {method: "GET"}, t), o = {};
            return o && (i.headers = o), {url: a.format(r), options: i}
        }, getAllBrandChannels: function (e, t) {
            if (null == e.brandGUID)throw new Error("Missing required parameter brandGUID when calling getAllBrandChannels");
            var n = "/brands/{brandGUID}/channels".replace("{brandGUID}", "" + e.brandGUID), r = a.parse(n, !0), i = s({}, {method: "GET"}, t), o = {};
            return o && (i.headers = o), {url: a.format(r), options: i}
        }, getAllCampaignChannels: function (e, t) {
            if (null == e.brandGUID)throw new Error("Missing required parameter brandGUID when calling getAllCampaignChannels");
            if (null == e.campaignGUID)throw new Error("Missing required parameter campaignGUID when calling getAllCampaignChannels");
            var n = "/brands/{brandGUID}/campaigns/{campaignGUID}/channels".replace("{brandGUID}", "" + e.brandGUID).replace("{campaignGUID}", "" + e.campaignGUID), r = a.parse(n, !0), i = s({}, {method: "GET"}, t), o = {};
            return o && (i.headers = o), {url: a.format(r), options: i}
        }, getAllChannelBitlinks: function (e, t) {
            if (null == e.brandGUID)throw new Error("Missing required parameter brandGUID when calling getAllChannelBitlinks");
            if (null == e.campaignGUID)throw new Error("Missing required parameter campaignGUID when calling getAllChannelBitlinks");
            if (null == e.channelGUID)throw new Error("Missing required parameter channelGUID when calling getAllChannelBitlinks");
            var n = "/brands/{brandGUID}/campaigns/{campaignGUID}/channels/{channelGUID}/".replace("{brandGUID}", "" + e.brandGUID).replace("{campaignGUID}", "" + e.campaignGUID).replace("{channelGUID}", "" + e.channelGUID), r = a.parse(n, !0), i = s({}, {method: "GET"}, t), o = {};
            return o && (i.headers = o), {url: a.format(r), options: i}
        }, getBrand: function (e, t) {
            if (null == e.brandGUID)throw new Error("Missing required parameter brandGUID when calling getBrand");
            var n = "/brands/{brandGUID}".replace("{brandGUID}", "" + e.brandGUID), r = a.parse(n, !0), i = s({}, {method: "GET"}, t), o = {};
            return o && (i.headers = o), {url: a.format(r), options: i}
        }, getBrandBitlinksCount: function (e, t) {
            if (null == e.brandGUID)throw new Error("Missing required parameter brandGUID when calling getBrandBitlinksCount");
            var n = "/brands/{brandGUID}/bitlinks_count".replace("{brandGUID}", "" + e.brandGUID), r = a.parse(n, !0);
            r.query = s({}, r.query, {unit: e.unit, units: e.units, unit_ref_ts: e.unitRefTs});
            var i = s({}, {method: "GET"}, t), o = {};
            return o && (i.headers = o), {url: a.format(r), options: i}
        }, getBrandCampaign: function (e, t) {
            if (null == e.brandGUID)throw new Error("Missing required parameter brandGUID when calling getBrandCampaign");
            if (null == e.campaignGUID)throw new Error("Missing required parameter campaignGUID when calling getBrandCampaign");
            var n = "/brands/{brandGUID}/campaigns/{campaignGUID}".replace("{brandGUID}", "" + e.brandGUID).replace("{campaignGUID}", "" + e.campaignGUID), r = a.parse(n, !0), i = s({}, {method: "GET"}, t), o = {};
            return o && (i.headers = o), {url: a.format(r), options: i}
        }, getBrandChannel: function (e, t) {
            if (null == e.brandGUID)throw new Error("Missing required parameter brandGUID when calling getBrandChannel");
            if (null == e.channelGUID)throw new Error("Missing required parameter channelGUID when calling getBrandChannel");
            var n = "/brands/{brandGUID}/channels/{channelGUID}".replace("{brandGUID}", "" + e.brandGUID).replace("{channelGUID}", "" + e.channelGUID), r = a.parse(n, !0), i = s({}, {method: "GET"}, t), o = {};
            return o && (i.headers = o), {url: a.format(r), options: i}
        }, getBrandClicks: function (e, t) {
            if (null == e.brandGUID)throw new Error("Missing required parameter brandGUID when calling getBrandClicks");
            var n = "/brands/{brandGUID}/clicks".replace("{brandGUID}", "" + e.brandGUID), r = a.parse(n, !0);
            r.query = s({}, r.query, {unit: e.unit, units: e.units, unit_ref_ts: e.unitRefTs});
            var i = s({}, {method: "GET"}, t), o = {};
            return o && (i.headers = o), {url: a.format(r), options: i}
        }, getBrandClicksByFacet: function (e, t) {
            if (null == e.brandGUID)throw new Error("Missing required parameter brandGUID when calling getBrandClicksByFacet");
            if (null == e.facet)throw new Error("Missing required parameter facet when calling getBrandClicksByFacet");
            var n = "/brands/{brandGUID}/clicks/{facet}".replace("{brandGUID}", "" + e.brandGUID).replace("{facet}", "" + e.facet), r = a.parse(n, !0);
            r.query = s({}, r.query, {limit: e.limit, unit: e.unit, units: e.units, unit_ref_ts: e.unitRefTs});
            var i = s({}, {method: "GET"}, t), o = {};
            return o && (i.headers = o), {url: a.format(r), options: i}
        }, getBrandClicksByFacetRollup: function (e, t) {
            if (null == e.brandGUID)throw new Error("Missing required parameter brandGUID when calling getBrandClicksByFacetRollup");
            if (null == e.facet)throw new Error("Missing required parameter facet when calling getBrandClicksByFacetRollup");
            var n = "/brands/{brandGUID}/clicks/{facet}/rollup".replace("{brandGUID}", "" + e.brandGUID).replace("{facet}", "" + e.facet), r = a.parse(n, !0);
            r.query = s({}, r.query, {limit: e.limit, unit: e.unit, units: e.units, unit_ref_ts: e.unitRefTs});
            var i = s({}, {method: "GET"}, t), o = {};
            return o && (i.headers = o), {url: a.format(r), options: i}
        }, getBrandClicksPerUnique: function (e, t) {
            if (null == e.brandGUID)throw new Error("Missing required parameter brandGUID when calling getBrandClicksPerUnique");
            var n = "/brands/{brandGUID}/clicks_per_unique".replace("{brandGUID}", "" + e.brandGUID), r = a.parse(n, !0);
            r.query = s({}, r.query, {unit: e.unit, units: e.units, unit_ref_ts: e.unitRefTs});
            var i = s({}, {method: "GET"}, t), o = {};
            return o && (i.headers = o), {url: a.format(r), options: i}
        }, getBrandTotalClicks: function (e, t) {
            if (null == e.brandGUID)throw new Error("Missing required parameter brandGUID when calling getBrandTotalClicks");
            var n = "/brands/{brandGUID}/total_clicks".replace("{brandGUID}", "" + e.brandGUID), r = a.parse(n, !0);
            r.query = s({}, r.query, {unit: e.unit, units: e.units, unit_ref_ts: e.unitRefTs});
            var i = s({}, {method: "GET"}, t), o = {};
            return o && (i.headers = o), {url: a.format(r), options: i}
        }, getBrandTotalUniques: function (e, t) {
            if (null == e.brandGUID)throw new Error("Missing required parameter brandGUID when calling getBrandTotalUniques");
            var n = "/brands/{brandGUID}/total_uniques".replace("{brandGUID}", "" + e.brandGUID), r = a.parse(n, !0);
            r.query = s({}, r.query, {unit: e.unit, units: e.units, unit_ref_ts: e.unitRefTs});
            var i = s({}, {method: "GET"}, t), o = {};
            return o && (i.headers = o), {url: a.format(r), options: i}
        }, getCampaignChannel: function (e, t) {
            if (null == e.brandGUID)throw new Error("Missing required parameter brandGUID when calling getCampaignChannel");
            if (null == e.campaignGUID)throw new Error("Missing required parameter campaignGUID when calling getCampaignChannel");
            if (null == e.channelGUID)throw new Error("Missing required parameter channelGUID when calling getCampaignChannel");
            var n = "/brands/{brandGUID}/campaigns/{campaignGUID}/channels/{channelGUID}".replace("{brandGUID}", "" + e.brandGUID).replace("{campaignGUID}", "" + e.campaignGUID).replace("{channelGUID}", "" + e.channelGUID), r = a.parse(n, !0), i = s({}, {method: "GET"}, t), o = {};
            return o && (i.headers = o), {url: a.format(r), options: i}
        }, getCampaignClicks: function (e, t) {
            if (null == e.brandGUID)throw new Error("Missing required parameter brandGUID when calling getCampaignClicks");
            if (null == e.campaignGUID)throw new Error("Missing required parameter campaignGUID when calling getCampaignClicks");
            var n = "/brands/{brandGUID}/campaigns/{campaignGUID}/clicks".replace("{brandGUID}", "" + e.brandGUID).replace("{campaignGUID}", "" + e.campaignGUID), r = a.parse(n, !0);
            r.query = s({}, r.query, {unit: e.unit, units: e.units, unit_ref_ts: e.unitRefTs});
            var i = s({}, {method: "GET"}, t), o = {};
            return o && (i.headers = o), {url: a.format(r), options: i}
        }, postBrandDataExport: function (e, t) {
            if (null == e.brandGUID)throw new Error("Missing required parameter brandGUID when calling postBrandDataExport");
            if (null == e.dataExportQueryBody)throw new Error("Missing required parameter dataExportQueryBody when calling postBrandDataExport");
            var n = "/brands/{brandGUID}/data_export".replace("{brandGUID}", "" + e.brandGUID), r = a.parse(n, !0), i = s({}, {method: "POST"}, t), o = {};
            return o = {"Content-Type": "application/json"}, e.dataExportQueryBody && (i.body = JSON.stringify(e.dataExportQueryBody || {})), o && (i.headers = o), {
                url: a.format(r),
                options: i
            }
        }, removeBrand: function (e, t) {
            if (null == e.brandGUID)throw new Error("Missing required parameter brandGUID when calling removeBrand");
            var n = "/brands/{brandGUID}".replace("{brandGUID}", "" + e.brandGUID), r = a.parse(n, !0), i = s({}, {method: "DELETE"}, t), o = {};
            return o && (i.headers = o), {url: a.format(r), options: i}
        }, removeBrandBSD: function (e, t) {
            if (null == e.brandGUID)throw new Error("Missing required parameter brandGUID when calling removeBrandBSD");
            if (null == e.bsd)throw new Error("Missing required parameter bsd when calling removeBrandBSD");
            var n = "/brands/{brandGUID}/bsds/{bsd}".replace("{brandGUID}", "" + e.brandGUID).replace("{bsd}", "" + e.bsd), r = a.parse(n, !0), i = s({}, {method: "DELETE"}, t), o = {};
            return o && (i.headers = o), {url: a.format(r), options: i}
        }, removeUserWithRoleFromBrand: function (e, t) {
            if (null == e.login)throw new Error("Missing required parameter login when calling removeUserWithRoleFromBrand");
            if (null == e.brandGUID)throw new Error("Missing required parameter brandGUID when calling removeUserWithRoleFromBrand");
            if (null == e.roleName)throw new Error("Missing required parameter roleName when calling removeUserWithRoleFromBrand");
            var n = "/brands/{brandGUID}/users/{login}/roles/{roleName}".replace("{login}", "" + e.login).replace("{brandGUID}", "" + e.brandGUID).replace("{roleName}", "" + e.roleName), r = a.parse(n, !0), i = s({}, {method: "DELETE"}, t), o = {};
            return o && (i.headers = o), {url: a.format(r), options: i}
        }, updateBrandCampaign: function (e, t) {
            if (null == e.brandGUID)throw new Error("Missing required parameter brandGUID when calling updateBrandCampaign");
            if (null == e.campaignGUID)throw new Error("Missing required parameter campaignGUID when calling updateBrandCampaign");
            if (null == e.updateBrandCampaignBody)throw new Error("Missing required parameter updateBrandCampaignBody when calling updateBrandCampaign");
            var n = "/brands/{brandGUID}/campaigns/{campaignGUID}".replace("{brandGUID}", "" + e.brandGUID).replace("{campaignGUID}", "" + e.campaignGUID), r = a.parse(n, !0), i = s({}, {method: "PUT"}, t), o = {};
            return o = {"Content-Type": "application/json"}, e.updateBrandCampaignBody && (i.body = JSON.stringify(e.updateBrandCampaignBody || {})), o && (i.headers = o), {
                url: a.format(r),
                options: i
            }
        }, updateBrandChannel: function (e, t) {
            if (null == e.brandGUID)throw new Error("Missing required parameter brandGUID when calling updateBrandChannel");
            if (null == e.channelGUID)throw new Error("Missing required parameter channelGUID when calling updateBrandChannel");
            if (null == e.updateBrandChannelBody)throw new Error("Missing required parameter updateBrandChannelBody when calling updateBrandChannel");
            var n = "/brands/{brandGUID}/channels/{channelGUID}".replace("{brandGUID}", "" + e.brandGUID).replace("{channelGUID}", "" + e.channelGUID), r = a.parse(n, !0), i = s({}, {method: "PUT"}, t), o = {};
            return o = {"Content-Type": "application/json"}, e.updateBrandChannelBody && (i.body = JSON.stringify(e.updateBrandChannelBody || {})), o && (i.headers = o), {
                url: a.format(r),
                options: i
            }
        }
    }, t.BrandsApiFp = {
        addBrandBSD: function (e, n) {
            var r = t.BrandsApiFetchParamCreator.addBrandBSD(e, n);
            return function (e, t) {
                return void 0 === e && (e = o), void 0 === t && (t = l), e(t + r.url, r.options).then(function (e) {
                    if (e.status >= 200 && e.status < 300)return e.json();
                    throw e
                })
            }
        }, addURLToCampaignChannels: function (e, n) {
            var r = t.BrandsApiFetchParamCreator.addURLToCampaignChannels(e, n);
            return function (e, t) {
                return void 0 === e && (e = o), void 0 === t && (t = l), e(t + r.url, r.options).then(function (e) {
                    if (e.status >= 200 && e.status < 300)return e.json();
                    throw e
                })
            }
        }, addUserWithRoleToBrand: function (e, n) {
            var r = t.BrandsApiFetchParamCreator.addUserWithRoleToBrand(e, n);
            return function (e, t) {
                return void 0 === e && (e = o), void 0 === t && (t = l), e(t + r.url, r.options).then(function (e) {
                    if (e.status >= 200 && e.status < 300)return e.json();
                    throw e
                })
            }
        }, bulkAdd: function (e, n) {
            var r = t.BrandsApiFetchParamCreator.bulkAdd(e, n);
            return function (e, t) {
                return void 0 === e && (e = o), void 0 === t && (t = l), e(t + r.url, r.options).then(function (e) {
                    if (e.status >= 200 && e.status < 300)return e.json();
                    throw e
                })
            }
        }, createBrand: function (e, n) {
            var r = t.BrandsApiFetchParamCreator.createBrand(e, n);
            return function (e, t) {
                return void 0 === e && (e = o), void 0 === t && (t = l), e(t + r.url, r.options).then(function (e) {
                    if (e.status >= 200 && e.status < 300)return e.json();
                    throw e
                })
            }
        }, createBrandCampaign: function (e, n) {
            var r = t.BrandsApiFetchParamCreator.createBrandCampaign(e, n);
            return function (e, t) {
                return void 0 === e && (e = o), void 0 === t && (t = l), e(t + r.url, r.options).then(function (e) {
                    if (e.status >= 200 && e.status < 300)return e.json();
                    throw e
                })
            }
        }, createBrandChannel: function (e, n) {
            var r = t.BrandsApiFetchParamCreator.createBrandChannel(e, n);
            return function (e, t) {
                return void 0 === e && (e = o), void 0 === t && (t = l), e(t + r.url, r.options).then(function (e) {
                    if (e.status >= 200 && e.status < 300)return e.json();
                    throw e
                })
            }
        }, createCampaignChannel: function (e, n) {
            var r = t.BrandsApiFetchParamCreator.createCampaignChannel(e, n);
            return function (e, t) {
                return void 0 === e && (e = o), void 0 === t && (t = l), e(t + r.url, r.options).then(function (e) {
                    if (e.status >= 200 && e.status < 300)return e.json();
                    throw e
                })
            }
        }, createChannelBitlink: function (e, n) {
            var r = t.BrandsApiFetchParamCreator.createChannelBitlink(e, n);
            return function (e, t) {
                return void 0 === e && (e = o), void 0 === t && (t = l), e(t + r.url, r.options).then(function (e) {
                    if (e.status >= 200 && e.status < 300)return e.json();
                    throw e
                })
            }
        }, createMultipleCampaignChannels: function (e, n) {
            var r = t.BrandsApiFetchParamCreator.createMultipleCampaignChannels(e, n);
            return function (e, t) {
                return void 0 === e && (e = o), void 0 === t && (t = l), e(t + r.url, r.options).then(function (e) {
                    if (e.status >= 200 && e.status < 300)return e.json();
                    throw e
                })
            }
        }, deleteBrandCampaign: function (e, n) {
            var r = t.BrandsApiFetchParamCreator.deleteBrandCampaign(e, n);
            return function (e, t) {
                return void 0 === e && (e = o), void 0 === t && (t = l), e(t + r.url, r.options).then(function (e) {
                    if (e.status >= 200 && e.status < 300)return e;
                    throw e
                })
            }
        }, deleteBrandChannel: function (e, n) {
            var r = t.BrandsApiFetchParamCreator.deleteBrandChannel(e, n);
            return function (e, t) {
                return void 0 === e && (e = o), void 0 === t && (t = l), e(t + r.url, r.options).then(function (e) {
                    if (e.status >= 200 && e.status < 300)return e;
                    throw e
                })
            }
        }, deleteCampaignChannel: function (e, n) {
            var r = t.BrandsApiFetchParamCreator.deleteCampaignChannel(e, n);
            return function (e, t) {
                return void 0 === e && (e = o), void 0 === t && (t = l), e(t + r.url, r.options).then(function (e) {
                    if (e.status >= 200 && e.status < 300)return e;
                    throw e
                })
            }
        }, deleteChannelBitlink: function (e, n) {
            var r = t.BrandsApiFetchParamCreator.deleteChannelBitlink(e, n);
            return function (e, t) {
                return void 0 === e && (e = o), void 0 === t && (t = l), e(t + r.url, r.options).then(function (e) {
                    if (e.status >= 200 && e.status < 300)return e;
                    throw e
                })
            }
        }, editBrand: function (e, n) {
            var r = t.BrandsApiFetchParamCreator.editBrand(e, n);
            return function (e, t) {
                return void 0 === e && (e = o), void 0 === t && (t = l), e(t + r.url, r.options).then(function (e) {
                    if (e.status >= 200 && e.status < 300)return e.json();
                    throw e
                })
            }
        }, editUserRoleInBrand: function (e, n) {
            var r = t.BrandsApiFetchParamCreator.editUserRoleInBrand(e, n);
            return function (e, t) {
                return void 0 === e && (e = o), void 0 === t && (t = l), e(t + r.url, r.options).then(function (e) {
                    if (e.status >= 200 && e.status < 300)return e.json();
                    throw e
                })
            }
        }, getAllBrandCampaigns: function (e, n) {
            var r = t.BrandsApiFetchParamCreator.getAllBrandCampaigns(e, n);
            return function (e, t) {
                return void 0 === e && (e = o), void 0 === t && (t = l), e(t + r.url, r.options).then(function (e) {
                    if (e.status >= 200 && e.status < 300)return e.json();
                    throw e
                })
            }
        }, getAllBrandChannels: function (e, n) {
            var r = t.BrandsApiFetchParamCreator.getAllBrandChannels(e, n);
            return function (e, t) {
                return void 0 === e && (e = o), void 0 === t && (t = l), e(t + r.url, r.options).then(function (e) {
                    if (e.status >= 200 && e.status < 300)return e.json();
                    throw e
                })
            }
        }, getAllCampaignChannels: function (e, n) {
            var r = t.BrandsApiFetchParamCreator.getAllCampaignChannels(e, n);
            return function (e, t) {
                return void 0 === e && (e = o), void 0 === t && (t = l), e(t + r.url, r.options).then(function (e) {
                    if (e.status >= 200 && e.status < 300)return e.json();
                    throw e
                })
            }
        }, getAllChannelBitlinks: function (e, n) {
            var r = t.BrandsApiFetchParamCreator.getAllChannelBitlinks(e, n);
            return function (e, t) {
                return void 0 === e && (e = o), void 0 === t && (t = l), e(t + r.url, r.options).then(function (e) {
                    if (e.status >= 200 && e.status < 300)return e.json();
                    throw e
                })
            }
        }, getBrand: function (e, n) {
            var r = t.BrandsApiFetchParamCreator.getBrand(e, n);
            return function (e, t) {
                return void 0 === e && (e = o), void 0 === t && (t = l), e(t + r.url, r.options).then(function (e) {
                    if (e.status >= 200 && e.status < 300)return e.json();
                    throw e
                })
            }
        }, getBrandBitlinksCount: function (e, n) {
            var r = t.BrandsApiFetchParamCreator.getBrandBitlinksCount(e, n);
            return function (e, t) {
                return void 0 === e && (e = o), void 0 === t && (t = l), e(t + r.url, r.options).then(function (e) {
                    if (e.status >= 200 && e.status < 300)return e.json();
                    throw e
                })
            }
        }, getBrandCampaign: function (e, n) {
            var r = t.BrandsApiFetchParamCreator.getBrandCampaign(e, n);
            return function (e, t) {
                return void 0 === e && (e = o), void 0 === t && (t = l), e(t + r.url, r.options).then(function (e) {
                    if (e.status >= 200 && e.status < 300)return e.json();
                    throw e
                })
            }
        }, getBrandChannel: function (e, n) {
            var r = t.BrandsApiFetchParamCreator.getBrandChannel(e, n);
            return function (e, t) {
                return void 0 === e && (e = o), void 0 === t && (t = l), e(t + r.url, r.options).then(function (e) {
                    if (e.status >= 200 && e.status < 300)return e.json();
                    throw e
                })
            }
        }, getBrandClicks: function (e, n) {
            var r = t.BrandsApiFetchParamCreator.getBrandClicks(e, n);
            return function (e, t) {
                return void 0 === e && (e = o), void 0 === t && (t = l), e(t + r.url, r.options).then(function (e) {
                    if (e.status >= 200 && e.status < 300)return e.json();
                    throw e
                })
            }
        }, getBrandClicksByFacet: function (e, n) {
            var r = t.BrandsApiFetchParamCreator.getBrandClicksByFacet(e, n);
            return function (e, t) {
                return void 0 === e && (e = o), void 0 === t && (t = l), e(t + r.url, r.options).then(function (e) {
                    if (e.status >= 200 && e.status < 300)return e.json();
                    throw e
                })
            }
        }, getBrandClicksByFacetRollup: function (e, n) {
            var r = t.BrandsApiFetchParamCreator.getBrandClicksByFacetRollup(e, n);
            return function (e, t) {
                return void 0 === e && (e = o), void 0 === t && (t = l), e(t + r.url, r.options).then(function (e) {
                    if (e.status >= 200 && e.status < 300)return e.json();
                    throw e
                })
            }
        }, getBrandClicksPerUnique: function (e, n) {
            var r = t.BrandsApiFetchParamCreator.getBrandClicksPerUnique(e, n);
            return function (e, t) {
                return void 0 === e && (e = o), void 0 === t && (t = l), e(t + r.url, r.options).then(function (e) {
                    if (e.status >= 200 && e.status < 300)return e.json();
                    throw e
                })
            }
        }, getBrandTotalClicks: function (e, n) {
            var r = t.BrandsApiFetchParamCreator.getBrandTotalClicks(e, n);
            return function (e, t) {
                return void 0 === e && (e = o), void 0 === t && (t = l), e(t + r.url, r.options).then(function (e) {
                    if (e.status >= 200 && e.status < 300)return e.json();
                    throw e
                })
            }
        }, getBrandTotalUniques: function (e, n) {
            var r = t.BrandsApiFetchParamCreator.getBrandTotalUniques(e, n);
            return function (e, t) {
                return void 0 === e && (e = o), void 0 === t && (t = l), e(t + r.url, r.options).then(function (e) {
                    if (e.status >= 200 && e.status < 300)return e.json();
                    throw e
                })
            }
        }, getCampaignChannel: function (e, n) {
            var r = t.BrandsApiFetchParamCreator.getCampaignChannel(e, n);
            return function (e, t) {
                return void 0 === e && (e = o), void 0 === t && (t = l), e(t + r.url, r.options).then(function (e) {
                    if (e.status >= 200 && e.status < 300)return e.json();
                    throw e
                })
            }
        }, getCampaignClicks: function (e, n) {
            var r = t.BrandsApiFetchParamCreator.getCampaignClicks(e, n);
            return function (e, t) {
                return void 0 === e && (e = o), void 0 === t && (t = l), e(t + r.url, r.options).then(function (e) {
                    if (e.status >= 200 && e.status < 300)return e.json();
                    throw e
                })
            }
        }, postBrandDataExport: function (e, n) {
            var r = t.BrandsApiFetchParamCreator.postBrandDataExport(e, n);
            return function (e, t) {
                return void 0 === e && (e = o), void 0 === t && (t = l), e(t + r.url, r.options).then(function (e) {
                    if (e.status >= 200 && e.status < 300)return e;
                    throw e
                })
            }
        }, removeBrand: function (e, n) {
            var r = t.BrandsApiFetchParamCreator.removeBrand(e, n);
            return function (e, t) {
                return void 0 === e && (e = o), void 0 === t && (t = l), e(t + r.url, r.options).then(function (e) {
                    if (e.status >= 200 && e.status < 300)return e;
                    throw e
                })
            }
        }, removeBrandBSD: function (e, n) {
            var r = t.BrandsApiFetchParamCreator.removeBrandBSD(e, n);
            return function (e, t) {
                return void 0 === e && (e = o), void 0 === t && (t = l), e(t + r.url, r.options).then(function (e) {
                    if (e.status >= 200 && e.status < 300)return e;
                    throw e
                })
            }
        }, removeUserWithRoleFromBrand: function (e, n) {
            var r = t.BrandsApiFetchParamCreator.removeUserWithRoleFromBrand(e, n);
            return function (e, t) {
                return void 0 === e && (e = o), void 0 === t && (t = l), e(t + r.url, r.options).then(function (e) {
                    if (e.status >= 200 && e.status < 300)return e;
                    throw e
                })
            }
        }, updateBrandCampaign: function (e, n) {
            var r = t.BrandsApiFetchParamCreator.updateBrandCampaign(e, n);
            return function (e, t) {
                return void 0 === e && (e = o), void 0 === t && (t = l), e(t + r.url, r.options).then(function (e) {
                    if (e.status >= 200 && e.status < 300)return e.json();
                    throw e
                })
            }
        }, updateBrandChannel: function (e, n) {
            var r = t.BrandsApiFetchParamCreator.updateBrandChannel(e, n);
            return function (e, t) {
                return void 0 === e && (e = o), void 0 === t && (t = l), e(t + r.url, r.options).then(function (e) {
                    if (e.status >= 200 && e.status < 300)return e.json();
                    throw e
                })
            }
        }
    };
    var u = function (e) {
        function n() {
            return null !== e && e.apply(this, arguments) || this
        }

        return r(n, e), n.prototype.addBrandBSD = function (e, n) {
            return t.BrandsApiFp.addBrandBSD(e, n)(this.fetch, this.basePath)
        }, n.prototype.addURLToCampaignChannels = function (e, n) {
            return t.BrandsApiFp.addURLToCampaignChannels(e, n)(this.fetch, this.basePath)
        }, n.prototype.addUserWithRoleToBrand = function (e, n) {
            return t.BrandsApiFp.addUserWithRoleToBrand(e, n)(this.fetch, this.basePath)
        }, n.prototype.bulkAdd = function (e, n) {
            return t.BrandsApiFp.bulkAdd(e, n)(this.fetch, this.basePath)
        }, n.prototype.createBrand = function (e, n) {
            return t.BrandsApiFp.createBrand(e, n)(this.fetch, this.basePath)
        }, n.prototype.createBrandCampaign = function (e, n) {
            return t.BrandsApiFp.createBrandCampaign(e, n)(this.fetch, this.basePath)
        }, n.prototype.createBrandChannel = function (e, n) {
            return t.BrandsApiFp.createBrandChannel(e, n)(this.fetch, this.basePath)
        }, n.prototype.createCampaignChannel = function (e, n) {
            return t.BrandsApiFp.createCampaignChannel(e, n)(this.fetch, this.basePath)
        }, n.prototype.createChannelBitlink = function (e, n) {
            return t.BrandsApiFp.createChannelBitlink(e, n)(this.fetch, this.basePath)
        }, n.prototype.createMultipleCampaignChannels = function (e, n) {
            return t.BrandsApiFp.createMultipleCampaignChannels(e, n)(this.fetch, this.basePath)
        }, n.prototype.deleteBrandCampaign = function (e, n) {
            return t.BrandsApiFp.deleteBrandCampaign(e, n)(this.fetch, this.basePath)
        }, n.prototype.deleteBrandChannel = function (e, n) {
            return t.BrandsApiFp.deleteBrandChannel(e, n)(this.fetch, this.basePath)
        }, n.prototype.deleteCampaignChannel = function (e, n) {
            return t.BrandsApiFp.deleteCampaignChannel(e, n)(this.fetch, this.basePath)
        }, n.prototype.deleteChannelBitlink = function (e, n) {
            return t.BrandsApiFp.deleteChannelBitlink(e, n)(this.fetch, this.basePath)
        }, n.prototype.editBrand = function (e, n) {
            return t.BrandsApiFp.editBrand(e, n)(this.fetch, this.basePath)
        }, n.prototype.editUserRoleInBrand = function (e, n) {
            return t.BrandsApiFp.editUserRoleInBrand(e, n)(this.fetch, this.basePath)
        }, n.prototype.getAllBrandCampaigns = function (e, n) {
            return t.BrandsApiFp.getAllBrandCampaigns(e, n)(this.fetch, this.basePath)
        }, n.prototype.getAllBrandChannels = function (e, n) {
            return t.BrandsApiFp.getAllBrandChannels(e, n)(this.fetch, this.basePath)
        }, n.prototype.getAllCampaignChannels = function (e, n) {
            return t.BrandsApiFp.getAllCampaignChannels(e, n)(this.fetch, this.basePath)
        }, n.prototype.getAllChannelBitlinks = function (e, n) {
            return t.BrandsApiFp.getAllChannelBitlinks(e, n)(this.fetch, this.basePath)
        }, n.prototype.getBrand = function (e, n) {
            return t.BrandsApiFp.getBrand(e, n)(this.fetch, this.basePath)
        }, n.prototype.getBrandBitlinksCount = function (e, n) {
            return t.BrandsApiFp.getBrandBitlinksCount(e, n)(this.fetch, this.basePath)
        }, n.prototype.getBrandCampaign = function (e, n) {
            return t.BrandsApiFp.getBrandCampaign(e, n)(this.fetch, this.basePath)
        }, n.prototype.getBrandChannel = function (e, n) {
            return t.BrandsApiFp.getBrandChannel(e, n)(this.fetch, this.basePath)
        }, n.prototype.getBrandClicks = function (e, n) {
            return t.BrandsApiFp.getBrandClicks(e, n)(this.fetch, this.basePath)
        }, n.prototype.getBrandClicksByFacet = function (e, n) {
            return t.BrandsApiFp.getBrandClicksByFacet(e, n)(this.fetch, this.basePath)
        }, n.prototype.getBrandClicksByFacetRollup = function (e, n) {
            return t.BrandsApiFp.getBrandClicksByFacetRollup(e, n)(this.fetch, this.basePath)
        }, n.prototype.getBrandClicksPerUnique = function (e, n) {
            return t.BrandsApiFp.getBrandClicksPerUnique(e, n)(this.fetch, this.basePath)
        }, n.prototype.getBrandTotalClicks = function (e, n) {
            return t.BrandsApiFp.getBrandTotalClicks(e, n)(this.fetch, this.basePath)
        }, n.prototype.getBrandTotalUniques = function (e, n) {
            return t.BrandsApiFp.getBrandTotalUniques(e, n)(this.fetch, this.basePath)
        }, n.prototype.getCampaignChannel = function (e, n) {
            return t.BrandsApiFp.getCampaignChannel(e, n)(this.fetch, this.basePath)
        }, n.prototype.getCampaignClicks = function (e, n) {
            return t.BrandsApiFp.getCampaignClicks(e, n)(this.fetch, this.basePath)
        }, n.prototype.postBrandDataExport = function (e, n) {
            return t.BrandsApiFp.postBrandDataExport(e, n)(this.fetch, this.basePath)
        }, n.prototype.removeBrand = function (e, n) {
            return t.BrandsApiFp.removeBrand(e, n)(this.fetch, this.basePath)
        }, n.prototype.removeBrandBSD = function (e, n) {
            return t.BrandsApiFp.removeBrandBSD(e, n)(this.fetch, this.basePath)
        }, n.prototype.removeUserWithRoleFromBrand = function (e, n) {
            return t.BrandsApiFp.removeUserWithRoleFromBrand(e, n)(this.fetch, this.basePath)
        }, n.prototype.updateBrandCampaign = function (e, n) {
            return t.BrandsApiFp.updateBrandCampaign(e, n)(this.fetch, this.basePath)
        }, n.prototype.updateBrandChannel = function (e, n) {
            return t.BrandsApiFp.updateBrandChannel(e, n)(this.fetch, this.basePath)
        }, n
    }(c);
    t.BrandsApi = u, t.BrandsApiFactory = function (e, n) {
        return {
            addBrandBSD: function (r, i) {
                return t.BrandsApiFp.addBrandBSD(r, i)(e, n)
            }, addURLToCampaignChannels: function (r, i) {
                return t.BrandsApiFp.addURLToCampaignChannels(r, i)(e, n)
            }, addUserWithRoleToBrand: function (r, i) {
                return t.BrandsApiFp.addUserWithRoleToBrand(r, i)(e, n)
            }, bulkAdd: function (r, i) {
                return t.BrandsApiFp.bulkAdd(r, i)(e, n)
            }, createBrand: function (r, i) {
                return t.BrandsApiFp.createBrand(r, i)(e, n)
            }, createBrandCampaign: function (r, i) {
                return t.BrandsApiFp.createBrandCampaign(r, i)(e, n)
            }, createBrandChannel: function (r, i) {
                return t.BrandsApiFp.createBrandChannel(r, i)(e, n)
            }, createCampaignChannel: function (r, i) {
                return t.BrandsApiFp.createCampaignChannel(r, i)(e, n)
            }, createChannelBitlink: function (r, i) {
                return t.BrandsApiFp.createChannelBitlink(r, i)(e, n)
            }, createMultipleCampaignChannels: function (r, i) {
                return t.BrandsApiFp.createMultipleCampaignChannels(r, i)(e, n)
            }, deleteBrandCampaign: function (r, i) {
                return t.BrandsApiFp.deleteBrandCampaign(r, i)(e, n)
            }, deleteBrandChannel: function (r, i) {
                return t.BrandsApiFp.deleteBrandChannel(r, i)(e, n)
            }, deleteCampaignChannel: function (r, i) {
                return t.BrandsApiFp.deleteCampaignChannel(r, i)(e, n)
            }, deleteChannelBitlink: function (r, i) {
                return t.BrandsApiFp.deleteChannelBitlink(r, i)(e, n)
            }, editBrand: function (r, i) {
                return t.BrandsApiFp.editBrand(r, i)(e, n)
            }, editUserRoleInBrand: function (r, i) {
                return t.BrandsApiFp.editUserRoleInBrand(r, i)(e, n)
            }, getAllBrandCampaigns: function (r, i) {
                return t.BrandsApiFp.getAllBrandCampaigns(r, i)(e, n)
            }, getAllBrandChannels: function (r, i) {
                return t.BrandsApiFp.getAllBrandChannels(r, i)(e, n)
            }, getAllCampaignChannels: function (r, i) {
                return t.BrandsApiFp.getAllCampaignChannels(r, i)(e, n)
            }, getAllChannelBitlinks: function (r, i) {
                return t.BrandsApiFp.getAllChannelBitlinks(r, i)(e, n)
            }, getBrand: function (r, i) {
                return t.BrandsApiFp.getBrand(r, i)(e, n)
            }, getBrandBitlinksCount: function (r, i) {
                return t.BrandsApiFp.getBrandBitlinksCount(r, i)(e, n)
            }, getBrandCampaign: function (r, i) {
                return t.BrandsApiFp.getBrandCampaign(r, i)(e, n)
            }, getBrandChannel: function (r, i) {
                return t.BrandsApiFp.getBrandChannel(r, i)(e, n)
            }, getBrandClicks: function (r, i) {
                return t.BrandsApiFp.getBrandClicks(r, i)(e, n)
            }, getBrandClicksByFacet: function (r, i) {
                return t.BrandsApiFp.getBrandClicksByFacet(r, i)(e, n)
            }, getBrandClicksByFacetRollup: function (r, i) {
                return t.BrandsApiFp.getBrandClicksByFacetRollup(r, i)(e, n)
            }, getBrandClicksPerUnique: function (r, i) {
                return t.BrandsApiFp.getBrandClicksPerUnique(r, i)(e, n)
            }, getBrandTotalClicks: function (r, i) {
                return t.BrandsApiFp.getBrandTotalClicks(r, i)(e, n)
            }, getBrandTotalUniques: function (r, i) {
                return t.BrandsApiFp.getBrandTotalUniques(r, i)(e, n)
            }, getCampaignChannel: function (r, i) {
                return t.BrandsApiFp.getCampaignChannel(r, i)(e, n)
            }, getCampaignClicks: function (r, i) {
                return t.BrandsApiFp.getCampaignClicks(r, i)(e, n)
            }, postBrandDataExport: function (r, i) {
                return t.BrandsApiFp.postBrandDataExport(r, i)(e, n)
            }, removeBrand: function (r, i) {
                return t.BrandsApiFp.removeBrand(r, i)(e, n)
            }, removeBrandBSD: function (r, i) {
                return t.BrandsApiFp.removeBrandBSD(r, i)(e, n)
            }, removeUserWithRoleFromBrand: function (r, i) {
                return t.BrandsApiFp.removeUserWithRoleFromBrand(r, i)(e, n)
            }, updateBrandCampaign: function (r, i) {
                return t.BrandsApiFp.updateBrandCampaign(r, i)(e, n)
            }, updateBrandChannel: function (r, i) {
                return t.BrandsApiFp.updateBrandChannel(r, i)(e, n)
            }
        }
    }, t.BsdsApiFetchParamCreator = {
        addBSD: function (e, t) {
            if (null == e.organizationGUID)throw new Error("Missing required parameter organizationGUID when calling addBSD");
            if (null == e.bsd)throw new Error("Missing required parameter bsd when calling addBSD");
            var n = "/organizations/{organizationGUID}/bsds/{bsd}".replace("{organizationGUID}", "" + e.organizationGUID).replace("{bsd}", "" + e.bsd), r = a.parse(n, !0), i = s({}, {method: "POST"}, t), o = {};
            return o && (i.headers = o), {url: a.format(r), options: i}
        }, addBrandBSD: function (e, t) {
            if (null == e.brandGUID)throw new Error("Missing required parameter brandGUID when calling addBrandBSD");
            if (null == e.bsd)throw new Error("Missing required parameter bsd when calling addBrandBSD");
            var n = "/brands/{brandGUID}/bsds/{bsd}".replace("{brandGUID}", "" + e.brandGUID).replace("{bsd}", "" + e.bsd), r = a.parse(n, !0), i = s({}, {method: "POST"}, t), o = {};
            return o && (i.headers = o), {url: a.format(r), options: i}
        }, getAppAssociations: function (e, t) {
            if (null == e.organizationGUID)throw new Error("Missing required parameter organizationGUID when calling getAppAssociations");
            if (null == e.bsd)throw new Error("Missing required parameter bsd when calling getAppAssociations");
            var n = "/organizations/{organizationGUID}/bsds/{bsd}/appassociations".replace("{organizationGUID}", "" + e.organizationGUID).replace("{bsd}", "" + e.bsd), r = a.parse(n, !0), i = s({}, {method: "GET"}, t), o = {};
            return o && (i.headers = o), {url: a.format(r), options: i}
        }, getBSD: function (e, t) {
            if (null == e.organizationGUID)throw new Error("Missing required parameter organizationGUID when calling getBSD");
            if (null == e.bsd)throw new Error("Missing required parameter bsd when calling getBSD");
            var n = "/organizations/{organizationGUID}/bsds/{bsd}".replace("{organizationGUID}", "" + e.organizationGUID).replace("{bsd}", "" + e.bsd), r = a.parse(n, !0), i = s({}, {method: "GET"}, t), o = {};
            return o && (i.headers = o), {url: a.format(r), options: i}
        }, getBSDs: function (e, t) {
            if (null == e.organizationGUID)throw new Error("Missing required parameter organizationGUID when calling getBSDs");
            var n = "/organizations/{organizationGUID}/bsds".replace("{organizationGUID}", "" + e.organizationGUID), r = a.parse(n, !0), i = s({}, {method: "GET"}, t), o = {};
            return o && (i.headers = o), {url: a.format(r), options: i}
        }, removeBSD: function (e, t) {
            if (null == e.organizationGUID)throw new Error("Missing required parameter organizationGUID when calling removeBSD");
            if (null == e.bsd)throw new Error("Missing required parameter bsd when calling removeBSD");
            var n = "/organizations/{organizationGUID}/bsds/{bsd}".replace("{organizationGUID}", "" + e.organizationGUID).replace("{bsd}", "" + e.bsd), r = a.parse(n, !0), i = s({}, {method: "DELETE"}, t), o = {};
            return o && (i.headers = o), {url: a.format(r), options: i}
        }, removeBrandBSD: function (e, t) {
            if (null == e.brandGUID)throw new Error("Missing required parameter brandGUID when calling removeBrandBSD");
            if (null == e.bsd)throw new Error("Missing required parameter bsd when calling removeBrandBSD");
            var n = "/brands/{brandGUID}/bsds/{bsd}".replace("{brandGUID}", "" + e.brandGUID).replace("{bsd}", "" + e.bsd), r = a.parse(n, !0), i = s({}, {method: "DELETE"}, t), o = {};
            return o && (i.headers = o), {url: a.format(r), options: i}
        }, updateAppAssociations: function (e, t) {
            if (null == e.organizationGUID)throw new Error("Missing required parameter organizationGUID when calling updateAppAssociations");
            if (null == e.bsd)throw new Error("Missing required parameter bsd when calling updateAppAssociations");
            if (null == e.appAssociation)throw new Error("Missing required parameter appAssociation when calling updateAppAssociations");
            var n = "/organizations/{organizationGUID}/bsds/{bsd}/appassociations".replace("{organizationGUID}", "" + e.organizationGUID).replace("{bsd}", "" + e.bsd), r = a.parse(n, !0), i = s({}, {method: "PUT"}, t), o = {};
            return o = {"Content-Type": "application/json"}, e.appAssociation && (i.body = JSON.stringify(e.appAssociation || {})), o && (i.headers = o), {
                url: a.format(r),
                options: i
            }
        }, updateBSD: function (e, t) {
            if (null == e.organizationGUID)throw new Error("Missing required parameter organizationGUID when calling updateBSD");
            if (null == e.bsd)throw new Error("Missing required parameter bsd when calling updateBSD");
            if (null == e.updateBSDBody)throw new Error("Missing required parameter updateBSDBody when calling updateBSD");
            var n = "/organizations/{organizationGUID}/bsds/{bsd}".replace("{organizationGUID}", "" + e.organizationGUID).replace("{bsd}", "" + e.bsd), r = a.parse(n, !0), i = s({}, {method: "PUT"}, t), o = {};
            return o = {"Content-Type": "application/json"}, e.updateBSDBody && (i.body = JSON.stringify(e.updateBSDBody || {})), o && (i.headers = o), {
                url: a.format(r),
                options: i
            }
        }, validateBSD: function (e, t) {
            if (null == e.organizationGUID)throw new Error("Missing required parameter organizationGUID when calling validateBSD");
            if (null == e.bsd)throw new Error("Missing required parameter bsd when calling validateBSD");
            var n = "/organizations/{organizationGUID}/bsds/{bsd}/validate".replace("{organizationGUID}", "" + e.organizationGUID).replace("{bsd}", "" + e.bsd), r = a.parse(n, !0), i = s({}, {method: "POST"}, t), o = {};
            return o && (i.headers = o), {url: a.format(r), options: i}
        }
    }, t.BsdsApiFp = {
        addBSD: function (e, n) {
            var r = t.BsdsApiFetchParamCreator.addBSD(e, n);
            return function (e, t) {
                return void 0 === e && (e = o), void 0 === t && (t = l), e(t + r.url, r.options).then(function (e) {
                    if (e.status >= 200 && e.status < 300)return e.json();
                    throw e
                })
            }
        }, addBrandBSD: function (e, n) {
            var r = t.BsdsApiFetchParamCreator.addBrandBSD(e, n);
            return function (e, t) {
                return void 0 === e && (e = o), void 0 === t && (t = l), e(t + r.url, r.options).then(function (e) {
                    if (e.status >= 200 && e.status < 300)return e.json();
                    throw e
                })
            }
        }, getAppAssociations: function (e, n) {
            var r = t.BsdsApiFetchParamCreator.getAppAssociations(e, n);
            return function (e, t) {
                return void 0 === e && (e = o), void 0 === t && (t = l), e(t + r.url, r.options).then(function (e) {
                    if (e.status >= 200 && e.status < 300)return e.json();
                    throw e
                })
            }
        }, getBSD: function (e, n) {
            var r = t.BsdsApiFetchParamCreator.getBSD(e, n);
            return function (e, t) {
                return void 0 === e && (e = o), void 0 === t && (t = l), e(t + r.url, r.options).then(function (e) {
                    if (e.status >= 200 && e.status < 300)return e.json();
                    throw e
                })
            }
        }, getBSDs: function (e, n) {
            var r = t.BsdsApiFetchParamCreator.getBSDs(e, n);
            return function (e, t) {
                return void 0 === e && (e = o), void 0 === t && (t = l), e(t + r.url, r.options).then(function (e) {
                    if (e.status >= 200 && e.status < 300)return e.json();
                    throw e
                })
            }
        }, removeBSD: function (e, n) {
            var r = t.BsdsApiFetchParamCreator.removeBSD(e, n);
            return function (e, t) {
                return void 0 === e && (e = o), void 0 === t && (t = l), e(t + r.url, r.options).then(function (e) {
                    if (e.status >= 200 && e.status < 300)return e;
                    throw e
                })
            }
        }, removeBrandBSD: function (e, n) {
            var r = t.BsdsApiFetchParamCreator.removeBrandBSD(e, n);
            return function (e, t) {
                return void 0 === e && (e = o), void 0 === t && (t = l), e(t + r.url, r.options).then(function (e) {
                    if (e.status >= 200 && e.status < 300)return e;
                    throw e
                })
            }
        }, updateAppAssociations: function (e, n) {
            var r = t.BsdsApiFetchParamCreator.updateAppAssociations(e, n);
            return function (e, t) {
                return void 0 === e && (e = o), void 0 === t && (t = l), e(t + r.url, r.options).then(function (e) {
                    if (e.status >= 200 && e.status < 300)return e.json();
                    throw e
                })
            }
        }, updateBSD: function (e, n) {
            var r = t.BsdsApiFetchParamCreator.updateBSD(e, n);
            return function (e, t) {
                return void 0 === e && (e = o), void 0 === t && (t = l), e(t + r.url, r.options).then(function (e) {
                    if (e.status >= 200 && e.status < 300)return e.json();
                    throw e
                })
            }
        }, validateBSD: function (e, n) {
            var r = t.BsdsApiFetchParamCreator.validateBSD(e, n);
            return function (e, t) {
                return void 0 === e && (e = o), void 0 === t && (t = l), e(t + r.url, r.options).then(function (e) {
                    if (e.status >= 200 && e.status < 300)return e.json();
                    throw e
                })
            }
        }
    };
    var d = function (e) {
        function n() {
            return null !== e && e.apply(this, arguments) || this
        }

        return r(n, e), n.prototype.addBSD = function (e, n) {
            return t.BsdsApiFp.addBSD(e, n)(this.fetch, this.basePath)
        }, n.prototype.addBrandBSD = function (e, n) {
            return t.BsdsApiFp.addBrandBSD(e, n)(this.fetch, this.basePath)
        }, n.prototype.getAppAssociations = function (e, n) {
            return t.BsdsApiFp.getAppAssociations(e, n)(this.fetch, this.basePath)
        }, n.prototype.getBSD = function (e, n) {
            return t.BsdsApiFp.getBSD(e, n)(this.fetch, this.basePath)
        }, n.prototype.getBSDs = function (e, n) {
            return t.BsdsApiFp.getBSDs(e, n)(this.fetch, this.basePath)
        }, n.prototype.removeBSD = function (e, n) {
            return t.BsdsApiFp.removeBSD(e, n)(this.fetch, this.basePath)
        }, n.prototype.removeBrandBSD = function (e, n) {
            return t.BsdsApiFp.removeBrandBSD(e, n)(this.fetch, this.basePath)
        }, n.prototype.updateAppAssociations = function (e, n) {
            return t.BsdsApiFp.updateAppAssociations(e, n)(this.fetch, this.basePath)
        }, n.prototype.updateBSD = function (e, n) {
            return t.BsdsApiFp.updateBSD(e, n)(this.fetch, this.basePath)
        }, n.prototype.validateBSD = function (e, n) {
            return t.BsdsApiFp.validateBSD(e, n)(this.fetch, this.basePath)
        }, n
    }(c);
    t.BsdsApi = d, t.BsdsApiFactory = function (e, n) {
        return {
            addBSD: function (r, i) {
                return t.BsdsApiFp.addBSD(r, i)(e, n)
            }, addBrandBSD: function (r, i) {
                return t.BsdsApiFp.addBrandBSD(r, i)(e, n)
            }, getAppAssociations: function (r, i) {
                return t.BsdsApiFp.getAppAssociations(r, i)(e, n)
            }, getBSD: function (r, i) {
                return t.BsdsApiFp.getBSD(r, i)(e, n)
            }, getBSDs: function (r, i) {
                return t.BsdsApiFp.getBSDs(r, i)(e, n)
            }, removeBSD: function (r, i) {
                return t.BsdsApiFp.removeBSD(r, i)(e, n)
            }, removeBrandBSD: function (r, i) {
                return t.BsdsApiFp.removeBrandBSD(r, i)(e, n)
            }, updateAppAssociations: function (r, i) {
                return t.BsdsApiFp.updateAppAssociations(r, i)(e, n)
            }, updateBSD: function (r, i) {
                return t.BsdsApiFp.updateBSD(r, i)(e, n)
            }, validateBSD: function (r, i) {
                return t.BsdsApiFp.validateBSD(r, i)(e, n)
            }
        }
    }, t.CampaignsApiFetchParamCreator = {
        addURLToCampaignChannels: function (e, t) {
            if (null == e.addURLBody)throw new Error("Missing required parameter addURLBody when calling addURLToCampaignChannels");
            if (null == e.brandGUID)throw new Error("Missing required parameter brandGUID when calling addURLToCampaignChannels");
            if (null == e.campaignGUID)throw new Error("Missing required parameter campaignGUID when calling addURLToCampaignChannels");
            var n = "/brands/{brandGUID}/campaigns/{campaignGUID}/addURL".replace("{brandGUID}", "" + e.brandGUID).replace("{campaignGUID}", "" + e.campaignGUID), r = a.parse(n, !0), i = s({}, {method: "POST"}, t), o = {};
            return o = {"Content-Type": "application/json"}, e.addURLBody && (i.body = JSON.stringify(e.addURLBody || {})), o && (i.headers = o), {
                url: a.format(r),
                options: i
            }
        }, bulkAdd: function (e, t) {
            if (null == e.file)throw new Error("Missing required parameter file when calling bulkAdd");
            if (null == e.brandGUID)throw new Error("Missing required parameter brandGUID when calling bulkAdd");
            if (null == e.campaignGUID)throw new Error("Missing required parameter campaignGUID when calling bulkAdd");
            var n = "/brands/{brandGUID}/campaigns/{campaignGUID}/addURLs".replace("{brandGUID}", "" + e.brandGUID).replace("{campaignGUID}", "" + e.campaignGUID), r = a.parse(n, !0), o = s({}, {method: "POST"}, t), l = {}, c = {}, u = !1;
            if (u = !0, c.file = e.file, u) {
                var d = new FormData;
                for (var p in c)d.append(p, c[p]);
                o.body = d
            } else o.body = i.stringify(c), l = {"Content-Type": "application/x-www-form-urlencoded"};
            return l && (o.headers = l), {url: a.format(r), options: o}
        }, createBrandCampaign: function (e, t) {
            if (null == e.createBrandCampaignBody)throw new Error("Missing required parameter createBrandCampaignBody when calling createBrandCampaign");
            if (null == e.brandGUID)throw new Error("Missing required parameter brandGUID when calling createBrandCampaign");
            var n = "/brands/{brandGUID}/campaigns".replace("{brandGUID}", "" + e.brandGUID), r = a.parse(n, !0), i = s({}, {method: "POST"}, t), o = {};
            return o = {"Content-Type": "application/json"}, e.createBrandCampaignBody && (i.body = JSON.stringify(e.createBrandCampaignBody || {})), o && (i.headers = o), {
                url: a.format(r),
                options: i
            }
        }, createBrandChannel: function (e, t) {
            if (null == e.createChannelBody)throw new Error("Missing required parameter createChannelBody when calling createBrandChannel");
            if (null == e.brandGUID)throw new Error("Missing required parameter brandGUID when calling createBrandChannel");
            var n = "/brands/{brandGUID}/channels".replace("{brandGUID}", "" + e.brandGUID), r = a.parse(n, !0), i = s({}, {method: "POST"}, t), o = {};
            return o = {"Content-Type": "application/json"}, e.createChannelBody && (i.body = JSON.stringify(e.createChannelBody || {})), o && (i.headers = o), {
                url: a.format(r),
                options: i
            }
        }, createCampaignChannel: function (e, t) {
            if (null == e.brandGUID)throw new Error("Missing required parameter brandGUID when calling createCampaignChannel");
            if (null == e.campaignGUID)throw new Error("Missing required parameter campaignGUID when calling createCampaignChannel");
            if (null == e.channelGUID)throw new Error("Missing required parameter channelGUID when calling createCampaignChannel");
            var n = "/brands/{brandGUID}/campaigns/{campaignGUID}/channels/{channelGUID}".replace("{brandGUID}", "" + e.brandGUID).replace("{campaignGUID}", "" + e.campaignGUID).replace("{channelGUID}", "" + e.channelGUID), r = a.parse(n, !0), i = s({}, {method: "POST"}, t), o = {};
            return o && (i.headers = o), {url: a.format(r), options: i}
        }, createChannelBitlink: function (e, t) {
            if (null == e.brandGUID)throw new Error("Missing required parameter brandGUID when calling createChannelBitlink");
            if (null == e.campaignGUID)throw new Error("Missing required parameter campaignGUID when calling createChannelBitlink");
            if (null == e.channelGUID)throw new Error("Missing required parameter channelGUID when calling createChannelBitlink");
            if (null == e.domain)throw new Error("Missing required parameter domain when calling createChannelBitlink");
            if (null == e.id)throw new Error("Missing required parameter id when calling createChannelBitlink");
            var n = "/brands/{brandGUID}/campaigns/{campaignGUID}/channels/{channelGUID}/domain/{domain}/id/{id}".replace("{brandGUID}", "" + e.brandGUID).replace("{campaignGUID}", "" + e.campaignGUID).replace("{channelGUID}", "" + e.channelGUID).replace("{domain}", "" + e.domain).replace("{id}", "" + e.id), r = a.parse(n, !0), i = s({}, {method: "POST"}, t), o = {};
            return o && (i.headers = o), {url: a.format(r), options: i}
        }, createMultipleCampaignChannels: function (e, t) {
            if (null == e.brandGUID)throw new Error("Missing required parameter brandGUID when calling createMultipleCampaignChannels");
            if (null == e.campaignGUID)throw new Error("Missing required parameter campaignGUID when calling createMultipleCampaignChannels");
            if (null == e.createMultipleCampaignChannelsBody)throw new Error("Missing required parameter createMultipleCampaignChannelsBody when calling createMultipleCampaignChannels");
            var n = "/brands/{brandGUID}/campaigns/{campaignGUID}/channels".replace("{brandGUID}", "" + e.brandGUID).replace("{campaignGUID}", "" + e.campaignGUID), r = a.parse(n, !0), i = s({}, {method: "POST"}, t), o = {};
            return o = {"Content-Type": "application/json"}, e.createMultipleCampaignChannelsBody && (i.body = JSON.stringify(e.createMultipleCampaignChannelsBody || {})), o && (i.headers = o), {
                url: a.format(r),
                options: i
            }
        }, deleteBrandCampaign: function (e, t) {
            if (null == e.brandGUID)throw new Error("Missing required parameter brandGUID when calling deleteBrandCampaign");
            if (null == e.campaignGUID)throw new Error("Missing required parameter campaignGUID when calling deleteBrandCampaign");
            var n = "/brands/{brandGUID}/campaigns/{campaignGUID}".replace("{brandGUID}", "" + e.brandGUID).replace("{campaignGUID}", "" + e.campaignGUID), r = a.parse(n, !0), i = s({}, {method: "DELETE"}, t), o = {};
            return o && (i.headers = o), {url: a.format(r), options: i}
        }, deleteBrandChannel: function (e, t) {
            if (null == e.brandGUID)throw new Error("Missing required parameter brandGUID when calling deleteBrandChannel");
            if (null == e.channelGUID)throw new Error("Missing required parameter channelGUID when calling deleteBrandChannel");
            var n = "/brands/{brandGUID}/channels/{channelGUID}".replace("{brandGUID}", "" + e.brandGUID).replace("{channelGUID}", "" + e.channelGUID), r = a.parse(n, !0), i = s({}, {method: "DELETE"}, t), o = {};
            return o && (i.headers = o), {url: a.format(r), options: i}
        }, deleteCampaignChannel: function (e, t) {
            if (null == e.brandGUID)throw new Error("Missing required parameter brandGUID when calling deleteCampaignChannel");
            if (null == e.campaignGUID)throw new Error("Missing required parameter campaignGUID when calling deleteCampaignChannel");
            if (null == e.channelGUID)throw new Error("Missing required parameter channelGUID when calling deleteCampaignChannel");
            var n = "/brands/{brandGUID}/campaigns/{campaignGUID}/channels/{channelGUID}".replace("{brandGUID}", "" + e.brandGUID).replace("{campaignGUID}", "" + e.campaignGUID).replace("{channelGUID}", "" + e.channelGUID), r = a.parse(n, !0), i = s({}, {method: "DELETE"}, t), o = {};
            return o && (i.headers = o), {url: a.format(r), options: i}
        }, deleteChannelBitlink: function (e, t) {
            if (null == e.brandGUID)throw new Error("Missing required parameter brandGUID when calling deleteChannelBitlink");
            if (null == e.campaignGUID)throw new Error("Missing required parameter campaignGUID when calling deleteChannelBitlink");
            if (null == e.channelGUID)throw new Error("Missing required parameter channelGUID when calling deleteChannelBitlink");
            if (null == e.domain)throw new Error("Missing required parameter domain when calling deleteChannelBitlink");
            if (null == e.id)throw new Error("Missing required parameter id when calling deleteChannelBitlink");
            var n = "/brands/{brandGUID}/campaigns/{campaignGUID}/channels/{channelGUID}/domain/{domain}/id/{id}".replace("{brandGUID}", "" + e.brandGUID).replace("{campaignGUID}", "" + e.campaignGUID).replace("{channelGUID}", "" + e.channelGUID).replace("{domain}", "" + e.domain).replace("{id}", "" + e.id), r = a.parse(n, !0), i = s({}, {method: "DELETE"}, t), o = {};
            return o && (i.headers = o), {url: a.format(r), options: i}
        }, getAllBrandCampaigns: function (e, t) {
            if (null == e.brandGUID)throw new Error("Missing required parameter brandGUID when calling getAllBrandCampaigns");
            var n = "/brands/{brandGUID}/campaigns".replace("{brandGUID}", "" + e.brandGUID), r = a.parse(n, !0);
            r.query = s({}, r.query, {
                limit: e.limit,
                offset: e.offset,
                search: e.search,
                campaign_guid: e.campaignGuid
            });
            var i = s({}, {method: "GET"}, t), o = {};
            return o && (i.headers = o), {url: a.format(r), options: i}
        }, getAllBrandChannels: function (e, t) {
            if (null == e.brandGUID)throw new Error("Missing required parameter brandGUID when calling getAllBrandChannels");
            var n = "/brands/{brandGUID}/channels".replace("{brandGUID}", "" + e.brandGUID), r = a.parse(n, !0), i = s({}, {method: "GET"}, t), o = {};
            return o && (i.headers = o), {url: a.format(r), options: i}
        }, getAllCampaignChannels: function (e, t) {
            if (null == e.brandGUID)throw new Error("Missing required parameter brandGUID when calling getAllCampaignChannels");
            if (null == e.campaignGUID)throw new Error("Missing required parameter campaignGUID when calling getAllCampaignChannels");
            var n = "/brands/{brandGUID}/campaigns/{campaignGUID}/channels".replace("{brandGUID}", "" + e.brandGUID).replace("{campaignGUID}", "" + e.campaignGUID), r = a.parse(n, !0), i = s({}, {method: "GET"}, t), o = {};
            return o && (i.headers = o), {url: a.format(r), options: i}
        }, getAllChannelBitlinks: function (e, t) {
            if (null == e.brandGUID)throw new Error("Missing required parameter brandGUID when calling getAllChannelBitlinks");
            if (null == e.campaignGUID)throw new Error("Missing required parameter campaignGUID when calling getAllChannelBitlinks");
            if (null == e.channelGUID)throw new Error("Missing required parameter channelGUID when calling getAllChannelBitlinks");
            var n = "/brands/{brandGUID}/campaigns/{campaignGUID}/channels/{channelGUID}/".replace("{brandGUID}", "" + e.brandGUID).replace("{campaignGUID}", "" + e.campaignGUID).replace("{channelGUID}", "" + e.channelGUID), r = a.parse(n, !0), i = s({}, {method: "GET"}, t), o = {};
            return o && (i.headers = o), {url: a.format(r), options: i}
        }, getBrandCampaign: function (e, t) {
            if (null == e.brandGUID)throw new Error("Missing required parameter brandGUID when calling getBrandCampaign");
            if (null == e.campaignGUID)throw new Error("Missing required parameter campaignGUID when calling getBrandCampaign");
            var n = "/brands/{brandGUID}/campaigns/{campaignGUID}".replace("{brandGUID}", "" + e.brandGUID).replace("{campaignGUID}", "" + e.campaignGUID), r = a.parse(n, !0), i = s({}, {method: "GET"}, t), o = {};
            return o && (i.headers = o), {url: a.format(r), options: i}
        }, getBrandChannel: function (e, t) {
            if (null == e.brandGUID)throw new Error("Missing required parameter brandGUID when calling getBrandChannel");
            if (null == e.channelGUID)throw new Error("Missing required parameter channelGUID when calling getBrandChannel");
            var n = "/brands/{brandGUID}/channels/{channelGUID}".replace("{brandGUID}", "" + e.brandGUID).replace("{channelGUID}", "" + e.channelGUID), r = a.parse(n, !0), i = s({}, {method: "GET"}, t), o = {};
            return o && (i.headers = o), {url: a.format(r), options: i}
        }, getCampaignChannel: function (e, t) {
            if (null == e.brandGUID)throw new Error("Missing required parameter brandGUID when calling getCampaignChannel");
            if (null == e.campaignGUID)throw new Error("Missing required parameter campaignGUID when calling getCampaignChannel");
            if (null == e.channelGUID)throw new Error("Missing required parameter channelGUID when calling getCampaignChannel");
            var n = "/brands/{brandGUID}/campaigns/{campaignGUID}/channels/{channelGUID}".replace("{brandGUID}", "" + e.brandGUID).replace("{campaignGUID}", "" + e.campaignGUID).replace("{channelGUID}", "" + e.channelGUID), r = a.parse(n, !0), i = s({}, {method: "GET"}, t), o = {};
            return o && (i.headers = o), {url: a.format(r), options: i}
        }, getCampaignClicks: function (e, t) {
            if (null == e.brandGUID)throw new Error("Missing required parameter brandGUID when calling getCampaignClicks");
            if (null == e.campaignGUID)throw new Error("Missing required parameter campaignGUID when calling getCampaignClicks");
            var n = "/brands/{brandGUID}/campaigns/{campaignGUID}/clicks".replace("{brandGUID}", "" + e.brandGUID).replace("{campaignGUID}", "" + e.campaignGUID), r = a.parse(n, !0);
            r.query = s({}, r.query, {unit: e.unit, units: e.units, unit_ref_ts: e.unitRefTs});
            var i = s({}, {method: "GET"}, t), o = {};
            return o && (i.headers = o), {url: a.format(r), options: i}
        }, updateBrandCampaign: function (e, t) {
            if (null == e.brandGUID)throw new Error("Missing required parameter brandGUID when calling updateBrandCampaign");
            if (null == e.campaignGUID)throw new Error("Missing required parameter campaignGUID when calling updateBrandCampaign");
            if (null == e.updateBrandCampaignBody)throw new Error("Missing required parameter updateBrandCampaignBody when calling updateBrandCampaign");
            var n = "/brands/{brandGUID}/campaigns/{campaignGUID}".replace("{brandGUID}", "" + e.brandGUID).replace("{campaignGUID}", "" + e.campaignGUID), r = a.parse(n, !0), i = s({}, {method: "PUT"}, t), o = {};
            return o = {"Content-Type": "application/json"}, e.updateBrandCampaignBody && (i.body = JSON.stringify(e.updateBrandCampaignBody || {})), o && (i.headers = o), {
                url: a.format(r),
                options: i
            }
        }, updateBrandChannel: function (e, t) {
            if (null == e.brandGUID)throw new Error("Missing required parameter brandGUID when calling updateBrandChannel");
            if (null == e.channelGUID)throw new Error("Missing required parameter channelGUID when calling updateBrandChannel");
            if (null == e.updateBrandChannelBody)throw new Error("Missing required parameter updateBrandChannelBody when calling updateBrandChannel");
            var n = "/brands/{brandGUID}/channels/{channelGUID}".replace("{brandGUID}", "" + e.brandGUID).replace("{channelGUID}", "" + e.channelGUID), r = a.parse(n, !0), i = s({}, {method: "PUT"}, t), o = {};
            return o = {"Content-Type": "application/json"}, e.updateBrandChannelBody && (i.body = JSON.stringify(e.updateBrandChannelBody || {})), o && (i.headers = o), {
                url: a.format(r),
                options: i
            }
        }
    }, t.CampaignsApiFp = {
        addURLToCampaignChannels: function (e, n) {
            var r = t.CampaignsApiFetchParamCreator.addURLToCampaignChannels(e, n);
            return function (e, t) {
                return void 0 === e && (e = o), void 0 === t && (t = l), e(t + r.url, r.options).then(function (e) {
                    if (e.status >= 200 && e.status < 300)return e.json();
                    throw e
                })
            }
        }, bulkAdd: function (e, n) {
            var r = t.CampaignsApiFetchParamCreator.bulkAdd(e, n);
            return function (e, t) {
                return void 0 === e && (e = o), void 0 === t && (t = l), e(t + r.url, r.options).then(function (e) {
                    if (e.status >= 200 && e.status < 300)return e.json();
                    throw e
                })
            }
        }, createBrandCampaign: function (e, n) {
            var r = t.CampaignsApiFetchParamCreator.createBrandCampaign(e, n);
            return function (e, t) {
                return void 0 === e && (e = o), void 0 === t && (t = l), e(t + r.url, r.options).then(function (e) {
                    if (e.status >= 200 && e.status < 300)return e.json();
                    throw e
                })
            }
        }, createBrandChannel: function (e, n) {
            var r = t.CampaignsApiFetchParamCreator.createBrandChannel(e, n);
            return function (e, t) {
                return void 0 === e && (e = o), void 0 === t && (t = l), e(t + r.url, r.options).then(function (e) {
                    if (e.status >= 200 && e.status < 300)return e.json();
                    throw e
                })
            }
        }, createCampaignChannel: function (e, n) {
            var r = t.CampaignsApiFetchParamCreator.createCampaignChannel(e, n);
            return function (e, t) {
                return void 0 === e && (e = o), void 0 === t && (t = l), e(t + r.url, r.options).then(function (e) {
                    if (e.status >= 200 && e.status < 300)return e.json();
                    throw e
                })
            }
        }, createChannelBitlink: function (e, n) {
            var r = t.CampaignsApiFetchParamCreator.createChannelBitlink(e, n);
            return function (e, t) {
                return void 0 === e && (e = o), void 0 === t && (t = l), e(t + r.url, r.options).then(function (e) {
                    if (e.status >= 200 && e.status < 300)return e.json();
                    throw e
                })
            }
        }, createMultipleCampaignChannels: function (e, n) {
            var r = t.CampaignsApiFetchParamCreator.createMultipleCampaignChannels(e, n);
            return function (e, t) {
                return void 0 === e && (e = o), void 0 === t && (t = l), e(t + r.url, r.options).then(function (e) {
                    if (e.status >= 200 && e.status < 300)return e.json();
                    throw e
                })
            }
        }, deleteBrandCampaign: function (e, n) {
            var r = t.CampaignsApiFetchParamCreator.deleteBrandCampaign(e, n);
            return function (e, t) {
                return void 0 === e && (e = o), void 0 === t && (t = l), e(t + r.url, r.options).then(function (e) {
                    if (e.status >= 200 && e.status < 300)return e;
                    throw e
                })
            }
        }, deleteBrandChannel: function (e, n) {
            var r = t.CampaignsApiFetchParamCreator.deleteBrandChannel(e, n);
            return function (e, t) {
                return void 0 === e && (e = o), void 0 === t && (t = l), e(t + r.url, r.options).then(function (e) {
                    if (e.status >= 200 && e.status < 300)return e;
                    throw e
                })
            }
        }, deleteCampaignChannel: function (e, n) {
            var r = t.CampaignsApiFetchParamCreator.deleteCampaignChannel(e, n);
            return function (e, t) {
                return void 0 === e && (e = o), void 0 === t && (t = l), e(t + r.url, r.options).then(function (e) {
                    if (e.status >= 200 && e.status < 300)return e;
                    throw e
                })
            }
        }, deleteChannelBitlink: function (e, n) {
            var r = t.CampaignsApiFetchParamCreator.deleteChannelBitlink(e, n);
            return function (e, t) {
                return void 0 === e && (e = o), void 0 === t && (t = l), e(t + r.url, r.options).then(function (e) {
                    if (e.status >= 200 && e.status < 300)return e;
                    throw e
                })
            }
        }, getAllBrandCampaigns: function (e, n) {
            var r = t.CampaignsApiFetchParamCreator.getAllBrandCampaigns(e, n);
            return function (e, t) {
                return void 0 === e && (e = o), void 0 === t && (t = l), e(t + r.url, r.options).then(function (e) {
                    if (e.status >= 200 && e.status < 300)return e.json();
                    throw e
                })
            }
        }, getAllBrandChannels: function (e, n) {
            var r = t.CampaignsApiFetchParamCreator.getAllBrandChannels(e, n);
            return function (e, t) {
                return void 0 === e && (e = o), void 0 === t && (t = l), e(t + r.url, r.options).then(function (e) {
                    if (e.status >= 200 && e.status < 300)return e.json();
                    throw e
                })
            }
        }, getAllCampaignChannels: function (e, n) {
            var r = t.CampaignsApiFetchParamCreator.getAllCampaignChannels(e, n);
            return function (e, t) {
                return void 0 === e && (e = o), void 0 === t && (t = l), e(t + r.url, r.options).then(function (e) {
                    if (e.status >= 200 && e.status < 300)return e.json();
                    throw e
                })
            }
        }, getAllChannelBitlinks: function (e, n) {
            var r = t.CampaignsApiFetchParamCreator.getAllChannelBitlinks(e, n);
            return function (e, t) {
                return void 0 === e && (e = o), void 0 === t && (t = l), e(t + r.url, r.options).then(function (e) {
                    if (e.status >= 200 && e.status < 300)return e.json();
                    throw e
                })
            }
        }, getBrandCampaign: function (e, n) {
            var r = t.CampaignsApiFetchParamCreator.getBrandCampaign(e, n);
            return function (e, t) {
                return void 0 === e && (e = o), void 0 === t && (t = l), e(t + r.url, r.options).then(function (e) {
                    if (e.status >= 200 && e.status < 300)return e.json();
                    throw e
                })
            }
        }, getBrandChannel: function (e, n) {
            var r = t.CampaignsApiFetchParamCreator.getBrandChannel(e, n);
            return function (e, t) {
                return void 0 === e && (e = o), void 0 === t && (t = l), e(t + r.url, r.options).then(function (e) {
                    if (e.status >= 200 && e.status < 300)return e.json();
                    throw e
                })
            }
        }, getCampaignChannel: function (e, n) {
            var r = t.CampaignsApiFetchParamCreator.getCampaignChannel(e, n);
            return function (e, t) {
                return void 0 === e && (e = o), void 0 === t && (t = l), e(t + r.url, r.options).then(function (e) {
                    if (e.status >= 200 && e.status < 300)return e.json();
                    throw e
                })
            }
        }, getCampaignClicks: function (e, n) {
            var r = t.CampaignsApiFetchParamCreator.getCampaignClicks(e, n);
            return function (e, t) {
                return void 0 === e && (e = o), void 0 === t && (t = l), e(t + r.url, r.options).then(function (e) {
                    if (e.status >= 200 && e.status < 300)return e.json();
                    throw e
                })
            }
        }, updateBrandCampaign: function (e, n) {
            var r = t.CampaignsApiFetchParamCreator.updateBrandCampaign(e, n);
            return function (e, t) {
                return void 0 === e && (e = o), void 0 === t && (t = l), e(t + r.url, r.options).then(function (e) {
                    if (e.status >= 200 && e.status < 300)return e.json();
                    throw e
                })
            }
        }, updateBrandChannel: function (e, n) {
            var r = t.CampaignsApiFetchParamCreator.updateBrandChannel(e, n);
            return function (e, t) {
                return void 0 === e && (e = o), void 0 === t && (t = l), e(t + r.url, r.options).then(function (e) {
                    if (e.status >= 200 && e.status < 300)return e.json();
                    throw e
                })
            }
        }
    };
    var p = function (e) {
        function n() {
            return null !== e && e.apply(this, arguments) || this
        }

        return r(n, e), n.prototype.addURLToCampaignChannels = function (e, n) {
            return t.CampaignsApiFp.addURLToCampaignChannels(e, n)(this.fetch, this.basePath)
        }, n.prototype.bulkAdd = function (e, n) {
            return t.CampaignsApiFp.bulkAdd(e, n)(this.fetch, this.basePath)
        }, n.prototype.createBrandCampaign = function (e, n) {
            return t.CampaignsApiFp.createBrandCampaign(e, n)(this.fetch, this.basePath)
        }, n.prototype.createBrandChannel = function (e, n) {
            return t.CampaignsApiFp.createBrandChannel(e, n)(this.fetch, this.basePath)
        }, n.prototype.createCampaignChannel = function (e, n) {
            return t.CampaignsApiFp.createCampaignChannel(e, n)(this.fetch, this.basePath)
        }, n.prototype.createChannelBitlink = function (e, n) {
            return t.CampaignsApiFp.createChannelBitlink(e, n)(this.fetch, this.basePath)
        }, n.prototype.createMultipleCampaignChannels = function (e, n) {
            return t.CampaignsApiFp.createMultipleCampaignChannels(e, n)(this.fetch, this.basePath)
        }, n.prototype.deleteBrandCampaign = function (e, n) {
            return t.CampaignsApiFp.deleteBrandCampaign(e, n)(this.fetch, this.basePath)
        }, n.prototype.deleteBrandChannel = function (e, n) {
            return t.CampaignsApiFp.deleteBrandChannel(e, n)(this.fetch, this.basePath)
        }, n.prototype.deleteCampaignChannel = function (e, n) {
            return t.CampaignsApiFp.deleteCampaignChannel(e, n)(this.fetch, this.basePath)
        }, n.prototype.deleteChannelBitlink = function (e, n) {
            return t.CampaignsApiFp.deleteChannelBitlink(e, n)(this.fetch, this.basePath)
        }, n.prototype.getAllBrandCampaigns = function (e, n) {
            return t.CampaignsApiFp.getAllBrandCampaigns(e, n)(this.fetch, this.basePath)
        }, n.prototype.getAllBrandChannels = function (e, n) {
            return t.CampaignsApiFp.getAllBrandChannels(e, n)(this.fetch, this.basePath)
        }, n.prototype.getAllCampaignChannels = function (e, n) {
            return t.CampaignsApiFp.getAllCampaignChannels(e, n)(this.fetch, this.basePath)
        }, n.prototype.getAllChannelBitlinks = function (e, n) {
            return t.CampaignsApiFp.getAllChannelBitlinks(e, n)(this.fetch, this.basePath)
        }, n.prototype.getBrandCampaign = function (e, n) {
            return t.CampaignsApiFp.getBrandCampaign(e, n)(this.fetch, this.basePath)
        }, n.prototype.getBrandChannel = function (e, n) {
            return t.CampaignsApiFp.getBrandChannel(e, n)(this.fetch, this.basePath)
        }, n.prototype.getCampaignChannel = function (e, n) {
            return t.CampaignsApiFp.getCampaignChannel(e, n)(this.fetch, this.basePath)
        }, n.prototype.getCampaignClicks = function (e, n) {
            return t.CampaignsApiFp.getCampaignClicks(e, n)(this.fetch, this.basePath)
        }, n.prototype.updateBrandCampaign = function (e, n) {
            return t.CampaignsApiFp.updateBrandCampaign(e, n)(this.fetch, this.basePath)
        }, n.prototype.updateBrandChannel = function (e, n) {
            return t.CampaignsApiFp.updateBrandChannel(e, n)(this.fetch, this.basePath)
        }, n
    }(c);
    t.CampaignsApi = p, t.CampaignsApiFactory = function (e, n) {
        return {
            addURLToCampaignChannels: function (r, i) {
                return t.CampaignsApiFp.addURLToCampaignChannels(r, i)(e, n)
            }, bulkAdd: function (r, i) {
                return t.CampaignsApiFp.bulkAdd(r, i)(e, n)
            }, createBrandCampaign: function (r, i) {
                return t.CampaignsApiFp.createBrandCampaign(r, i)(e, n)
            }, createBrandChannel: function (r, i) {
                return t.CampaignsApiFp.createBrandChannel(r, i)(e, n)
            }, createCampaignChannel: function (r, i) {
                return t.CampaignsApiFp.createCampaignChannel(r, i)(e, n)
            }, createChannelBitlink: function (r, i) {
                return t.CampaignsApiFp.createChannelBitlink(r, i)(e, n)
            }, createMultipleCampaignChannels: function (r, i) {
                return t.CampaignsApiFp.createMultipleCampaignChannels(r, i)(e, n)
            }, deleteBrandCampaign: function (r, i) {
                return t.CampaignsApiFp.deleteBrandCampaign(r, i)(e, n)
            }, deleteBrandChannel: function (r, i) {
                return t.CampaignsApiFp.deleteBrandChannel(r, i)(e, n)
            }, deleteCampaignChannel: function (r, i) {
                return t.CampaignsApiFp.deleteCampaignChannel(r, i)(e, n)
            }, deleteChannelBitlink: function (r, i) {
                return t.CampaignsApiFp.deleteChannelBitlink(r, i)(e, n)
            }, getAllBrandCampaigns: function (r, i) {
                return t.CampaignsApiFp.getAllBrandCampaigns(r, i)(e, n)
            }, getAllBrandChannels: function (r, i) {
                return t.CampaignsApiFp.getAllBrandChannels(r, i)(e, n)
            }, getAllCampaignChannels: function (r, i) {
                return t.CampaignsApiFp.getAllCampaignChannels(r, i)(e, n)
            }, getAllChannelBitlinks: function (r, i) {
                return t.CampaignsApiFp.getAllChannelBitlinks(r, i)(e, n)
            }, getBrandCampaign: function (r, i) {
                return t.CampaignsApiFp.getBrandCampaign(r, i)(e, n)
            }, getBrandChannel: function (r, i) {
                return t.CampaignsApiFp.getBrandChannel(r, i)(e, n)
            }, getCampaignChannel: function (r, i) {
                return t.CampaignsApiFp.getCampaignChannel(r, i)(e, n)
            }, getCampaignClicks: function (r, i) {
                return t.CampaignsApiFp.getCampaignClicks(r, i)(e, n)
            }, updateBrandCampaign: function (r, i) {
                return t.CampaignsApiFp.updateBrandCampaign(r, i)(e, n)
            }, updateBrandChannel: function (r, i) {
                return t.CampaignsApiFp.updateBrandChannel(r, i)(e, n)
            }
        }
    }, t.DeeplinksApiFetchParamCreator = {
        createDeeplinkApp: function (e, t) {
            if (null == e.organizationGUID)throw new Error("Missing required parameter organizationGUID when calling createDeeplinkApp");
            if (null == e.deeplinkApp)throw new Error("Missing required parameter deeplinkApp when calling createDeeplinkApp");
            var n = "/organizations/{organizationGUID}/deeplink_apps".replace("{organizationGUID}", "" + e.organizationGUID), r = a.parse(n, !0), i = s({}, {method: "POST"}, t), o = {};
            return o = {"Content-Type": "application/json"}, e.deeplinkApp && (i.body = JSON.stringify(e.deeplinkApp || {})), o && (i.headers = o), {
                url: a.format(r),
                options: i
            }
        }, createDeeplinkRule: function (e, t) {
            if (null == e.brandGUID)throw new Error("Missing required parameter brandGUID when calling createDeeplinkRule");
            if (null == e.domain)throw new Error("Missing required parameter domain when calling createDeeplinkRule");
            if (null == e.id)throw new Error("Missing required parameter id when calling createDeeplinkRule");
            if (null == e.deeplinkRule)throw new Error("Missing required parameter deeplinkRule when calling createDeeplinkRule");
            var n = "/brands/{brandGUID}/domain/{domain}/id/{id}/deeplink_rules".replace("{brandGUID}", "" + e.brandGUID).replace("{domain}", "" + e.domain).replace("{id}", "" + e.id), r = a.parse(n, !0), i = s({}, {method: "POST"}, t), o = {};
            return o = {"Content-Type": "application/json"}, e.deeplinkRule && (i.body = JSON.stringify(e.deeplinkRule || {})), o && (i.headers = o), {
                url: a.format(r),
                options: i
            }
        }, deactivateDeeplinkApp: function (e, t) {
            if (null == e.organizationGUID)throw new Error("Missing required parameter organizationGUID when calling deactivateDeeplinkApp");
            if (null == e.deeplinkAppGuid)throw new Error("Missing required parameter deeplinkAppGuid when calling deactivateDeeplinkApp");
            var n = "/organizations/{organizationGUID}/deeplink_apps/{deeplink_app_guid}".replace("{organizationGUID}", "" + e.organizationGUID).replace("{deeplink_app_guid}", "" + e.deeplinkAppGuid), r = a.parse(n, !0), i = s({}, {method: "DELETE"}, t), o = {};
            return o && (i.headers = o), {url: a.format(r), options: i}
        }, deleteDeeplinkRule: function (e, t) {
            if (null == e.brandGUID)throw new Error("Missing required parameter brandGUID when calling deleteDeeplinkRule");
            if (null == e.domain)throw new Error("Missing required parameter domain when calling deleteDeeplinkRule");
            if (null == e.id)throw new Error("Missing required parameter id when calling deleteDeeplinkRule");
            if (null == e.deeplinkRuleGUID)throw new Error("Missing required parameter deeplinkRuleGUID when calling deleteDeeplinkRule");
            var n = "/brands/{brandGUID}/domain/{domain}/id/{id}/deeplink_rules/{deeplinkRuleGUID}".replace("{brandGUID}", "" + e.brandGUID).replace("{domain}", "" + e.domain).replace("{id}", "" + e.id).replace("{deeplinkRuleGUID}", "" + e.deeplinkRuleGUID), r = a.parse(n, !0), i = s({}, {method: "DELETE"}, t), o = {};
            return o && (i.headers = o), {url: a.format(r), options: i}
        }, getAppAssociations: function (e, t) {
            if (null == e.organizationGUID)throw new Error("Missing required parameter organizationGUID when calling getAppAssociations");
            if (null == e.bsd)throw new Error("Missing required parameter bsd when calling getAppAssociations");
            var n = "/organizations/{organizationGUID}/bsds/{bsd}/appassociations".replace("{organizationGUID}", "" + e.organizationGUID).replace("{bsd}", "" + e.bsd), r = a.parse(n, !0), i = s({}, {method: "GET"}, t), o = {};
            return o && (i.headers = o), {url: a.format(r), options: i}
        }, getDeeplinkApp: function (e, t) {
            if (null == e.organizationGUID)throw new Error("Missing required parameter organizationGUID when calling getDeeplinkApp");
            if (null == e.deeplinkAppGuid)throw new Error("Missing required parameter deeplinkAppGuid when calling getDeeplinkApp");
            var n = "/organizations/{organizationGUID}/deeplink_apps/{deeplink_app_guid}".replace("{organizationGUID}", "" + e.organizationGUID).replace("{deeplink_app_guid}", "" + e.deeplinkAppGuid), r = a.parse(n, !0), i = s({}, {method: "GET"}, t), o = {};
            return o && (i.headers = o), {url: a.format(r), options: i}
        }, getDeeplinkApps: function (e, t) {
            if (null == e.organizationGUID)throw new Error("Missing required parameter organizationGUID when calling getDeeplinkApps");
            var n = "/organizations/{organizationGUID}/deeplink_apps".replace("{organizationGUID}", "" + e.organizationGUID), r = a.parse(n, !0), i = s({}, {method: "GET"}, t), o = {};
            return o && (i.headers = o), {url: a.format(r), options: i}
        }, getDeeplinkMetricsRollup: function (e, t) {
            if (null == e.brandGUID)throw new Error("Missing required parameter brandGUID when calling getDeeplinkMetricsRollup");
            if (null == e.domain)throw new Error("Missing required parameter domain when calling getDeeplinkMetricsRollup");
            if (null == e.id)throw new Error("Missing required parameter id when calling getDeeplinkMetricsRollup");
            var n = "/brands/{brandGUID}/domain/{domain}/id/{id}/deeplink_metrics/rollup".replace("{brandGUID}", "" + e.brandGUID).replace("{domain}", "" + e.domain).replace("{id}", "" + e.id), r = a.parse(n, !0);
            r.query = s({}, r.query, {unit: e.unit, units: e.units, unit_ref_ts: e.unitRefTs});
            var i = s({}, {method: "GET"}, t), o = {};
            return o && (i.headers = o), {url: a.format(r), options: i}
        }, getDeeplinkRules: function (e, t) {
            if (null == e.brandGUID)throw new Error("Missing required parameter brandGUID when calling getDeeplinkRules");
            if (null == e.domain)throw new Error("Missing required parameter domain when calling getDeeplinkRules");
            if (null == e.id)throw new Error("Missing required parameter id when calling getDeeplinkRules");
            var n = "/brands/{brandGUID}/domain/{domain}/id/{id}/deeplink_rules".replace("{brandGUID}", "" + e.brandGUID).replace("{domain}", "" + e.domain).replace("{id}", "" + e.id), r = a.parse(n, !0), i = s({}, {method: "GET"}, t), o = {};
            return o && (i.headers = o), {url: a.format(r), options: i}
        }, thirdPartyAppLookup: function (e, t) {
            if (null == e.organizationGUID)throw new Error("Missing required parameter organizationGUID when calling thirdPartyAppLookup");
            if (null == e.thirdPartyAppId)throw new Error("Missing required parameter thirdPartyAppId when calling thirdPartyAppLookup");
            if (null == e.os)throw new Error("Missing required parameter os when calling thirdPartyAppLookup");
            var n = "/organizations/{organizationGUID}/third_party_apps/{third_party_app_id}/os/{os}/lookup".replace("{organizationGUID}", "" + e.organizationGUID).replace("{third_party_app_id}", "" + e.thirdPartyAppId).replace("{os}", "" + e.os), r = a.parse(n, !0), i = s({}, {method: "GET"}, t), o = {};
            return o && (i.headers = o), {url: a.format(r), options: i}
        }, updateAppAssociations: function (e, t) {
            if (null == e.organizationGUID)throw new Error("Missing required parameter organizationGUID when calling updateAppAssociations");
            if (null == e.bsd)throw new Error("Missing required parameter bsd when calling updateAppAssociations");
            if (null == e.appAssociation)throw new Error("Missing required parameter appAssociation when calling updateAppAssociations");
            var n = "/organizations/{organizationGUID}/bsds/{bsd}/appassociations".replace("{organizationGUID}", "" + e.organizationGUID).replace("{bsd}", "" + e.bsd), r = a.parse(n, !0), i = s({}, {method: "PUT"}, t), o = {};
            return o = {"Content-Type": "application/json"}, e.appAssociation && (i.body = JSON.stringify(e.appAssociation || {})), o && (i.headers = o), {
                url: a.format(r),
                options: i
            }
        }, updateDeeplinkApp: function (e, t) {
            if (null == e.organizationGUID)throw new Error("Missing required parameter organizationGUID when calling updateDeeplinkApp");
            if (null == e.deeplinkAppGuid)throw new Error("Missing required parameter deeplinkAppGuid when calling updateDeeplinkApp");
            if (null == e.deeplinkApp)throw new Error("Missing required parameter deeplinkApp when calling updateDeeplinkApp");
            var n = "/organizations/{organizationGUID}/deeplink_apps/{deeplink_app_guid}".replace("{organizationGUID}", "" + e.organizationGUID).replace("{deeplink_app_guid}", "" + e.deeplinkAppGuid), r = a.parse(n, !0), i = s({}, {method: "PUT"}, t), o = {};
            return o = {"Content-Type": "application/json"}, e.deeplinkApp && (i.body = JSON.stringify(e.deeplinkApp || {})), o && (i.headers = o), {
                url: a.format(r),
                options: i
            }
        }, updateDeeplinkRule: function (e, t) {
            if (null == e.brandGUID)throw new Error("Missing required parameter brandGUID when calling updateDeeplinkRule");
            if (null == e.domain)throw new Error("Missing required parameter domain when calling updateDeeplinkRule");
            if (null == e.id)throw new Error("Missing required parameter id when calling updateDeeplinkRule");
            if (null == e.deeplinkRuleGUID)throw new Error("Missing required parameter deeplinkRuleGUID when calling updateDeeplinkRule");
            if (null == e.deeplinkRule)throw new Error("Missing required parameter deeplinkRule when calling updateDeeplinkRule");
            var n = "/brands/{brandGUID}/domain/{domain}/id/{id}/deeplink_rules/{deeplinkRuleGUID}".replace("{brandGUID}", "" + e.brandGUID).replace("{domain}", "" + e.domain).replace("{id}", "" + e.id).replace("{deeplinkRuleGUID}", "" + e.deeplinkRuleGUID), r = a.parse(n, !0), i = s({}, {method: "PUT"}, t), o = {};
            return o = {"Content-Type": "application/json"}, e.deeplinkRule && (i.body = JSON.stringify(e.deeplinkRule || {})), o && (i.headers = o), {
                url: a.format(r),
                options: i
            }
        }
    }, t.DeeplinksApiFp = {
        createDeeplinkApp: function (e, n) {
            var r = t.DeeplinksApiFetchParamCreator.createDeeplinkApp(e, n);
            return function (e, t) {
                return void 0 === e && (e = o), void 0 === t && (t = l), e(t + r.url, r.options).then(function (e) {
                    if (e.status >= 200 && e.status < 300)return e.json();
                    throw e
                })
            }
        }, createDeeplinkRule: function (e, n) {
            var r = t.DeeplinksApiFetchParamCreator.createDeeplinkRule(e, n);
            return function (e, t) {
                return void 0 === e && (e = o), void 0 === t && (t = l), e(t + r.url, r.options).then(function (e) {
                    if (e.status >= 200 && e.status < 300)return e.json();
                    throw e
                })
            }
        }, deactivateDeeplinkApp: function (e, n) {
            var r = t.DeeplinksApiFetchParamCreator.deactivateDeeplinkApp(e, n);
            return function (e, t) {
                return void 0 === e && (e = o), void 0 === t && (t = l), e(t + r.url, r.options).then(function (e) {
                    if (e.status >= 200 && e.status < 300)return e;
                    throw e
                })
            }
        }, deleteDeeplinkRule: function (e, n) {
            var r = t.DeeplinksApiFetchParamCreator.deleteDeeplinkRule(e, n);
            return function (e, t) {
                return void 0 === e && (e = o), void 0 === t && (t = l), e(t + r.url, r.options).then(function (e) {
                    if (e.status >= 200 && e.status < 300)return e;
                    throw e
                })
            }
        }, getAppAssociations: function (e, n) {
            var r = t.DeeplinksApiFetchParamCreator.getAppAssociations(e, n);
            return function (e, t) {
                return void 0 === e && (e = o), void 0 === t && (t = l), e(t + r.url, r.options).then(function (e) {
                    if (e.status >= 200 && e.status < 300)return e.json();
                    throw e
                })
            }
        }, getDeeplinkApp: function (e, n) {
            var r = t.DeeplinksApiFetchParamCreator.getDeeplinkApp(e, n);
            return function (e, t) {
                return void 0 === e && (e = o), void 0 === t && (t = l), e(t + r.url, r.options).then(function (e) {
                    if (e.status >= 200 && e.status < 300)return e.json();
                    throw e
                })
            }
        }, getDeeplinkApps: function (e, n) {
            var r = t.DeeplinksApiFetchParamCreator.getDeeplinkApps(e, n);
            return function (e, t) {
                return void 0 === e && (e = o), void 0 === t && (t = l), e(t + r.url, r.options).then(function (e) {
                    if (e.status >= 200 && e.status < 300)return e.json();
                    throw e
                })
            }
        }, getDeeplinkMetricsRollup: function (e, n) {
            var r = t.DeeplinksApiFetchParamCreator.getDeeplinkMetricsRollup(e, n);
            return function (e, t) {
                return void 0 === e && (e = o), void 0 === t && (t = l), e(t + r.url, r.options).then(function (e) {
                    if (e.status >= 200 && e.status < 300)return e.json();
                    throw e
                })
            }
        }, getDeeplinkRules: function (e, n) {
            var r = t.DeeplinksApiFetchParamCreator.getDeeplinkRules(e, n);
            return function (e, t) {
                return void 0 === e && (e = o), void 0 === t && (t = l), e(t + r.url, r.options).then(function (e) {
                    if (e.status >= 200 && e.status < 300)return e.json();
                    throw e
                })
            }
        }, thirdPartyAppLookup: function (e, n) {
            var r = t.DeeplinksApiFetchParamCreator.thirdPartyAppLookup(e, n);
            return function (e, t) {
                return void 0 === e && (e = o), void 0 === t && (t = l), e(t + r.url, r.options).then(function (e) {
                    if (e.status >= 200 && e.status < 300)return e.json();
                    throw e
                })
            }
        }, updateAppAssociations: function (e, n) {
            var r = t.DeeplinksApiFetchParamCreator.updateAppAssociations(e, n);
            return function (e, t) {
                return void 0 === e && (e = o), void 0 === t && (t = l), e(t + r.url, r.options).then(function (e) {
                    if (e.status >= 200 && e.status < 300)return e.json();
                    throw e
                })
            }
        }, updateDeeplinkApp: function (e, n) {
            var r = t.DeeplinksApiFetchParamCreator.updateDeeplinkApp(e, n);
            return function (e, t) {
                return void 0 === e && (e = o), void 0 === t && (t = l), e(t + r.url, r.options).then(function (e) {
                    if (e.status >= 200 && e.status < 300)return e.json();
                    throw e
                })
            }
        }, updateDeeplinkRule: function (e, n) {
            var r = t.DeeplinksApiFetchParamCreator.updateDeeplinkRule(e, n);
            return function (e, t) {
                return void 0 === e && (e = o), void 0 === t && (t = l), e(t + r.url, r.options).then(function (e) {
                    if (e.status >= 200 && e.status < 300)return e.json();
                    throw e
                })
            }
        }
    };
    var f = function (e) {
        function n() {
            return null !== e && e.apply(this, arguments) || this
        }

        return r(n, e), n.prototype.createDeeplinkApp = function (e, n) {
            return t.DeeplinksApiFp.createDeeplinkApp(e, n)(this.fetch, this.basePath)
        }, n.prototype.createDeeplinkRule = function (e, n) {
            return t.DeeplinksApiFp.createDeeplinkRule(e, n)(this.fetch, this.basePath)
        }, n.prototype.deactivateDeeplinkApp = function (e, n) {
            return t.DeeplinksApiFp.deactivateDeeplinkApp(e, n)(this.fetch, this.basePath)
        }, n.prototype.deleteDeeplinkRule = function (e, n) {
            return t.DeeplinksApiFp.deleteDeeplinkRule(e, n)(this.fetch, this.basePath)
        }, n.prototype.getAppAssociations = function (e, n) {
            return t.DeeplinksApiFp.getAppAssociations(e, n)(this.fetch, this.basePath)
        }, n.prototype.getDeeplinkApp = function (e, n) {
            return t.DeeplinksApiFp.getDeeplinkApp(e, n)(this.fetch, this.basePath)
        }, n.prototype.getDeeplinkApps = function (e, n) {
            return t.DeeplinksApiFp.getDeeplinkApps(e, n)(this.fetch, this.basePath)
        }, n.prototype.getDeeplinkMetricsRollup = function (e, n) {
            return t.DeeplinksApiFp.getDeeplinkMetricsRollup(e, n)(this.fetch, this.basePath)
        }, n.prototype.getDeeplinkRules = function (e, n) {
            return t.DeeplinksApiFp.getDeeplinkRules(e, n)(this.fetch, this.basePath)
        }, n.prototype.thirdPartyAppLookup = function (e, n) {
            return t.DeeplinksApiFp.thirdPartyAppLookup(e, n)(this.fetch, this.basePath)
        }, n.prototype.updateAppAssociations = function (e, n) {
            return t.DeeplinksApiFp.updateAppAssociations(e, n)(this.fetch, this.basePath)
        }, n.prototype.updateDeeplinkApp = function (e, n) {
            return t.DeeplinksApiFp.updateDeeplinkApp(e, n)(this.fetch, this.basePath)
        }, n.prototype.updateDeeplinkRule = function (e, n) {
            return t.DeeplinksApiFp.updateDeeplinkRule(e, n)(this.fetch, this.basePath)
        }, n
    }(c);
    t.DeeplinksApi = f, t.DeeplinksApiFactory = function (e, n) {
        return {
            createDeeplinkApp: function (r, i) {
                return t.DeeplinksApiFp.createDeeplinkApp(r, i)(e, n)
            }, createDeeplinkRule: function (r, i) {
                return t.DeeplinksApiFp.createDeeplinkRule(r, i)(e, n)
            }, deactivateDeeplinkApp: function (r, i) {
                return t.DeeplinksApiFp.deactivateDeeplinkApp(r, i)(e, n)
            }, deleteDeeplinkRule: function (r, i) {
                return t.DeeplinksApiFp.deleteDeeplinkRule(r, i)(e, n)
            }, getAppAssociations: function (r, i) {
                return t.DeeplinksApiFp.getAppAssociations(r, i)(e, n)
            }, getDeeplinkApp: function (r, i) {
                return t.DeeplinksApiFp.getDeeplinkApp(r, i)(e, n)
            }, getDeeplinkApps: function (r, i) {
                return t.DeeplinksApiFp.getDeeplinkApps(r, i)(e, n)
            }, getDeeplinkMetricsRollup: function (r, i) {
                return t.DeeplinksApiFp.getDeeplinkMetricsRollup(r, i)(e, n)
            }, getDeeplinkRules: function (r, i) {
                return t.DeeplinksApiFp.getDeeplinkRules(r, i)(e, n)
            }, thirdPartyAppLookup: function (r, i) {
                return t.DeeplinksApiFp.thirdPartyAppLookup(r, i)(e, n)
            }, updateAppAssociations: function (r, i) {
                return t.DeeplinksApiFp.updateAppAssociations(r, i)(e, n)
            }, updateDeeplinkApp: function (r, i) {
                return t.DeeplinksApiFp.updateDeeplinkApp(r, i)(e, n)
            }, updateDeeplinkRule: function (r, i) {
                return t.DeeplinksApiFp.updateDeeplinkRule(r, i)(e, n)
            }
        }
    }, t.ExportApiFetchParamCreator = {
        postBrandDataExport: function (e, t) {
            if (null == e.brandGUID)throw new Error("Missing required parameter brandGUID when calling postBrandDataExport");
            if (null == e.dataExportQueryBody)throw new Error("Missing required parameter dataExportQueryBody when calling postBrandDataExport");
            var n = "/brands/{brandGUID}/data_export".replace("{brandGUID}", "" + e.brandGUID), r = a.parse(n, !0), i = s({}, {method: "POST"}, t), o = {};
            return o = {"Content-Type": "application/json"}, e.dataExportQueryBody && (i.body = JSON.stringify(e.dataExportQueryBody || {})), o && (i.headers = o), {
                url: a.format(r),
                options: i
            }
        }
    }, t.ExportApiFp = {
        postBrandDataExport: function (e, n) {
            var r = t.ExportApiFetchParamCreator.postBrandDataExport(e, n);
            return function (e, t) {
                return void 0 === e && (e = o), void 0 === t && (t = l), e(t + r.url, r.options).then(function (e) {
                    if (e.status >= 200 && e.status < 300)return e;
                    throw e
                })
            }
        }
    };
    var h = function (e) {
        function n() {
            return null !== e && e.apply(this, arguments) || this
        }

        return r(n, e), n.prototype.postBrandDataExport = function (e, n) {
            return t.ExportApiFp.postBrandDataExport(e, n)(this.fetch, this.basePath)
        }, n
    }(c);
    t.ExportApi = h, t.ExportApiFactory = function (e, n) {
        return {
            postBrandDataExport: function (r, i) {
                return t.ExportApiFp.postBrandDataExport(r, i)(e, n)
            }
        }
    }, t.LimitsApiFetchParamCreator = {
        getLimits: function (e, t) {
            if (null == e.organizationGUID)throw new Error("Missing required parameter organizationGUID when calling getLimits");
            var n = "/organizations/{organizationGUID}/limits".replace("{organizationGUID}", "" + e.organizationGUID), r = a.parse(n, !0), i = s({}, {method: "GET"}, t), o = {};
            return o && (i.headers = o), {url: a.format(r), options: i}
        }
    }, t.LimitsApiFp = {
        getLimits: function (e, n) {
            var r = t.LimitsApiFetchParamCreator.getLimits(e, n);
            return function (e, t) {
                return void 0 === e && (e = o), void 0 === t && (t = l), e(t + r.url, r.options).then(function (e) {
                    if (e.status >= 200 && e.status < 300)return e.json();
                    throw e
                })
            }
        }
    };
    var g = function (e) {
        function n() {
            return null !== e && e.apply(this, arguments) || this
        }

        return r(n, e), n.prototype.getLimits = function (e, n) {
            return t.LimitsApiFp.getLimits(e, n)(this.fetch, this.basePath)
        }, n
    }(c);
    t.LimitsApi = g, t.LimitsApiFactory = function (e, n) {
        return {
            getLimits: function (r, i) {
                return t.LimitsApiFp.getLimits(r, i)(e, n)
            }
        }
    }, t.MetricsApiFetchParamCreator = {
        getAudienceCount: function (e, t) {
            if (null == e.organizationGUID)throw new Error("Missing required parameter organizationGUID when calling getAudienceCount");
            var n = "/organizations/{organizationGUID}/total_uniques".replace("{organizationGUID}", "" + e.organizationGUID), r = a.parse(n, !0);
            r.query = s({}, r.query, {unit: e.unit, units: e.units, unit_ref_ts: e.unitRefTs});
            var i = s({}, {method: "GET"}, t), o = {};
            return o && (i.headers = o), {url: a.format(r), options: i}
        }, getBrandClicksPerUnique: function (e, t) {
            if (null == e.brandGUID)throw new Error("Missing required parameter brandGUID when calling getBrandClicksPerUnique");
            var n = "/brands/{brandGUID}/clicks_per_unique".replace("{brandGUID}", "" + e.brandGUID), r = a.parse(n, !0);
            r.query = s({}, r.query, {unit: e.unit, units: e.units, unit_ref_ts: e.unitRefTs});
            var i = s({}, {method: "GET"}, t), o = {};
            return o && (i.headers = o), {url: a.format(r), options: i}
        }, getBrandTotalClicks: function (e, t) {
            if (null == e.brandGUID)throw new Error("Missing required parameter brandGUID when calling getBrandTotalClicks");
            var n = "/brands/{brandGUID}/total_clicks".replace("{brandGUID}", "" + e.brandGUID), r = a.parse(n, !0);
            r.query = s({}, r.query, {unit: e.unit, units: e.units, unit_ref_ts: e.unitRefTs});
            var i = s({}, {method: "GET"}, t), o = {};
            return o && (i.headers = o), {url: a.format(r), options: i}
        }, getBrandTotalUniques: function (e, t) {
            if (null == e.brandGUID)throw new Error("Missing required parameter brandGUID when calling getBrandTotalUniques");
            var n = "/brands/{brandGUID}/total_uniques".replace("{brandGUID}", "" + e.brandGUID), r = a.parse(n, !0);
            r.query = s({}, r.query, {unit: e.unit, units: e.units, unit_ref_ts: e.unitRefTs});
            var i = s({}, {method: "GET"}, t), o = {};
            return o && (i.headers = o), {url: a.format(r), options: i}
        }, getClicks: function (e, t) {
            if (null == e.organizationGUID)throw new Error("Missing required parameter organizationGUID when calling getClicks");
            var n = "/organizations/{organizationGUID}/total_clicks".replace("{organizationGUID}", "" + e.organizationGUID), r = a.parse(n, !0);
            r.query = s({}, r.query, {unit: e.unit, units: e.units, unit_ref_ts: e.unitRefTs});
            var i = s({}, {method: "GET"}, t), o = {};
            return o && (i.headers = o), {url: a.format(r), options: i}
        }, getClicksPerUnique: function (e, t) {
            if (null == e.organizationGUID)throw new Error("Missing required parameter organizationGUID when calling getClicksPerUnique");
            var n = "/organizations/{organizationGUID}/clicks_per_unique".replace("{organizationGUID}", "" + e.organizationGUID), r = a.parse(n, !0);
            r.query = s({}, r.query, {unit: e.unit, units: e.units, unit_ref_ts: e.unitRefTs});
            var i = s({}, {method: "GET"}, t), o = {};
            return o && (i.headers = o), {url: a.format(r), options: i}
        }, getDeeplinkMetricsRollup: function (e, t) {
            if (null == e.brandGUID)throw new Error("Missing required parameter brandGUID when calling getDeeplinkMetricsRollup");
            if (null == e.domain)throw new Error("Missing required parameter domain when calling getDeeplinkMetricsRollup");
            if (null == e.id)throw new Error("Missing required parameter id when calling getDeeplinkMetricsRollup");
            var n = "/brands/{brandGUID}/domain/{domain}/id/{id}/deeplink_metrics/rollup".replace("{brandGUID}", "" + e.brandGUID).replace("{domain}", "" + e.domain).replace("{id}", "" + e.id), r = a.parse(n, !0);
            r.query = s({}, r.query, {unit: e.unit, units: e.units, unit_ref_ts: e.unitRefTs});
            var i = s({}, {method: "GET"}, t), o = {};
            return o && (i.headers = o), {url: a.format(r), options: i}
        }, getOrganizationBitlinksCount: function (e, t) {
            if (null == e.organizationGUID)throw new Error("Missing required parameter organizationGUID when calling getOrganizationBitlinksCount");
            var n = "/organizations/{organizationGUID}/bitlinks_count".replace("{organizationGUID}", "" + e.organizationGUID), r = a.parse(n, !0);
            r.query = s({}, r.query, {unit: e.unit, units: e.units, unit_ref_ts: e.unitRefTs});
            var i = s({}, {method: "GET"}, t), o = {};
            return o && (i.headers = o), {url: a.format(r), options: i}
        }, getOrganizationEngagementRatioDayOfWeek: function (e, t) {
            if (null == e.organizationGUID)throw new Error("Missing required parameter organizationGUID when calling getOrganizationEngagementRatioDayOfWeek");
            if (null == e.vertical)throw new Error("Missing required parameter vertical when calling getOrganizationEngagementRatioDayOfWeek");
            var n = "/organizations/{organizationGUID}/engagement_ratio/day_of_week".replace("{organizationGUID}", "" + e.organizationGUID), r = a.parse(n, !0);
            r.query = s({}, r.query, {unit: e.unit, units: e.units, unit_ref_ts: e.unitRefTs, vertical: e.vertical});
            var i = s({}, {method: "GET"}, t), o = {};
            return o && (i.headers = o), {url: a.format(r), options: i}
        }, getOrganizationEngagementRatioDevices: function (e, t) {
            if (null == e.organizationGUID)throw new Error("Missing required parameter organizationGUID when calling getOrganizationEngagementRatioDevices");
            if (null == e.vertical)throw new Error("Missing required parameter vertical when calling getOrganizationEngagementRatioDevices");
            var n = "/organizations/{organizationGUID}/engagement_ratio/devices".replace("{organizationGUID}", "" + e.organizationGUID), r = a.parse(n, !0);
            r.query = s({}, r.query, {unit: e.unit, units: e.units, unit_ref_ts: e.unitRefTs, vertical: e.vertical});
            var i = s({}, {method: "GET"}, t), o = {};
            return o && (i.headers = o), {url: a.format(r), options: i}
        }, getOrganizationEngagementRatioHourOfDay: function (e, t) {
            if (null == e.organizationGUID)throw new Error("Missing required parameter organizationGUID when calling getOrganizationEngagementRatioHourOfDay");
            if (null == e.vertical)throw new Error("Missing required parameter vertical when calling getOrganizationEngagementRatioHourOfDay");
            var n = "/organizations/{organizationGUID}/engagement_ratio/hour_of_day".replace("{organizationGUID}", "" + e.organizationGUID), r = a.parse(n, !0);
            r.query = s({}, r.query, {unit: e.unit, units: e.units, unit_ref_ts: e.unitRefTs, vertical: e.vertical});
            var i = s({}, {method: "GET"}, t), o = {};
            return o && (i.headers = o), {url: a.format(r), options: i}
        }, getOrganizationEngagementRatioOS: function (e, t) {
            if (null == e.organizationGUID)throw new Error("Missing required parameter organizationGUID when calling getOrganizationEngagementRatioOS");
            if (null == e.vertical)throw new Error("Missing required parameter vertical when calling getOrganizationEngagementRatioOS");
            var n = "/organizations/{organizationGUID}/engagement_ratio/os".replace("{organizationGUID}", "" + e.organizationGUID), r = a.parse(n, !0);
            r.query = s({}, r.query, {unit: e.unit, units: e.units, unit_ref_ts: e.unitRefTs, vertical: e.vertical});
            var i = s({}, {method: "GET"}, t), o = {};
            return o && (i.headers = o), {url: a.format(r), options: i}
        }, getOrganizationEngagementRatioReferrers: function (e, t) {
            if (null == e.organizationGUID)throw new Error("Missing required parameter organizationGUID when calling getOrganizationEngagementRatioReferrers");
            if (null == e.vertical)throw new Error("Missing required parameter vertical when calling getOrganizationEngagementRatioReferrers");
            var n = "/organizations/{organizationGUID}/engagement_ratio/referrers".replace("{organizationGUID}", "" + e.organizationGUID), r = a.parse(n, !0);
            r.query = s({}, r.query, {unit: e.unit, units: e.units, unit_ref_ts: e.unitRefTs, vertical: e.vertical});
            var i = s({}, {method: "GET"}, t), o = {};
            return o && (i.headers = o), {url: a.format(r), options: i}
        }, getVerticals: function (e) {
            var t = a.parse("/verticals", !0), n = s({}, {method: "GET"}, e), r = {};
            return r && (n.headers = r), {url: a.format(t), options: n}
        }
    }, t.MetricsApiFp = {
        getAudienceCount: function (e, n) {
            var r = t.MetricsApiFetchParamCreator.getAudienceCount(e, n);
            return function (e, t) {
                return void 0 === e && (e = o), void 0 === t && (t = l), e(t + r.url, r.options).then(function (e) {
                    if (e.status >= 200 && e.status < 300)return e.json();
                    throw e
                })
            }
        }, getBrandClicksPerUnique: function (e, n) {
            var r = t.MetricsApiFetchParamCreator.getBrandClicksPerUnique(e, n);
            return function (e, t) {
                return void 0 === e && (e = o), void 0 === t && (t = l), e(t + r.url, r.options).then(function (e) {
                    if (e.status >= 200 && e.status < 300)return e.json();
                    throw e
                })
            }
        }, getBrandTotalClicks: function (e, n) {
            var r = t.MetricsApiFetchParamCreator.getBrandTotalClicks(e, n);
            return function (e, t) {
                return void 0 === e && (e = o), void 0 === t && (t = l), e(t + r.url, r.options).then(function (e) {
                    if (e.status >= 200 && e.status < 300)return e.json();
                    throw e
                })
            }
        }, getBrandTotalUniques: function (e, n) {
            var r = t.MetricsApiFetchParamCreator.getBrandTotalUniques(e, n);
            return function (e, t) {
                return void 0 === e && (e = o), void 0 === t && (t = l), e(t + r.url, r.options).then(function (e) {
                    if (e.status >= 200 && e.status < 300)return e.json();
                    throw e
                })
            }
        }, getClicks: function (e, n) {
            var r = t.MetricsApiFetchParamCreator.getClicks(e, n);
            return function (e, t) {
                return void 0 === e && (e = o), void 0 === t && (t = l), e(t + r.url, r.options).then(function (e) {
                    if (e.status >= 200 && e.status < 300)return e.json();
                    throw e
                })
            }
        }, getClicksPerUnique: function (e, n) {
            var r = t.MetricsApiFetchParamCreator.getClicksPerUnique(e, n);
            return function (e, t) {
                return void 0 === e && (e = o), void 0 === t && (t = l), e(t + r.url, r.options).then(function (e) {
                    if (e.status >= 200 && e.status < 300)return e.json();
                    throw e
                })
            }
        }, getDeeplinkMetricsRollup: function (e, n) {
            var r = t.MetricsApiFetchParamCreator.getDeeplinkMetricsRollup(e, n);
            return function (e, t) {
                return void 0 === e && (e = o), void 0 === t && (t = l), e(t + r.url, r.options).then(function (e) {
                    if (e.status >= 200 && e.status < 300)return e.json();
                    throw e
                })
            }
        }, getOrganizationBitlinksCount: function (e, n) {
            var r = t.MetricsApiFetchParamCreator.getOrganizationBitlinksCount(e, n);
            return function (e, t) {
                return void 0 === e && (e = o), void 0 === t && (t = l), e(t + r.url, r.options).then(function (e) {
                    if (e.status >= 200 && e.status < 300)return e.json();
                    throw e
                })
            }
        }, getOrganizationEngagementRatioDayOfWeek: function (e, n) {
            var r = t.MetricsApiFetchParamCreator.getOrganizationEngagementRatioDayOfWeek(e, n);
            return function (e, t) {
                return void 0 === e && (e = o), void 0 === t && (t = l), e(t + r.url, r.options).then(function (e) {
                    if (e.status >= 200 && e.status < 300)return e.json();
                    throw e
                })
            }
        }, getOrganizationEngagementRatioDevices: function (e, n) {
            var r = t.MetricsApiFetchParamCreator.getOrganizationEngagementRatioDevices(e, n);
            return function (e, t) {
                return void 0 === e && (e = o), void 0 === t && (t = l), e(t + r.url, r.options).then(function (e) {
                    if (e.status >= 200 && e.status < 300)return e.json();
                    throw e
                })
            }
        }, getOrganizationEngagementRatioHourOfDay: function (e, n) {
            var r = t.MetricsApiFetchParamCreator.getOrganizationEngagementRatioHourOfDay(e, n);
            return function (e, t) {
                return void 0 === e && (e = o), void 0 === t && (t = l), e(t + r.url, r.options).then(function (e) {
                    if (e.status >= 200 && e.status < 300)return e.json();
                    throw e
                })
            }
        }, getOrganizationEngagementRatioOS: function (e, n) {
            var r = t.MetricsApiFetchParamCreator.getOrganizationEngagementRatioOS(e, n);
            return function (e, t) {
                return void 0 === e && (e = o), void 0 === t && (t = l), e(t + r.url, r.options).then(function (e) {
                    if (e.status >= 200 && e.status < 300)return e.json();
                    throw e
                })
            }
        }, getOrganizationEngagementRatioReferrers: function (e, n) {
            var r = t.MetricsApiFetchParamCreator.getOrganizationEngagementRatioReferrers(e, n);
            return function (e, t) {
                return void 0 === e && (e = o), void 0 === t && (t = l), e(t + r.url, r.options).then(function (e) {
                    if (e.status >= 200 && e.status < 300)return e.json();
                    throw e
                })
            }
        }, getVerticals: function (e) {
            var n = t.MetricsApiFetchParamCreator.getVerticals(e);
            return function (e, t) {
                return void 0 === e && (e = o), void 0 === t && (t = l), e(t + n.url, n.options).then(function (e) {
                    if (e.status >= 200 && e.status < 300)return e.json();
                    throw e
                })
            }
        }
    };
    var m = function (e) {
        function n() {
            return null !== e && e.apply(this, arguments) || this
        }

        return r(n, e), n.prototype.getAudienceCount = function (e, n) {
            return t.MetricsApiFp.getAudienceCount(e, n)(this.fetch, this.basePath)
        }, n.prototype.getBrandClicksPerUnique = function (e, n) {
            return t.MetricsApiFp.getBrandClicksPerUnique(e, n)(this.fetch, this.basePath)
        }, n.prototype.getBrandTotalClicks = function (e, n) {
            return t.MetricsApiFp.getBrandTotalClicks(e, n)(this.fetch, this.basePath)
        }, n.prototype.getBrandTotalUniques = function (e, n) {
            return t.MetricsApiFp.getBrandTotalUniques(e, n)(this.fetch, this.basePath)
        }, n.prototype.getClicks = function (e, n) {
            return t.MetricsApiFp.getClicks(e, n)(this.fetch, this.basePath)
        }, n.prototype.getClicksPerUnique = function (e, n) {
            return t.MetricsApiFp.getClicksPerUnique(e, n)(this.fetch, this.basePath)
        }, n.prototype.getDeeplinkMetricsRollup = function (e, n) {
            return t.MetricsApiFp.getDeeplinkMetricsRollup(e, n)(this.fetch, this.basePath)
        }, n.prototype.getOrganizationBitlinksCount = function (e, n) {
            return t.MetricsApiFp.getOrganizationBitlinksCount(e, n)(this.fetch, this.basePath)
        }, n.prototype.getOrganizationEngagementRatioDayOfWeek = function (e, n) {
            return t.MetricsApiFp.getOrganizationEngagementRatioDayOfWeek(e, n)(this.fetch, this.basePath)
        }, n.prototype.getOrganizationEngagementRatioDevices = function (e, n) {
            return t.MetricsApiFp.getOrganizationEngagementRatioDevices(e, n)(this.fetch, this.basePath)
        }, n.prototype.getOrganizationEngagementRatioHourOfDay = function (e, n) {
            return t.MetricsApiFp.getOrganizationEngagementRatioHourOfDay(e, n)(this.fetch, this.basePath)
        }, n.prototype.getOrganizationEngagementRatioOS = function (e, n) {
            return t.MetricsApiFp.getOrganizationEngagementRatioOS(e, n)(this.fetch, this.basePath)
        }, n.prototype.getOrganizationEngagementRatioReferrers = function (e, n) {
            return t.MetricsApiFp.getOrganizationEngagementRatioReferrers(e, n)(this.fetch, this.basePath)
        }, n.prototype.getVerticals = function (e) {
            return t.MetricsApiFp.getVerticals(e)(this.fetch, this.basePath)
        }, n
    }(c);
    t.MetricsApi = m, t.MetricsApiFactory = function (e, n) {
        return {
            getAudienceCount: function (r, i) {
                return t.MetricsApiFp.getAudienceCount(r, i)(e, n)
            }, getBrandClicksPerUnique: function (r, i) {
                return t.MetricsApiFp.getBrandClicksPerUnique(r, i)(e, n)
            }, getBrandTotalClicks: function (r, i) {
                return t.MetricsApiFp.getBrandTotalClicks(r, i)(e, n)
            }, getBrandTotalUniques: function (r, i) {
                return t.MetricsApiFp.getBrandTotalUniques(r, i)(e, n)
            }, getClicks: function (r, i) {
                return t.MetricsApiFp.getClicks(r, i)(e, n)
            }, getClicksPerUnique: function (r, i) {
                return t.MetricsApiFp.getClicksPerUnique(r, i)(e, n)
            }, getDeeplinkMetricsRollup: function (r, i) {
                return t.MetricsApiFp.getDeeplinkMetricsRollup(r, i)(e, n)
            }, getOrganizationBitlinksCount: function (r, i) {
                return t.MetricsApiFp.getOrganizationBitlinksCount(r, i)(e, n)
            }, getOrganizationEngagementRatioDayOfWeek: function (r, i) {
                return t.MetricsApiFp.getOrganizationEngagementRatioDayOfWeek(r, i)(e, n)
            }, getOrganizationEngagementRatioDevices: function (r, i) {
                return t.MetricsApiFp.getOrganizationEngagementRatioDevices(r, i)(e, n)
            }, getOrganizationEngagementRatioHourOfDay: function (r, i) {
                return t.MetricsApiFp.getOrganizationEngagementRatioHourOfDay(r, i)(e, n)
            }, getOrganizationEngagementRatioOS: function (r, i) {
                return t.MetricsApiFp.getOrganizationEngagementRatioOS(r, i)(e, n)
            }, getOrganizationEngagementRatioReferrers: function (r, i) {
                return t.MetricsApiFp.getOrganizationEngagementRatioReferrers(r, i)(e, n)
            }, getVerticals: function (r) {
                return t.MetricsApiFp.getVerticals(r)(e, n)
            }
        }
    }, t.MobileApiFetchParamCreator = {
        createDeeplinkApp: function (e, t) {
            if (null == e.organizationGUID)throw new Error("Missing required parameter organizationGUID when calling createDeeplinkApp");
            if (null == e.deeplinkApp)throw new Error("Missing required parameter deeplinkApp when calling createDeeplinkApp");
            var n = "/organizations/{organizationGUID}/deeplink_apps".replace("{organizationGUID}", "" + e.organizationGUID), r = a.parse(n, !0), i = s({}, {method: "POST"}, t), o = {};
            return o = {"Content-Type": "application/json"}, e.deeplinkApp && (i.body = JSON.stringify(e.deeplinkApp || {})), o && (i.headers = o), {
                url: a.format(r),
                options: i
            }
        }, createDeeplinkRule: function (e, t) {
            if (null == e.brandGUID)throw new Error("Missing required parameter brandGUID when calling createDeeplinkRule");
            if (null == e.domain)throw new Error("Missing required parameter domain when calling createDeeplinkRule");
            if (null == e.id)throw new Error("Missing required parameter id when calling createDeeplinkRule");
            if (null == e.deeplinkRule)throw new Error("Missing required parameter deeplinkRule when calling createDeeplinkRule");
            var n = "/brands/{brandGUID}/domain/{domain}/id/{id}/deeplink_rules".replace("{brandGUID}", "" + e.brandGUID).replace("{domain}", "" + e.domain).replace("{id}", "" + e.id), r = a.parse(n, !0), i = s({}, {method: "POST"}, t), o = {};
            return o = {"Content-Type": "application/json"}, e.deeplinkRule && (i.body = JSON.stringify(e.deeplinkRule || {})), o && (i.headers = o), {
                url: a.format(r),
                options: i
            }
        }, deactivateDeeplinkApp: function (e, t) {
            if (null == e.organizationGUID)throw new Error("Missing required parameter organizationGUID when calling deactivateDeeplinkApp");
            if (null == e.deeplinkAppGuid)throw new Error("Missing required parameter deeplinkAppGuid when calling deactivateDeeplinkApp");
            var n = "/organizations/{organizationGUID}/deeplink_apps/{deeplink_app_guid}".replace("{organizationGUID}", "" + e.organizationGUID).replace("{deeplink_app_guid}", "" + e.deeplinkAppGuid), r = a.parse(n, !0), i = s({}, {method: "DELETE"}, t), o = {};
            return o && (i.headers = o), {url: a.format(r), options: i}
        }, deferredDeeplinksLookup: function (e, t) {
            if (null == e.deviceId)throw new Error("Missing required parameter deviceId when calling deferredDeeplinksLookup");
            if (null == e.deviceIdType)throw new Error("Missing required parameter deviceIdType when calling deferredDeeplinksLookup");
            if (null == e.appGuid)throw new Error("Missing required parameter appGuid when calling deferredDeeplinksLookup");
            var n = a.parse("/mobile/lookup", !0);
            n.query = s({}, n.query, {device_id: e.deviceId, device_id_type: e.deviceIdType, app_guid: e.appGuid});
            var r = s({}, {method: "GET"}, t), i = {};
            return i && (r.headers = i), {url: a.format(n), options: r}
        }, deleteDeeplinkRule: function (e, t) {
            if (null == e.brandGUID)throw new Error("Missing required parameter brandGUID when calling deleteDeeplinkRule");
            if (null == e.domain)throw new Error("Missing required parameter domain when calling deleteDeeplinkRule");
            if (null == e.id)throw new Error("Missing required parameter id when calling deleteDeeplinkRule");
            if (null == e.deeplinkRuleGUID)throw new Error("Missing required parameter deeplinkRuleGUID when calling deleteDeeplinkRule");
            var n = "/brands/{brandGUID}/domain/{domain}/id/{id}/deeplink_rules/{deeplinkRuleGUID}".replace("{brandGUID}", "" + e.brandGUID).replace("{domain}", "" + e.domain).replace("{id}", "" + e.id).replace("{deeplinkRuleGUID}", "" + e.deeplinkRuleGUID), r = a.parse(n, !0), i = s({}, {method: "DELETE"}, t), o = {};
            return o && (i.headers = o), {url: a.format(r), options: i}
        }, getAppAssociations: function (e, t) {
            if (null == e.organizationGUID)throw new Error("Missing required parameter organizationGUID when calling getAppAssociations");
            if (null == e.bsd)throw new Error("Missing required parameter bsd when calling getAppAssociations");
            var n = "/organizations/{organizationGUID}/bsds/{bsd}/appassociations".replace("{organizationGUID}", "" + e.organizationGUID).replace("{bsd}", "" + e.bsd), r = a.parse(n, !0), i = s({}, {method: "GET"}, t), o = {};
            return o && (i.headers = o), {url: a.format(r), options: i}
        }, getDeeplinkApp: function (e, t) {
            if (null == e.organizationGUID)throw new Error("Missing required parameter organizationGUID when calling getDeeplinkApp");
            if (null == e.deeplinkAppGuid)throw new Error("Missing required parameter deeplinkAppGuid when calling getDeeplinkApp");
            var n = "/organizations/{organizationGUID}/deeplink_apps/{deeplink_app_guid}".replace("{organizationGUID}", "" + e.organizationGUID).replace("{deeplink_app_guid}", "" + e.deeplinkAppGuid), r = a.parse(n, !0), i = s({}, {method: "GET"}, t), o = {};
            return o && (i.headers = o), {url: a.format(r), options: i}
        }, getDeeplinkApps: function (e, t) {
            if (null == e.organizationGUID)throw new Error("Missing required parameter organizationGUID when calling getDeeplinkApps");
            var n = "/organizations/{organizationGUID}/deeplink_apps".replace("{organizationGUID}", "" + e.organizationGUID), r = a.parse(n, !0), i = s({}, {method: "GET"}, t), o = {};
            return o && (i.headers = o), {url: a.format(r), options: i}
        }, getDeeplinkMetricsRollup: function (e, t) {
            if (null == e.brandGUID)throw new Error("Missing required parameter brandGUID when calling getDeeplinkMetricsRollup");
            if (null == e.domain)throw new Error("Missing required parameter domain when calling getDeeplinkMetricsRollup");
            if (null == e.id)throw new Error("Missing required parameter id when calling getDeeplinkMetricsRollup");
            var n = "/brands/{brandGUID}/domain/{domain}/id/{id}/deeplink_metrics/rollup".replace("{brandGUID}", "" + e.brandGUID).replace("{domain}", "" + e.domain).replace("{id}", "" + e.id), r = a.parse(n, !0);
            r.query = s({}, r.query, {unit: e.unit, units: e.units, unit_ref_ts: e.unitRefTs});
            var i = s({}, {method: "GET"}, t), o = {};
            return o && (i.headers = o), {url: a.format(r), options: i}
        }, getDeeplinkRules: function (e, t) {
            if (null == e.brandGUID)throw new Error("Missing required parameter brandGUID when calling getDeeplinkRules");
            if (null == e.domain)throw new Error("Missing required parameter domain when calling getDeeplinkRules");
            if (null == e.id)throw new Error("Missing required parameter id when calling getDeeplinkRules");
            var n = "/brands/{brandGUID}/domain/{domain}/id/{id}/deeplink_rules".replace("{brandGUID}", "" + e.brandGUID).replace("{domain}", "" + e.domain).replace("{id}", "" + e.id), r = a.parse(n, !0), i = s({}, {method: "GET"}, t), o = {};
            return o && (i.headers = o), {url: a.format(r), options: i}
        }, registerMobileDevice: function (e, t) {
            if (null == e.deviceId)throw new Error("Missing required parameter deviceId when calling registerMobileDevice");
            if (null == e.deviceIdType)throw new Error("Missing required parameter deviceIdType when calling registerMobileDevice");
            if (null == e.appGuid)throw new Error("Missing required parameter appGuid when calling registerMobileDevice");
            var n = a.parse("/mobile/register", !0);
            n.query = s({}, n.query, {
                device_id: e.deviceId,
                device_id_type: e.deviceIdType,
                app_guid: e.appGuid,
                dsos: e.dsos,
                dsosmaj: e.dsosmaj,
                dsosmin: e.dsosmin,
                dsm: e.dsm
            });
            var r = s({}, {method: "GET"}, t), i = {};
            return i && (r.headers = i), {url: a.format(n), options: r}
        }, thirdPartyAppLookup: function (e, t) {
            if (null == e.organizationGUID)throw new Error("Missing required parameter organizationGUID when calling thirdPartyAppLookup");
            if (null == e.thirdPartyAppId)throw new Error("Missing required parameter thirdPartyAppId when calling thirdPartyAppLookup");
            if (null == e.os)throw new Error("Missing required parameter os when calling thirdPartyAppLookup");
            var n = "/organizations/{organizationGUID}/third_party_apps/{third_party_app_id}/os/{os}/lookup".replace("{organizationGUID}", "" + e.organizationGUID).replace("{third_party_app_id}", "" + e.thirdPartyAppId).replace("{os}", "" + e.os), r = a.parse(n, !0), i = s({}, {method: "GET"}, t), o = {};
            return o && (i.headers = o), {url: a.format(r), options: i}
        }, updateAppAssociations: function (e, t) {
            if (null == e.organizationGUID)throw new Error("Missing required parameter organizationGUID when calling updateAppAssociations");
            if (null == e.bsd)throw new Error("Missing required parameter bsd when calling updateAppAssociations");
            if (null == e.appAssociation)throw new Error("Missing required parameter appAssociation when calling updateAppAssociations");
            var n = "/organizations/{organizationGUID}/bsds/{bsd}/appassociations".replace("{organizationGUID}", "" + e.organizationGUID).replace("{bsd}", "" + e.bsd), r = a.parse(n, !0), i = s({}, {method: "PUT"}, t), o = {};
            return o = {"Content-Type": "application/json"}, e.appAssociation && (i.body = JSON.stringify(e.appAssociation || {})), o && (i.headers = o), {
                url: a.format(r),
                options: i
            }
        }, updateDeeplinkApp: function (e, t) {
            if (null == e.organizationGUID)throw new Error("Missing required parameter organizationGUID when calling updateDeeplinkApp");
            if (null == e.deeplinkAppGuid)throw new Error("Missing required parameter deeplinkAppGuid when calling updateDeeplinkApp");
            if (null == e.deeplinkApp)throw new Error("Missing required parameter deeplinkApp when calling updateDeeplinkApp");
            var n = "/organizations/{organizationGUID}/deeplink_apps/{deeplink_app_guid}".replace("{organizationGUID}", "" + e.organizationGUID).replace("{deeplink_app_guid}", "" + e.deeplinkAppGuid), r = a.parse(n, !0), i = s({}, {method: "PUT"}, t), o = {};
            return o = {"Content-Type": "application/json"}, e.deeplinkApp && (i.body = JSON.stringify(e.deeplinkApp || {})), o && (i.headers = o), {
                url: a.format(r),
                options: i
            }
        }, updateDeeplinkRule: function (e, t) {
            if (null == e.brandGUID)throw new Error("Missing required parameter brandGUID when calling updateDeeplinkRule");
            if (null == e.domain)throw new Error("Missing required parameter domain when calling updateDeeplinkRule");
            if (null == e.id)throw new Error("Missing required parameter id when calling updateDeeplinkRule");
            if (null == e.deeplinkRuleGUID)throw new Error("Missing required parameter deeplinkRuleGUID when calling updateDeeplinkRule");
            if (null == e.deeplinkRule)throw new Error("Missing required parameter deeplinkRule when calling updateDeeplinkRule");
            var n = "/brands/{brandGUID}/domain/{domain}/id/{id}/deeplink_rules/{deeplinkRuleGUID}".replace("{brandGUID}", "" + e.brandGUID).replace("{domain}", "" + e.domain).replace("{id}", "" + e.id).replace("{deeplinkRuleGUID}", "" + e.deeplinkRuleGUID), r = a.parse(n, !0), i = s({}, {method: "PUT"}, t), o = {};
            return o = {"Content-Type": "application/json"}, e.deeplinkRule && (i.body = JSON.stringify(e.deeplinkRule || {})), o && (i.headers = o), {
                url: a.format(r),
                options: i
            }
        }
    }, t.MobileApiFp = {
        createDeeplinkApp: function (e, n) {
            var r = t.MobileApiFetchParamCreator.createDeeplinkApp(e, n);
            return function (e, t) {
                return void 0 === e && (e = o), void 0 === t && (t = l), e(t + r.url, r.options).then(function (e) {
                    if (e.status >= 200 && e.status < 300)return e.json();
                    throw e
                })
            }
        }, createDeeplinkRule: function (e, n) {
            var r = t.MobileApiFetchParamCreator.createDeeplinkRule(e, n);
            return function (e, t) {
                return void 0 === e && (e = o), void 0 === t && (t = l), e(t + r.url, r.options).then(function (e) {
                    if (e.status >= 200 && e.status < 300)return e.json();
                    throw e
                })
            }
        }, deactivateDeeplinkApp: function (e, n) {
            var r = t.MobileApiFetchParamCreator.deactivateDeeplinkApp(e, n);
            return function (e, t) {
                return void 0 === e && (e = o), void 0 === t && (t = l), e(t + r.url, r.options).then(function (e) {
                    if (e.status >= 200 && e.status < 300)return e;
                    throw e
                })
            }
        }, deferredDeeplinksLookup: function (e, n) {
            var r = t.MobileApiFetchParamCreator.deferredDeeplinksLookup(e, n);
            return function (e, t) {
                return void 0 === e && (e = o), void 0 === t && (t = l), e(t + r.url, r.options).then(function (e) {
                    if (e.status >= 200 && e.status < 300)return e.json();
                    throw e
                })
            }
        }, deleteDeeplinkRule: function (e, n) {
            var r = t.MobileApiFetchParamCreator.deleteDeeplinkRule(e, n);
            return function (e, t) {
                return void 0 === e && (e = o), void 0 === t && (t = l), e(t + r.url, r.options).then(function (e) {
                    if (e.status >= 200 && e.status < 300)return e;
                    throw e
                })
            }
        }, getAppAssociations: function (e, n) {
            var r = t.MobileApiFetchParamCreator.getAppAssociations(e, n);
            return function (e, t) {
                return void 0 === e && (e = o), void 0 === t && (t = l), e(t + r.url, r.options).then(function (e) {
                    if (e.status >= 200 && e.status < 300)return e.json();
                    throw e
                })
            }
        }, getDeeplinkApp: function (e, n) {
            var r = t.MobileApiFetchParamCreator.getDeeplinkApp(e, n);
            return function (e, t) {
                return void 0 === e && (e = o), void 0 === t && (t = l), e(t + r.url, r.options).then(function (e) {
                    if (e.status >= 200 && e.status < 300)return e.json();
                    throw e
                })
            }
        }, getDeeplinkApps: function (e, n) {
            var r = t.MobileApiFetchParamCreator.getDeeplinkApps(e, n);
            return function (e, t) {
                return void 0 === e && (e = o), void 0 === t && (t = l), e(t + r.url, r.options).then(function (e) {
                    if (e.status >= 200 && e.status < 300)return e.json();
                    throw e
                })
            }
        }, getDeeplinkMetricsRollup: function (e, n) {
            var r = t.MobileApiFetchParamCreator.getDeeplinkMetricsRollup(e, n);
            return function (e, t) {
                return void 0 === e && (e = o), void 0 === t && (t = l), e(t + r.url, r.options).then(function (e) {
                    if (e.status >= 200 && e.status < 300)return e.json();
                    throw e
                })
            }
        }, getDeeplinkRules: function (e, n) {
            var r = t.MobileApiFetchParamCreator.getDeeplinkRules(e, n);
            return function (e, t) {
                return void 0 === e && (e = o), void 0 === t && (t = l), e(t + r.url, r.options).then(function (e) {
                    if (e.status >= 200 && e.status < 300)return e.json();
                    throw e
                })
            }
        }, registerMobileDevice: function (e, n) {
            var r = t.MobileApiFetchParamCreator.registerMobileDevice(e, n);
            return function (e, t) {
                return void 0 === e && (e = o), void 0 === t && (t = l), e(t + r.url, r.options).then(function (e) {
                    if (e.status >= 200 && e.status < 300)return e;
                    throw e
                })
            }
        }, thirdPartyAppLookup: function (e, n) {
            var r = t.MobileApiFetchParamCreator.thirdPartyAppLookup(e, n);
            return function (e, t) {
                return void 0 === e && (e = o), void 0 === t && (t = l), e(t + r.url, r.options).then(function (e) {
                    if (e.status >= 200 && e.status < 300)return e.json();
                    throw e
                })
            }
        }, updateAppAssociations: function (e, n) {
            var r = t.MobileApiFetchParamCreator.updateAppAssociations(e, n);
            return function (e, t) {
                return void 0 === e && (e = o), void 0 === t && (t = l), e(t + r.url, r.options).then(function (e) {
                    if (e.status >= 200 && e.status < 300)return e.json();
                    throw e
                })
            }
        }, updateDeeplinkApp: function (e, n) {
            var r = t.MobileApiFetchParamCreator.updateDeeplinkApp(e, n);
            return function (e, t) {
                return void 0 === e && (e = o), void 0 === t && (t = l), e(t + r.url, r.options).then(function (e) {
                    if (e.status >= 200 && e.status < 300)return e.json();
                    throw e
                })
            }
        }, updateDeeplinkRule: function (e, n) {
            var r = t.MobileApiFetchParamCreator.updateDeeplinkRule(e, n);
            return function (e, t) {
                return void 0 === e && (e = o), void 0 === t && (t = l), e(t + r.url, r.options).then(function (e) {
                    if (e.status >= 200 && e.status < 300)return e.json();
                    throw e
                })
            }
        }
    };
    var v = function (e) {
        function n() {
            return null !== e && e.apply(this, arguments) || this
        }

        return r(n, e), n.prototype.createDeeplinkApp = function (e, n) {
            return t.MobileApiFp.createDeeplinkApp(e, n)(this.fetch, this.basePath)
        }, n.prototype.createDeeplinkRule = function (e, n) {
            return t.MobileApiFp.createDeeplinkRule(e, n)(this.fetch, this.basePath)
        }, n.prototype.deactivateDeeplinkApp = function (e, n) {
            return t.MobileApiFp.deactivateDeeplinkApp(e, n)(this.fetch, this.basePath)
        }, n.prototype.deferredDeeplinksLookup = function (e, n) {
            return t.MobileApiFp.deferredDeeplinksLookup(e, n)(this.fetch, this.basePath)
        }, n.prototype.deleteDeeplinkRule = function (e, n) {
            return t.MobileApiFp.deleteDeeplinkRule(e, n)(this.fetch, this.basePath)
        }, n.prototype.getAppAssociations = function (e, n) {
            return t.MobileApiFp.getAppAssociations(e, n)(this.fetch, this.basePath)
        }, n.prototype.getDeeplinkApp = function (e, n) {
            return t.MobileApiFp.getDeeplinkApp(e, n)(this.fetch, this.basePath)
        }, n.prototype.getDeeplinkApps = function (e, n) {
            return t.MobileApiFp.getDeeplinkApps(e, n)(this.fetch, this.basePath)
        }, n.prototype.getDeeplinkMetricsRollup = function (e, n) {
            return t.MobileApiFp.getDeeplinkMetricsRollup(e, n)(this.fetch, this.basePath)
        }, n.prototype.getDeeplinkRules = function (e, n) {
            return t.MobileApiFp.getDeeplinkRules(e, n)(this.fetch, this.basePath)
        }, n.prototype.registerMobileDevice = function (e, n) {
            return t.MobileApiFp.registerMobileDevice(e, n)(this.fetch, this.basePath)
        }, n.prototype.thirdPartyAppLookup = function (e, n) {
            return t.MobileApiFp.thirdPartyAppLookup(e, n)(this.fetch, this.basePath)
        }, n.prototype.updateAppAssociations = function (e, n) {
            return t.MobileApiFp.updateAppAssociations(e, n)(this.fetch, this.basePath)
        }, n.prototype.updateDeeplinkApp = function (e, n) {
            return t.MobileApiFp.updateDeeplinkApp(e, n)(this.fetch, this.basePath)
        }, n.prototype.updateDeeplinkRule = function (e, n) {
            return t.MobileApiFp.updateDeeplinkRule(e, n)(this.fetch, this.basePath)
        }, n
    }(c);
    t.MobileApi = v, t.MobileApiFactory = function (e, n) {
        return {
            createDeeplinkApp: function (r, i) {
                return t.MobileApiFp.createDeeplinkApp(r, i)(e, n)
            }, createDeeplinkRule: function (r, i) {
                return t.MobileApiFp.createDeeplinkRule(r, i)(e, n)
            }, deactivateDeeplinkApp: function (r, i) {
                return t.MobileApiFp.deactivateDeeplinkApp(r, i)(e, n)
            }, deferredDeeplinksLookup: function (r, i) {
                return t.MobileApiFp.deferredDeeplinksLookup(r, i)(e, n)
            }, deleteDeeplinkRule: function (r, i) {
                return t.MobileApiFp.deleteDeeplinkRule(r, i)(e, n)
            }, getAppAssociations: function (r, i) {
                return t.MobileApiFp.getAppAssociations(r, i)(e, n)
            }, getDeeplinkApp: function (r, i) {
                return t.MobileApiFp.getDeeplinkApp(r, i)(e, n)
            }, getDeeplinkApps: function (r, i) {
                return t.MobileApiFp.getDeeplinkApps(r, i)(e, n)
            }, getDeeplinkMetricsRollup: function (r, i) {
                return t.MobileApiFp.getDeeplinkMetricsRollup(r, i)(e, n)
            }, getDeeplinkRules: function (r, i) {
                return t.MobileApiFp.getDeeplinkRules(r, i)(e, n)
            }, registerMobileDevice: function (r, i) {
                return t.MobileApiFp.registerMobileDevice(r, i)(e, n)
            }, thirdPartyAppLookup: function (r, i) {
                return t.MobileApiFp.thirdPartyAppLookup(r, i)(e, n)
            }, updateAppAssociations: function (r, i) {
                return t.MobileApiFp.updateAppAssociations(r, i)(e, n)
            }, updateDeeplinkApp: function (r, i) {
                return t.MobileApiFp.updateDeeplinkApp(r, i)(e, n)
            }, updateDeeplinkRule: function (r, i) {
                return t.MobileApiFp.updateDeeplinkRule(r, i)(e, n)
            }
        }
    }, t.NetworkDomainsApiFetchParamCreator = {
        createNetworkDomain: function (e, t) {
            if (null == e.createNetworkDomainBody)throw new Error("Missing required parameter createNetworkDomainBody when calling createNetworkDomain");
            var n = a.parse("/network_domains", !0), r = s({}, {method: "POST"}, t), i = {};
            return i = {"Content-Type": "application/json"}, e.createNetworkDomainBody && (r.body = JSON.stringify(e.createNetworkDomainBody || {})), i && (r.headers = i), {
                url: a.format(n),
                options: r
            }
        }, deleteNetworkDomain: function (e, t) {
            if (null == e.networkDomainGUID)throw new Error("Missing required parameter networkDomainGUID when calling deleteNetworkDomain");
            var n = "/network_domains/{networkDomainGUID}".replace("{networkDomainGUID}", "" + e.networkDomainGUID), r = a.parse(n, !0), i = s({}, {method: "DELETE"}, t), o = {};
            return o && (i.headers = o), {url: a.format(r), options: i}
        }, getNetworkDomains: function (e, t) {
            var n = a.parse("/network_domains", !0);
            n.query = s({}, n.query, {brand_guid: e.brandGuid, organization_guid: e.organizationGuid});
            var r = s({}, {method: "GET"}, t), i = {};
            return i && (r.headers = i), {url: a.format(n), options: r}
        }
    }, t.NetworkDomainsApiFp = {
        createNetworkDomain: function (e, n) {
            var r = t.NetworkDomainsApiFetchParamCreator.createNetworkDomain(e, n);
            return function (e, t) {
                return void 0 === e && (e = o), void 0 === t && (t = l), e(t + r.url, r.options).then(function (e) {
                    if (e.status >= 200 && e.status < 300)return e.json();
                    throw e
                })
            }
        }, deleteNetworkDomain: function (e, n) {
            var r = t.NetworkDomainsApiFetchParamCreator.deleteNetworkDomain(e, n);
            return function (e, t) {
                return void 0 === e && (e = o), void 0 === t && (t = l), e(t + r.url, r.options).then(function (e) {
                    if (e.status >= 200 && e.status < 300)return e;
                    throw e
                })
            }
        }, getNetworkDomains: function (e, n) {
            var r = t.NetworkDomainsApiFetchParamCreator.getNetworkDomains(e, n);
            return function (e, t) {
                return void 0 === e && (e = o), void 0 === t && (t = l), e(t + r.url, r.options).then(function (e) {
                    if (e.status >= 200 && e.status < 300)return e.json();
                    throw e
                })
            }
        }
    };
    var k = function (e) {
        function n() {
            return null !== e && e.apply(this, arguments) || this
        }

        return r(n, e), n.prototype.createNetworkDomain = function (e, n) {
            return t.NetworkDomainsApiFp.createNetworkDomain(e, n)(this.fetch, this.basePath)
        }, n.prototype.deleteNetworkDomain = function (e, n) {
            return t.NetworkDomainsApiFp.deleteNetworkDomain(e, n)(this.fetch, this.basePath)
        }, n.prototype.getNetworkDomains = function (e, n) {
            return t.NetworkDomainsApiFp.getNetworkDomains(e, n)(this.fetch, this.basePath)
        }, n
    }(c);
    t.NetworkDomainsApi = k, t.NetworkDomainsApiFactory = function (e, n) {
        return {
            createNetworkDomain: function (r, i) {
                return t.NetworkDomainsApiFp.createNetworkDomain(r, i)(e, n)
            }, deleteNetworkDomain: function (r, i) {
                return t.NetworkDomainsApiFp.deleteNetworkDomain(r, i)(e, n)
            }, getNetworkDomains: function (r, i) {
                return t.NetworkDomainsApiFp.getNetworkDomains(r, i)(e, n)
            }
        }
    }, t.OrganizationsApiFetchParamCreator = {
        addBSD: function (e, t) {
            if (null == e.organizationGUID)throw new Error("Missing required parameter organizationGUID when calling addBSD");
            if (null == e.bsd)throw new Error("Missing required parameter bsd when calling addBSD");
            var n = "/organizations/{organizationGUID}/bsds/{bsd}".replace("{organizationGUID}", "" + e.organizationGUID).replace("{bsd}", "" + e.bsd), r = a.parse(n, !0), i = s({}, {method: "POST"}, t), o = {};
            return o && (i.headers = o), {url: a.format(r), options: i}
        }, addUserWithRoleToOrganization: function (e, t) {
            if (null == e.login)throw new Error("Missing required parameter login when calling addUserWithRoleToOrganization");
            if (null == e.organizationGUID)throw new Error("Missing required parameter organizationGUID when calling addUserWithRoleToOrganization");
            if (null == e.roleName)throw new Error("Missing required parameter roleName when calling addUserWithRoleToOrganization");
            var n = "/organizations/{organizationGUID}/users/{login}/roles/{roleName}".replace("{login}", "" + e.login).replace("{organizationGUID}", "" + e.organizationGUID).replace("{roleName}", "" + e.roleName), r = a.parse(n, !0), i = s({}, {method: "POST"}, t), o = {};
            return o && (i.headers = o), {url: a.format(r), options: i}
        }, createBrand: function (e, t) {
            if (null == e.organizationGUID)throw new Error("Missing required parameter organizationGUID when calling createBrand");
            if (null == e.createBrandBody)throw new Error("Missing required parameter createBrandBody when calling createBrand");
            var n = "/organizations/{organizationGUID}/brands".replace("{organizationGUID}", "" + e.organizationGUID), r = a.parse(n, !0), i = s({}, {method: "POST"}, t), o = {};
            return o = {"Content-Type": "application/json"}, e.createBrandBody && (i.body = JSON.stringify(e.createBrandBody || {})), o && (i.headers = o), {
                url: a.format(r),
                options: i
            }
        }, createOrganization: function (e, t) {
            if (null == e.createOrganizationBody)throw new Error("Missing required parameter createOrganizationBody when calling createOrganization");
            var n = a.parse("/organizations", !0), r = s({}, {method: "POST"}, t), i = {};
            return i = {"Content-Type": "application/json"}, e.createOrganizationBody && (r.body = JSON.stringify(e.createOrganizationBody || {})), i && (r.headers = i), {
                url: a.format(n),
                options: r
            }
        }, editBrand: function (e, t) {
            if (null == e.brandGUID)throw new Error("Missing required parameter brandGUID when calling editBrand");
            if (null == e.editBrandBody)throw new Error("Missing required parameter editBrandBody when calling editBrand");
            var n = "/brands/{brandGUID}".replace("{brandGUID}", "" + e.brandGUID), r = a.parse(n, !0), i = s({}, {method: "PUT"}, t), o = {};
            return o = {"Content-Type": "application/json"}, e.editBrandBody && (i.body = JSON.stringify(e.editBrandBody || {})), o && (i.headers = o), {
                url: a.format(r),
                options: i
            }
        }, editOrganization: function (e, t) {
            if (null == e.organizationGUID)throw new Error("Missing required parameter organizationGUID when calling editOrganization");
            if (null == e.editOrganizationBody)throw new Error("Missing required parameter editOrganizationBody when calling editOrganization");
            var n = "/organizations/{organizationGUID}".replace("{organizationGUID}", "" + e.organizationGUID), r = a.parse(n, !0), i = s({}, {method: "PUT"}, t), o = {};
            return o = {"Content-Type": "application/json"}, e.editOrganizationBody && (i.body = JSON.stringify(e.editOrganizationBody || {})), o && (i.headers = o), {
                url: a.format(r),
                options: i
            }
        }, editUserRoleInOrganization: function (e, t) {
            if (null == e.login)throw new Error("Missing required parameter login when calling editUserRoleInOrganization");
            if (null == e.organizationGUID)throw new Error("Missing required parameter organizationGUID when calling editUserRoleInOrganization");
            if (null == e.roleName)throw new Error("Missing required parameter roleName when calling editUserRoleInOrganization");
            if (null == e.editUserRoleBody)throw new Error("Missing required parameter editUserRoleBody when calling editUserRoleInOrganization");
            var n = "/organizations/{organizationGUID}/users/{login}/roles/{roleName}".replace("{login}", "" + e.login).replace("{organizationGUID}", "" + e.organizationGUID).replace("{roleName}", "" + e.roleName), r = a.parse(n, !0), i = s({}, {method: "PUT"}, t), o = {};
            return o = {"Content-Type": "application/json"}, e.editUserRoleBody && (i.body = JSON.stringify(e.editUserRoleBody || {})), o && (i.headers = o), {
                url: a.format(r),
                options: i
            }
        }, getAudienceCount: function (e, t) {
            if (null == e.organizationGUID)throw new Error("Missing required parameter organizationGUID when calling getAudienceCount");
            var n = "/organizations/{organizationGUID}/total_uniques".replace("{organizationGUID}", "" + e.organizationGUID), r = a.parse(n, !0);
            r.query = s({}, r.query, {unit: e.unit, units: e.units, unit_ref_ts: e.unitRefTs});
            var i = s({}, {method: "GET"}, t), o = {};
            return o && (i.headers = o), {url: a.format(r), options: i}
        }, getBSD: function (e, t) {
            if (null == e.organizationGUID)throw new Error("Missing required parameter organizationGUID when calling getBSD");
            if (null == e.bsd)throw new Error("Missing required parameter bsd when calling getBSD");
            var n = "/organizations/{organizationGUID}/bsds/{bsd}".replace("{organizationGUID}", "" + e.organizationGUID).replace("{bsd}", "" + e.bsd), r = a.parse(n, !0), i = s({}, {method: "GET"}, t), o = {};
            return o && (i.headers = o), {url: a.format(r), options: i}
        }, getBSDs: function (e, t) {
            if (null == e.organizationGUID)throw new Error("Missing required parameter organizationGUID when calling getBSDs");
            var n = "/organizations/{organizationGUID}/bsds".replace("{organizationGUID}", "" + e.organizationGUID), r = a.parse(n, !0), i = s({}, {method: "GET"}, t), o = {};
            return o && (i.headers = o), {url: a.format(r), options: i}
        }, getBrand: function (e, t) {
            if (null == e.brandGUID)throw new Error("Missing required parameter brandGUID when calling getBrand");
            var n = "/brands/{brandGUID}".replace("{brandGUID}", "" + e.brandGUID), r = a.parse(n, !0), i = s({}, {method: "GET"}, t), o = {};
            return o && (i.headers = o), {url: a.format(r), options: i}
        }, getClicks: function (e, t) {
            if (null == e.organizationGUID)throw new Error("Missing required parameter organizationGUID when calling getClicks");
            var n = "/organizations/{organizationGUID}/total_clicks".replace("{organizationGUID}", "" + e.organizationGUID), r = a.parse(n, !0);
            r.query = s({}, r.query, {unit: e.unit, units: e.units, unit_ref_ts: e.unitRefTs});
            var i = s({}, {method: "GET"}, t), o = {};
            return o && (i.headers = o), {url: a.format(r), options: i}
        }, getClicksPerUnique: function (e, t) {
            if (null == e.organizationGUID)throw new Error("Missing required parameter organizationGUID when calling getClicksPerUnique");
            var n = "/organizations/{organizationGUID}/clicks_per_unique".replace("{organizationGUID}", "" + e.organizationGUID), r = a.parse(n, !0);
            r.query = s({}, r.query, {unit: e.unit, units: e.units, unit_ref_ts: e.unitRefTs});
            var i = s({}, {method: "GET"}, t), o = {};
            return o && (i.headers = o), {url: a.format(r), options: i}
        }, getLimits: function (e, t) {
            if (null == e.organizationGUID)throw new Error("Missing required parameter organizationGUID when calling getLimits");
            var n = "/organizations/{organizationGUID}/limits".replace("{organizationGUID}", "" + e.organizationGUID), r = a.parse(n, !0), i = s({}, {method: "GET"}, t), o = {};
            return o && (i.headers = o), {url: a.format(r), options: i}
        }, getOrganization: function (e, t) {
            if (null == e.organizationGUID)throw new Error("Missing required parameter organizationGUID when calling getOrganization");
            var n = "/organizations/{organizationGUID}".replace("{organizationGUID}", "" + e.organizationGUID), r = a.parse(n, !0), i = s({}, {method: "GET"}, t), o = {};
            return o && (i.headers = o), {url: a.format(r), options: i}
        }, getOrganizationBitlinksCount: function (e, t) {
            if (null == e.organizationGUID)throw new Error("Missing required parameter organizationGUID when calling getOrganizationBitlinksCount");
            var n = "/organizations/{organizationGUID}/bitlinks_count".replace("{organizationGUID}", "" + e.organizationGUID), r = a.parse(n, !0);
            r.query = s({}, r.query, {unit: e.unit, units: e.units, unit_ref_ts: e.unitRefTs});
            var i = s({}, {method: "GET"}, t), o = {};
            return o && (i.headers = o), {url: a.format(r), options: i}
        }, getOrganizationEngagementRatioDayOfWeek: function (e, t) {
            if (null == e.organizationGUID)throw new Error("Missing required parameter organizationGUID when calling getOrganizationEngagementRatioDayOfWeek");
            if (null == e.vertical)throw new Error("Missing required parameter vertical when calling getOrganizationEngagementRatioDayOfWeek");
            var n = "/organizations/{organizationGUID}/engagement_ratio/day_of_week".replace("{organizationGUID}", "" + e.organizationGUID), r = a.parse(n, !0);
            r.query = s({}, r.query, {unit: e.unit, units: e.units, unit_ref_ts: e.unitRefTs, vertical: e.vertical});
            var i = s({}, {method: "GET"}, t), o = {};
            return o && (i.headers = o), {url: a.format(r), options: i}
        }, getOrganizationEngagementRatioDevices: function (e, t) {
            if (null == e.organizationGUID)throw new Error("Missing required parameter organizationGUID when calling getOrganizationEngagementRatioDevices");
            if (null == e.vertical)throw new Error("Missing required parameter vertical when calling getOrganizationEngagementRatioDevices");
            var n = "/organizations/{organizationGUID}/engagement_ratio/devices".replace("{organizationGUID}", "" + e.organizationGUID), r = a.parse(n, !0);
            r.query = s({}, r.query, {unit: e.unit, units: e.units, unit_ref_ts: e.unitRefTs, vertical: e.vertical});
            var i = s({}, {method: "GET"}, t), o = {};
            return o && (i.headers = o), {url: a.format(r), options: i}
        }, getOrganizationEngagementRatioHourOfDay: function (e, t) {
            if (null == e.organizationGUID)throw new Error("Missing required parameter organizationGUID when calling getOrganizationEngagementRatioHourOfDay");
            if (null == e.vertical)throw new Error("Missing required parameter vertical when calling getOrganizationEngagementRatioHourOfDay");
            var n = "/organizations/{organizationGUID}/engagement_ratio/hour_of_day".replace("{organizationGUID}", "" + e.organizationGUID), r = a.parse(n, !0);
            r.query = s({}, r.query, {unit: e.unit, units: e.units, unit_ref_ts: e.unitRefTs, vertical: e.vertical});
            var i = s({}, {method: "GET"}, t), o = {};
            return o && (i.headers = o), {url: a.format(r), options: i}
        }, getOrganizationEngagementRatioOS: function (e, t) {
            if (null == e.organizationGUID)throw new Error("Missing required parameter organizationGUID when calling getOrganizationEngagementRatioOS");
            if (null == e.vertical)throw new Error("Missing required parameter vertical when calling getOrganizationEngagementRatioOS");
            var n = "/organizations/{organizationGUID}/engagement_ratio/os".replace("{organizationGUID}", "" + e.organizationGUID), r = a.parse(n, !0);
            r.query = s({}, r.query, {unit: e.unit, units: e.units, unit_ref_ts: e.unitRefTs, vertical: e.vertical});
            var i = s({}, {method: "GET"}, t), o = {};
            return o && (i.headers = o), {url: a.format(r), options: i}
        }, getOrganizationEngagementRatioReferrers: function (e, t) {
            if (null == e.organizationGUID)throw new Error("Missing required parameter organizationGUID when calling getOrganizationEngagementRatioReferrers");
            if (null == e.vertical)throw new Error("Missing required parameter vertical when calling getOrganizationEngagementRatioReferrers");
            var n = "/organizations/{organizationGUID}/engagement_ratio/referrers".replace("{organizationGUID}", "" + e.organizationGUID), r = a.parse(n, !0);
            r.query = s({}, r.query, {unit: e.unit, units: e.units, unit_ref_ts: e.unitRefTs, vertical: e.vertical});
            var i = s({}, {method: "GET"}, t), o = {};
            return o && (i.headers = o), {url: a.format(r), options: i}
        }, getVerticals: function (e) {
            var t = a.parse("/verticals", !0), n = s({}, {method: "GET"}, e), r = {};
            return r && (n.headers = r), {url: a.format(t), options: n}
        }, removeBSD: function (e, t) {
            if (null == e.organizationGUID)throw new Error("Missing required parameter organizationGUID when calling removeBSD");
            if (null == e.bsd)throw new Error("Missing required parameter bsd when calling removeBSD");
            var n = "/organizations/{organizationGUID}/bsds/{bsd}".replace("{organizationGUID}", "" + e.organizationGUID).replace("{bsd}", "" + e.bsd), r = a.parse(n, !0), i = s({}, {method: "DELETE"}, t), o = {};
            return o && (i.headers = o), {url: a.format(r), options: i}
        }, removeBrand: function (e, t) {
            if (null == e.brandGUID)throw new Error("Missing required parameter brandGUID when calling removeBrand");
            var n = "/brands/{brandGUID}".replace("{brandGUID}", "" + e.brandGUID), r = a.parse(n, !0), i = s({}, {method: "DELETE"}, t), o = {};
            return o && (i.headers = o), {url: a.format(r), options: i}
        }, removeOrganization: function (e, t) {
            if (null == e.organizationGUID)throw new Error("Missing required parameter organizationGUID when calling removeOrganization");
            var n = "/organizations/{organizationGUID}".replace("{organizationGUID}", "" + e.organizationGUID), r = a.parse(n, !0), i = s({}, {method: "DELETE"}, t), o = {};
            return o && (i.headers = o), {url: a.format(r), options: i}
        }, removeUserWithRoleFromOrganization: function (e, t) {
            if (null == e.login)throw new Error("Missing required parameter login when calling removeUserWithRoleFromOrganization");
            if (null == e.organizationGUID)throw new Error("Missing required parameter organizationGUID when calling removeUserWithRoleFromOrganization");
            if (null == e.roleName)throw new Error("Missing required parameter roleName when calling removeUserWithRoleFromOrganization");
            var n = "/organizations/{organizationGUID}/users/{login}/roles/{roleName}".replace("{login}", "" + e.login).replace("{organizationGUID}", "" + e.organizationGUID).replace("{roleName}", "" + e.roleName), r = a.parse(n, !0), i = s({}, {method: "DELETE"}, t), o = {};
            return o && (i.headers = o), {url: a.format(r), options: i}
        }, updateBSD: function (e, t) {
            if (null == e.organizationGUID)throw new Error("Missing required parameter organizationGUID when calling updateBSD");
            if (null == e.bsd)throw new Error("Missing required parameter bsd when calling updateBSD");
            if (null == e.updateBSDBody)throw new Error("Missing required parameter updateBSDBody when calling updateBSD");
            var n = "/organizations/{organizationGUID}/bsds/{bsd}".replace("{organizationGUID}", "" + e.organizationGUID).replace("{bsd}", "" + e.bsd), r = a.parse(n, !0), i = s({}, {method: "PUT"}, t), o = {};
            return o = {"Content-Type": "application/json"}, e.updateBSDBody && (i.body = JSON.stringify(e.updateBSDBody || {})), o && (i.headers = o), {
                url: a.format(r),
                options: i
            }
        }, validateBSD: function (e, t) {
            if (null == e.organizationGUID)throw new Error("Missing required parameter organizationGUID when calling validateBSD");
            if (null == e.bsd)throw new Error("Missing required parameter bsd when calling validateBSD");
            var n = "/organizations/{organizationGUID}/bsds/{bsd}/validate".replace("{organizationGUID}", "" + e.organizationGUID).replace("{bsd}", "" + e.bsd), r = a.parse(n, !0), i = s({}, {method: "POST"}, t), o = {};
            return o && (i.headers = o), {url: a.format(r), options: i}
        }
    }, t.OrganizationsApiFp = {
        addBSD: function (e, n) {
            var r = t.OrganizationsApiFetchParamCreator.addBSD(e, n);
            return function (e, t) {
                return void 0 === e && (e = o), void 0 === t && (t = l), e(t + r.url, r.options).then(function (e) {
                    if (e.status >= 200 && e.status < 300)return e.json();
                    throw e
                })
            }
        }, addUserWithRoleToOrganization: function (e, n) {
            var r = t.OrganizationsApiFetchParamCreator.addUserWithRoleToOrganization(e, n);
            return function (e, t) {
                return void 0 === e && (e = o), void 0 === t && (t = l), e(t + r.url, r.options).then(function (e) {
                    if (e.status >= 200 && e.status < 300)return e.json();
                    throw e
                })
            }
        }, createBrand: function (e, n) {
            var r = t.OrganizationsApiFetchParamCreator.createBrand(e, n);
            return function (e, t) {
                return void 0 === e && (e = o), void 0 === t && (t = l), e(t + r.url, r.options).then(function (e) {
                    if (e.status >= 200 && e.status < 300)return e.json();
                    throw e
                })
            }
        }, createOrganization: function (e, n) {
            var r = t.OrganizationsApiFetchParamCreator.createOrganization(e, n);
            return function (e, t) {
                return void 0 === e && (e = o), void 0 === t && (t = l), e(t + r.url, r.options).then(function (e) {
                    if (e.status >= 200 && e.status < 300)return e.json();
                    throw e
                })
            }
        }, editBrand: function (e, n) {
            var r = t.OrganizationsApiFetchParamCreator.editBrand(e, n);
            return function (e, t) {
                return void 0 === e && (e = o), void 0 === t && (t = l), e(t + r.url, r.options).then(function (e) {
                    if (e.status >= 200 && e.status < 300)return e.json();
                    throw e
                })
            }
        }, editOrganization: function (e, n) {
            var r = t.OrganizationsApiFetchParamCreator.editOrganization(e, n);
            return function (e, t) {
                return void 0 === e && (e = o), void 0 === t && (t = l), e(t + r.url, r.options).then(function (e) {
                    if (e.status >= 200 && e.status < 300)return e.json();
                    throw e
                })
            }
        }, editUserRoleInOrganization: function (e, n) {
            var r = t.OrganizationsApiFetchParamCreator.editUserRoleInOrganization(e, n);
            return function (e, t) {
                return void 0 === e && (e = o), void 0 === t && (t = l), e(t + r.url, r.options).then(function (e) {
                    if (e.status >= 200 && e.status < 300)return e.json();
                    throw e
                })
            }
        }, getAudienceCount: function (e, n) {
            var r = t.OrganizationsApiFetchParamCreator.getAudienceCount(e, n);
            return function (e, t) {
                return void 0 === e && (e = o), void 0 === t && (t = l), e(t + r.url, r.options).then(function (e) {
                    if (e.status >= 200 && e.status < 300)return e.json();
                    throw e
                })
            }
        }, getBSD: function (e, n) {
            var r = t.OrganizationsApiFetchParamCreator.getBSD(e, n);
            return function (e, t) {
                return void 0 === e && (e = o), void 0 === t && (t = l), e(t + r.url, r.options).then(function (e) {
                    if (e.status >= 200 && e.status < 300)return e.json();
                    throw e
                })
            }
        }, getBSDs: function (e, n) {
            var r = t.OrganizationsApiFetchParamCreator.getBSDs(e, n);
            return function (e, t) {
                return void 0 === e && (e = o), void 0 === t && (t = l), e(t + r.url, r.options).then(function (e) {
                    if (e.status >= 200 && e.status < 300)return e.json();
                    throw e
                })
            }
        }, getBrand: function (e, n) {
            var r = t.OrganizationsApiFetchParamCreator.getBrand(e, n);
            return function (e, t) {
                return void 0 === e && (e = o), void 0 === t && (t = l), e(t + r.url, r.options).then(function (e) {
                    if (e.status >= 200 && e.status < 300)return e.json();
                    throw e
                })
            }
        }, getClicks: function (e, n) {
            var r = t.OrganizationsApiFetchParamCreator.getClicks(e, n);
            return function (e, t) {
                return void 0 === e && (e = o), void 0 === t && (t = l), e(t + r.url, r.options).then(function (e) {
                    if (e.status >= 200 && e.status < 300)return e.json();
                    throw e
                })
            }
        }, getClicksPerUnique: function (e, n) {
            var r = t.OrganizationsApiFetchParamCreator.getClicksPerUnique(e, n);
            return function (e, t) {
                return void 0 === e && (e = o), void 0 === t && (t = l), e(t + r.url, r.options).then(function (e) {
                    if (e.status >= 200 && e.status < 300)return e.json();
                    throw e
                })
            }
        }, getLimits: function (e, n) {
            var r = t.OrganizationsApiFetchParamCreator.getLimits(e, n);
            return function (e, t) {
                return void 0 === e && (e = o), void 0 === t && (t = l), e(t + r.url, r.options).then(function (e) {
                    if (e.status >= 200 && e.status < 300)return e.json();
                    throw e
                })
            }
        }, getOrganization: function (e, n) {
            var r = t.OrganizationsApiFetchParamCreator.getOrganization(e, n);
            return function (e, t) {
                return void 0 === e && (e = o), void 0 === t && (t = l), e(t + r.url, r.options).then(function (e) {
                    if (e.status >= 200 && e.status < 300)return e.json();
                    throw e
                })
            }
        }, getOrganizationBitlinksCount: function (e, n) {
            var r = t.OrganizationsApiFetchParamCreator.getOrganizationBitlinksCount(e, n);
            return function (e, t) {
                return void 0 === e && (e = o), void 0 === t && (t = l), e(t + r.url, r.options).then(function (e) {
                    if (e.status >= 200 && e.status < 300)return e.json();
                    throw e
                })
            }
        }, getOrganizationEngagementRatioDayOfWeek: function (e, n) {
            var r = t.OrganizationsApiFetchParamCreator.getOrganizationEngagementRatioDayOfWeek(e, n);
            return function (e, t) {
                return void 0 === e && (e = o), void 0 === t && (t = l), e(t + r.url, r.options).then(function (e) {
                    if (e.status >= 200 && e.status < 300)return e.json();
                    throw e
                })
            }
        }, getOrganizationEngagementRatioDevices: function (e, n) {
            var r = t.OrganizationsApiFetchParamCreator.getOrganizationEngagementRatioDevices(e, n);
            return function (e, t) {
                return void 0 === e && (e = o), void 0 === t && (t = l), e(t + r.url, r.options).then(function (e) {
                    if (e.status >= 200 && e.status < 300)return e.json();
                    throw e
                })
            }
        }, getOrganizationEngagementRatioHourOfDay: function (e, n) {
            var r = t.OrganizationsApiFetchParamCreator.getOrganizationEngagementRatioHourOfDay(e, n);
            return function (e, t) {
                return void 0 === e && (e = o), void 0 === t && (t = l), e(t + r.url, r.options).then(function (e) {
                    if (e.status >= 200 && e.status < 300)return e.json();
                    throw e
                })
            }
        }, getOrganizationEngagementRatioOS: function (e, n) {
            var r = t.OrganizationsApiFetchParamCreator.getOrganizationEngagementRatioOS(e, n);
            return function (e, t) {
                return void 0 === e && (e = o), void 0 === t && (t = l), e(t + r.url, r.options).then(function (e) {
                    if (e.status >= 200 && e.status < 300)return e.json();
                    throw e
                })
            }
        }, getOrganizationEngagementRatioReferrers: function (e, n) {
            var r = t.OrganizationsApiFetchParamCreator.getOrganizationEngagementRatioReferrers(e, n);
            return function (e, t) {
                return void 0 === e && (e = o), void 0 === t && (t = l), e(t + r.url, r.options).then(function (e) {
                    if (e.status >= 200 && e.status < 300)return e.json();
                    throw e
                })
            }
        }, getVerticals: function (e) {
            var n = t.OrganizationsApiFetchParamCreator.getVerticals(e);
            return function (e, t) {
                return void 0 === e && (e = o), void 0 === t && (t = l), e(t + n.url, n.options).then(function (e) {
                    if (e.status >= 200 && e.status < 300)return e.json();
                    throw e
                })
            }
        }, removeBSD: function (e, n) {
            var r = t.OrganizationsApiFetchParamCreator.removeBSD(e, n);
            return function (e, t) {
                return void 0 === e && (e = o), void 0 === t && (t = l), e(t + r.url, r.options).then(function (e) {
                    if (e.status >= 200 && e.status < 300)return e;
                    throw e
                })
            }
        }, removeBrand: function (e, n) {
            var r = t.OrganizationsApiFetchParamCreator.removeBrand(e, n);
            return function (e, t) {
                return void 0 === e && (e = o), void 0 === t && (t = l), e(t + r.url, r.options).then(function (e) {
                    if (e.status >= 200 && e.status < 300)return e;
                    throw e
                })
            }
        }, removeOrganization: function (e, n) {
            var r = t.OrganizationsApiFetchParamCreator.removeOrganization(e, n);
            return function (e, t) {
                return void 0 === e && (e = o), void 0 === t && (t = l), e(t + r.url, r.options).then(function (e) {
                    if (e.status >= 200 && e.status < 300)return e;
                    throw e
                })
            }
        }, removeUserWithRoleFromOrganization: function (e, n) {
            var r = t.OrganizationsApiFetchParamCreator.removeUserWithRoleFromOrganization(e, n);
            return function (e, t) {
                return void 0 === e && (e = o), void 0 === t && (t = l), e(t + r.url, r.options).then(function (e) {
                    if (e.status >= 200 && e.status < 300)return e;
                    throw e
                })
            }
        }, updateBSD: function (e, n) {
            var r = t.OrganizationsApiFetchParamCreator.updateBSD(e, n);
            return function (e, t) {
                return void 0 === e && (e = o), void 0 === t && (t = l), e(t + r.url, r.options).then(function (e) {
                    if (e.status >= 200 && e.status < 300)return e.json();
                    throw e
                })
            }
        }, validateBSD: function (e, n) {
            var r = t.OrganizationsApiFetchParamCreator.validateBSD(e, n);
            return function (e, t) {
                return void 0 === e && (e = o), void 0 === t && (t = l), e(t + r.url, r.options).then(function (e) {
                    if (e.status >= 200 && e.status < 300)return e.json();
                    throw e
                })
            }
        }
    };
    var b = function (e) {
        function n() {
            return null !== e && e.apply(this, arguments) || this
        }

        return r(n, e), n.prototype.addBSD = function (e, n) {
            return t.OrganizationsApiFp.addBSD(e, n)(this.fetch, this.basePath)
        }, n.prototype.addUserWithRoleToOrganization = function (e, n) {
            return t.OrganizationsApiFp.addUserWithRoleToOrganization(e, n)(this.fetch, this.basePath)
        }, n.prototype.createBrand = function (e, n) {
            return t.OrganizationsApiFp.createBrand(e, n)(this.fetch, this.basePath)
        }, n.prototype.createOrganization = function (e, n) {
            return t.OrganizationsApiFp.createOrganization(e, n)(this.fetch, this.basePath)
        }, n.prototype.editBrand = function (e, n) {
            return t.OrganizationsApiFp.editBrand(e, n)(this.fetch, this.basePath)
        }, n.prototype.editOrganization = function (e, n) {
            return t.OrganizationsApiFp.editOrganization(e, n)(this.fetch, this.basePath)
        }, n.prototype.editUserRoleInOrganization = function (e, n) {
            return t.OrganizationsApiFp.editUserRoleInOrganization(e, n)(this.fetch, this.basePath)
        }, n.prototype.getAudienceCount = function (e, n) {
            return t.OrganizationsApiFp.getAudienceCount(e, n)(this.fetch, this.basePath)
        }, n.prototype.getBSD = function (e, n) {
            return t.OrganizationsApiFp.getBSD(e, n)(this.fetch, this.basePath)
        }, n.prototype.getBSDs = function (e, n) {
            return t.OrganizationsApiFp.getBSDs(e, n)(this.fetch, this.basePath)
        }, n.prototype.getBrand = function (e, n) {
            return t.OrganizationsApiFp.getBrand(e, n)(this.fetch, this.basePath)
        }, n.prototype.getClicks = function (e, n) {
            return t.OrganizationsApiFp.getClicks(e, n)(this.fetch, this.basePath)
        }, n.prototype.getClicksPerUnique = function (e, n) {
            return t.OrganizationsApiFp.getClicksPerUnique(e, n)(this.fetch, this.basePath)
        }, n.prototype.getLimits = function (e, n) {
            return t.OrganizationsApiFp.getLimits(e, n)(this.fetch, this.basePath)
        }, n.prototype.getOrganization = function (e, n) {
            return t.OrganizationsApiFp.getOrganization(e, n)(this.fetch, this.basePath)
        }, n.prototype.getOrganizationBitlinksCount = function (e, n) {
            return t.OrganizationsApiFp.getOrganizationBitlinksCount(e, n)(this.fetch, this.basePath)
        }, n.prototype.getOrganizationEngagementRatioDayOfWeek = function (e, n) {
            return t.OrganizationsApiFp.getOrganizationEngagementRatioDayOfWeek(e, n)(this.fetch, this.basePath)
        }, n.prototype.getOrganizationEngagementRatioDevices = function (e, n) {
            return t.OrganizationsApiFp.getOrganizationEngagementRatioDevices(e, n)(this.fetch, this.basePath)
        }, n.prototype.getOrganizationEngagementRatioHourOfDay = function (e, n) {
            return t.OrganizationsApiFp.getOrganizationEngagementRatioHourOfDay(e, n)(this.fetch, this.basePath)
        }, n.prototype.getOrganizationEngagementRatioOS = function (e, n) {
            return t.OrganizationsApiFp.getOrganizationEngagementRatioOS(e, n)(this.fetch, this.basePath)
        }, n.prototype.getOrganizationEngagementRatioReferrers = function (e, n) {
            return t.OrganizationsApiFp.getOrganizationEngagementRatioReferrers(e, n)(this.fetch, this.basePath)
        }, n.prototype.getVerticals = function (e) {
            return t.OrganizationsApiFp.getVerticals(e)(this.fetch, this.basePath)
        }, n.prototype.removeBSD = function (e, n) {
            return t.OrganizationsApiFp.removeBSD(e, n)(this.fetch, this.basePath)
        }, n.prototype.removeBrand = function (e, n) {
            return t.OrganizationsApiFp.removeBrand(e, n)(this.fetch, this.basePath)
        }, n.prototype.removeOrganization = function (e, n) {
            return t.OrganizationsApiFp.removeOrganization(e, n)(this.fetch, this.basePath)
        }, n.prototype.removeUserWithRoleFromOrganization = function (e, n) {
            return t.OrganizationsApiFp.removeUserWithRoleFromOrganization(e, n)(this.fetch, this.basePath)
        }, n.prototype.updateBSD = function (e, n) {
            return t.OrganizationsApiFp.updateBSD(e, n)(this.fetch, this.basePath)
        }, n.prototype.validateBSD = function (e, n) {
            return t.OrganizationsApiFp.validateBSD(e, n)(this.fetch, this.basePath)
        }, n
    }(c);
    t.OrganizationsApi = b, t.OrganizationsApiFactory = function (e, n) {
        return {
            addBSD: function (r, i) {
                return t.OrganizationsApiFp.addBSD(r, i)(e, n)
            }, addUserWithRoleToOrganization: function (r, i) {
                return t.OrganizationsApiFp.addUserWithRoleToOrganization(r, i)(e, n)
            }, createBrand: function (r, i) {
                return t.OrganizationsApiFp.createBrand(r, i)(e, n)
            }, createOrganization: function (r, i) {
                return t.OrganizationsApiFp.createOrganization(r, i)(e, n)
            }, editBrand: function (r, i) {
                return t.OrganizationsApiFp.editBrand(r, i)(e, n)
            }, editOrganization: function (r, i) {
                return t.OrganizationsApiFp.editOrganization(r, i)(e, n)
            }, editUserRoleInOrganization: function (r, i) {
                return t.OrganizationsApiFp.editUserRoleInOrganization(r, i)(e, n)
            }, getAudienceCount: function (r, i) {
                return t.OrganizationsApiFp.getAudienceCount(r, i)(e, n)
            }, getBSD: function (r, i) {
                return t.OrganizationsApiFp.getBSD(r, i)(e, n)
            }, getBSDs: function (r, i) {
                return t.OrganizationsApiFp.getBSDs(r, i)(e, n)
            }, getBrand: function (r, i) {
                return t.OrganizationsApiFp.getBrand(r, i)(e, n)
            }, getClicks: function (r, i) {
                return t.OrganizationsApiFp.getClicks(r, i)(e, n)
            }, getClicksPerUnique: function (r, i) {
                return t.OrganizationsApiFp.getClicksPerUnique(r, i)(e, n)
            }, getLimits: function (r, i) {
                return t.OrganizationsApiFp.getLimits(r, i)(e, n)
            }, getOrganization: function (r, i) {
                return t.OrganizationsApiFp.getOrganization(r, i)(e, n)
            }, getOrganizationBitlinksCount: function (r, i) {
                return t.OrganizationsApiFp.getOrganizationBitlinksCount(r, i)(e, n)
            }, getOrganizationEngagementRatioDayOfWeek: function (r, i) {
                return t.OrganizationsApiFp.getOrganizationEngagementRatioDayOfWeek(r, i)(e, n)
            }, getOrganizationEngagementRatioDevices: function (r, i) {
                return t.OrganizationsApiFp.getOrganizationEngagementRatioDevices(r, i)(e, n)
            }, getOrganizationEngagementRatioHourOfDay: function (r, i) {
                return t.OrganizationsApiFp.getOrganizationEngagementRatioHourOfDay(r, i)(e, n)
            }, getOrganizationEngagementRatioOS: function (r, i) {
                return t.OrganizationsApiFp.getOrganizationEngagementRatioOS(r, i)(e, n)
            }, getOrganizationEngagementRatioReferrers: function (r, i) {
                return t.OrganizationsApiFp.getOrganizationEngagementRatioReferrers(r, i)(e, n)
            }, getVerticals: function (r) {
                return t.OrganizationsApiFp.getVerticals(r)(e, n)
            }, removeBSD: function (r, i) {
                return t.OrganizationsApiFp.removeBSD(r, i)(e, n)
            }, removeBrand: function (r, i) {
                return t.OrganizationsApiFp.removeBrand(r, i)(e, n)
            }, removeOrganization: function (r, i) {
                return t.OrganizationsApiFp.removeOrganization(r, i)(e, n)
            }, removeUserWithRoleFromOrganization: function (r, i) {
                return t.OrganizationsApiFp.removeUserWithRoleFromOrganization(r, i)(e, n)
            }, updateBSD: function (r, i) {
                return t.OrganizationsApiFp.updateBSD(r, i)(e, n)
            }, validateBSD: function (r, i) {
                return t.OrganizationsApiFp.validateBSD(r, i)(e, n)
            }
        }
    }, t.SdkApiFetchParamCreator = {
        deferredDeeplinksLookup: function (e, t) {
            if (null == e.deviceId)throw new Error("Missing required parameter deviceId when calling deferredDeeplinksLookup");
            if (null == e.deviceIdType)throw new Error("Missing required parameter deviceIdType when calling deferredDeeplinksLookup");
            if (null == e.appGuid)throw new Error("Missing required parameter appGuid when calling deferredDeeplinksLookup");
            var n = a.parse("/mobile/lookup", !0);
            n.query = s({}, n.query, {device_id: e.deviceId, device_id_type: e.deviceIdType, app_guid: e.appGuid});
            var r = s({}, {method: "GET"}, t), i = {};
            return i && (r.headers = i), {url: a.format(n), options: r}
        }, registerMobileDevice: function (e, t) {
            if (null == e.deviceId)throw new Error("Missing required parameter deviceId when calling registerMobileDevice");
            if (null == e.deviceIdType)throw new Error("Missing required parameter deviceIdType when calling registerMobileDevice");
            if (null == e.appGuid)throw new Error("Missing required parameter appGuid when calling registerMobileDevice");
            var n = a.parse("/mobile/register", !0);
            n.query = s({}, n.query, {
                device_id: e.deviceId,
                device_id_type: e.deviceIdType,
                app_guid: e.appGuid,
                dsos: e.dsos,
                dsosmaj: e.dsosmaj,
                dsosmin: e.dsosmin,
                dsm: e.dsm
            });
            var r = s({}, {method: "GET"}, t), i = {};
            return i && (r.headers = i), {url: a.format(n), options: r}
        }
    }, t.SdkApiFp = {
        deferredDeeplinksLookup: function (e, n) {
            var r = t.SdkApiFetchParamCreator.deferredDeeplinksLookup(e, n);
            return function (e, t) {
                return void 0 === e && (e = o), void 0 === t && (t = l), e(t + r.url, r.options).then(function (e) {
                    if (e.status >= 200 && e.status < 300)return e.json();
                    throw e
                })
            }
        }, registerMobileDevice: function (e, n) {
            var r = t.SdkApiFetchParamCreator.registerMobileDevice(e, n);
            return function (e, t) {
                return void 0 === e && (e = o), void 0 === t && (t = l), e(t + r.url, r.options).then(function (e) {
                    if (e.status >= 200 && e.status < 300)return e;
                    throw e
                })
            }
        }
    };
    var y = function (e) {
        function n() {
            return null !== e && e.apply(this, arguments) || this
        }

        return r(n, e), n.prototype.deferredDeeplinksLookup = function (e, n) {
            return t.SdkApiFp.deferredDeeplinksLookup(e, n)(this.fetch, this.basePath)
        }, n.prototype.registerMobileDevice = function (e, n) {
            return t.SdkApiFp.registerMobileDevice(e, n)(this.fetch, this.basePath)
        }, n
    }(c);
    t.SdkApi = y, t.SdkApiFactory = function (e, n) {
        return {
            deferredDeeplinksLookup: function (r, i) {
                return t.SdkApiFp.deferredDeeplinksLookup(r, i)(e, n)
            }, registerMobileDevice: function (r, i) {
                return t.SdkApiFp.registerMobileDevice(r, i)(e, n)
            }
        }
    }, t.UsersApiFetchParamCreator = {
        addEmailToUser: function (e, t) {
            if (null == e.login)throw new Error("Missing required parameter login when calling addEmailToUser");
            if (null == e.emailBody)throw new Error("Missing required parameter emailBody when calling addEmailToUser");
            var n = "/users/{login}/emails".replace("{login}", "" + e.login), r = a.parse(n, !0), i = s({}, {method: "POST"}, t), o = {};
            return o = {"Content-Type": "application/json"}, e.emailBody && (i.body = JSON.stringify(e.emailBody || {})), o && (i.headers = o), {
                url: a.format(r),
                options: i
            }
        }, addUserWithRoleToBrand: function (e, t) {
            if (null == e.login)throw new Error("Missing required parameter login when calling addUserWithRoleToBrand");
            if (null == e.brandGUID)throw new Error("Missing required parameter brandGUID when calling addUserWithRoleToBrand");
            if (null == e.roleName)throw new Error("Missing required parameter roleName when calling addUserWithRoleToBrand");
            var n = "/brands/{brandGUID}/users/{login}/roles/{roleName}".replace("{login}", "" + e.login).replace("{brandGUID}", "" + e.brandGUID).replace("{roleName}", "" + e.roleName), r = a.parse(n, !0), i = s({}, {method: "POST"}, t), o = {};
            return o && (i.headers = o), {url: a.format(r), options: i}
        }, addUserWithRoleToOrganization: function (e, t) {
            if (null == e.login)throw new Error("Missing required parameter login when calling addUserWithRoleToOrganization");
            if (null == e.organizationGUID)throw new Error("Missing required parameter organizationGUID when calling addUserWithRoleToOrganization");
            if (null == e.roleName)throw new Error("Missing required parameter roleName when calling addUserWithRoleToOrganization");
            var n = "/organizations/{organizationGUID}/users/{login}/roles/{roleName}".replace("{login}", "" + e.login).replace("{organizationGUID}", "" + e.organizationGUID).replace("{roleName}", "" + e.roleName), r = a.parse(n, !0), i = s({}, {method: "POST"}, t), o = {};
            return o && (i.headers = o), {url: a.format(r), options: i}
        }, createUser: function (e, t) {
            if (null == e.createUserBody)throw new Error("Missing required parameter createUserBody when calling createUser");
            var n = a.parse("/users", !0), r = s({}, {method: "POST"}, t), i = {};
            return i = {"Content-Type": "application/json"}, e.createUserBody && (r.body = JSON.stringify(e.createUserBody || {})), i && (r.headers = i), {
                url: a.format(n),
                options: r
            }
        }, deleteEmailForUser: function (e, t) {
            if (null == e.login)throw new Error("Missing required parameter login when calling deleteEmailForUser");
            if (null == e.email)throw new Error("Missing required parameter email when calling deleteEmailForUser");
            var n = "/users/{login}/emails/{email}".replace("{login}", "" + e.login).replace("{email}", "" + e.email), r = a.parse(n, !0), i = s({}, {method: "DELETE"}, t), o = {};
            return o && (i.headers = o), {url: a.format(r), options: i}
        }, editUserRoleInBrand: function (e, t) {
            if (null == e.login)throw new Error("Missing required parameter login when calling editUserRoleInBrand");
            if (null == e.brandGUID)throw new Error("Missing required parameter brandGUID when calling editUserRoleInBrand");
            if (null == e.roleName)throw new Error("Missing required parameter roleName when calling editUserRoleInBrand");
            if (null == e.editUserRoleBody)throw new Error("Missing required parameter editUserRoleBody when calling editUserRoleInBrand");
            var n = "/brands/{brandGUID}/users/{login}/roles/{roleName}".replace("{login}", "" + e.login).replace("{brandGUID}", "" + e.brandGUID).replace("{roleName}", "" + e.roleName), r = a.parse(n, !0), i = s({}, {method: "PUT"}, t), o = {};
            return o = {"Content-Type": "application/json"}, e.editUserRoleBody && (i.body = JSON.stringify(e.editUserRoleBody || {})), o && (i.headers = o), {
                url: a.format(r),
                options: i
            }
        }, editUserRoleInOrganization: function (e, t) {
            if (null == e.login)throw new Error("Missing required parameter login when calling editUserRoleInOrganization");
            if (null == e.organizationGUID)throw new Error("Missing required parameter organizationGUID when calling editUserRoleInOrganization");
            if (null == e.roleName)throw new Error("Missing required parameter roleName when calling editUserRoleInOrganization");
            if (null == e.editUserRoleBody)throw new Error("Missing required parameter editUserRoleBody when calling editUserRoleInOrganization");
            var n = "/organizations/{organizationGUID}/users/{login}/roles/{roleName}".replace("{login}", "" + e.login).replace("{organizationGUID}", "" + e.organizationGUID).replace("{roleName}", "" + e.roleName), r = a.parse(n, !0), i = s({}, {method: "PUT"}, t), o = {};
            return o = {"Content-Type": "application/json"}, e.editUserRoleBody && (i.body = JSON.stringify(e.editUserRoleBody || {})), o && (i.headers = o), {
                url: a.format(r),
                options: i
            }
        }, getUser: function (e, t) {
            if (null == e.login)throw new Error("Missing required parameter login when calling getUser");
            var n = "/users/{login}".replace("{login}", "" + e.login), r = a.parse(n, !0), i = s({}, {method: "GET"}, t), o = {};
            return o && (i.headers = o), {url: a.format(r), options: i}
        }, reVerifyEmailForUser: function (e, t) {
            if (null == e.login)throw new Error("Missing required parameter login when calling reVerifyEmailForUser");
            if (null == e.email)throw new Error("Missing required parameter email when calling reVerifyEmailForUser");
            var n = "/users/{login}/emails/{email}/reverify".replace("{login}", "" + e.login).replace("{email}", "" + e.email), r = a.parse(n, !0), i = s({}, {method: "POST"}, t), o = {};
            return o && (i.headers = o), {url: a.format(r), options: i}
        }, removeUser: function (e, t) {
            if (null == e.login)throw new Error("Missing required parameter login when calling removeUser");
            var n = "/users/{login}".replace("{login}", "" + e.login), r = a.parse(n, !0), i = s({}, {method: "DELETE"}, t), o = {};
            return o && (i.headers = o), {url: a.format(r), options: i}
        }, removeUserWithRoleFromBrand: function (e, t) {
            if (null == e.login)throw new Error("Missing required parameter login when calling removeUserWithRoleFromBrand");
            if (null == e.brandGUID)throw new Error("Missing required parameter brandGUID when calling removeUserWithRoleFromBrand");
            if (null == e.roleName)throw new Error("Missing required parameter roleName when calling removeUserWithRoleFromBrand");
            var n = "/brands/{brandGUID}/users/{login}/roles/{roleName}".replace("{login}", "" + e.login).replace("{brandGUID}", "" + e.brandGUID).replace("{roleName}", "" + e.roleName), r = a.parse(n, !0), i = s({}, {method: "DELETE"}, t), o = {};
            return o && (i.headers = o), {url: a.format(r), options: i}
        }, removeUserWithRoleFromOrganization: function (e, t) {
            if (null == e.login)throw new Error("Missing required parameter login when calling removeUserWithRoleFromOrganization");
            if (null == e.organizationGUID)throw new Error("Missing required parameter organizationGUID when calling removeUserWithRoleFromOrganization");
            if (null == e.roleName)throw new Error("Missing required parameter roleName when calling removeUserWithRoleFromOrganization");
            var n = "/organizations/{organizationGUID}/users/{login}/roles/{roleName}".replace("{login}", "" + e.login).replace("{organizationGUID}", "" + e.organizationGUID).replace("{roleName}", "" + e.roleName), r = a.parse(n, !0), i = s({}, {method: "DELETE"}, t), o = {};
            return o && (i.headers = o), {url: a.format(r), options: i}
        }, updateEmailForUser: function (e, t) {
            if (null == e.login)throw new Error("Missing required parameter login when calling updateEmailForUser");
            if (null == e.email)throw new Error("Missing required parameter email when calling updateEmailForUser");
            if (null == e.emailBody)throw new Error("Missing required parameter emailBody when calling updateEmailForUser");
            var n = "/users/{login}/emails/{email}".replace("{login}", "" + e.login).replace("{email}", "" + e.email), r = a.parse(n, !0), i = s({}, {method: "PUT"}, t), o = {};
            return o = {"Content-Type": "application/json"}, e.emailBody && (i.body = JSON.stringify(e.emailBody || {})), o && (i.headers = o), {
                url: a.format(r),
                options: i
            }
        }
    }, t.UsersApiFp = {
        addEmailToUser: function (e, n) {
            var r = t.UsersApiFetchParamCreator.addEmailToUser(e, n);
            return function (e, t) {
                return void 0 === e && (e = o), void 0 === t && (t = l), e(t + r.url, r.options).then(function (e) {
                    if (e.status >= 200 && e.status < 300)return e.json();
                    throw e
                })
            }
        }, addUserWithRoleToBrand: function (e, n) {
            var r = t.UsersApiFetchParamCreator.addUserWithRoleToBrand(e, n);
            return function (e, t) {
                return void 0 === e && (e = o), void 0 === t && (t = l), e(t + r.url, r.options).then(function (e) {
                    if (e.status >= 200 && e.status < 300)return e.json();
                    throw e
                })
            }
        }, addUserWithRoleToOrganization: function (e, n) {
            var r = t.UsersApiFetchParamCreator.addUserWithRoleToOrganization(e, n);
            return function (e, t) {
                return void 0 === e && (e = o), void 0 === t && (t = l), e(t + r.url, r.options).then(function (e) {
                    if (e.status >= 200 && e.status < 300)return e.json();
                    throw e
                })
            }
        }, createUser: function (e, n) {
            var r = t.UsersApiFetchParamCreator.createUser(e, n);
            return function (e, t) {
                return void 0 === e && (e = o), void 0 === t && (t = l), e(t + r.url, r.options).then(function (e) {
                    if (e.status >= 200 && e.status < 300)return e.json();
                    throw e
                })
            }
        }, deleteEmailForUser: function (e, n) {
            var r = t.UsersApiFetchParamCreator.deleteEmailForUser(e, n);
            return function (e, t) {
                return void 0 === e && (e = o), void 0 === t && (t = l), e(t + r.url, r.options).then(function (e) {
                    if (e.status >= 200 && e.status < 300)return e;
                    throw e
                })
            }
        }, editUserRoleInBrand: function (e, n) {
            var r = t.UsersApiFetchParamCreator.editUserRoleInBrand(e, n);
            return function (e, t) {
                return void 0 === e && (e = o), void 0 === t && (t = l), e(t + r.url, r.options).then(function (e) {
                    if (e.status >= 200 && e.status < 300)return e.json();
                    throw e
                })
            }
        }, editUserRoleInOrganization: function (e, n) {
            var r = t.UsersApiFetchParamCreator.editUserRoleInOrganization(e, n);
            return function (e, t) {
                return void 0 === e && (e = o), void 0 === t && (t = l), e(t + r.url, r.options).then(function (e) {
                    if (e.status >= 200 && e.status < 300)return e.json();
                    throw e
                })
            }
        }, getUser: function (e, n) {
            var r = t.UsersApiFetchParamCreator.getUser(e, n);
            return function (e, t) {
                return void 0 === e && (e = o), void 0 === t && (t = l), e(t + r.url, r.options).then(function (e) {
                    if (e.status >= 200 && e.status < 300)return e.json();
                    throw e
                })
            }
        }, reVerifyEmailForUser: function (e, n) {
            var r = t.UsersApiFetchParamCreator.reVerifyEmailForUser(e, n);
            return function (e, t) {
                return void 0 === e && (e = o), void 0 === t && (t = l), e(t + r.url, r.options).then(function (e) {
                    if (e.status >= 200 && e.status < 300)return e.json();
                    throw e
                })
            }
        }, removeUser: function (e, n) {
            var r = t.UsersApiFetchParamCreator.removeUser(e, n);
            return function (e, t) {
                return void 0 === e && (e = o), void 0 === t && (t = l), e(t + r.url, r.options).then(function (e) {
                    if (e.status >= 200 && e.status < 300)return e;
                    throw e
                })
            }
        }, removeUserWithRoleFromBrand: function (e, n) {
            var r = t.UsersApiFetchParamCreator.removeUserWithRoleFromBrand(e, n);
            return function (e, t) {
                return void 0 === e && (e = o), void 0 === t && (t = l), e(t + r.url, r.options).then(function (e) {
                    if (e.status >= 200 && e.status < 300)return e;
                    throw e
                })
            }
        }, removeUserWithRoleFromOrganization: function (e, n) {
            var r = t.UsersApiFetchParamCreator.removeUserWithRoleFromOrganization(e, n);
            return function (e, t) {
                return void 0 === e && (e = o), void 0 === t && (t = l), e(t + r.url, r.options).then(function (e) {
                    if (e.status >= 200 && e.status < 300)return e;
                    throw e
                })
            }
        }, updateEmailForUser: function (e, n) {
            var r = t.UsersApiFetchParamCreator.updateEmailForUser(e, n);
            return function (e, t) {
                return void 0 === e && (e = o), void 0 === t && (t = l), e(t + r.url, r.options).then(function (e) {
                    if (e.status >= 200 && e.status < 300)return e.json();
                    throw e
                })
            }
        }
    };
    var D = function (e) {
        function n() {
            return null !== e && e.apply(this, arguments) || this
        }

        return r(n, e), n.prototype.addEmailToUser = function (e, n) {
            return t.UsersApiFp.addEmailToUser(e, n)(this.fetch, this.basePath)
        }, n.prototype.addUserWithRoleToBrand = function (e, n) {
            return t.UsersApiFp.addUserWithRoleToBrand(e, n)(this.fetch, this.basePath)
        }, n.prototype.addUserWithRoleToOrganization = function (e, n) {
            return t.UsersApiFp.addUserWithRoleToOrganization(e, n)(this.fetch, this.basePath)
        }, n.prototype.createUser = function (e, n) {
            return t.UsersApiFp.createUser(e, n)(this.fetch, this.basePath)
        }, n.prototype.deleteEmailForUser = function (e, n) {
            return t.UsersApiFp.deleteEmailForUser(e, n)(this.fetch, this.basePath)
        }, n.prototype.editUserRoleInBrand = function (e, n) {
            return t.UsersApiFp.editUserRoleInBrand(e, n)(this.fetch, this.basePath)
        }, n.prototype.editUserRoleInOrganization = function (e, n) {
            return t.UsersApiFp.editUserRoleInOrganization(e, n)(this.fetch, this.basePath)
        }, n.prototype.getUser = function (e, n) {
            return t.UsersApiFp.getUser(e, n)(this.fetch, this.basePath)
        }, n.prototype.reVerifyEmailForUser = function (e, n) {
            return t.UsersApiFp.reVerifyEmailForUser(e, n)(this.fetch, this.basePath)
        }, n.prototype.removeUser = function (e, n) {
            return t.UsersApiFp.removeUser(e, n)(this.fetch, this.basePath)
        }, n.prototype.removeUserWithRoleFromBrand = function (e, n) {
            return t.UsersApiFp.removeUserWithRoleFromBrand(e, n)(this.fetch, this.basePath)
        }, n.prototype.removeUserWithRoleFromOrganization = function (e, n) {
            return t.UsersApiFp.removeUserWithRoleFromOrganization(e, n)(this.fetch, this.basePath)
        }, n.prototype.updateEmailForUser = function (e, n) {
            return t.UsersApiFp.updateEmailForUser(e, n)(this.fetch, this.basePath)
        }, n
    }(c);
    t.UsersApi = D, t.UsersApiFactory = function (e, n) {
        return {
            addEmailToUser: function (r, i) {
                return t.UsersApiFp.addEmailToUser(r, i)(e, n)
            }, addUserWithRoleToBrand: function (r, i) {
                return t.UsersApiFp.addUserWithRoleToBrand(r, i)(e, n)
            }, addUserWithRoleToOrganization: function (r, i) {
                return t.UsersApiFp.addUserWithRoleToOrganization(r, i)(e, n)
            }, createUser: function (r, i) {
                return t.UsersApiFp.createUser(r, i)(e, n)
            }, deleteEmailForUser: function (r, i) {
                return t.UsersApiFp.deleteEmailForUser(r, i)(e, n)
            }, editUserRoleInBrand: function (r, i) {
                return t.UsersApiFp.editUserRoleInBrand(r, i)(e, n)
            }, editUserRoleInOrganization: function (r, i) {
                return t.UsersApiFp.editUserRoleInOrganization(r, i)(e, n)
            }, getUser: function (r, i) {
                return t.UsersApiFp.getUser(r, i)(e, n)
            }, reVerifyEmailForUser: function (r, i) {
                return t.UsersApiFp.reVerifyEmailForUser(r, i)(e, n)
            }, removeUser: function (r, i) {
                return t.UsersApiFp.removeUser(r, i)(e, n)
            }, removeUserWithRoleFromBrand: function (r, i) {
                return t.UsersApiFp.removeUserWithRoleFromBrand(r, i)(e, n)
            }, removeUserWithRoleFromOrganization: function (r, i) {
                return t.UsersApiFp.removeUserWithRoleFromOrganization(r, i)(e, n)
            }, updateEmailForUser: function (r, i) {
                return t.UsersApiFp.updateEmailForUser(r, i)(e, n)
            }
        }
    }
}, function (e, t, n) {
    n(157), e.exports = self.fetch.bind(self)
}, function (e, t, n) {
    n(562), e.exports = n(366).Object.assign
}, function (e, t, n) {
    var r = n(563);
    r(r.S + r.F, "Object", {assign: n(573)})
}, function (e, t, n) {
    var r = n(257), i = n(366), a = n(564), o = n(566), s = function (e, t, n) {
        var l, c, u, d = e & s.F, p = e & s.G, f = e & s.S, h = e & s.P, g = e & s.B, m = e & s.W, v = p ? i : i[t] || (i[t] = {}), k = v.prototype, b = p ? r : f ? r[t] : (r[t] || {}).prototype;
        p && (n = t);
        for (l in n)(c = !d && b && void 0 !== b[l]) && l in v || (u = c ? b[l] : n[l], v[l] = p && "function" != typeof b[l] ? n[l] : g && c ? a(u, r) : m && b[l] == u ? function (e) {
            var t = function (t, n, r) {
                if (this instanceof e) {
                    switch (arguments.length) {
                        case 0:
                            return new e;
                        case 1:
                            return new e(t);
                        case 2:
                            return new e(t, n)
                    }
                    return new e(t, n, r)
                }
                return e.apply(this, arguments)
            };
            return t.prototype = e.prototype, t
        }(u) : h && "function" == typeof u ? a(Function.call, u) : u, h && ((v.virtual || (v.virtual = {}))[l] = u, e & s.R && k && !k[l] && o(k, l, u)))
    };
    s.F = 1, s.G = 2, s.S = 4, s.P = 8, s.B = 16, s.W = 32, s.U = 64, s.R = 128, e.exports = s
}, function (e, t, n) {
    var r = n(565);
    e.exports = function (e, t, n) {
        if (r(e), void 0 === t)return e;
        switch (n) {
            case 1:
                return function (n) {
                    return e.call(t, n)
                };
            case 2:
                return function (n, r) {
                    return e.call(t, n, r)
                };
            case 3:
                return function (n, r, i) {
                    return e.call(t, n, r, i)
                }
        }
        return function () {
            return e.apply(t, arguments)
        }
    }
}, function (e, t) {
    e.exports = function (e) {
        if ("function" != typeof e)throw TypeError(e + " is not a function!");
        return e
    }
}, function (e, t, n) {
    var r = n(567), i = n(572);
    e.exports = n(259) ? function (e, t, n) {
        return r.f(e, t, i(1, n))
    } : function (e, t, n) {
        return e[t] = n, e
    }
}, function (e, t, n) {
    var r = n(568), i = n(569), a = n(571), o = Object.defineProperty;
    t.f = n(259) ? Object.defineProperty : function (e, t, n) {
        if (r(e), t = a(t, !0), r(n), i)try {
            return o(e, t, n)
        } catch (e) {
        }
        if ("get"in n || "set"in n)throw TypeError("Accessors not supported!");
        return "value"in n && (e[t] = n.value), e
    }
}, function (e, t, n) {
    var r = n(258);
    e.exports = function (e) {
        if (!r(e))throw TypeError(e + " is not an object!");
        return e
    }
}, function (e, t, n) {
    e.exports = !n(259) && !n(260)(function () {
            return 7 != Object.defineProperty(n(570)("div"), "a", {
                    get: function () {
                        return 7
                    }
                }).a
        })
}, function (e, t, n) {
    var r = n(258), i = n(257).document, a = r(i) && r(i.createElement);
    e.exports = function (e) {
        return a ? i.createElement(e) : {}
    }
}, function (e, t, n) {
    var r = n(258);
    e.exports = function (e, t) {
        if (!r(e))return e;
        var n, i;
        if (t && "function" == typeof(n = e.toString) && !r(i = n.call(e)))return i;
        if ("function" == typeof(n = e.valueOf) && !r(i = n.call(e)))return i;
        if (!t && "function" == typeof(n = e.toString) && !r(i = n.call(e)))return i;
        throw TypeError("Can't convert object to primitive value")
    }
}, function (e, t) {
    e.exports = function (e, t) {
        return {enumerable: !(1 & e), configurable: !(2 & e), writable: !(4 & e), value: t}
    }
}, function (e, t, n) {
    "use strict";
    var r = n(574), i = n(585), a = n(586), o = n(587), s = n(368), l = Object.assign;
    e.exports = !l || n(260)(function () {
        var e = {}, t = {}, n = Symbol(), r = "abcdefghijklmnopqrst";
        return e[n] = 7, r.split("").forEach(function (e) {
            t[e] = e
        }), 7 != l({}, e)[n] || Object.keys(l({}, t)).join("") != r
    }) ? function (e, t) {
        for (var n = o(e), l = arguments.length, c = 1, u = i.f, d = a.f; l > c;)for (var p, f = s(arguments[c++]), h = u ? r(f).concat(u(f)) : r(f), g = h.length, m = 0; g > m;)d.call(f, p = h[m++]) && (n[p] = f[p]);
        return n
    } : l
}, function (e, t, n) {
    var r = n(575), i = n(584);
    e.exports = Object.keys || function (e) {
            return r(e, i)
        }
}, function (e, t, n) {
    var r = n(576), i = n(367), a = n(578)(!1), o = n(581)("IE_PROTO");
    e.exports = function (e, t) {
        var n, s = i(e), l = 0, c = [];
        for (n in s)n != o && r(s, n) && c.push(n);
        for (; t.length > l;)r(s, n = t[l++]) && (~a(c, n) || c.push(n));
        return c
    }
}, function (e, t) {
    var n = {}.hasOwnProperty;
    e.exports = function (e, t) {
        return n.call(e, t)
    }
}, function (e, t) {
    var n = {}.toString;
    e.exports = function (e) {
        return n.call(e).slice(8, -1)
    }
}, function (e, t, n) {
    var r = n(367), i = n(579), a = n(580);
    e.exports = function (e) {
        return function (t, n, o) {
            var s, l = r(t), c = i(l.length), u = a(o, c);
            if (e && n != n) {
                for (; c > u;)if ((s = l[u++]) != s)return !0
            } else for (; c > u; u++)if ((e || u in l) && l[u] === n)return e || u || 0;
            return !e && -1
        }
    }
}, function (e, t, n) {
    var r = n(370), i = Math.min;
    e.exports = function (e) {
        return e > 0 ? i(r(e), 9007199254740991) : 0
    }
}, function (e, t, n) {
    var r = n(370), i = Math.max, a = Math.min;
    e.exports = function (e, t) {
        return e = r(e), e < 0 ? i(e + t, 0) : a(e, t)
    }
}, function (e, t, n) {
    var r = n(582)("keys"), i = n(583);
    e.exports = function (e) {
        return r[e] || (r[e] = i(e))
    }
}, function (e, t, n) {
    var r = n(257), i = r["__core-js_shared__"] || (r["__core-js_shared__"] = {});
    e.exports = function (e) {
        return i[e] || (i[e] = {})
    }
}, function (e, t) {
    var n = 0, r = Math.random();
    e.exports = function (e) {
        return "Symbol(".concat(void 0 === e ? "" : e, ")_", (++n + r).toString(36))
    }
}, function (e, t) {
    e.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")
}, function (e, t) {
    t.f = Object.getOwnPropertySymbols
}, function (e, t) {
    t.f = {}.propertyIsEnumerable
}, function (e, t, n) {
    var r = n(369);
    e.exports = function (e) {
        return Object(r(e))
    }
}, function (e, t, n) {
    "use strict";
    function r(e, n, r) {
        i.default.UI.switchBrand.listen(t.onSwitchBrand(e, n, r)), i.default.UI.changeSection.listen(k(e, n)), i.default.UI.getBsdSiteAssociation.listen(D(e, n)), i.default.UI.switchOrganizationSection.listen(b(e, n)), i.default.UI.manageOrganization.listen(y(e, n, r))
    }

    Object.defineProperty(t, "__esModule", {value: !0});
    var i = n(3), a = n(169), o = n(92), s = n(364), l = n(371), c = n(91), u = n(171), d = n(172), p = n(173), f = n(372), h = n(373), g = n(50), m = n(21), v = n(264);
    t.onSwitchBrand = function (e, t, n) {
        return function (r) {
            var l = e.cursor(["session", "activeOrganization"]).deref();
            return m.default(e)([s.resetBrandSpecificBaseState(), a.setBrand(r), a.enforceProductTier(), a.setDefaultSection(), v.setUnsafePreference(t, "preferred_brand", r), v.fetchDomainPreference(t)(r), u.initLegacyBrandUser(t)(r)]).then(function (i) {
                var a = e.cursor(["session", "activeOrganization"]).deref(), s = [o.fetchBrand(t, n)(r)];
                return a !== l && (s.unshift(c.fetchOrganization(t, n)(a)), s.push(p.getDeeplinkApps(t, n)(a))), m.default(e)(s)
            }).then(function (n) {
                var a = e.cursor("section").deref();
                return i.default.API.loadBSDRateLimit(t, r), i.default.API.loadBitlinkRateLimit(t, r), f.initCallsPerSection(a), n
            }).catch(g.genericErrorMsg)
        }
    };
    var k = function (e, t) {
        return function (t) {
            return m.default(e)([l.deselectAll(), a.setSection(t)]).then(function (e) {
                return f.initCallsPerSection(t), e
            }).catch(g.genericErrorMsg)
        }
    }, b = function (e, t) {
        return function (t) {
            return m.default(e)([a.setOrganizationSubsection(t)])
        }
    }, y = function (e, t, n) {
        return function (r) {
            i.default.UI.closeAllSheets();
            var o = [s.resetBrandSpecificBaseState(), a.selectDefaultBrand(r), a.enforceProductTier(), a.setSection("organization"), a.enforceSection(), c.fetchOrganization(t)(r), c.fetchOrgLimits(t, n)(r), d.fetchOrgBSDs(t, n)(r), p.setLoadingState(), p.getDeeplinkApps(t, n)(r)];
            return m.default(e)(o)
        }
    }, D = h.getBsdSiteAssociation;
    t.default = r
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    var r = n(2), i = n(13), a = n(407), o = function (e) {
        return r.OrderedMap(e.reduce(function (e, t) {
            return e[t.guid] = new a.DeeplinkApp(r.fromJS(t)), e
        }, {}))
    };
    t.parseDeeplinkApps = o;
    var s = function (e) {
        return r.Map(e.reduce(function (e, t) {
            return e[t.guid] = new a.DeeplinkRule(r.fromJS(t)), e
        }, {}))
    };
    t.parseDeeplinkRules = s;
    var l = function (e, t) {
        return n = {}, n[t] = {data: e, error: null, loading: !1, loadedOnce: !0}, n;
        var n
    };
    t.parseAssociation = l;
    var c = function (e, t) {
        return t = t && t.set("android", r.fromJS(e.android_apps.map(function (e) {
                return e.app_guid
            }))).set("ios", r.fromJS(e.ios_apps.map(function (e) {
                return e.app_guid
            })))
    };
    t.parseBSDAssociation = c;
    var u = function (e) {
        return e.reduce(function (e, t) {
            return e[t] = new i.LoadableMap({loading: !0, loadedOnce: !1, data: null, error: null}), e
        }, {})
    };
    t.parseAssociationLoadingState = u;
    var d = function (e) {
        return new a.DeeplinkMetricsRollup(r.fromJS(e))
    };
    t.parseMetricsRollup = d;
    var p = function (e) {
        return new a.DeeplinkRule(r.fromJS(e))
    };
    t.parseDeeplinksRule = p;
    var f = function (e) {
        return new a.DeeplinkApp(r.fromJS(e))
    };
    t.parseDeeplinksApp = f;
    var h = function (e) {
        return new a.ThirdPartyAppData(r.fromJS(e))
    };
    t.parseThirdPartyAppData = h
}, function (e, t, n) {
    "use strict";
    function r(e) {
        var t = e[0], n = e[1];
        return t in B ? t : n in B ? n : null
    }

    function i(e) {
        for (var t = (e.filter(function (e) {
            return e.key in g.default
        })), n = 0, r = t; n < r.length; n++) {
            var i = r[n];
            g.default[i.key](i.value)
        }
    }

    function a(e) {
        var t = e.path, n = e.qs;
        S.contains(t[0]) && (t = ["default"].concat(t));
        var i = r(t);
        return i ? B[i].decode({path: t, qs: n}) : [v.routeNotFound()]
    }

    function o(e, n, r) {
        C.default.Init.initRoute.listen(t.onRoute(e, n)), C.default.UI.trackPageView.listen(m.pageView)
    }

    Object.defineProperty(t, "__esModule", {value: !0});
    var s = n(2), l = n(374), c = n(591), u = n(375), d = n(376), p = n(377), f = n(378), h = n(373), g = n(592), m = n(48), v = n(73), k = n(92), b = n(169), y = n(171), D = n(172), I = n(91), A = n(264), E = n(173), w = n(21), C = n(3), _ = n(372), U = n(379), S = s.Set(["bitlinks", "dashboard", "campaigns", "performance"]), B = {
        bitlinks: l.default,
        performance: c.default,
        dashboard: u.default,
        customlinks: d.default,
        organization: f.default,
        campaigns: p.default
    };
    t.onRoute = function (e, t, n) {
        return function (r) {
            var o = U.deserializeUrl(r), s = a(o).concat([b.validateOrganization(), b.validateBrand(), b.enforceProductTier(), b.enforceSection()]);
            return w.default(e)(s).then(function (r) {
                var i = e.cursor(["session", "activeBrand"]).deref();
                if ("default" === i)return r;
                var a = (e.cursor("section").deref(), e.cursor(["session", "activeOrganization"]).deref()), o = [A.fetchDomainPreference(t)(i), y.initLegacyBrandUser(t)(i), I.fetchOrgLimits(t, n)(a), k.fetchBrand(t, n)(i)], s = e.cursor(["session", "user", "login"]).deref();
                return "admin" === e.cursor(["orgUserRoles", a, s]).deref() && o.push(D.fetchOrgBSDs(t, n)(a), I.fetchOrganization(t, n)(a)), w.default(e)(o)
            }).then(function (n) {
                return h.getBsdSiteAssociation(e, t), n
            }).then(function (r) {
                var a = "enterprise" === e.cursor("productTier").deref(), s = e.cursor(["deeplinkApps", "loadedOnce"]).deref(), l = e.cursor(["session", "activeOrganization"]).deref(), c = e.cursor("section").deref(), u = e.cursor(["session", "activeBrand"]).deref();
                return C.default.API.loadBSDRateLimit(t, u), C.default.API.loadBitlinkRateLimit(t, u), _.initCallsPerSection(c), i(o.qs), a && !s ? w.default(e)([E.setLoadingState(), E.getDeeplinkApps(t, n)(l)]) : r
            }).catch(function (e) {
                return C.default.Notification.openDefaultNotification("ERROR", "Oops, there's been an error loading the URL", ""), e
            })
        }
    }, t.default = o
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    var r = n(132), i = n(109), a = n(73), o = {
        decode: function (e) {
            var t = e.path, n = e.qs, r = t[0], o = (t[1], t[2]);
            return [a.routePerformance({
                brandGUID: r || "default",
                userHash: o
            })].concat(i.decodeActionSheet(n), i.decodeBitlinkFilter(n))
        }, encode: function (e) {
            return {
                path: r.defaultPathEncoder(e, ["session", "activeBrand"], ["section"], ["bitlinks", "activeBitlink"]),
                qs: i.encodeActionSheet(e).concat(i.encodeBitlinkFilter(e))
            }
        }
    };
    t.default = o
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    var r = n(3), i = {
        email_verification: function (e) {
            "missing" == e ? (r.default.API.verifyEmail(), r.default.Notification.openDefaultNotification("ERROR", "Account Not Verified", "Uh Oh! Missing verification code.")) : "invalid" == e ? (r.default.API.verifyEmail(), r.default.Notification.openDefaultNotification("ERROR", "Account Not Verified", "Uh Oh! Invalid verification code.")) : "success" == e && (r.default.API.verifyEmail(), r.default.Notification.openDefaultNotification("MAIN", "Account Verified", "Success! Thanks for verifying your account."))
        }
    };
    t.default = i
}, function (e, t, n) {
    "use strict";
    function r(e, t) {
        i.default.API.loadBitlinkForCustomBitlinksPage.listen(c(e, t)), i.default.Forms.setShortenDomain.listen(u(e, t))
    }

    Object.defineProperty(t, "__esModule", {value: !0});
    var i = n(3), a = n(49), o = n(371), s = n(21), l = n(50), c = function (e, t) {
        return function (n) {
            return s.default(e)([o.loadBitlinkWithKeywordLink(t)(n)]).catch(function (r) {
                return a.logger.info("Bitlink not in link history, making fallback requests", n), s.default(e)([o.loadBitlinkFromInfo(t)(n)]).catch(l.genericErrorMsg)
            })
        }
    }, u = function (e, t) {
        return function (t) {
            return s.default(e)([o.setShortenDomain(t)])
        }
    };
    t.default = r
}, function (e, t, n) {
    "use strict";
    function r(e, t, n) {
        a.default.Campaigns.editCampaign.listen(p(e, t)), a.default.Campaigns.loadCampaigns.listen(k(e, t, n)), a.default.Campaigns.setSection.listen(v(e, t, n)), a.default.Campaigns.getCampaignsNotInCache.listen(y(e, t)), a.default.Campaigns.createCampaign.listen(E(e, t)), a.default.Campaigns.setActiveCampaign.listen(N(e, t)), a.default.Campaigns.setActiveChannel.listen(O(e, t)), a.default.Campaigns.getChannels.listen(I(e, t)), a.default.Campaigns.filterChannels.listen(C(e, t)), a.default.Campaigns.toggleChannels.listen(_(e, t)), a.default.Campaigns.editChannel.listen(U(e, t)), a.default.Campaigns.removeChannel.listen(S(e, t)), a.default.Campaigns.addChannel.listen(B(e, t)), a.default.Campaigns.bulkUploadBitlinks.listen(R(e, t)), a.default.Campaigns.removeBitlink.listen(P(e, t)), a.default.Campaigns.removeCampaignBitlink.listen(M(e, t)), a.default.UI.deselectCampaign.listen(T(e, t)), a.default.Campaigns.loadCampaignsNextPage.listen(b(e, t, n)), a.default.Campaigns.search.listen(h(e, t, n)), a.default.Campaigns.addUrlToChannels.listen(F(e, t)), a.default.Campaigns.removeChannelFromCampaign.listen(G(e, t)), a.default.Forms.setCampaignChannel.listen(x(e, t)), a.default.Forms.setCampaign.listen(q(e, t)), a.default.Campaigns.addBitlinkToCampaign.listen(z(e, t, n)), a.default.Campaigns.createCampaignForBitlink.listen(w(e, t))
    }

    Object.defineProperty(t, "__esModule", {value: !0});
    var i = n(2), a = n(3), o = n(595), s = n(21), l = n(20), c = n(23), u = n(50), d = function (e) {
        var t = e.cursor("campaigns").getIn(["views", "list"]), n = e.cursor("campaigns").getIn(["views", "detail"]);
        return t.get("loading") || n.get("loading") || t.get("data").size >= t.get("total")
    }, p = function (e, t) {
        return function (n) {
            var r = e.cursor("session").get("activeBrand"), i = {channels: n.channelIDs}, a = n.name, l = n.description, d = n.campaignGUID, p = [], h = e.cursor("campaigns").getIn(["campaignCache", e.cursor("campaigns").get("activeCampaign")]);
            return h.get("name") === n.name && h.get("description") === n.description || p.push(o.editCampaign(t)({
                name: a,
                description: l,
                campaignGUID: d,
                brandGUID: r
            })), s.default(e)(p).then(function (a) {
                return n.channelIDs.length ? s.default(e)([o.addChannelToCampaign(t)({
                    brandGUID: r,
                    campaignGUID: d,
                    createMultipleCampaignChannelsBody: i
                })]) : a
            }).then(function (t) {
                return f(e, n.openAddLinkSheet), t
            }).catch(u.mapErrorMsg(c.campaignErrors))
        }
    }, f = function (e, t) {
        t && (e.cursor("campaigns").getIn(["campaignCache", e.cursor(["campaigns", "activeCampaign"]), "campaign_channels", "channels"]).isEmpty() ? (a.default.Notification.openDefaultNotification("ERROR", "Need to add channels first.", ""), a.default.UI.closeSheet()) : a.default.UI.openSheet("addBitlinks"))
    }, h = function (e, t, n) {
        return function (r) {
            var i = [o.setCampaignListLoading(), o.setDetailViewLoadingState(), o.setQuery(r), o.fetchCampaigns(t, n)({
                brandGUID: e.cursor("session").get("activeBrand"),
                limit: "10",
                offset: "0",
                currentListData: [],
                query: r,
                isNewQuery: !0
            }), o.filterCampaignsByQuery(r)];
            return l.isDesktop() && i.push(o.setFirstCampaignActive()), s.default(e)(i).then(function () {
                return g(e, t)
            }).catch(u.mapErrorMsg(c.campaignErrors))
        }
    }, g = function (e, t) {
        var n = e.cursor("campaigns").get("campaignCache"), r = e.cursor("campaigns").get("clickCache"), i = n.filter(function (e, t) {
            return !(r.getIn([t, "loading"], !1) || r.getIn([t, "loadedOnce"], !1))
        }), a = [o.setClicksLoadingState(i.keySeq().toArray())];
        return s.default(e)(a).then(function () {
            var n = i.map(function (n, r) {
                return s.default(e)([o.getCampaignClicks(t)({
                    brandGUID: n.get("brand_guid"),
                    campaignGUID: n.get("guid")
                })])
            }).toArray();
            return Promise.all(n).then(function () {
                return s.default(e)([o.setDetailViewLoadingStateFalse()])
            })
        })
    };
    t.getCurrentListData = function (e) {
        var t = e.cursor("campaigns").getIn(["views", "list", "data"]), n = e.cursor("session").get("activeBrand");
        return t.filter(function (t) {
            return e.cursor("campaigns").getIn(["campaignCache", t, "brand_guid"]) === n
        }).toJS()
    };
    var m = function (e, n, r) {
        var i = e.cursor("campaigns").get("filter"), a = i.get("query"), l = {
            brandGUID: e.cursor("session").get("activeBrand"),
            limit: "10",
            offset: "0",
            currentListData: t.getCurrentListData(e)
        };
        a && (l.query = a, l.isNewQuery = !0);
        var c = [o.setDetailViewLoadingState(), o.setCampaignListLoading(), o.fetchCampaigns(n, r)(l)];
        return s.default(e)(c)
    }, v = function (e, t, n) {
        return function () {
            return m(e, t, n).then(function (r) {
                var i = [], a = e.cursor("campaigns").get("activeCampaign");
                return l.isDesktop() ? a ? a && !e.cursor("campaigns").getIn(["campaignCache", a]) ? (i.push(o.fetchCampaign(t, n)({
                    brandGUID: e.cursor("session").get("activeBrand"),
                    campaignGUID: a
                })), s.default(e)(i)) : r : (i.push(o.setFirstCampaignActive()), s.default(e)(i)) : r
            }).then(function () {
                return g(e, t)
            }).catch(u.mapErrorMsg(c.campaignErrors))
        }
    }, k = function (e, t, n) {
        return function () {
            return m(e, t, n).catch(u.mapErrorMsg(c.campaignErrors))
        }
    }, b = function (e, n, r) {
        return function () {
            if (d(e))return s.default(e)([]);
            var i = e.cursor("campaigns").get("filter"), a = i.get("offset") + i.get("limit"), l = i.get("query"), p = {
                brandGUID: e.cursor("session").get("activeBrand"),
                limit: "10",
                offset: a,
                currentListData: t.getCurrentListData(e)
            };
            l && (p.query = l);
            var f = [o.setDetailViewLoadingState(), o.setCampaignListNextpageLoading({newOffset: a})];
            return s.default(e)(f).then(function () {
                return s.default(e)([o.fetchCampaigns(n, r)(p)])
            }).then(function () {
                return g(e, n)
            }).catch(u.mapErrorMsg(c.campaignErrors))
        }
    }, y = function (e, t) {
        return function (n) {
            var r = e.cursor("bitlinks").getIn(["cache", n, "campaigns"], i.List()).toSet().subtract(e.cursor("campaigns").get("campaignCache").keySeq()).toArray();
            return r.length ? D(e, t, r) : s.default(e)([])
        }
    }, D = function (e, n, r) {
        var i = {
            brandGUID: e.cursor("session").get("activeBrand"),
            limit: "10",
            offset: "0",
            currentListData: t.getCurrentListData(e),
            campaignGUIDs: r
        }, a = [o.fetchCampaigns(n)(i)];
        return s.default(e)(a).catch(u.mapErrorMsg(c.campaignErrors))
    }, I = function (e, t) {
        return function () {
            return s.default(e)([o.getChannels(t)({brandGUID: e.cursor("session").get("activeBrand")})]).catch(u.mapErrorMsg(c.campaignErrors))
        }
    }, A = function (e, t, n) {
        return s.default(e)([o.createCampaign(t)({
            name: n.name,
            description: n.description,
            brandId: e.cursor("session").get("activeBrand")
        })]).then(function (r) {
            return n.channelIDs.length ? s.default(e)([o.addChannelToCampaign(t)({
                brandGUID: e.cursor("session").get("activeBrand"),
                campaignGUID: e.cursor("campaigns").get("activeCampaign"),
                createMultipleCampaignChannelsBody: {channels: n.channelIDs}
            })]) : r
        })
    }, E = function (e, t) {
        return function (n) {
            return A(e, t, n).then(function (t) {
                return f(e, n.openAddLinkSheet), t
            }).catch(u.mapErrorMsg(c.campaignErrors))
        }
    }, w = function (e, t) {
        return function (n) {
            return A(e, t, n).then(function (t) {
                return a.default.UI.closeSheet(), s.default(e)([o.setCampaign(e.cursor("campaigns").get("activeCampaign"))])
            }).catch(u.mapErrorMsg(c.campaignErrors))
        }
    }, C = function (e, t) {
        return function (t) {
            return s.default(e)([o.filterChannels(t)]).catch(u.mapErrorMsg(c.campaignErrors))
        }
    }, _ = function (e, t) {
        return function (t) {
            return s.default(e)([o.toggleChannels(t)]).then(function (e) {
                return a.default.Notification.closeNotification(), e
            }).catch(u.mapErrorMsg(c.campaignErrors))
        }
    }, U = function (e, t) {
        return function (n) {
            return s.default(e)([o.editChannel(t)({
                newChannel: n.newChannel,
                brandGUID: e.cursor("session").get("activeBrand"),
                channelGUID: n.channelGUID
            })]).catch(u.mapErrorMsg(c.campaignErrors))
        }
    }, S = function (e, t) {
        return function (n) {
            return s.default(e)([o.removeChannel(t)({
                brandGUID: e.cursor("session").get("activeBrand"),
                channelGUID: n.channelId
            })]).catch(u.mapErrorMsg(c.campaignErrors))
        }
    }, B = function (e, t) {
        return function (n) {
            return s.default(e)([o.addChannel(t)({
                channel: n.channel,
                brandGUID: e.cursor("session").get("activeBrand")
            })]).catch(u.mapErrorMsg(c.campaignErrors))
        }
    }, N = function (e, t) {
        return function (t) {
            return s.default(e)([o.setActiveCampaign(t)]).catch(u.mapErrorMsg(c.campaignErrors))
        }
    }, O = function (e, t) {
        return function (t) {
            return s.default(e)([o.setActiveChannel(t)]).catch(u.mapErrorMsg(c.campaignErrors))
        }
    }, T = function (e, t) {
        return function () {
            return s.default(e)([o.deselectCampaign()])
        }
    }, R = function (e, t) {
        return function (n) {
            var r = n.file, i = e.cursor(["campaigns", "activeCampaign"]).deref(), a = e.cursor(["session", "activeBrand"]).deref(), l = {
                activeCampaign: i,
                activeBrand: a,
                file: r
            };
            return s.default(e)([o.bulkUploadBitlinks(t)(l)]).then(function () {
                return D(e, t, [e.cursor("campaigns").get("activeCampaign")])
            }).catch(u.mapErrorMsg(c.campaignErrors))
        }
    }, L = function (e, t) {
        return function (n) {
            var r = e.cursor(["campaigns", "activeCampaign"]).deref(), i = e.cursor(["campaigns", "activeChannel"]).deref(), l = e.cursor(["session", "activeBrand"]).deref(), c = {
                id: n.id,
                channelGUID: n.channelGUID || i,
                campaignGUID: n.campaignGUID || r,
                brandGUID: l,
                domain: n.domain
            };
            return a.default.Notification.closeNotification(), s.default(e)([o.removeBitlink(t)(c)])
        }
    }, M = L, P = L, G = function (e, t) {
        return function (n) {
            var r = e.cursor(["campaigns", "activeCampaign"]).deref(), i = e.cursor("session").get("activeBrand");
            return s.default(e)([o.removeChannelFromCampaign(t)({
                brandGUID: i,
                campaignGUID: r,
                channelGUID: n
            })]).then(function (e) {
                return a.default.Notification.closeNotification(), e
            }).catch(u.mapErrorMsg(c.campaignErrors))
        }
    }, F = function (e, t) {
        return function (n) {
            var r = e.cursor(["campaigns", "activeCampaign"]).deref(), i = e.cursor("session").get("activeBrand"), l = {
                add_utm_params: n.add_utm_params,
                url: n.url,
                channel_guids: n.channel_guids,
                brandGUID: i,
                campaignGUID: r
            };
            return s.default(e)([o.addURLToMultipleChannels(t)(l)]).then(function (e) {
                return a.default.UI.closeAllSheets(), e
            }).catch(u.mapErrorMsg(c.campaignErrors))
        }
    }, z = function (e, t, n) {
        return function (r) {
            var i = e.cursor(["formData", "addLinkToCampaign", "selectedCampaign"]).deref(), l = e.cursor(["formData", "addLinkToCampaign", "selectedChannel"]).deref(), d = e.cursor("session").get("activeBrand"), p = {
                domain: r.domain,
                id: r.id,
                brandGUID: d,
                campaignGUID: i,
                channelGUID: l
            };
            return s.default(e)([o.addBitlinkToCampaign(t, n)(p)]).then(function (e) {
                return a.default.UI.closeAllSheets(), a.default.Notification.openDefaultNotification("MAIN", "Bitlink Added To Campaign.", ""), e
            }).catch(u.mapErrorMsg(c.campaignErrors))
        }
    }, x = function (e, t) {
        return function (t) {
            return s.default(e)([o.setCampaignChannel(t)])
        }
    }, q = function (e, t) {
        return function (t) {
            return s.default(e)([o.setCampaign(t)])
        }
    };
    t.default = r
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    var r = n(2), i = n(107), a = n(3), o = n(245), s = n(72), l = n(28), c = n(596), u = n(380), d = n(17), p = n(23), f = n(60), h = n(15), g = n(23), m = n(49), v = function (e, t, n) {
        var i = e.getIn(["campaigns", "activeCampaign"]) || t, a = (e.getIn(["campaigns", "activeChannel"]), e.getIn(["campaigns", "campaignCache", i])), o = (e.getIn(["campaigns", "clickCache", i, "data", "data"]), a.getIn(["campaign_channels", "channels"]).count(), 0), s = 0, l = function (e) {
            return e.map(function (e) {
                var t = e ? e.getIn(["channel_bitlinks", "bitlinks"]).count() : 0;
                return e = e.setIn(["channel_bitlinks", "total"], t), s += t, e
            })
        }, c = function (e) {
            return e && e.map(function (e) {
                    var t = e.getIn(["channel_bitlinks", "bitlinks"]).count(), n = 0, i = r.List();
                    return t && e.getIn(["channel_bitlinks", "bitlinks"]).forEach(function (e) {
                        var t = e.get("clicks");
                        n += e.get("total_clicks", 0), t && (i = i.mergeWith(function (e, t) {
                            return e && e.get("ts") === t.get("ts") ? t.set("clicks", t.get("clicks") + e.get("clicks")) : t
                        }, t))
                    }), e = e.setIn(["channel_bitlinks", "total"], t).setIn(["total_clicks"], n).setIn(["clicks"], i), o += n, e
                })
        };
        return e.updateIn(["campaigns", "campaignCache", i, "campaign_channels", "channels"], l).updateIn(["campaigns", "clickCache", i, "data", "data", "campaign_channels"], c).setIn(["campaigns", "campaignCache", i, "total_bitlinks"], s).setIn(["campaigns", "clickCache", i, "data", "data", "total_clicks"], o)
    };
    t.setSection = function () {
        return function (e) {
            return e.set("section", "campaigns")
        }
    }, t.setDetailViewLoadingState = function () {
        return function (e) {
            return e.setIn(["campaigns", "views", "detail", "loading"], !0)
        }
    }, t.setDetailViewLoadingStateFalse = function () {
        return function (e) {
            return e.setIn(["campaigns", "views", "list", "loading"], !1)
        }
    }, t.setClicksLoadingState = function (e) {
        return function (t) {
            var n = r.fromJS(e.reduce(function (e, t) {
                return e[t] = r.fromJS({data: {loading: !0, loadedOnce: !1, data: null}}), e
            }, {}));
            return t = t.mergeIn(["campaigns", "clickCache"], n)
        }
    }, t.setQuery = function (e) {
        return function (t) {
            return t.setIn(["campaigns", "filter", "query"], e)
        }
    }, t.deselectCampaign = function () {
        return function (e) {
            return e.setIn(["campaigns", "activeCampaign"], null).setIn(["campaigns", "activeChannel"], null)
        }
    }, t.setActiveCampaign = function (e) {
        return function (t) {
            var n = t.getIn(["campaigns", "activeCampaign"]);
            return e !== n && (n = e), t.setIn(["campaigns", "activeCampaign"], n).setIn(["campaigns", "activeChannel"], null)
        }
    }, t.setFirstCampaignActive = function () {
        return function (e) {
            var t = e.getIn(["campaigns", "views", "list", "data"]).first();
            return e.setIn(["campaigns", "activeCampaign"], t).setIn(["campaigns", "activeChannel"], null)
        }
    }, t.setActiveChannel = function (e) {
        return function (t) {
            return t.setIn(["campaigns", "activeChannel"], e)
        }
    }, t.setCampaignListLoading = function () {
        return function (e) {
            return e.setIn(["campaigns", "views", "list", "loading"], !0)
        }
    }, t.setCampaignListNextpageLoading = function (e) {
        return function (t) {
            return t.setIn(["campaigns", "views", "list", "loading"], !0).setIn(["campaigns", "filter", "offset"], e.newOffset)
        }
    };
    var k = function (e) {
        return e.campaign_channels.channels.map(function (e) {
            return e.channel_bitlinks.bitlinks ? e.channel_bitlinks.bitlinks = e.channel_bitlinks.bitlinks.map(function (e) {
                var t = e.link, n = d.protocolizeUrl(e.keyword_link);
                return new l.Bitlink({
                    created: 1e3 * e.created_ts,
                    domain: d.urlToDomain(t),
                    userHash: d.shortUrlToHash(t),
                    userLink: t,
                    keyword: d.shortUrlToHash(n),
                    keywordDomain: d.urlToDomain(n),
                    keywordLink: n,
                    longUrl: e.long_url,
                    title: e.title
                })
            }) : e.channel_bitlinks.bitlinks = [], e
        })
    };
    t.fetchCampaign = function (e, t) {
        return function (e) {
            return s.CampaignsApiFactory(t).getBrandCampaign(e).then(function (t) {
                return function (n) {
                    t.campaign_channels.channels = k(t);
                    var i = r.fromJS((a = {}, a[t.guid] = t, a));
                    return n = n.mergeIn(["campaigns", "campaignCache"], i).mergeIn(["campaigns", "views", "list", "data"], [e.campaignGUID]), n.setIn(["campaigns", "views", "detail", "loading"], !1);
                    var a
                }
            })
        }
    }, t.fetchCampaigns = function (e) {
        return function (e) {
            m.logger.debug("Calling CampaignStore#fetchCampaigns");
            var t = {brandGUID: e.brandGUID, limit: e.limit, offset: e.offset};
            return e.query && (t.search = e.query), e.campaignGUIDs && (t.campaignGuid = e.campaignGUIDs), s.CampaignsApiFactory().getAllBrandCampaigns(t).then(function (t) {
                return function (n) {
                    var a = r.fromJS(t.brand_campaigns.reduce(function (e, t) {
                        return t.campaign_channels.channels = k(t), e[t.guid] = t, e
                    }, {})), o = t.brand_campaigns.map(function (e) {
                        return e.guid
                    }), s = e.currentListData, l = r.fromJS({total: t.total, error: null, data: i(s.concat(o))});
                    return n = e.isNewQuery ? n.mergeIn(["campaigns", "campaignCache"], a).setIn(["campaigns", "views", "list"], l) : n.mergeIn(["campaigns", "campaignCache"], a).mergeIn(["campaigns", "views", "list"], l), n.setIn(["campaigns", "views", "detail", "loading"], !1)
                }
            })
        }
    }, t.getCampaignClicks = function (e) {
        return function (e) {
            return s.CampaignsApiFactory().getCampaignClicks({
                brandGUID: e.brandGUID,
                campaignGUID: e.campaignGUID
            }).then(function (e) {
                return function (t) {
                    return t.mergeIn(["campaigns", "clickCache", e.data.guid], {
                        data: e,
                        loading: !1,
                        loadedOnce: !0,
                        error: null
                    })
                }
            })
        }
    }, t.editCampaign = function (e) {
        return function (e) {
            return s.CampaignsApiFactory().updateBrandCampaign({
                updateBrandCampaignBody: {
                    description: e.description,
                    name: e.name
                }, brandGUID: e.brandGUID, campaignGUID: e.campaignGUID
            }).then(function () {
                return function (t) {
                    return t.mergeIn(["campaigns", "campaignCache", e.campaignGUID], r.fromJS({
                        description: e.description,
                        name: e.name
                    }))
                }
            })
        }
    }, t.createCampaign = function (e) {
        return function (e) {
            return s.CampaignsApiFactory().createBrandCampaign({
                createBrandCampaignBody: {
                    brand_guid: e.brandId,
                    description: e.description,
                    name: e.name
                }, brandGUID: e.brandId
            }).then(function (e) {
                e.campaign_channels = {channels: [], total: 0};
                var t = r.fromJS({
                    data: {
                        brand_guid: e.brand_guid,
                        campaign_channels: [],
                        created_by: e.created_by,
                        created_ts: e.created_ts,
                        description: e.description,
                        guid: e.guid,
                        modified_ts: e.modified_ts,
                        name: e.name,
                        total_clicks: 0
                    }, limit: 100, rollup: !1, unit: "day", unit_ref_ts: e.created_ts, units: -1
                });
                return function (n) {
                    return n.mergeIn(["campaigns", "campaignCache", e.guid], e).setIn(["campaigns", "clickCache", e.guid, "data"], t).updateIn(["campaigns", "views", "list", "data"], function (t) {
                        return t.unshift(e.guid)
                    }).setIn(["campaigns", "activeCampaign"], e.guid)
                }
            })
        }
    }, t.filterCampaignsByQuery = function (e) {
        return function (t) {
            return t.mergeDeepIn(["campaigns"], {filter: {query: e}})
        }
    }, t.filterChannels = function (e) {
        return function (t) {
            var n, i = t.getIn(["campaigns", "channelsCache"]).update(function (t) {
                return e.query.length ? t.filter(function (e) {
                    return !e.get("new")
                }) : t.filter(function (e) {
                    return !e.get("new") || e.get("enabled")
                })
            }), a = i.map(function (e) {
                return e.get("label")
            }), s = o.filterAndCreate(e.query, a, e.ignoreNew);
            n = s.error ? r.List() : s.filteredList;
            var l = t.getIn(["campaigns", "channelsCache"]).map(function (e) {
                return e.set("showing", n.includes(e.get("label")))
            }).filter(function (e) {
                return !e.get("new")
            });
            return s.isNewElement && (l = l.set(e.query, r.fromJS({
                label: e.query,
                showing: !1,
                new: !0,
                enabled: !1
            }))), t.setIn(["campaigns", "channelsCache"], l)
        }
    }, t.toggleChannels = function (e) {
        return function (t) {
            var n = t.getIn(["campaigns", "channelsCache"]).map(function (t) {
                return t.get("id") === e.get("id") ? e : t
            });
            return t.setIn(["campaigns", "channelsCache"], n)
        }
    }, t.getChannels = function (e) {
        return function (e) {
            return s.CampaignsApiFactory().getAllBrandChannels({brandGUID: e.brandGUID}).then(function (e) {
                var t = r.fromJS(e.channels.reduce(function (e, t) {
                    return e[t.guid] = {id: t.guid, label: t.name, enabled: !1, new: !1, showing: !1}, e
                }, {}));
                return function (e) {
                    return e.setIn(["campaigns", "channelsCache"], t)
                }
            })
        }
    }, t.addChannel = function (e) {
        return function (e) {
            return s.CampaignsApiFactory().createBrandChannel({
                createChannelBody: {name: e.channel},
                brandGUID: e.brandGUID
            }).then(function (t) {
                return function (n) {
                    return n.mergeIn(["campaigns", "channelsCache", t.guid], {
                        label: e.channel,
                        id: t.guid,
                        enabled: !1,
                        showing: !0,
                        new: !1
                    })
                }
            })
        }
    }, t.removeChannel = function (e) {
        return function (e) {
            return s.CampaignsApiFactory().deleteBrandChannel({
                brandGUID: e.brandGUID,
                channelGUID: e.channelGUID
            }).then(function () {
                return function (t) {
                    return t.deleteIn(["campaigns", "channelsCache", e.channelGUID])
                }
            })
        }
    }, t.editChannel = function (e) {
        return function (e) {
            return s.CampaignsApiFactory().updateBrandChannel({
                updateBrandChannelBody: {name: e.newChannel},
                brandGUID: e.brandGUID,
                channelGUID: e.channelGUID
            }).then(function (t) {
                return function (t) {
                    return t.setIn(["campaigns", "channelsCache", e.channelGUID, "label"], e.newChannel)
                }
            })
        }
    }, t.bulkUploadBitlinks = function (e) {
        return function (e) {
            return s.CampaignsApiFactory().bulkAdd({
                file: e.file,
                brandGUID: e.activeBrand,
                campaignGUID: e.activeCampaign
            }).then(function (e) {
                m.logger.debug("Calling CampaignStore#bulkUploadBitlinks");
                var t = e.data;
                if (e.message && t.results) {
                    var n = "data:text/csv;charset=utf-8," + t.results.map(function (e) {
                            return e.split(",").map(function (e) {
                                return g.campaignImportErrors[e] || e
                            }).join(",")
                        }).join("\n");
                    if ("OK" === e.message)a.default.Notification.openDefaultNotification("MAIN", "Success", "Bitlinks Added To Channels! Select channels to see newly added Bitlinks."); else {
                        var i = t.channel_bitlink_failures + t.csv_format_failures + t.keyword_failures + t.link_save_failures, o = i + t.successes, s = {
                            aspect: "ERROR",
                            title: t.successes + " of " + o + " Bitlinks Created!",
                            downloadable: r.Map({
                                linkMessage: i + " long URL(s) included errors.",
                                linkDataUri: encodeURI(n),
                                linkText: "Download results.csv for errors."
                            })
                        };
                        a.default.Notification.openNotification(new h.default(s))
                    }
                } else a.default.Notification.openDefaultNotification("ERROR", "Error", "Oops, there's been an error");
                return function (e) {
                    return e
                }
            })
        }
    }, t.removeBitlink = function (e) {
        return function (e) {
            return s.CampaignsApiFactory().deleteChannelBitlink(e).then(function (t) {
                return m.logger.debug("Calling CampaignStore#removeBitlink"), function (t) {
                    var n = function (t) {
                        return t && t.map(function (t) {
                                if (t.get("guid") || t.get("channel_guid") === e.channelGUID) {
                                    var n = t.getIn(["channel_bitlinks", "bitlinks"]).filter(function (t) {
                                        return (t.get("userHash") || d.shortUrlToHash(d.protocolizeUrl(t.get("bitlink_id")))) !== e.id
                                    });
                                    return t.setIn(["channel_bitlinks", "bitlinks"], n)
                                }
                                return t
                            })
                    };
                    return t = t.updateIn(["campaigns", "campaignCache", e.campaignGUID, "campaign_channels", "channels"], n).updateIn(["campaigns", "clickCache", e.campaignGUID, "data", "data", "campaign_channels"], n).updateIn(["bitlinks", "cache", e.id, "campaigns"], function (t) {
                        return t && t.filter(function (t) {
                                return t !== e.campaignGUID
                            })
                    }), v(t, e.campaignGUID, e.channelGUID)
                }
            })
        }
    }, t.removeChannelFromCampaign = function (e) {
        return function (e) {
            return s.CampaignsApiFactory().deleteCampaignChannel(e).then(function (t) {
                return function (t) {
                    var n = t.getIn(["campaigns", "campaignCache", e.campaignGUID, "campaign_channels", "channels"]), r = n.filter(function (t) {
                        return t.get("guid") !== e.channelGUID
                    }), i = t.getIn(["campaigns", "clickCache", e.campaignGUID, "data", "data", "campaign_channels"]).filter(function (t) {
                        return t.get("channel_guid") !== e.channelGUID
                    });
                    return t = t.setIn(["campaigns", "campaignCache", e.campaignGUID, "campaign_channels", "channels"], r).setIn(["campaigns", "channelsCache", e.channelGUID, "enabled"], !1).setIn(["campaigns", "campaignCache", e.campaignGUID, "campaign_channels", "total"], r.count()).setIn(["campaigns", "clickCache", e.campaignGUID, "data", "data", "campaign_channels"], i), v(t, "", "")
                }
            })
        }
    }, t.addBitlinkToCampaign = function (e, t) {
        return function (e) {
            return s.CampaignsApiFactory(t).createChannelBitlink(e).then(function (t) {
                return function (n) {
                    n = n.updateIn(["bitlinks", "cache", e.id, "campaigns"], function (e) {
                        return e.push(t.campaign_guid)
                    });
                    var i, a = n.getIn(["campaigns", "campaignCache", e.campaignGUID, "campaign_channels", "channels"], r.List()), o = f.parseBitlinkFromCampaign(t), s = a.findKey(function (t) {
                        return t.get("channel_guid") === e.channelGUID
                    });
                    return i = s >= 0 ? a.update(s, function (e) {
                        var t = e.getIn(["channel_bitlinks", "bitlinks"], r.List()).push(o);
                        return e.setIn(["channel_bitlinks", "bitlinks"], t).setIn(["channel_bitlinks", "total"], t.count())
                    }) : a.push(new c.CampaignChannel({
                        created_ts: t.created_ts,
                        campaign_guid: t.campaign_guid,
                        channel_guid: t.channel_guid,
                        channel_name: n.getIn(["campaigns", "channelsCache", t.channel_guid, "label"]),
                        channel_bitlinks: new u.ChannelBitlink({bitlinks: r.List([o]), total: 1})
                    })), n.mergeIn(["campaigns", "campaignCache", e.campaignGUID, "campaign_channels", "channels"], i)
                }
            })
        }
    }, t.addURLToMultipleChannels = function (e) {
        return function (e) {
            return s.CampaignsApiFactory().addURLToCampaignChannels({
                addURLBody: {
                    url: e.url,
                    channel_guids: e.channel_guids,
                    add_utm_params: e.add_utm_params
                }, brandGUID: e.brandGUID, campaignGUID: e.campaignGUID
            }).then(function (t) {
                var n = t.data;
                if (t.message)if ("OK" === t.message)a.default.Notification.openDefaultNotification("MAIN", "Success", "Bitlinks Added To Channels"); else if ("PARTIAL_SUCCESS" === t.message) {
                    var i = n.create_bitlink_failures + n.other_link_failures + n.shorten_failures, o = i + n.successes;
                    a.default.Notification.openDefaultNotification("MAIN", "Partial success", n.successes + " of " + o + " Bitlinks Created!")
                } else {
                    var s = p.campaignErrors[n.results[0].channel_bitlink_error] || p.campaignErrors[t.message] || p.genericErrors.DEFAULT;
                    a.default.Notification.openDefaultNotification("ERROR", s.title, s.text)
                }
                return function (t) {
                    if (n && n.successes > 0) {
                        var i = n.results.reduce(function (e, t) {
                            return e[t.channel_guid] = t, e
                        }, {}), a = t.getIn(["campaigns", "campaignCache", e.campaignGUID, "campaign_channels", "channels"]), o = a.map(function (e) {
                            var t = i[e.get("guid")];
                            if (t && t.new_channel_bitlink) {
                                var n = d.protocolizeUrl(t.keyword_link), a = new l.Bitlink({
                                    created: 1e3 * t.bitlink_created_ts,
                                    domain: d.urlToDomain(t.url),
                                    userHash: t.hash,
                                    keyword: d.shortUrlToHash(n),
                                    keywordDomain: d.urlToDomain(n),
                                    keywordLink: n,
                                    userLink: t.url,
                                    longUrl: t.long_url,
                                    globalHash: t.global_hash,
                                    title: t.title
                                }), o = e.getIn(["channel_bitlinks", "bitlinks"], r.List()).push(a);
                                return e.setIn(["channel_bitlinks", "bitlinks"], o).setIn(["channel_bitlinks", "total"], o.count())
                            }
                            return e
                        });
                        t.mergeIn(["campaigns", "campaignCache", e.campaignGUID, "campaign_channels", "channels"], o)
                    }
                    return v(t, "", "")
                }
            })
        }
    }, t.addChannelToCampaign = function (e) {
        return function (e) {
            return s.CampaignsApiFactory().createMultipleCampaignChannels(e).then(function (t) {
                return function (n) {
                    var i = n.getIn(["campaigns", "campaignCache", e.campaignGUID, "campaign_channels", "channels"], r.List()), a = n.getIn(["campaigns", "clickCache", e.campaignGUID, "data", "data", "campaign_channels"], r.List()), o = !1;
                    i.count() || (o = !0);
                    for (var s = 0, l = t.campaign_channels; s < l.length; s++) {
                        var c = l[s];
                        i = i.push(r.fromJS({
                            guid: c.channel_guid,
                            created_ts: c.created_ts,
                            brand_guid: e.brandGUID,
                            channel_bitlinks: {bitlinks: [], total: 0},
                            name: c.channel_name
                        })), a = a.push(r.fromJS({
                            campaign_guid: e.campaignGUID,
                            channel_bitlinks: {bitlinks: [], total: 0},
                            channel_guid: c.channel_guid,
                            channel_name: c.channel_name,
                            created_ts: null,
                            total_clicks: 0
                        }))
                    }
                    return n = o ? n.mergeIn(["campaigns", "campaignCache", e.campaignGUID], r.fromJS({
                        campaign_channels: {
                            channels: i,
                            total: i.size
                        }
                    })) : n.mergeIn(["campaigns", "campaignCache", e.campaignGUID, "campaign_channels", "channels"], i).setIn(["campaigns", "campaignCache", e.campaignGUID, "campaign_channels", "total"], i.count()), n = n.mergeIn(["campaigns", "clickCache", e.campaignGUID, "data", "data", "campaign_channels"], a).setIn(["campaigns", "activeChannel"], null), v(n, "", "")
                }
            })
        }
    }, t.setCampaignChannel = function (e) {
        return function (t) {
            return t.setIn(["formData", "addLinkToCampaign", "selectedChannel"], e)
        }
    }, t.setCampaign = function (e) {
        return function (t) {
            return t.setIn(["formData", "addLinkToCampaign", "selectedCampaign"], e)
        }
    }
}, function (e, t, n) {
    "use strict";
    var r = this && this.__extends || function () {
            var e = Object.setPrototypeOf || {__proto__: []}instanceof Array && function (e, t) {
                    e.__proto__ = t
                } || function (e, t) {
                    for (var n in t)t.hasOwnProperty(n) && (e[n] = t[n])
                };
            return function (t, n) {
                function r() {
                    this.constructor = t
                }

                e(t, n), t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
            }
        }();
    Object.defineProperty(t, "__esModule", {value: !0});
    var i = n(2), a = n(380), o = function (e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }

        return r(t, e), t
    }(i.Record({
        created_ts: null,
        campaign_guid: "",
        channel_guid: "",
        channel_name: "",
        channel_bitlinks: new a.ChannelBitlink
    }));
    t.CampaignChannel = o
}, function (e, t, n) {
    "use strict";
    function r(e, t) {
        i.default.API.loadCustomBitlinkTotalClicks.listen(l(e, t)), i.default.API.loadCustomBitlinkTimeSeriesClicks.listen(c(e, t)), i.default.API.loadCustomBitlinkPastUrlClicks.listen(u(e, t)), i.default.API.loadCustomBitlinkBatchClicks.listen(d(e, t))
    }

    Object.defineProperty(t, "__esModule", {value: !0});
    var i = n(3), a = n(598), o = n(21), s = function (e) {
        return e.cursor(["sectionDateFilters", e.cursor("section").deref()]).deref()
    }, l = function (e, t) {
        return function (n) {
            var r = [a.setTotalClicksLoadingState(n.keywordLink), a.loadCustomBitlinkTotalClicks(t)(n)];
            return o.default(e)(r)
        }
    }, c = function (e, t) {
        return function (n) {
            var r = s(e), i = [a.setTimeSeriesClicksLoadingState({
                keywordLink: n.keywordLink,
                dateFilter: r
            }), a.loadCustomBitlinkTimeSeriesClicks(t)({
                keywordLink: n.keywordLink,
                dateCreated: n.dateCreated,
                dateFilter: r
            })];
            return o.default(e)(i)
        }
    }, u = function (e, t) {
        return function (n) {
            var r = n.keywordLink;
            return o.default(e)([a.loadPastUrlClicks(t)({keywordLink: r})])
        }
    }, d = function (e, t) {
        return function (n) {
            return o.default(e)([a.loadBatchClicks(t)(n)])
        }
    };
    t.default = r
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    var r = n(2), i = n(5), a = n(13), o = n(61), s = n(129), l = n(107), c = n(60), u = n(25), d = {
        views: {
            list: {loading: !0},
            detail: {loading: !0}
        }
    };
    t.setCustomBitlinkLoading = function () {
        return function (e) {
            return e.mergeDeepIn(["customBitlinks"], d), e
        }
    }, t.selectItemInCache = function (e) {
        return function (t) {
            return t.setIn(["customBitlinks", "activeKeywordLink"], e).setIn(["customBitlinks", "selectedBitlinks"], r.List()).setIn(["customBitlinks", "views", "detail", "loading"], !1).setIn(["customBitlinks", "views", "detail", "data"], e), t
        }
    }, t.loadCustomBitlinks = function (e) {
        return function () {
            return u.V3TransitionFactory(e).getCustomBitlinks({limit: 30, offset: 0}).then(function (e) {
                var t = e.data.result_count, n = e.data.custom_bitlinks.map(c.parseCustomBitlink);
                return {
                    total: t, bitlinks: n, keywordLinks: l(n.map(function (e) {
                        return e.get("keywordLink")
                    }))
                }
            }).then(function (e) {
                var t = e.bitlinks, n = e.total, i = e.keywordLinks;
                return function (e) {
                    var a = e.getIn(["customBitlinks", "cache"]), o = r.Map(s.reduceByKey(r.fromJS(t), "keywordLink")).filter(function (e) {
                        return !a.has(e.get("keywordLink"))
                    });
                    return e.mergeIn(["customBitlinks", "cache"], o).setIn(["customBitlinks", "views", "detail", "loading"], !1).setIn(["customBitlinks", "views", "detail", "loadedOnce"], !0).setIn(["customBitlinks", "views", "list", "loading"], !1).setIn(["customBitlinks", "views", "list", "loadedOnce"], !0).setIn(["customBitlinks", "views", "list", "total"], n).setIn(["customBitlinks", "views", "list", "data"], r.List(i)), e
                }
            })
        }
    }, t.setTotalClicksLoadingState = function (e) {
        return function (t) {
            return t.mergeDeepIn(["customBitlinks", "cache", e, "totalClicks"], {loading: !0}), t
        }
    }, t.setTimeSeriesClicksLoadingState = function (e) {
        return function (t) {
            return t.mergeDeepIn(["customBitlinks", "clickCache", e.dateFilter, e.keywordLink, "clickHistory"], new a.LoadableMap), t
        }
    }, t.loadCustomBitlinkTotalClicks = function (e) {
        return function (t) {
            var n = t.keywordLink;
            return u.V3TransitionFactory(e).getKeywordLinkClicks({link: n, timezone: 0}).then(function (e) {
                return function (t) {
                    return t.mergeDeepIn(["customBitlinks", "cache", n], {
                        totalClicks: {
                            data: e.data.keyword_clicks,
                            loading: !1,
                            loadedOnce: !0
                        }
                    }), t
                }
            })
        }
    }, t.loadPastUrlClicks = function (e) {
        return function (t) {
            var n = t.keywordLink;
            return u.V3TransitionFactory(e).getKeywordClicksByDestination(n, 1e3).then(function (e) {
                return function (t) {
                    if (e.data.keyword_destinations.length)for (var r = t.getIn(["customBitlinks", "cache", n, "pastUrls", "data"]), i = 0, a = e.data.keyword_destinations; i < a.length; i++) {
                        var o = a[i];
                        !function (e) {
                            var i = r.findIndex(function (t) {
                                return e.user_hash === t.user_hash
                            });
                            null !== i && t.updateIn(["customBitlinks", "cache", n, "pastUrls", "data", i], function (t) {
                                return t.set("clicks", e.clicks)
                            })
                        }(o)
                    }
                    return t
                }
            })
        }
    }, t.loadBatchClicks = function (e) {
        return function (t) {
            return u.V3TransitionFactory(e).getMultipleKeywordClicks(t).then(function (e) {
                var t = r.fromJS(e.data.keyword_clicks.reduce(function (e, t) {
                    return e[t.bitlink] = {
                        totalClicks: new a.Loadable({
                            data: t.clicks,
                            loading: !1,
                            loadedOnce: !0
                        })
                    }, e
                }, {}));
                return function (e) {
                    return e.mergeDeepIn(["customBitlinks", "cache"], t), e
                }
            })
        }
    }, t.loadCustomBitlinkTimeSeriesClicks = function (e) {
        return function (t) {
            var n = t.keywordLink, s = o.dateFilterTimeSeriesParams(n, t.dateFilter, !1, i.utc(t.dateCreated));
            return u.V3TransitionFactory(e).getKeywordLinkClicks(s).then(function (e) {
                var i = new a.LoadableMap({data: r.fromJS(e.data), loadedOnce: !0});
                return function (e) {
                    return e.mergeDeepIn(["customBitlinks", "clickCache", t.dateFilter, n, "clickHistory"], i), e
                }
            })
        }
    }
}, function (e, t, n) {
    "use strict";
    function r(e, t, n) {
        i.default.Dashboard.loadDashboard.listen(d(e, t, n)), i.default.Dashboard.setDateFilter.listen(p(e, t, n)), i.default.Dashboard.resetDateFilter.listen(f(e, t, n))
    }

    Object.defineProperty(t, "__esModule", {value: !0});
    var i = n(3), a = n(21), o = n(169), s = n(381), l = n(16), c = function (e) {
        return function (t) {
            var n = t.loading, r = t.fetcher, i = t.error;
            return a.default(e)([n]).then(function (t) {
                return a.default(e)([r])
            }).catch(function (t) {
                return a.default(e)([i(t.err)]), Promise.reject(t)
            })
        }
    }, u = function (e, t, n) {
        var r = n.cursor("session").get("activeBrand"), i = l.default[n.cursor().get("productTier", "free")], a = n.cursor(["sectionDateFilters", "dashboard"]).deref();
        return [{
            loading: s.loadingBrandClicks(),
            fetcher: s.fetchBrandClicks(e)(r, a),
            error: s.errorBrandClicks
        }, {
            loading: s.loadingBrandPopularLinks(),
            fetcher: s.fetchBrandPopularLinks(e)(r, a, i.MAX_POPULAR_LINKS),
            error: s.errorBrandPopularLinks
        }, {
            loading: s.loadingBitlyNetworkPopularLinks(),
            fetcher: s.fetchBitlyNetworkPopularLinks(e)(r, a, i.MAX_POPULAR_LINKS),
            error: s.errorBitlyNetworkPopularLinks
        }, {
            loading: s.loadingBrandCountries(),
            fetcher: s.fetchBrandCountries(e)(r, a, 100),
            error: s.errorBrandCountries
        }, {
            loading: s.loadingBrandReferrers(),
            fetcher: s.fetchBrandReferrers(e)(r, a, 100),
            error: s.errorBrandReferrers
        }, {
            loading: s.loadingLinksCreated(),
            fetcher: s.fetchLinksCreated(e)(r, a),
            error: s.errorLinksCreated
        }, {
            loading: s.loadingBitlyNetworkLinksCreated(),
            fetcher: s.fetchBitlyNetworkLinksCreated(e)(r, a),
            error: s.errorBitlyNetworkLinksCreated
        }, {
            loading: s.loadingTotalUniques(),
            fetcher: s.fetchTotalUniques(e)(r, a),
            error: s.errorTotalUniques
        }, {
            loading: s.loadingTotalBrandClicksPerUnique(),
            fetcher: s.fetchTotalBrandClicksPerUnique(e)(r, a),
            error: s.errorTotalBrandClicksPerUnique
        }, {
            loading: s.loadingTotalNetworkClicks(),
            fetcher: s.fetchTotalNetworkClicks(e, t)(r, a),
            error: s.errorTotalNetworkClicks
        }]
    }, d = function (e, t, n) {
        return function () {
            return a.default(e)([o.setSection("dashboard")]).then(h(e, t, n))
        }
    }, p = function (e, t, n) {
        return function (r, i) {
            return a.default(e)([s.setDateFilter(r, i)]).catch(function (e) {
                throw e
            }).then(h(e, t, n))
        }
    }, f = function (e, t, n) {
        return function () {
            return a.default(e)([s.resetDateFilter()]).then(h(e, t, n))
        }
    }, h = function (e, t, n) {
        return function (r) {
            var i = u(t, n, e);
            return Promise.all(i.map(c(e))).then(function (e) {
                return e[0]
            }).catch(function (e) {
                return e
            })
        }
    };
    t.default = r
}, function (e, t, n) {
    "use strict";
    function r(e, t) {
        i.default.Preferences.setPreference.listen(s(e, t)), i.default.Preferences.setUnsafeGraphPreference.listen(c(e, t)), i.default.Preferences.setUnsafeBrandPreference.listen(u(e, t)), i.default.Preferences.setDomainPreference.listen(d(e, t)), i.default.Preferences.dismissContent.listen(l(e, t))
    }

    Object.defineProperty(t, "__esModule", {value: !0});
    var i = n(3), a = n(264), o = n(21), s = function (e, t) {
        return function (n) {
            return o.default(e)([a.setPreference(t)(n)]).catch(function (e) {
                return i.default.Notification.openDefaultNotification("ERROR", "Oops, we were unable to save your preference", ""), e
            })
        }
    }, l = function (e, t) {
        return function (n) {
            return o.default(e)([a.setUnsafeDismissedContent(t, n)]).catch(function (e) {
                return i.default.Notification.openDefaultNotification("ERROR", "Oops, we were unable to save your preference", ""), e
            })
        }
    }, c = function (e, t) {
        return function (n) {
            return o.default(e)([a.setUnsafePreference(t, "bbt2_graph_panel_state", n)]).catch(function (e) {
                return i.default.Notification.openDefaultNotification("ERROR", "Oops, we were unable to save your preference", ""), e
            })
        }
    }, u = function (e, t) {
        return function (n) {
            return o.default(e)([a.setUnsafePreference(t, "preferred_brand", n)]).catch(function (e) {
                return i.default.Notification.openDefaultNotification("ERROR", "Oops, we were unable to save your preference", ""), e
            })
        }
    }, d = function (e, t) {
        return function (n) {
            return o.default(e)([a.setDomainPreference(t)(n)]).catch(function (e) {
                return i.default.Notification.openDefaultNotification("ERROR", e.err.json.status_txt, ""), e
            })
        }
    };
    t.default = r
}, function (e, t, n) {
    "use strict";
    function r(e, t, n) {
        a.default.Organizations.addOrgUserRole.listen(d(e, t)), a.default.Organizations.editOrgUserRole.listen(p(e, t)), a.default.Organizations.editOrgName.listen(f(e, t)), a.default.Organizations.createBrandAndMakeActiveBrand.listen(m(e, t, n)), a.default.Organizations.createBrandAndInviteUser.listen(g(e, t, n)), a.default.Organizations.editBrand.listen(v(e, t, n)), a.default.Organizations.removeBrand.listen(y(e, t)), a.default.Organizations.removeActiveUserFromActiveOrg.listen(h(e, t)), a.default.Organizations.openBrandUserRoleForUser.listen(D(e, t)), a.default.Organizations.openBrandUserRoleForUserAndBrand.listen(I(e, t)), a.default.Organizations.openOrgUserRoleForUser.listen(A(e, t)), a.default.Organizations.openNewOrgUserRole.listen(E(e, t)), a.default.Organizations.openEditBrand.listen(_(e, t)), a.default.Organizations.openCreateBrand.listen(w(e, t)), a.default.Organizations.removeActiveUserForEdit.listen(C(e, t))
    }

    Object.defineProperty(t, "__esModule", {value: !0});
    var i = n(2), a = n(3), o = n(21), s = n(23), l = n(91), c = n(92), u = n(172), d = function (e, t) {
        return function (n) {
            var r = n.login, i = n.roleName, u = n.brandGUIDs;
            r = r.trim();
            var d = e.cursor(["session", "activeOrganization"]).deref(), p = e.cursor(["organizations", d]).toJS();
            return o.default(e)([l.addUserWithRoleToOrganization(t)(p, r, i)]).then(function (n) {
                return 0 !== u.length ? o.default(e)(u.map(function (e) {
                    return c.addUserWithRoleToBrand(t)(r, "read-write", e)
                })) : n
            }).then(function (t) {
                a.default.UI.closeSheet();
                var n = e.cursor(["organizations", d, "name"]);
                return a.default.Notification.openDefaultNotification("MAIN", "User added", "'" + r + "' was added to '" + n + "'"), t
            }).catch(function (e) {
                var t = s.genericErrors.DEFAULT;
                return e.err && e.err.message && s.orgErrors[e.err.message] && (t = s.orgErrors[e.err.message]), a.default.Notification.openDefaultNotification("ERROR", t.title, t.text), Promise.reject(e)
            })
        }
    }, p = function (e, t) {
        return function (n) {
            var r = e.cursor(["session", "activeOrganization"]).deref(), i = e.cursor(["formData", "activeUserForEdit"]).deref(), s = e.cursor(["orgUserRoles", r, i]).deref();
            return o.default(e)([l.editOrgUserRole(t)(r, i, s, n)]).then(function (t) {
                a.default.UI.closeSheet();
                var o = e.cursor(["organizations", r, "name"]).deref();
                return a.default.Notification.openDefaultNotification("MAIN", "Role Change", "'" + i + "' has been changed from " + s + " to " + n + " in '" + o + "'"), t
            }).catch(function (e) {
                return a.default.Notification.openDefaultNotification("ERROR", "Oops, there's been an error", ""), Promise.reject(e)
            })
        }
    }, f = function (e, t) {
        return function (n) {
            var r = e.cursor(["session", "activeOrganization"]).deref();
            return o.default(e)([l.editOrgName(t)(r, n)]).then(function (e) {
                return a.default.UI.closeSheet(), e
            }).catch(function (e) {
                return a.default.Notification.openDefaultNotification("ERROR", "We couldn't update the name at this time", ""), Promise.reject(e)
            })
        }
    }, h = function (e, t) {
        return function () {
            var n = e.cursor(["session", "activeOrganization"]).deref(), r = e.cursor(["formData", "activeUserForEdit"]).deref(), i = e.cursor(["orgUserRoles", n, r]).deref();
            return o.default(e)([l.removeUser(t)(n, r, i), l.setActiveUserForEdit(null)]).then(function (t) {
                var i = e.cursor(["organizations", n, "name"]).deref();
                return a.default.Notification.openDefaultNotification("MAIN", "User removed", "'" + r + "' was removed from '" + i + "'"), a.default.UI.closeSheet(), t
            }).catch(function (t) {
                var i = e.cursor(["organizations", n, "name"]).deref();
                return a.default.Notification.openDefaultNotification("ERROR", "Error removing User", "'" + r + "' cannot be removed from '" + i + "'"), Promise.reject(t)
            })
        }
    }, g = function (e, t, n) {
        return function (r, i, s) {
            var c = e.cursor(["session", "user", "login"]).deref();
            return o.default(e)([l.createBrandAndMakeActiveBrand(t, n)(r, c, i)]).then(function (r) {
                var i = e.cursor("session").get("activeBrand");
                return o.default(e)(s.map(function (e) {
                    return u.addBrandBSD(t, n)(i, e)
                }))
            }).then(function (e) {
                return a.default.UI.openSheet("BrandUserRole"), e
            })
        }
    }, m = function (e, t, n) {
        return function (r, i) {
            var s = e.cursor(["session", "activeOrganization"]).deref(), c = e.cursor(["session", "user", "login"]).deref();
            return o.default(e)([l.createBrandAndMakeActiveBrand(t)(s, c, r)]).then(function (e) {
                return a.default.Notification.openDefaultNotification("MAIN", "Brand created", "Brand '" + r + "' has been created"), e
            }).then(function (r) {
                var a = e.cursor("session").get("activeBrand");
                return o.default(e)(i.map(function (e) {
                    return u.addBrandBSD(t, n)(a, e)
                }))
            }).catch(function (e) {
                return a.default.Notification.openDefaultNotification("ERROR", "Oops, there's been an error", ""), Promise.reject(e)
            })
        }
    }, v = function (e, t, n) {
        return function (r, i, a) {
            var o = e.cursor(["brands", r]).deref(), s = [];
            return o.get("name") !== i.trim() && s.push(k(e, t)(r, i)), s.push(b(e, t, n)(r, a)), Promise.all(s).then(function (e) {
                return e[0]
            })
        }
    }, k = function (e, t) {
        return function (n, r) {
            var i = e.cursor(["brands", n]).deref();
            return o.default(e)([l.editBrandName(t)(n, r)]).then(function (e) {
                var t = "Group name has been changed from '" + i.get("name") + "' to '" + r + "'";
                return a.default.Notification.openDefaultNotification("MAIN", t, ""), e
            }).catch(function (e) {
                return a.default.Notification.openDefaultNotification("ERROR", "We couldn't update the name at this time", ""), Promise.reject(e)
            })
        }
    }, b = function (e, t, n) {
        return function (r, s) {
            var l = e.cursor(["brands", r, "bsds"]).deref().toSet(), c = i.Set(s), d = c.subtract(l).reduce(function (i, a) {
                return i.set(a, o.default(e)([u.addBrandBSD(t, n)(r, a)]))
            }, i.Map()), p = l.subtract(c).reduce(function (i, a) {
                return i.set(a, o.default(e)([u.removeBrandBSD(t, n)(r, a)]))
            }, i.Map());
            return Promise.all(d.valueSeq().concat(p.valueSeq()).toArray()).then(function (e) {
                return e[0]
            }).catch(function (e) {
                return a.default.Notification.openDefaultNotification("ERROR", "We couldn't update all of your BSDs at this time", ""), Promise.reject(e)
            })
        }
    }, y = function (e, t) {
        return function (n) {
            var r = e.cursor(["brands", n, "name"]).deref();
            return o.default(e)([l.removeBrand(t)(n)]).then(function (e) {
                return a.default.Notification.openDefaultNotification("MAIN", "Delete brand", "Brand '" + r + "' has been deleted"), e
            }).catch(function (e) {
                return a.default.Notification.openDefaultNotification("ERROR", "Oops, there's been an error", ""), Promise.reject(e)
            })
        }
    }, D = function (e, t) {
        return function (t) {
            return o.default(e)([l.setActiveUserForEdit(t)]).then(function (e) {
                return a.default.UI.openSheet("BrandUserRole"), e
            }).catch(function (e) {
                return a.default.Notification.openDefaultNotification("ERROR", "Oops, there's been an error", ""), Promise.reject(e)
            })
        }
    }, I = function (e, t) {
        return function (t, n) {
            return o.default(e)([l.setActiveUserForEdit(t), l.setActiveBrandForEdit(n)]).then(function (e) {
                return e
            }).catch(function (e) {
                return a.default.Notification.openDefaultNotification("ERROR", "Oops, there's been an error", ""), Promise.reject(e)
            })
        }
    }, A = function (e, t) {
        return function (t) {
            return o.default(e)([l.setActiveUserForEdit(t)]).then(function (e) {
                return a.default.UI.openSheet("EditOrgUserRole"), e
            }).catch(function (e) {
                return a.default.Notification.openDefaultNotification("ERROR", "Oops, there's been an error", ""), Promise.reject(e)
            })
        }
    }, E = function (e, t) {
        return function () {
            return o.default(e)([l.clearActiveUserForEdit()]).then(function (e) {
                return a.default.UI.openSheet("CreateOrgUserRole"), e
            }).catch(function (e) {
                return a.default.Notification.openDefaultNotification("ERROR", "Oops, there's been an error", ""), Promise.reject(e)
            })
        }
    }, w = function (e, t) {
        return function () {
            return o.default(e)([l.setActiveBrandForEdit(null)]).then(function (e) {
                return a.default.UI.openSheet("createBrand"), e
            }).catch(function (e) {
                return a.default.Notification.openDefaultNotification("ERROR", "Oops, there's been an error", ""), Promise.reject(e)
            })
        }
    }, C = function (e, t) {
        return function () {
            return o.default(e)([l.clearActiveUserForEdit()])
        }
    }, _ = function (e, t) {
        return function (t) {
            return o.default(e)([l.setActiveBrandForEdit(t)]).then(function (e) {
                return a.default.UI.openSheet("editBrand"), e
            }).catch(function (e) {
                return a.default.Notification.openDefaultNotification("ERROR", "Oops, there's been an error", ""), Promise.reject(e)
            })
        }
    };
    t.default = r
}, function (e, t, n) {
    "use strict";
    function r(e, t) {
        i.default.Brands.addUserWithRoleToBrand.listen(c(e, t)), i.default.Brands.removeUserWithRoleFromBrand.listen(u(e, t)), i.default.Brands.editUserRoleInBrand.listen(d(e, t))
    }

    Object.defineProperty(t, "__esModule", {value: !0});
    var i = n(3), a = n(21), o = n(91), s = n(92), l = n(50), c = function (e, t) {
        return function (n, r, o) {
            return a.default(e)([s.addUserWithRoleToBrand(t)(n, r, o)]).then(function (t) {
                i.default.UI.closeAllSheets();
                var r = e.cursor(["brands", o]).get("name", o);
                return i.default.Notification.openDefaultNotification("MAIN", "Brand Add User", "'" + n + "' has been invited to '" + r + "'"), t
            }).catch(function (e) {
                return i.default.UI.closeAllSheets(), l.genericErrorMsg(e)
            })
        }
    }, u = function (e, t) {
        return function (n, r, o) {
            e.cursor(["session", "activeOrganization"]).deref();
            if (!e.cursor(["brandUserRoles", o, n]).deref())return i.default.Notification.openDefaultNotification("ERROR", "User does not have role.", ""), a.default(e)([]);
            var c = e.cursor(["brands", o]).get("name", o);
            return a.default(e)([s.removeUserWithRoleFromBrand(t)(n, r, o)]).then(function (e) {
                return i.default.Notification.openDefaultNotification("MAIN", "User is removed from this brand", "'" + n + "' has been removed from '" + c + "'"), i.default.UI.closeSheet(), i.default.Notification.closeNotification(), e
            }).catch(function (e) {
                return i.default.UI.closeSheet(), l.genericErrorMsg(e)
            })
        }
    }, d = function (e, t) {
        return function (n, r, c) {
            var u = (e.cursor(["session", "activeOrganization"]).deref(), e.cursor(["brandUserRoles", c, n]).deref());
            if (!u)return i.default.Notification.openDefaultNotification("ERROR", "User does not have role.", ""), a.default(e)([]);
            if (r === u)return i.default.Notification.openDefaultNotification("MAIN", "User role unchanged", ""), a.default(e)([]);
            var d = e.cursor(["brands", c]).get("name", c);
            return a.default(e)([s.editUserRoleInBrand(t)(n, u, c, r), o.setActiveUserForEdit(null), o.setActiveBrandForEdit(null)]).then(function (e) {
                return i.default.Notification.openDefaultNotification("MAIN", "User", "'" + n + "' has changed roles from '" + u + "' to '" + r + "' for brand '" + d + "'"), i.default.UI.closeSheet(), e
            }).catch(function (e) {
                return i.default.UI.closeSheet(), l.genericErrorMsg(e)
            })
        }
    };
    t.default = r
}, function (e, t, n) {
    "use strict";
    function r(e, t) {
        i.default.Users.getFullUser.listen(d(e, t)), i.default.Users.setEmailForEdit.listen(p(e, t)), i.default.API.addEmail.listen(f(e, t)), i.default.API.removeEmail.listen(g(e, t)), i.default.API.updateEmail.listen(m(e, t)), i.default.Notification.confirmSetAsPrimaryEmail.listen(v(e, t)), i.default.API.resendVerificationEmail.listen(k(e, t)), i.default.Users.addUserBrandRoles.listen(h(e, t))
    }

    Object.defineProperty(t, "__esModule", {value: !0});
    var i = n(3), a = n(21), o = n(170), s = n(92), l = n(15), c = n(23), u = n(50), d = function (e, t) {
        return function (n) {
            return a.default(e)([o.fetchUser(t)(n)]).catch(u.mapErrorMsg(c.userActionsErrors))
        }
    }, p = function (e, t) {
        return function (t) {
            return a.default(e)([o.setEmailForEdit(t)]).catch(function (e) {
                return i.default.Notification.openDefaultNotification("ERROR", "Oops, there's been an error", ""), Promise.reject(e)
            })
        }
    }, f = function (e, t) {
        return function (n) {
            return a.default(e)([o.addEmail(t)({
                login: n.login,
                email: n.email,
                isPrimary: n.isPrimary
            })]).then(function (e) {
                var t = {aspect: "MAIN", title: "Email has been added", text: ""};
                return i.default.Notification.openNotification(new l.default(t)), i.default.UI.closeSheet(), e
            }).catch(u.mapErrorMsg(c.userActionsErrors))
        }
    }, h = function (e, t) {
        return function (n) {
            var r = n.login, o = n.roleName, l = n.brandGUIDs;
            return a.default(e)(l.map(function (e) {
                return s.addUserWithRoleToBrand(t)(r, o, e)
            })).then(function (e) {
                return i.default.UI.closeSheet(), i.default.Notification.openDefaultNotification("MAIN", "New Brands Added to user", ""), e
            }).catch(u.mapErrorMsg(c.userActionsErrors))
        }
    }, g = function (e, t) {
        return function (n) {
            return a.default(e)([o.removeEmail(t)(n)]).then(function (e) {
                return i.default.UI.closeSheet(), e
            }).catch(u.mapErrorMsg(c.userActionsErrors))
        }
    }, m = function (e, t) {
        return function (n) {
            return a.default(e)([o.updateEmailForUser(t)(n)]).catch(u.mapErrorMsg(c.userActionsErrors))
        }
    }, v = function (e, t) {
        return function (n) {
            return a.default(e)([o.updateEmailForUser(t)({
                login: n.login,
                email: n.email,
                newEmail: n.newEmail,
                isPrimary: !0
            })]).then(function (e) {
                return i.default.Notification.closeNotification(), i.default.UI.closeSheet(), e
            }).catch(u.mapErrorMsg(c.userActionsErrors))
        }
    }, k = function (e, t) {
        return function (n) {
            var r = e.cursor().getIn(["session", "user", "login"]);
            return a.default(e)([o.resendVerificationEmail(t)({login: r, email: n})]).then(function (e) {
                var t = {
                    aspect: "MAIN",
                    title: "Verification Sent",
                    text: "Check your email for your verification token"
                };
                return i.default.Notification.openNotification(new l.default(t)), i.default.UI.closeSheet(), e
            }).catch(u.mapErrorMsg(c.userActionsErrors))
        }
    };
    t.default = r
}, function (e, t, n) {
    "use strict";
    function r(e, t) {
        a.default.UI.connectAccount.listen(u(e, t)), a.default.API.removeSharedAccount.listen(d(e, t))
    }

    Object.defineProperty(t, "__esModule", {value: !0});
    var i = n(85), a = n(3), o = n(21), s = n(17), l = n(171), c = {
        facebook: "/a/add_facebook_account",
        twitter: "/a/add_twitter_account"
    }, u = function (e, t) {
        return function (t) {
            var n = c[t], r = location.href, a = e.cursor(["session"]).get("activeBrand", "default"), o = "default" !== a ? {
                brand_guid: a,
                rd: s.appDomainURL(r)
            } : {rd: s.appDomainURL(r)};
            return location.href = s.rootDomainUrl(n + "?" + i.stringify(o)), null
        }
    }, d = function (e, t) {
        return function (n, r) {
            return o.default(e)([l.removeShareAccount(t)(n, r)]).catch(function (e) {
                return a.default.Notification.openDefaultNotification("ERROR", "Error", "We cannot find this account to delete."), Promise.reject(e)
            })
        }
    };
    t.default = r
}, function (e, t, n) {
    "use strict";
    function r(e, t, n) {
        i.default.Organizations.addOrgBSD.listen(d(e, t, n)), i.default.Organizations.removeOrgBSD.listen(f(e, t, n)), i.default.Organizations.revalidateOrgBSD.listen(p(e, t, n)), i.default.Organizations.addBrandBSD.listen(g(e, t, n)), i.default.Organizations.removeBrandBSD.listen(m(e, t, n)), i.default.Forms.stageBrandBSDAddition.listen(v(e, t, n)), i.default.Forms.stageBrandBSDRemoval.listen(k(e, t, n)), i.default.Organizations.setBsdForAddOrEdit.listen(b(e, t, n)), i.default.Organizations.updateOrgBSD.listen(h(e, t, n)), i.default.Organizations.openNewBsdSheet.listen(y(e, t))
    }

    Object.defineProperty(t, "__esModule", {value: !0});
    var i = n(3), a = n(21), o = n(172), s = n(15), l = n(606), c = n(50), u = n(14), d = function (e, t, n) {
        return function (r) {
            var u = e.cursor().getIn(["session", "activeOrganization"], "default");
            return a.default(e)([o.addOrgBSD(t, n)(u, r)]).then(function (e) {
                var t = {
                    aspect: "MAIN",
                    title: "Verification Pending",
                    text: "Please check back soon to see domain status"
                };
                return i.default.Notification.openNotification(new s.default(t)), e
            }).then(l.delayPromiseResolution(3e3)).then(function (r) {
                var i = e.cursor().getIn(["session", "activeOrganization"], "default");
                return a.default(e)([o.fetchOrgBSDs(t, n)(i)])
            }).catch(c.genericErrorMsg)
        }
    }, p = function (e, t, n) {
        return function (r) {
            var i = e.cursor().getIn(["session", "activeOrganization"], "default");
            return a.default(e)([o.revalidateOrgBSD(t, n)(i, r)]).catch(c.genericErrorMsg)
        }
    }, f = function (e, t, n) {
        return function (r) {
            var s = e.cursor().getIn(["session", "activeOrganization"], "default");
            return a.default(e)([o.removeOrgBSD(t, n)(s, r)]).then(function (e) {
                return i.default.Notification.closeNotification(), i.default.UI.closeSheet(), e
            }).catch(c.genericErrorMsg)
        }
    }, h = function (e, t, n) {
        return function (r, i) {
            var s = e.cursor().getIn(["session", "activeOrganization"], "default"), l = e.cursor(["bsds", s, r]).deref(), d = u(l.toJS(), {
                https_enabled: i.https_enabled,
                wildcard_redirect: i.wildcard_redirect || l && l.get("wildcard_redirect", ""),
                root_redirect: i.root_redirect || l && l.get("root_redirect", "")
            });
            return a.default(e)([o.updateOrgBSD(t, n)(s, r, d)]).catch(c.genericErrorMsg)
        }
    }, g = function (e, t, n) {
        return function (r, i) {
            return a.default(e)([o.addBrandBSD(t, n)(r, i)]).catch(c.genericErrorMsg)
        }
    }, m = function (e, t, n) {
        return function (r, i) {
            return a.default(e)([o.removeBrandBSD(t, n)(r, i)]).catch(c.genericErrorMsg)
        }
    }, v = function (e, t, n) {
        return function (t) {
            return a.default(e)([o.stageBrandBSDAddition(t)])
        }
    }, k = function (e, t, n) {
        return function (t) {
            return a.default(e)([o.stageBrandBSDRemoval(t)])
        }
    }, b = function (e, t, n) {
        return function (t) {
            return a.default(e)([o.setBsdForAddOrEdit(t)]).then(function (e) {
                return t.is_active ? i.default.UI.openSheet("orgDomainEdit") : i.default.UI.openSheet("orgDomainAdd"), e
            }).catch(c.genericErrorMsg)
        }
    }, y = function (e, t) {
        return function () {
            return a.default(e)([o.clearBsdForEdit()]).then(function (e) {
                return i.default.UI.openSheet("orgDomainAdd"), e
            }).catch(c.genericErrorMsg)
        }
    };
    t.default = r
}, function (e, t, n) {
    "use strict";
    function r(e) {
        return function (t) {
            return new Promise(function (n, r) {
                setTimeout(function () {
                    n(t)
                }, e)
            })
        }
    }

    Object.defineProperty(t, "__esModule", {value: !0}), t.delayPromiseResolution = r
}, function (e, t, n) {
    "use strict";
    function r(e, t) {
        i.default.UI.openSheet.listen(s(e, t)), i.default.UI.closeSheet.listen(l(e, t)), i.default.UI.closeAllSheets.listen(u(e, t)), i.default.UI.openOnlySheet.listen(d(e, t)), i.default.UI.closeSheetByName.listen(c(e, t))
    }

    Object.defineProperty(t, "__esModule", {value: !0});
    var i = n(3), a = n(608), o = n(21), s = function (e, t) {
        return function (t) {
            return o.default(e)([a.openSheet(t)])
        }
    }, l = function (e, t) {
        return function () {
            return o.default(e)([a.closeSheet()])
        }
    }, c = function (e, t) {
        return function (t) {
            return o.default(e)([a.closeSheetByName(t)])
        }
    }, u = function (e, t) {
        return function () {
            return o.default(e)([a.closeAllSheets()])
        }
    }, d = function (e, t) {
        return function (t) {
            return o.default(e)([a.openSheetByName(t)])
        }
    };
    t.default = r
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    var r = n(2);
    t.openSheet = function (e) {
        return function (t) {
            return t.update("actionSheets", function (t) {
                return t.push(e)
            })
        }
    }, t.closeSheet = function () {
        return function (e) {
            return e.update("actionSheets", function (e) {
                return e.pop()
            })
        }
    }, t.closeSheetByName = function (e) {
        return function (t) {
            return t.update("actionSheets", function (t) {
                return t.filterNot(function (t) {
                    return t === e
                })
            })
        }
    }, t.closeAllSheets = function () {
        return function (e) {
            return e.update("actionSheets", function (e) {
                return e.clear()
            })
        }
    }, t.openSheetByName = function (e) {
        return function (t) {
            return t.update("actionSheets", function () {
                return r.List([e])
            })
        }
    }
}, function (e, t, n) {
    "use strict";
    function r(e, n, r) {
        i.default.API.loadPopularClicks.listen(t.onLoadLinkHistorySortedByClicks(e, n, r))
    }

    Object.defineProperty(t, "__esModule", {value: !0});
    var i = n(3), a = n(21), o = n(610);
    t.onLoadLinkHistorySortedByClicks = function (e, t) {
        return function () {
            var n = e.cursor("session").get("activeBrand"), r = e.cursor(["sectionDateFilters", "performance"]).deref();
            return a.default(e)([o.loadingPopularLinks(), o.fetchBrandPopularLinks(t)(n, r)]).then(function (t) {
                var n = e.cursor(["bitlinks", "views", "list", "data"]).first(), r = e.cursor(["bitlinks"]).get("activeBitlink");
                return (r || n) && i.default.UI.select(r || n), i.default.API.loadShortensByDay(), i.default.API.loadPerformanceData(), t
            }).catch(function (t) {
                return a.default(e)([o.errorPopularLinks(t)])
            })
        }
    }, t.default = r
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    var r = n(25), i = n(381);
    t.loadingPopularLinks = function () {
        return a(["bitlinks", "views", "list"])
    }, t.errorPopularLinks = function (e) {
        return o(["bitlinks", "views", "list"], e)
    };
    var a = function (e) {
        return function (t) {
            return t.updateIn(e, function (e) {
                return e.set("loading", !0)
            })
        }
    }, o = function (e, t) {
        return function (n) {
            return n.updateIn(e, function (e) {
                return e.set("loading", !1).set("error", t)
            })
        }
    };
    t.fetchBrandPopularLinks = function (e) {
        return function (t, n) {
            return r.V3TransitionFactory(e, t).getUserPopularLinks(n.toJS()).then(function (r) {
                return i.popularLinksFetcherHelper(e, t, r, n).then(function (e) {
                    return function (t) {
                        return e(t).setIn(["bitlinks", "views", "list"], i.popularLinksLodableList(r))
                    }
                })
            })
        }
    }
}, function (e, t, n) {
    "use strict";
    function r(e, t, n) {
        i.default.Deeplinks.createDeeplinkApp.listen(u(e, t)), i.default.Deeplinks.editDeeplinkApp.listen(f(e, t)), i.default.Deeplinks.editDeeplinkRule.listen(g(e, t)), i.default.Deeplinks.createDeeplinkRule.listen(k(e, t)), i.default.Deeplinks.updateDeeplinkFlag.listen(d(e, t)), i.default.Deeplinks.deactivateDeeplinkRule.listen(v(e, t)), i.default.Deeplinks.deactivateDeeplinkApp.listen(y(e, t)), i.default.Deeplinks.openDeeplinksAppEdit.listen(D(e, t)), i.default.Deeplinks.thirdPartyAppLookup.listen(p(e, t)), i.default.Deeplinks.getDeeplinkRules.listen(h(e, t)), i.default.UI.toggleApp.listen(I(e, t)), i.default.UI.setAppFallback.listen(E(e, t)), i.default.UI.setInstallPreference.listen(w(e, t)), i.default.Forms.setSiteAssociationForm.listen(U(e, t)), i.default.Deeplinks.updateAppAssociations.listen(_(e, t)), i.default.UI.setAppForLinkException.listen(A(e, t)), i.default.Deeplinks.getDeeplinkMetrics.listen(b(e, t))
    }

    Object.defineProperty(t, "__esModule", {value: !0});
    var i = n(3), a = n(21), o = n(173), s = n(23), l = n(50), c = function (e) {
        return i.default.UI.closeAllSheets(), e
    }, u = function (e, t) {
        return function (n) {
            var r = n.organizationGUID, i = n.deeplinkApp;
            return a.default(e)([o.createDeeplinkApp(t)(r, i)]).then(c).catch(l.mapErrorMsg(s.deeplinkErrors))
        }
    }, d = function (e, t) {
        return function (t) {
            var n = t.id, r = t.domain;
            return a.default(e)([o.updateDeeplinkFlag(n, r)]).catch(l.mapErrorMsg(s.deeplinkErrors))
        }
    }, p = function (e, t) {
        return function (n) {
            var r = n.organizationGUID, c = n.thirdPartyAppId, u = n.os, d = n.refresh;
            return a.default(e)([o.thirdPartyAppLookup(t)(r, c, u)]).then(function (e) {
                return d && i.default.Notification.openDefaultNotification("MAIN", "", "App icon has been refreshed."), e
            }).catch(l.mapErrorMsg(s.deeplinkErrors))
        }
    }, f = function (e, t) {
        return function (n) {
            var r = n.organizationGUID, i = n.deeplinkAppGUID, u = n.deeplinkApp;
            return a.default(e)([o.editDeeplinkApp(t)(r, i, u)]).then(c).catch(l.mapErrorMsg(s.deeplinkErrors))
        }
    }, h = function (e, t) {
        return function (n, r, i) {
            return a.default(e)([o.getDeeplinkRules(t)(n, r, i)]).catch(l.mapErrorMsg(s.deeplinkErrors))
        }
    }, g = function (e, t) {
        return function (n) {
            var r = n.brandGUID, i = n.domain, c = n.id, u = n.deeplinkRuleGUID, d = n.deeplinkRule;
            return a.default(e)([o.editDeeplinkRule(t)({
                brandGUID: r,
                domain: i,
                id: c,
                deeplinkRuleGUID: u,
                deeplinkRule: d
            })]).then(function (t) {
                return m(t, e, i, c)
            }).catch(l.mapErrorMsg(s.deeplinkErrors))
        }
    }, m = function (e, t, n, r) {
        return i.default.UI.closeAllSheets(), i.default.Notification.openDefaultNotification("MAIN", t.cursor("bitlinks").getIn(["cache", r, "hasDomainDeeplinks"]) ? "Alternate deep link path has been created" : "Deep link has been created", ""), e
    }, v = function (e, t) {
        return function (n) {
            var r = n.brandGUID, c = n.domain, u = n.id, d = n.deeplinkRuleGUID, p = n.closeAllSheets;
            return a.default(e)([o.deactivateDeeplinkRule(t)({
                brandGUID: r,
                domain: c,
                id: u,
                deeplinkRuleGUID: d
            }), o.updateDeeplinkFlag(u, c)]).then(function (e) {
                return i.default.Notification.closeNotification(), p && i.default.UI.closeAllSheets(), e
            }).catch(l.mapErrorMsg(s.deeplinkErrors))
        }
    }, k = function (e, t) {
        return function (n) {
            var r = n.brandGUID, i = n.domain, c = n.id, u = n.deeplinkRule;
            return a.default(e)([o.createDeeplinkRule(t)({
                brandGUID: r,
                domain: i,
                id: c,
                deeplinkRule: u
            }), o.updateDeeplinkFlag(c, i)]).then(function (t) {
                return m(t, e, i, c)
            }).catch(l.mapErrorMsg(s.deeplinkErrors))
        }
    }, b = function (e, t) {
        return function () {
            var n = e.cursor("session").get("activeBrand"), r = e.cursor("bitlinks").get("activeBitlink"), i = e.cursor("bitlinks").getIn(["cache", r, "domain"]), c = e.cursor("bitlinks").getIn(["cache", r, "userHash"]), u = e.cursor("sectionDateFilters").get(e.cursor("section")).deref(), d = u.unit, p = u.units, f = u.unit_reference_ts, h = e.cursor("bitlinks").getIn(["cache", r, "hasLinkDeeplinks"]), g = (e.cursor("siteAssociation").getIn([i, "data"]), e.cursor("bitlinks").getIn(["cache", r, "hasDomainDeeplinks"])), m = e.cursor("bitlinks").getIn(["deeplinkMetrics", r]);
            return (!h && !g || m ? a.default(e)([]) : a.default(e)([o.getDeeplinkMetrics(t)({
                brandGUID: n,
                domain: i,
                id: c,
                unit: d,
                units: p,
                unitRefTs: f
            })])).catch(l.mapErrorMsg(s.deeplinkErrors))
        }
    }, y = function (e, t) {
        return function (n) {
            var r = n.organizationGUID, c = n.deeplinkAppGUID;
            return a.default(e)([o.deactivateDeeplinkApp(t)(r, c)]).then(function (e) {
                return i.default.UI.closeAllSheets(), i.default.Notification.closeNotification(), e
            }).catch(l.mapErrorMsg(s.deeplinkErrors))
        }
    }, D = function (e, t) {
        return function (t, n) {
            return a.default(e)([o.setActiveDeeplinksAppForEdit(t)]).then(function (e) {
                switch (n) {
                    case"android":
                        i.default.UI.openSheet("editAndroidApp");
                        break;
                    case"ios":
                        i.default.UI.openSheet("editiOSApp")
                }
                return e
            }).catch(l.mapErrorMsg(s.deeplinkErrors))
        }
    }, I = function (e, t) {
        return function (t, n) {
            return a.default(e)([o.toggleApp(t, n)])
        }
    }, A = function (e, t) {
        return function (t, n, r) {
            return a.default(e)([o.setAppForLinkException(t, n, r)])
        }
    }, E = function (e, t) {
        return function (t, n) {
            return a.default(e)([o.setAppFallback(t, n)])
        }
    }, w = function (e, t) {
        return function (t, n) {
            return a.default(e)([o.setInstallPreference(t, n)])
        }
    }, C = function (e, t) {
        var n = e.cursor("formData").getIn(["siteAssociation", "appFallback", "ios"]), r = e.cursor("formData").getIn(["siteAssociation", "appFallback", "android"]);
        return e.cursor("formData").getIn(["siteAssociation", "appList", t]).toJS().reduce(function (e, i, a) {
            return e.push({app_guid: i, priority: a + 1, os: t, fallback: i === ("ios" === t ? n : r)}), e
        }, [])
    }, _ = function (e, t) {
        return function () {
            var n = e.cursor("session").get("activeOrganization"), r = e.cursor("formData").getIn(["bsdForAddOrEdit", "branded_short_domain"]), u = C(e, "ios"), d = C(e, "android");
            return r ? a.default(e)([o.updateAppAssociations(t)({
                organizationGUID: n,
                bsd: r,
                appAssociation: {
                    branded_short_domain: r,
                    ios_apps: u,
                    android_apps: d,
                    ios_install_preference: e.cursor("formData").getIn(["siteAssociation", "ios_install_preference"]),
                    android_install_preference: e.cursor("formData").getIn(["siteAssociation", "android_install_preference"])
                }
            })]).then(c).catch(l.mapErrorMsg(s.deeplinkErrors)) : (i.default.Notification.openDefaultNotification("ERROR", "BSD is required", ""), a.default(e)([]))
        }
    }, U = function (e, t) {
        return function (t) {
            var n = e.cursor("session").get("activeOrganization");
            return a.default(e)([o.setSiteAssociationForm(n, t)])
        }
    };
    t.default = r
}, function (e, t, n) {
    "use strict";
    function r(e, t, n) {
        i.default.UI.setEmailForExport.listen(l(e, t)), i.default.DataExport.exportBitlinkData.listen(c(e, t)), i.default.DataExport.exportPerformanceData.listen(u(e, t))
    }

    Object.defineProperty(t, "__esModule", {value: !0});
    var i = n(3), a = n(21), o = n(613), s = n(50), l = function (e, t) {
        return function (t) {
            return a.default(e)([o.setEmailForExport(t)])
        }
    }, c = function (e, t) {
        return function (n) {
            var r = n.type, l = e.cursor("session").get("activeBrand"), c = e.cursor("bitlinks").get("filter").deref(), u = e.cursor("formData").get("emailForExport"), d = {
                report_type: r,
                emails: [u],
                created_before: c.created_before,
                created_after: c.created_after,
                query: c.query,
                archived: c.archived,
                custom_bitlink: c.custom_bitlink,
                link_deeplinks: c.deeplinks.get("link", "both"),
                domain_deeplinks: c.deeplinks.get("domain", "both"),
                tags: c.tags,
                limit: c.limit,
                offset: c.offset
            };
            return a.default(e)([o.exportData(t)(l, d)]).then(function (e) {
                return i.default.UI.closeAllSheets(), i.default.Notification.openDefaultNotification("MAIN", "Data Export in progress", "Your data is being exported and will be sent to the email specified, usually in 10-30 minutes."), e
            }).catch(s.genericErrorMsg)
        }
    }, u = function (e, t) {
        return function (n) {
            var r = n.type, l = e.cursor("session").get("activeBrand"), c = e.cursor("formData").get("emailForExport"), u = e.cursor("sectionDateFilters").get("performance").deref(), d = {
                report_type: r,
                emails: [c],
                unit: u.unit,
                units: u.units,
                unit_ref_ts: u.unit_reference_ts
            };
            return a.default(e)([o.exportPerformanceData(t)({
                brandGUID: l,
                dataExportQueryBody: d
            })]).then(function (e) {
                return i.default.UI.closeAllSheets(), i.default.Notification.openDefaultNotification("MAIN", "Data Export in progress", "Your data is being exported and will be sent to the email specified, usually in 10-30 minutes."), e
            }).catch(s.genericErrorMsg)
        }
    };
    t.default = r
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    var r = n(72);
    t.exportData = function (e, t) {
        return function (e, n) {
            return r.ExportApiFactory(t).postBrandDataExport({brandGUID: e, dataExportQueryBody: n}).then(function (e) {
                return function (e) {
                    return e
                }
            })
        }
    }, t.exportPerformanceData = function (e, t) {
        return function (e) {
            return r.ExportApiFactory(t).postBrandDataExport(e).then(function (e) {
                return function (e) {
                    return e
                }
            })
        }
    }, t.setEmailForExport = function (e) {
        return function (t) {
            return t.setIn(["formData", "emailForExport"], e), t
        }
    }
}, function (e, t, n) {
    "use strict";
    function r() {
        return !!history.replaceState
    }

    Object.defineProperty(t, "__esModule", {value: !0}), t.isBrowserSupported = r
}, function (e, t) {
    function n(e, t, n) {
        if ("function" != typeof e)throw new TypeError(r);
        return setTimeout(function () {
            e.apply(void 0, n)
        }, t)
    }

    var r = "Expected a function";
    e.exports = n
}, function (e, t, n) {
    "use strict";
    function r(e, t) {
        var n = {};
        for (var r in l)l.hasOwnProperty(r) && (n[a.statsDKeyName.apply(void 0, c.concat([r]))] = +l[r]());
        return t.incrOnce(n)
    }

    Object.defineProperty(t, "__esModule", {value: !0});
    var i = n(383), a = n(48), o = function (e, t) {
        window.addEventListener("load", function () {
            return i(r, e, t)
        })
    }, s = "undefined" != typeof window ? window : {}, l = {
        google_analytics: function () {
            return "function" == typeof s.ga && !s.ga.loaded
        }, intercom: function () {
            return "function" == typeof s.Intercom && Array.isArray(s.Intercom.q)
        }, twitter: function () {
            return !Boolean(s.twttr)
        }
    }, c = ["thirdparty", "bbt2", "blocked"];
    t.default = o
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    var r = n(0), i = n(1), a = n(5), o = n(618), s = n(638), l = n(641), c = n(643), u = n(647), d = n(48), p = n(382), f = n(651), h = n(374), g = n(377), m = n(376), v = n(375), k = n(378), b = n(16), y = n(652), D = n(137), I = n(61), A = {
        getInitialState: function () {
            return {didPageLoadTracking: !1}
        }, componentDidUpdate: function () {
            var e = this.props.cursor.get("section");
            if (this.props.cursor.getIn(["session", "featureFlags"]).has("bbt2_statsD_tracking") && p.supportPerformance() && !this.state.didPageLoadTracking)if ("bitlinks" === e || "performance" === e) {
                var t = this.props.cursor.get("bitlinks"), n = t.cursor("cache");
                t.cursor(["views", "list"]).get("loadedOnce") && t.cursor(["views", "detail"]).get("loadedOnce") && n.getIn([t.get("activeBitlink"), "globalEncoders", "loadedOnce"]) && ("bitlinks" === e ? p.trackPageLoadTimings("bitlinksPage", d.statsD) : p.trackPageLoadTimings("performancePage", d.statsD), this.setState({didPageLoadTracking: !0}))
            } else if ("dashboard" === e) {
                var r = this.props.cursor.get("dashboardOverview"), i = this.props.cursor.get("performance");
                (r.cursor(["linksCreated", "loadedOnce"]).deref() || r.cursor(["linksCreated", "error"])) && (i.getIn(["topReferrers", "loadedOnce"]) || i.getIn(["topReferrers", "error"])) && (p.trackPageLoadTimings("dashboardPage", d.statsD), this.setState({didPageLoadTracking: !0}))
            } else if ("customlinks" === e) {
                var a = this.props.cursor.get("customBitlinks");
                a.cursor(["views", "list"]).get("loadedOnce") && a.cursor(["views", "detail"]).get("loadedOnce") && a.getIn(["cache", a.get("activeKeywordLink"), "pastUrls", "loadedOnce"]) && (p.trackPageLoadTimings("customBitlinksPage", d.statsD), this.setState({didPageLoadTracking: !0}))
            }
        }
    };
    t.default = i("App", [A], function (e) {
        var t = e.cursor, n = t.cursor("section").deref(), i = I.getStartAndEndTime(t.cursor(["sectionDateFilters", n]).deref()), d = i.startDate, p = i.endDate;
        if ("bitlinks" === n || "performance" === n)return "bitlinks" === n && (d = t.cursor(["bitlinks", "filter"]).get("created_after"), p = t.cursor(["bitlinks", "filter"]).get("created_before")), r.createElement(f.default, {
            route: h.default,
            state: t,
            title: "Bitly | Bitlink Management"
        }, r.createElement(o.default, {
            calendar: new D.CalendarRD({
                maxTimespanInDays: y.getCalendarMinDate(t).maxTimespanInDays,
                minDate: y.getCalendarMinDate(t).minDate,
                selectedDateStart: d,
                selectedDateEnd: p
            }),
            page: t.cursor("bitlinks"),
            dateFilter: t.cursor(["sectionDateFilters", n]),
            section: t.cursor("section"),
            notification: t.cursor("notification"),
            easterEgg: t.cursor("easterEgg"),
            actionSheets: t.cursor("actionSheets"),
            user: t.cursor(["session", "user"]),
            performance: t.cursor("performance"),
            session: t.cursor("session"),
            deeplinkApps: t.cursor("deeplinkApps"),
            thirdPartyAppLookup: t.cursor("thirdPartyAppLookup"),
            accountSettings: t.cursor("accountSettings"),
            preferences: t.cursor(["session", "preferences"]),
            siteWideMessage: t.cursor("siteWideMessage"),
            productTier: t.cursor("productTier"),
            config: t.cursor("config"),
            brand: t.cursor("brand"),
            userList: t.cursor("users"),
            formData: t.cursor("formData"),
            campaigns: t.cursor("campaigns"),
            brands: t.cursor("brands"),
            organizations: t.cursor("organizations"),
            brandUserRoles: t.cursor("brandUserRoles"),
            orgUserRoles: t.cursor("orgUserRoles"),
            shareAccounts: t.cursor("shareAccounts"),
            bsds: t.cursor(["bsds", t.cursor(["session", "activeOrganization"]).deref()]),
            siteAssociation: t.cursor("siteAssociation")
        }));
        if ("dashboard" === n) {
            var A = b.default[t.cursor("productTier").deref()].MAX_DASHBOARD_DAYS, E = a().utc().subtract(A, "days");
            return r.createElement(f.default, {
                route: v.default,
                state: t,
                title: "Bitly | Link Dashboard"
            }, r.createElement(u.default, {
                calendar: new D.CalendarRD({
                    maxTimespanInDays: A,
                    minDate: E,
                    selectedDateStart: d,
                    selectedDateEnd: p
                }),
                page: t.cursor("bitlinks"),
                dateFilter: t.cursor("sectionDateFilters"),
                section: t.cursor("section"),
                notification: t.cursor("notification"),
                easterEgg: t.cursor("easterEgg"),
                actionSheets: t.cursor("actionSheets"),
                user: t.cursor(["session", "user"]),
                session: t.cursor("session"),
                deeplinkApps: t.cursor("deeplinkApps"),
                accountSettings: t.cursor("accountSettings"),
                preferences: t.cursor(["session", "preferences"]),
                siteWideMessage: t.cursor("siteWideMessage"),
                dashboardOverview: t.cursor("dashboardOverview"),
                productTier: t.cursor("productTier"),
                performance: t.cursor("performance"),
                config: t.cursor("config"),
                userList: t.cursor("users"),
                formData: t.cursor("formData"),
                campaigns: t.cursor("campaigns"),
                brands: t.cursor("brands"),
                organizations: t.cursor("organizations"),
                brandUserRoles: t.cursor("brandUserRoles"),
                orgUserRoles: t.cursor("orgUserRoles"),
                shareAccounts: t.cursor("shareAccounts"),
                bsds: t.cursor(["bsds", t.cursor(["session", "activeOrganization"]).deref()]),
                siteAssociation: t.cursor("siteAssociation")
            }))
        }
        if ("organization" === n)return r.createElement(f.default, {
            route: k.default,
            state: t,
            title: "Bitly | Account"
        }, r.createElement(l.default, {
            page: t.cursor("bitlinks"),
            notification: t.cursor("notification"),
            easterEgg: t.cursor("easterEgg"),
            actionSheets: t.cursor("actionSheets"),
            session: t.cursor("session"),
            accountSettings: t.cursor("accountSettings"),
            preferences: t.cursor(["session", "preferences"]),
            siteWideMessage: t.cursor("siteWideMessage"),
            config: t.cursor("config"),
            formData: t.cursor("formData"),
            productTier: t.cursor("productTier"),
            section: t.cursor("section"),
            brands: t.cursor("brands"),
            organizations: t.cursor("organizations"),
            organizationLimits: t.cursor("organizationLimits"),
            users: t.cursor("users"),
            brandUserRoles: t.cursor("brandUserRoles"),
            orgUserRoles: t.cursor("orgUserRoles"),
            shareAccounts: t.cursor("shareAccounts"),
            deeplinkApps: t.cursor("deeplinkApps"),
            bsds: t.cursor(["bsds", t.cursor(["session", "activeOrganization"]).deref()]),
            thirdPartyAppLookup: t.cursor("thirdPartyAppLookup"),
            siteAssociation: t.cursor("siteAssociation")
        }));
        if ("customlinks" === n)return r.createElement(f.default, {
            route: m.default,
            state: t,
            title: "Bitly | Custom Bitlinks"
        }, r.createElement(s.default, {
            page: t.cursor("customBitlinks"),
            dateFilter: t.cursor("sectionDateFilters"),
            section: t.cursor("section"),
            easterEgg: t.cursor("easterEgg"),
            bitlinks: t.cursor("bitlinks"),
            notification: t.cursor("notification"),
            actionSheets: t.cursor("actionSheets"),
            user: t.cursor(["session", "user"]),
            session: t.cursor("session"),
            deeplinkApps: t.cursor("deeplinkApps"),
            accountSettings: t.cursor("accountSettings"),
            preferences: t.cursor(["session", "preferences"]),
            siteWideMessage: t.cursor("siteWideMessage"),
            productTier: t.cursor("productTier"),
            config: t.cursor("config"),
            brand: t.cursor("brand"),
            userList: t.cursor("users"),
            formData: t.cursor("formData"),
            brands: t.cursor("brands"),
            organizations: t.cursor("organizations"),
            brandUserRoles: t.cursor("brandUserRoles"),
            orgUserRoles: t.cursor("orgUserRoles"),
            shareAccounts: t.cursor("shareAccounts"),
            campaigns: t.cursor("campaigns"),
            bsds: t.cursor(["bsds", t.cursor(["session", "activeOrganization"]).deref()]),
            siteAssociation: t.cursor("siteAssociation")
        }));
        if ("campaigns" === n)return r.createElement(f.default, {
            route: g.default,
            state: t,
            title: "Bitly | Campaigns"
        }, r.createElement(c.default, {
            page: t.cursor("bitlinks"),
            notification: t.cursor("notification"),
            easterEgg: t.cursor("easterEgg"),
            actionSheets: t.cursor("actionSheets"),
            dateFilter: t.cursor(["sectionDateFilters", n]),
            user: t.cursor(["session", "user"]),
            session: t.cursor("session"),
            deeplinkApps: t.cursor("deeplinkApps"),
            accountSettings: t.cursor("accountSettings"),
            preferences: t.cursor(["session", "preferences"]),
            siteWideMessage: t.cursor("siteWideMessage"),
            config: t.cursor("config"),
            userList: t.cursor("users"),
            productTier: t.cursor("productTier"),
            formData: t.cursor("formData"),
            section: t.cursor("section"),
            campaigns: t.cursor("campaigns"),
            brands: t.cursor("brands"),
            organizations: t.cursor("organizations"),
            brandUserRoles: t.cursor("brandUserRoles"),
            orgUserRoles: t.cursor("orgUserRoles"),
            shareAccounts: t.cursor("shareAccounts"),
            bsds: t.cursor(["bsds", t.cursor(["session", "activeOrganization"]).deref()]),
            siteAssociation: t.cursor("siteAssociation")
        }));
        throw new Error('Unknown "section": ' + n)
    })
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    var r = n(0), i = n(2), a = n(5), o = n(1), s = n(93), l = n(267), c = n(95), u = n(96), d = n(97), p = n(632), f = n(138), h = n(176), g = n(140), m = n(3), v = n(100), k = n(16), b = n(10), y = n(7), D = n(61), I = {
        onKeyPress: function (e) {
            y.keyEventsHandlerMixin.keyPressCheck(e, !0, this.props.notification.size)
        }, componentDidMount: function () {
            "enterprise" === this.props.productTier.deref() && (m.default.Campaigns.loadCampaigns(), m.default.UI.getBsdSiteAssociation()), document.body.addEventListener("keydown", this.onKeyPress, !1)
        }, componentWillUnmount: function () {
            document.body.removeEventListener("keydown", this.onKeyPress, !1)
        }
    }, A = {
        closeAllSheets: function () {
            this.dismissCustomizeCoachmark(), b.closeAllSheetsAnimation()
        }, dismissCustomizeCoachmark: function () {
            var e = !this.props.preferences.get("dismissedContent").has("customize_coachmark");
            this.props.actionSheets.contains("edit") && e && m.default.Preferences.dismissContent("customize_coachmark")
        }, emailDataExport: function (e) {
            m.default.UI.openOnlySheet("dataExport")
        }
    }, E = o("BitlinksPage", [I, A], function (e) {
        var t, n, o, m = e.calendar, b = e.page, I = e.dateFilter, A = e.section, E = e.notification, w = e.actionSheets, C = e.userList, _ = e.user, U = e.performance, S = e.session, B = e.accountSettings, N = e.preferences, O = e.siteWideMessage, T = e.productTier, R = (e.brand, e.easterEgg), L = e.config, M = e.formData, P = e.campaigns, G = e.deeplinkApps, F = e.thirdPartyAppLookup, z = e.siteAssociation, x = e.brands, q = e.organizations, j = e.brandUserRoles, H = e.orgUserRoles, V = e.shareAccounts, W = e.bsds, K = b.cursor("allTags").deref(), J = b.cursor("cache"), Y = b.cursor("selectedBitlinks").deref(), X = b.get("activeBitlink"), Q = b.cursor(["views", "list"]).get("data").map(function (e) {
            return J.cursor(e)
        }), Z = A.deref(), $ = w.size > 0 ? w.map(function (e) {
            return r.createElement(d.default, {
                key: e,
                action: e,
                activeBitlink: X ? J.get(X) : [],
                tags: K,
                user: _,
                session: S,
                filterSheet: b.cursor("filterSheet"),
                account: B,
                preferences: N,
                productTier: T,
                config: L,
                accountSettings: B,
                userList: C,
                formData: M,
                page: b,
                deeplinksFilter: b.cursor(["filter", "deeplinks"]),
                dateFilter: I,
                section: A,
                campaigns: P,
                deeplinkApps: G.deref().get("data", i.Map()),
                thirdPartyAppLookup: F,
                siteAssociation: z,
                brands: x,
                organizations: q,
                brandUserRoles: j,
                orgUserRoles: H,
                shareAccounts: V,
                calendar: m,
                bsds: W
            })
        }) : null, ee = w.size > 0 ? r.createElement("div", {
            className: "layout--action-sheet open",
            onClick: this.closeAllSheets
        }, $) : null, te = b.cursor("filter").get("created_before"), ne = b.cursor("filter").get("created_after"), re = "performance" === Z ? I.get("unit_reference_ts") : te || ne;
        re ? ("performance" === Z ? (n = D.getStartAndEndTime(I.deref()).startDate, o = D.getStartAndEndTime(I.deref()).endDate) : (n = ne, o = te), t = y.FilterPillMixin.dateFilterLabel(n, o)) : t = a.utc().subtract(k.default[T.deref()].MAX_CLICK_DAYS, "days").format("MMM DD") + " - " + a.utc().format("MMM DD");
        var ie = y.FilterPillMixin.getFilterPills(re, t, b.cursor("filter")), ae = re || 0 === ie.size, oe = U.cursor("totalClicks"), se = U.cursor("totalClicksSeries"), le = U.cursor(["topChannel"]).deref(), ce = U.cursor(["topCountry"]).deref(), ue = U.cursor(["topChannelSeries", "data"]), de = U.cursor(["topCountrySeries", "data"]), pe = b.cursor("linksCreated"), fe = b.cursor(["clickCache", I.deref()]), he = fe.get(X), ge = Y.reduce(function (e, t) {
            return e + fe.getIn([t, "clicks", "data", "ownClicks"])
        }, 0);
        return r.createElement("div", {className: "layout--MAIN " + (w.size > 0 ? "open" : "")}, R.deref() ? r.createElement(h.default, {type: R}) : null, O.deref() ? r.createElement(g.default, {message: O}) : null, E.size && r.createElement("div", {className: "layout--notification"}, r.createElement(u.default, {notification: E})), r.createElement("div", {className: "layout--primary-section"}, r.createElement(c.default, {
            query: b.cursor(["filter", "query"]),
            preferences: N,
            pageName: "Bitlinks",
            showFilter: !1,
            productTier: T,
            session: S,
            activeBrand: x.get(S.get("activeBrand"))
        }), b.getIn(["filter", "filterActive"]) ? null : r.createElement(p.default, {
            section: Z,
            productTier: T,
            totalClicksSeries: se,
            topChannelSeries: ue,
            topCountrySeries: de,
            totalBitlinksSeries: pe,
            startDate: n,
            endDate: o,
            totalClicks: oe,
            topChannel: le,
            topCountry: ce,
            dateRangeLabel: t,
            showSummary: ae,
            showFilter: "bitlinks" === Z,
            graphCollapsedPref: S.cursor(["preferences", "bbt2_graph_panel_state"]).deref(),
            isDateSelected: !!re,
            exportFn: "enterprise" === T.deref() ? this.emailDataExport : null
        }), ie.size ? r.createElement(v.default, {
            aspect: "FILTER",
            filterLabel: "Filters",
            items: ie,
            dateRangeLabel: t,
            isDateSelected: !!re,
            exportFn: "enterprise" === T.deref() ? this.emailDataExport : null
        }) : null), r.createElement("div", {
            className: "layout--wrapper",
            ref: "layoutWrapper"
        }, r.createElement(f.default, {
            section: Z,
            loadable: b.cursor(["views", "list"]),
            items: Q,
            clicksByDate: fe,
            dateFilter: I,
            dateRangeLabel: t,
            activeItem: X,
            selectedBitlinks: Y,
            filterActive: !!ie.size,
            easterEgg: R,
            session: S
        }), Y.isEmpty() ? r.createElement(s.default, {
            loadable: b.cursor(["views", "detail"]),
            activeBrand: S.get("activeBrand"),
            bitlink: X ? J.get(X) : null,
            clicksByHash: he,
            open: !!X,
            productTier: T,
            section: Z,
            config: L,
            campaigns: P,
            session: S,
            deeplinkMetrics: b.getIn(["deeplinkMetrics", X])
        }) : r.createElement(l.default, {
            selectedBitlinks: Y,
            totalSelectedClicks: ge,
            bitlink: X ? J.get(X) : [],
            activeBrand: S.get("activeBrand"),
            filter: b.cursor("filter"),
            dateFilter: I,
            cache: J,
            user: _,
            section: Z,
            productTier: T
        })), ee)
    });
    t.default = E
}, , , , , , , , , , , , , , function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    var r = n(0), i = n(2), a = n(1), o = n(3), s = n(4), l = n(75), c = n(64), u = n(116), d = n(633), p = n(24), f = n(135), h = n(77), g = n(16), m = ["#E2986B", "#D26663", "#F8CE1C", "#77DB9C", "#48CEFD", "#8F2AD1", "#D12A79", "#92A518", "#DC4E1E", "#C6C6C6"], v = function (e) {
        return {x: 1e3 * e.dt, y: e.clicks}
    }, k = function (e, t, n) {
        return {type: "line", name: t, color: m[n], data: e.map(v).reverse()}
    }, b = function (e, t) {
        var n = Object.keys(e)[0];
        return k(e[n], "unknown" === n ? "Email, SMS, Direct" : "other" === n ? "Other Websites" : n, t)
    }, y = function (e, t) {
        var n = Object.keys(e)[0], r = h.default[n];
        return "None" === n && (r = n), k(e[n], r, t)
    }, D = {
        getInitialState: function () {
            return {view: null}
        }, seriesToChart: function (e, t, n) {
            return i.fromJS({
                series: e, plotOptions: {
                    series: {
                        events: {
                            click: function (e) {
                                e.point.y && (e.point.selected ? o.default.UI.clearAllFilters() : o.default.UI.filterByDateRange(e.point.x, e.point.x))
                            }
                        }
                    }
                }, xAxis: {showFirstLabel: !1, startOnTick: !0, min: t, max: n}
            })
        }, mapTimeSeriesToPoints: function (e, t, n, r) {
            return e.map(function (e) {
                var i = e.get("dt");
                return {x: 1e3 * i, y: e.get(t), selected: i >= n && i < r}
            }).reverse().toJS()
        }, metricsToChart: function () {
            var e, t, n = this.props, r = n.totalBitlinksSeries, i = n.totalClicksSeries, a = n.topCountrySeries, o = n.topChannelSeries, s = n.startDate, l = n.endDate, c = n.productTier, u = n.section;
            n.showSummary;
            "performance" === u ? (e = "Total Clicks", t = this.mapTimeSeriesToPoints(i.deref().get("data"), "clicks", s, l)) : "bitlinks" === u && (e = "Total Bitlinks", t = this.mapTimeSeriesToPoints(r.deref().get("data"), "shortens", s, l));
            var d = [{
                name: e,
                data: t,
                color: "performance" === u ? "rgba(77, 205, 252, 0.5)" : "#d79268",
                pointInterval: 864e5,
                showInLegend: !1
            }];
            "performance" === u && ("channels" === this.state.view ? d = d.concat(o.deref().toJS().slice(0, g.default[c.deref()].MAX_CHANNELS).map(function (e, t) {
                return b(e, t)
            })) : "location" === this.state.view && (d = d.concat(a.deref().toJS().slice(0, g.default[c.deref()].MAX_LOCATIONS).map(function (e, t) {
                return y(e, t)
            }))));
            var p = (new Date).getTime() + 60 * (new Date).getTimezoneOffset() * 1e3, f = new Date(p - 864e5 * t.length).getTime();
            return this.seriesToChart(d, f, p)
        }, handleClick: function (e, t) {
            this.state.view === e ? this.setState({view: null}) : this.setState({view: e}), t.preventDefault()
        }
    }, I = {
        componentDidMount: function () {
            this.refs.toggleRegion.addEventListener("scroll", this.onScroll)
        }, componentWillUnmount: function () {
            this.refs.toggleRegion.removeEventListener("scroll", this.onScroll)
        }, onScroll: function () {
            "open" === this.props.graphCollapsedPref && this.toggleGraph()
        }, toggleGraph: function () {
            var e = "open" === this.props.graphCollapsedPref ? "closed" : "open";
            o.default.Preferences.setUnsafeGraphPreference(e)
        }, changeSection: function (e, t) {
            t.preventDefault(), o.default.UI.changeSection(e)
        }
    }, A = a("PerformanceGraph", [D, I], function (e) {
        var t = e.section, n = e.productTier, i = e.graphCollapsedPref, a = e.totalClicks, h = e.topChannel, g = e.topCountry, m = (e.topChannelSeries, e.topCountrySeries, e.startDate, e.endDate, e.dateRangeLabel), v = e.showSummary, k = e.totalClicksSeries, b = e.totalBitlinksSeries, y = e.showFilter, D = e.isDateSelected, I = void 0 !== D && D, A = e.exportFn, E = this.metricsToChart(), w = Boolean(E.get("series").toJSON()[0].data.filter(function (e) {
            return e.y > 0
        }).length), C = ["dark", "timeSeries", "barChartDefault"];
        return C = "enterprise" === n.deref() ? ["90_day"].concat(C) : ["30_day"].concat(C), r.createElement("div", {className: "performance-graph--MAIN " + i}, r.createElement(u.default, {
            ref: "graph-view-selector",
            name: "graph-view-selector",
            aspect: "MAIN",
            onClick: this.changeSection,
            values: [{label: "Date Created", value: "bitlinks", checked: "bitlinks" == t}, {
                label: "Top Performing",
                value: "performance",
                checked: "performance" == t
            }]
        }), "performance" === t && w && "open" === i ? r.createElement("div", {className: "performance-graph--view-selector"}, r.createElement(c.default, {
            id: "channels",
            checked: "channels" == this.state.view,
            onClick: this.handleClick
        }), r.createElement("span", {className: "performance-graph--view-label"}, "Referrers"), r.createElement(c.default, {
            id: "location",
            checked: "location" == this.state.view,
            onClick: this.handleClick
        }), r.createElement("span", {className: "performance-graph--view-label"}, "Location")) : null, r.createElement(f.default, {
            showFilter: y,
            dateRangeLabel: m,
            isDateSelected: I,
            exportFn: A
        }), "free" === n.deref() ? r.createElement("a", {
            className: "performance-graph--upsell",
            href: "http://bitly.is/BBTSticky"
        }, r.createElement(s.default, {iconName: "unlock-icon"}), "Unlock Enterprise") : null, r.createElement("div", {
            className: "performance-graph--toggle-region " + i + " " + (this.state.view && "performance" === t ? "overlayOn" : ""),
            ref: "toggleRegion"
        }, v && b.get("loadedOnce", !1) && k.get("loadedOnce", !1) ? r.createElement("div", null, r.createElement(d.default, {
            totalClicks: a,
            topChannel: h,
            topCountry: g
        }), w ? null : r.createElement(p.default, {
            aspect: "DARK",
            title: "No data to report",
            link: "Try creating a Bitlink and sharing it!",
            clickFunction: o.default.UI.openSheet.bind(null, "create"),
            iconName: "clicks-icon"
        }), r.createElement(l.default, {
            chartData: E,
            height: 225,
            configs: C,
            ref: "performanceGraph",
            seriesUnit: "day"
        })) : null), v ? r.createElement("div", {className: "performance-graph--toggle " + i}, r.createElement("a", {
            href: "#",
            className: "performance-graph--toggle-button",
            onClick: this.toggleGraph
        }, r.createElement(s.default, {iconName: "selector-icon"}), "closed" === i ? "Show Chart" : "Hide Chart")) : null)
    });
    t.default = A
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    var r = n(0), i = n(2), a = n(1), o = n(137), s = n(386), l = n(77), c = n(9), u = a("PerformanceSummary", function (e) {
        var t, n, a, u = e.totalClicks, d = e.topChannel, p = e.topCountry;
        p.data && (t = l.default[p.getIn(["data", "countryCode"])]), d.data && (n = d.getIn(["data", "channelName"]), a = "unknown" === n ? "Email, SMS, Direct" : "other" === n ? "Other Websites" : n);
        var f = i.List([new o.PerformanceSummaryItemRD({
            stat: u.deref().mapData(function (e) {
                return c.abbreviateInteger(e, 4)
            }), description: "Total Clicks"
        })]), h = i.List([new o.PerformanceSummaryItemRD({
            stat: d.reduceData(function (e, t, n) {
                return "clicks" === n ? e + t : e
            }, 0).mapData(c.commifyNumber), label: a, description: "Top Referrer"
        })]), g = i.List([new o.PerformanceSummaryItemRD({
            stat: p.reduceData(function (e, t, n) {
                return "clicks" === n ? e + t : e
            }, 0).mapData(c.commifyNumber), label: t, description: "Top Location"
        })]);
        return r.createElement("div", {className: "performance-summary--MAIN"}, r.createElement(s.default, {
            iconName: "total-clicks-icon",
            items: f
        }), d.getIn(["data", "clicks"]) && r.createElement(s.default, {
                socialIconName: n,
                items: h
            }), p.getIn(["data", "clicks"]) && r.createElement(s.default, {iconName: "geolocation-icon", items: g}))
    });
    t.default = u
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    var r = n(0), i = n(1), a = n(4), o = i("SocialIcon", function (e) {
        var t, n = e.type;
        return t = -1 !== ["google_plus", "orkut", "pinterest", "linkedin", "reddit", "youtube", "twitter", "facebook", "tumblr", "ameba", "livejournal"].indexOf(n) ? n : "unknown" === n ? "dark-traffic" : "other-sites", r.createElement("span", {className: "social-icon--MAIN"}, r.createElement(a.default, {iconName: t + "-icon"}))
    });
    t.default = o
}, function (e, t, n) {
    "use strict";
    function r(e, t) {
        return e.loading || !e.loadedOnce && !e.error ? e.loadedOnce && t.refreshing ? t.refreshing(e.data) : t.loading : e.error ? t.error : t.success(e.data)
    }

    Object.defineProperty(t, "__esModule", {value: !0}), t.mapLoadableToView = r
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    var r = n(0), i = n(1), a = n(36), o = n(10), s = {
        componentDidMount: function () {
            var e = {
                animationName: "fish-animation",
                animationDuration: 1e3,
                animationIterationCount: "infinite",
                animationTimingFunction: "steps(8)",
                animationDirection: "normal",
                animationFillMode: "both",
                animationDelay: 0
            }, t = {
                animationName: "swim-animation",
                animationDuration: 5e3,
                animationIterationCount: 1,
                animationTimingFunction: "ease",
                animationDirection: "normal",
                animationFillMode: "both",
                animationDelay: 0
            }, n = {
                animationName: "bubble-animation",
                animationDuration: 700,
                animationIterationCount: "infinite",
                animationTimingFunction: "ease-in-out",
                animationDirection: "forward",
                animationFillMode: "both",
                animationDelay: 320
            }, r = a(n);
            r.animationDelay = 160;
            var i = a(n);
            i.animationDelay = 0, o.animate(this.refs.bubble1, n), o.animate(this.refs.bubble2, r), o.animate(this.refs.bubble3, i), o.animate(this.refs.chauncey, e), o.animate(this.refs.chaunceyWrapper, t)
        }
    }, l = i("Chauncey", s, function () {
        return r.createElement("div", {
            className: "chauncey--MAIN",
            ref: "chaunceyWrapper"
        }, r.createElement("div", {
            className: "chauncey--fish",
            ref: "chauncey"
        }), r.createElement("div", {
            className: "chauncey--bubble-1",
            ref: "bubble1"
        }), r.createElement("div", {
            className: "chauncey--bubble-2",
            ref: "bubble2"
        }), r.createElement("div", {className: "chauncey--bubble-3", ref: "bubble3"}))
    });
    t.default = l
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    var r = n(0), i = n(1), a = n(10), o = {
        componentDidMount: function () {
            var e = {
                animationName: "disco-ball-animation",
                animationDuration: 1e3,
                animationIterationCount: "infinite",
                animationTimingFunction: "linear",
                animationDirection: "alternate",
                animationFillMode: "both",
                animationDelay: 0
            }, t = {
                animationName: "dance-animation",
                animationDuration: 1700,
                animationIterationCount: "infinite",
                animationTimingFunction: "steps(16)",
                animationDirection: "alternate",
                animationFillMode: "both",
                animationDelay: 0
            }, n = {
                animationName: "chauncey-dance-animation",
                animationDuration: 800,
                animationIterationCount: "infinite",
                animationTimingFunction: "ease-in-out",
                animationDirection: "alternate",
                animationFillMode: "both",
                animationDelay: 0
            };
            a.animate(this.refs.discoChaunceyWrapper, n), a.animate(this.refs.discoChauncey, t), a.animate(this.refs.discoBall, e)
        }
    }, s = i("Disco", o, function () {
        return r.createElement("div", {className: "disco--MAIN"}, r.createElement("image", {
            ref: "discoBall",
            src: "/s/bbt2/images/disco_ball.png",
            className: "disco--disco-ball"
        }), r.createElement("div", {
            ref: "discoChaunceyWrapper",
            className: "disco--disco-chauncey-wrapper"
        }, r.createElement("div", {ref: "discoChauncey", className: "disco--disco-chauncey"})))
    });
    t.default = s
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    var r = n(0), i = n(2), a = n(1), o = n(95), s = n(96), l = n(97), c = n(639), u = n(138), d = n(140), p = n(3), f = n(10), h = n(7), g = {
        onKeyPress: function (e) {
            h.keyEventsHandlerMixin.keyPressCheck(e, !0, this.props.notification.size)
        }, componentDidMount: function () {
            document.body.addEventListener("keydown", this.onKeyPress, !1)
        }, componentWillUnmount: function () {
            document.body.removeEventListener("keydown", this.onKeyPress, !1)
        }
    }, m = {
        closeAllSheets: function () {
            f.closeAllSheetsAnimation()
        }
    }, v = a("CustomBitlinksPage", [g, m, h.keyEventsHandlerMixin], function (e) {
        var t = e.page, n = e.dateFilter, a = e.section, f = e.bitlinks, h = e.notification, g = e.actionSheets, m = e.user, v = e.session, k = e.accountSettings, b = e.preferences, y = e.siteWideMessage, D = e.productTier, I = (e.brand, e.config), A = e.userList, E = e.formData, w = e.easterEgg, C = e.brands, _ = e.organizations, U = e.brandUserRoles, S = e.orgUserRoles, B = e.shareAccounts, N = e.campaigns, O = e.bsds, T = e.deeplinkApps, R = e.siteAssociation, L = f.get("activeBitlink"), M = t.get("activeKeywordLink"), P = t.cursor("cache"), G = f.get("allTags"), F = t.cursor("selectedBitlinks").deref(), z = t.cursor(["views", "list"]).get("data").map(function (e) {
            return P.cursor(e)
        }), x = t.cursor(["clickCache", n.get("customlinks")]), q = x.get(M), j = g.map(function (e) {
            return r.createElement(l.default, {
                page: f,
                dateFilter: n.get("bitlinks"),
                key: e,
                action: e,
                activeBitlink: L ? f.cursor("cache").get(L) : [],
                tags: G,
                user: m,
                session: v,
                filterSheet: null,
                account: k,
                preferences: b,
                productTier: D,
                config: I,
                accountSettings: k,
                userList: A,
                formData: E,
                section: a,
                brands: C,
                organizations: _,
                brandUserRoles: U,
                orgUserRoles: S,
                shareAccounts: B,
                campaigns: N,
                bsds: O,
                deeplinkApps: T.deref().get("data", i.Map()),
                siteAssociation: R
            })
        }), H = g.size > 0 ? r.createElement("div", {
            className: "layout--action-sheet open",
            onClick: this.closeAllSheets
        }, j) : null;
        return r.createElement("div", {className: "layout--MAIN " + (g.size > 0 ? "open" : "")}, y.deref() ? r.createElement(d.default, {message: y}) : null, h.size && r.createElement("div", {className: "layout--notification"}, r.createElement(s.default, {notification: h})), r.createElement("div", {className: "layout--primary-section"}, r.createElement(o.default, {
            session: v,
            productTier: D,
            query: null,
            preferences: b,
            pageName: "Custom Bitlinks",
            showFilter: !1,
            showSearch: !1,
            activeBrand: C.get(v.get("activeBrand"))
        }), r.createElement("div", {className: "custom-bitlink-sub-nav"}, "Only branded ", r.createElement("a", {
            href: "https://support.bitly.com/hc/en-us/articles/115001626408-What-is-the-Custom-Bitlinks-section",
            target: "_blank"
        }, "Custom Bitlinks"), "  appear here.", C.getIn([v.get("activeBrand"), "bsds"], i.List()).isEmpty() ? r.createElement("span", null, " To create Custom Bitlinks, contact an admin to set up a ", r.createElement("a", {
            href: "https://support.bitly.com/hc/en-us/articles/230558107-What-is-a-Branded-Short-Domain-bsd-and-how-do-I-get-one",
            target: "_blank"
        }, "Branded Short Domain"), ".") : r.createElement("span", null, " Custom Bitlinks created with ", I.get("shorten_domains").first(), " can be found in your ", r.createElement("a", {
            href: "#",
            onClick: function () {
                return p.default.UI.changeSection("bitlinks")
            }
        }, "Bitlinks"), "."))), r.createElement("div", {
            className: "layout--wrapper",
            ref: "layoutWrapper"
        }, r.createElement(u.default, {
            section: a.deref(),
            loadable: t.cursor(["views", "list"]),
            items: z,
            activeItem: M,
            selectedBitlinks: F,
            easterEgg: w,
            session: v
        }), r.createElement(c.default, {
            loadable: t.cursor(["views", "detail"]),
            bitlink: M ? P.get(M) : null,
            open: !!M,
            productTier: D,
            config: I,
            clicksByHash: q
        })), H)
    });
    t.default = v
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    var r = n(0), i = n(5), a = n(1), o = n(3), s = n(111), l = n(9), c = n(51), u = n(640), d = n(24), p = n(4), f = n(18), h = n(22);
    t.default = a("CustomBitlinkDetail", function (e) {
        var t = e.bitlink, n = e.config, a = e.loadable, g = e.open, m = e.productTier, v = e.clicksByHash, k = null;
        if (a.get("loading"))k = r.createElement(f.default, null); else if (a.get("error"))k = r.createElement(d.default, {
            aspect: "SERVER",
            title: "Server Error",
            link: "Click to retry",
            iconName: "server-error-icon"
        }); else if (t) {
            var b = "anonymous" !== m.deref() && "free" !== m.deref() && t.get("keywordLink") && !n.get("bitly_domains").contains(t.get("keywordDomain")), y = v ? v.get("clickHistory") : null;
            k = r.createElement("div", {className: "custom-bitlink-detail--pane"}, r.createElement("span", {className: "item-detail--back-nav"}, "Bitlink Details", r.createElement(p.default, {
                iconName: "close-icon",
                iconAction: o.default.UI.deselectCustomLink
            })), r.createElement("time", {
                className: "item-detail--created-date",
                dateTime: i(t.get("created")).utc().format("YYYY-MM-DD")
            }, "Created ", h.formatDateShort(t.get("created"))), r.createElement("div", {className: "item-detail--title"}, t.get("keywordLink")), r.createElement(c.default, {
                bitlink: t,
                hasEditButton: !1,
                shareComponent: "anonymous" !== m.deref() && "share",
                hasRedirect: b
            }), r.createElement("div", {className: "info-wrapper--MAIN"}, r.createElement("div", {className: "item-detail--click-stats-wrapper"}, r.createElement("div", {className: "info-wrapper--header"}, r.createElement("span", {className: "info-wrapper--clicks-text"}, l.commifyNumber(t.getIn(["totalClicks", "data"], 0))), r.createElement(p.default, {iconName: "clicks-icon"}))), y && y.get("loadedOnce") && t.getIn(["totalClicks", "data"], 0) ? r.createElement(s.default, {
                clickHistory: y,
                envelopName: "keyword_clicks"
            }) : null), t.getIn(["pastUrls", "loadedOnce"]) && r.createElement(u.default, {pastUrls: t.getIn(["pastUrls", "data"]).deref()}))
        } else k = r.createElement(d.default, {
            aspect: "BITLINKS",
            title: "No Custom Bitlinks",
            text: "You must set up a Branded Short Domain to get started",
            iconName: "no-bitlinks-icon"
        });
        return r.createElement("div", {className: "item-detail--MAIN" + (g ? " open" : "")}, k)
    })
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    var r = n(0), i = n(5), a = n(1), o = n(3), s = {
        getContent: function (e) {
            var t = this, n = e.first(), a = e.reduce(function (e, t) {
                var n = i.unix(t.date_created_ts).utc().format("MMM DD, YYYY"), a = t.date_deactivated_ts ? i.unix(t.date_deactivated_ts).utc().format("MMM DD, YYYY") : "Present";
                return e.concat([r.createElement("br", null), n + " - " + a])
            }, []), o = a.slice(1);
            return r.createElement("div", {
                className: "custom-bitlink-detail--url-detail",
                key: n.user_hash + n.date_created_ts
            }, r.createElement("span", {className: "url"}, n.long_url), r.createElement("span", {className: "clicks"}, null === n.clicks ? "-" : n.clicks), r.createElement("span", {className: "start-date"}, o), r.createElement("a", {
                className: "current-link",
                onClick: function () {
                    return t.openBitlinkMegasheet(n.user_hash)
                }
            }, r.createElement("span", {className: "domain"}, n.domain), r.createElement("span", {className: "hash"}, "/" + n.user_hash)))
        }, openBitlinkMegasheet: function (e) {
            o.default.UI.select(e), o.default.API.loadClicks([e]), o.default.UI.openSheet("bitlinkDetail")
        }
    };
    t.default = a("PastUrls", [s], function (e) {
        var t = this, n = e.pastUrls;
        if (n.isEmpty())return null;
        var i = n.first(), a = i.user_hash, o = n.groupBy(function (e) {
            return e.user_hash
        }), s = n.size > 1;
        return i ? r.createElement("div", {className: "info-wrapper--MAIN"}, r.createElement("h4", {className: "info-wrapper--header"}, "Past URL Assignments"), n.count() > 900 ? r.createElement("p", {className: "info-wrapper--WARN"}, "We only show your 1,000 most popular uses of this Custom Bitlink. If metrics are unavailable for a particular use, a dash will be displayed.") : null, r.createElement("div", {className: "custom-bitlink-detail--url-header"}, r.createElement("span", {className: "url"}, "Current target URL"), r.createElement("span", {className: "clicks"}, "Clicks"), r.createElement("span", {className: "start-date"}, "Timespan"), r.createElement("span", {className: "current-link"}, "Current Bitlink")), this.getContent(o.get(a)), s ? r.createElement("div", {className: "custom-bitlink-detail--url-header"}, r.createElement("span", {className: "url"}, "Past target URL"), r.createElement("span", {className: "clicks"}, "Clicks"), r.createElement("span", {className: "start-date"}, "Timespan"), r.createElement("span", {className: "current-link"}, "Current Bitlink")) : null, s && o.skip(1).valueSeq().map(function (e) {
                return t.getContent(e)
            })) : null
    })
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    var r = n(0), i = n(1), a = n(2), o = n(3), s = n(7), l = n(10), c = n(97), u = n(642), d = n(176), p = n(95), f = n(96), h = n(140), g = {
        onKeyPress: function (e) {
            s.keyEventsHandlerMixin.keyPressCheck(e, !1, this.props.notification.size)
        }, componentDidMount: function () {
            document.body.addEventListener("keydown", this.onKeyPress, !1)
        }, componentWillUnmount: function () {
            document.body.removeEventListener("keydown", this.onKeyPress, !1)
        }
    }, m = {
        openAddDomainSheet: function () {
            o.default.Organizations.openNewBsdSheet()
        }, getAdminSection: function (e) {
            var t = this, n = this.props.session.get("activeOrganization"), r = this.props.organizationLimits.deref().get(n, a.Map());
            switch (e) {
                case"users":
                    return {
                        navigation: this.props.orgUserRoles.get(n).map(function (e, t) {
                            return t
                        }).sort().map(function (e) {
                            return t.props.users.get(e)
                        }).map(function (e, r) {
                            return {
                                id: r,
                                is_active: e.get("is_active", !0),
                                label: e.get("full_name", r),
                                pillLabel: e.get("is_2fa_enabled") ? "2F Auth" : "",
                                secondLabel: e.get("full_name") === r ? "" : r,
                                thirdLabel: "admin" === t.props.orgUserRoles.getIn([n, r]) ? "Account Admin" : "",
                                clickHandler: function () {
                                    o.default.Organizations.openOrgUserRoleForUser(r)
                                }
                            }
                        }).toArray(),
                        label: "INVITE NEW USER",
                        buttonAction: function () {
                            return o.default.Organizations.openNewOrgUserRole()
                        },
                        header: "Users",
                        usedObjects: r.getIn(["user_seats", "current_rate"]),
                        remainingObjects: r.getIn(["user_seats", "rate"]),
                        objectType: "user seats"
                    };
                case"mobile":
                    return {
                        navigation: this.props.deeplinkApps.get("data", a.Map()).map(function (e) {
                            return {
                                label: e.get("name"), clickHandler: function () {
                                    return o.default.Deeplinks.openDeeplinksAppEdit(e.get("guid"), e.get("os"))
                                }, labelIcon: e.get("os") + "-icon", id: e.get("guid")
                            }
                        }).toArray(),
                        label: "ADD MOBILE APP",
                        buttonAction: function () {
                            return o.default.UI.openSheet("addDeeplinksApp")
                        },
                        header: "Mobile Apps",
                        objectType: "mobile apps",
                        usedObjects: this.props.deeplinkApps.get("data", a.Map()).count(),
                        remainingObjects: 100,
                        emptyState: a.Map({
                            title: "NO APPS CONNECTED",
                            link: "Add a Mobile Application",
                            icon: "no-connected-apps-icon"
                        }),
                        loading: this.props.deeplinkApps.get("loading", !1)
                    };
                case"brands":
                    return {
                        navigation: this.props.brands.filter(function (e) {
                            return e.get("organizationGuid") == n
                        }).sort(function (e, t) {
                            return e.get("name", "").localeCompare(t.get("name", ""))
                        }).map(function (e, t) {
                            return {
                                id: t,
                                is_active: e.get("is_active", !1),
                                label: e.get("name", t),
                                secondLabel: "",
                                clickHandler: function () {
                                    o.default.Organizations.openEditBrand(t)
                                }
                            }
                        }).toArray(),
                        label: "CREATE NEW GROUP",
                        buttonAction: function () {
                            return o.default.Organizations.openCreateBrand()
                        },
                        header: "Groups",
                        usedObjects: r.getIn(["brands", "current_rate"]),
                        remainingObjects: r.getIn(["brands", "rate"]),
                        objectType: "groups"
                    };
                case"bsds":
                    return {
                        navigation: this.props.bsds.map(function (e, t) {
                            var n = e.getIn(["deeplink_apps", "android"]).count(), r = e.getIn(["deeplink_apps", "ios"]).count(), i = "";
                            return r && (i = r + " iOS app(s) | "), n && (i = i + n + " Android app(s) | "), {
                                id: t,
                                is_active: !0,
                                label: t,
                                secondLabel: "",
                                fourthLabel: i,
                                clickHandler: function () {
                                    return o.default.Organizations.setBsdForAddOrEdit(e.toJS())
                                },
                                thirdLabel: "ok" === e.get("validation_status") ? "Verified" : "pending" === e.get("validation_status") ? "Pending" : "Verification Failed",
                                thirdLabelClassName: "ok" === e.get("validation_status") ? "verified" : "pending" === e.get("validation_status") ? "pending" : "unverified"
                            }
                        }).sort(function (e, t) {
                            return e.label.localeCompare(t.label)
                        }).toArray(),
                        label: "ADD BRANDED SHORT DOMAIN",
                        buttonAction: this.props.bsds.find(function (e) {
                            return "ok" !== e.get("validation_status")
                        }) ? null : this.openAddDomainSheet,
                        header: "Branded Short Domains",
                        usedObjects: r.getIn(["branded_short_domains", "current_rate"]),
                        remainingObjects: r.getIn(["branded_short_domains", "rate"]),
                        objectType: "Branded Short Domains",
                        emptyState: a.Map({
                            title: "NO BRANDED SHORT DOMAINS SETUP",
                            link: "Add a Branded Short Domain",
                            icon: "no-bitlinks-icon"
                        })
                    };
                default:
                    throw new Error("Section not implemented: " + e)
            }
        }
    }, v = i("OrganizationLayout", [g, s.keyEventsHandlerMixin, m], function (e) {
        var t = e.page, n = e.notification, i = e.actionSheets, s = e.users, g = e.deeplinkApps, m = e.session, v = e.accountSettings, k = e.preferences, b = e.siteWideMessage, y = e.easterEgg, D = e.config, I = e.organizations, A = e.brands, E = e.formData, w = e.productTier, C = e.section, _ = e.brandUserRoles, U = e.orgUserRoles, S = e.shareAccounts, B = e.bsds, N = e.siteAssociation, O = e.thirdPartyAppLookup, T = [{
            label: "Users",
            value: "users"
        }, {label: "Groups", value: "brands"}, {label: "Branded Short Domains", value: "bsds"}, {
            label: "Mobile Apps",
            value: "mobile"
        }], R = t.cursor("cache"), L = t.get("activeBitlink"), M = R.cursor(L), P = t.cursor("allTags").deref(), G = i.size > 0 ? i.map(function (e) {
            return r.createElement(c.default, {
                action: e,
                key: e,
                activeBitlink: M,
                userList: s,
                tags: P,
                session: m,
                account: v,
                preferences: k,
                config: D,
                accountSettings: v,
                formData: E,
                productTier: w,
                section: C,
                brandUserRoles: _,
                orgUserRoles: U,
                brands: A,
                organizations: I,
                shareAccounts: S,
                bsds: B,
                deeplinkApps: g.get("data", a.Map()),
                thirdPartyAppLookup: O,
                saf: N
            })
        }) : null, F = i.size > 0 ? r.createElement("div", {
            className: "layout--action-sheet open",
            onClick: l.closeAllSheetsAnimation
        }, G) : null, z = this.getAdminSection(m.get("orgSectionName")), x = z.header, q = z.label, j = z.buttonAction, H = z.navigation, V = z.usedObjects, W = z.remainingObjects, K = z.objectType, J = z.emptyState, Y = z.loading, X = I.get(m.get("activeOrganization"));
        return r.createElement("div", {className: "layout--MAIN " + (i.size > 0 ? "open" : "")}, y.deref() ? r.createElement(d.default, {type: y}) : null, b.deref() ? r.createElement(h.default, {message: b}) : null, n.size ? r.createElement("div", {className: "layout--notification"}, r.createElement(f.default, {notification: n})) : null, r.createElement("div", {className: "layout--primary-section"}, r.createElement(p.default, {
            aspect: "ORG",
            session: m,
            productTier: w,
            query: t.cursor(["filter", "query"]),
            preferences: k,
            pageName: X.get("name") + " Settings",
            activeBrand: A.get(m.get("activeBrand")),
            showFilter: !1,
            showSearch: !1,
            showShorten: !1,
            disableDropdown: !0,
            showEditName: !0
        })), r.createElement("div", {
            className: "layout--wrapper",
            ref: "layoutWrapper"
        }, r.createElement("ul", {className: "layout--navigation"}, T.map(function (e) {
            return r.createElement("li", {
                className: "layout--navigation-item " + (e.label === x ? "selected" : ""),
                key: e.value
            }, r.createElement("a", {
                className: "clickable-item", onClick: function () {
                    return o.default.UI.switchOrganizationSection(e.value)
                }
            }, e.label))
        })), r.createElement(u.default, {
            headerText: x,
            buttonLabel: q,
            buttonAction: j,
            items: H,
            usedObjects: V,
            remainingObjects: W,
            objectType: K,
            emptyState: J,
            loading: Y
        })), F)
    });
    t.default = v
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    var r = n(0), i = n(1), a = n(8), o = n(80), s = n(4), l = n(24), c = n(18), u = i("AdminSection", function (e) {
        var t = e.items, n = e.buttonLabel, i = e.buttonAction, u = e.headerText, d = e.usedObjects, p = e.remainingObjects, f = e.objectType, h = e.emptyState, g = void 0 === h ? null : h, m = e.loading, v = "mobile apps" === f ? t : t.filter(function (e) {
            return e.is_active
        }), k = t.filter(function (e) {
            return !e.is_active
        });
        return r.createElement("div", {className: "admin-section--MAIN"}, r.createElement("h2", {className: "admin-section--header"}, u), i && p - d > 0 ? r.createElement("a", {onClick: i}, r.createElement(a.default, {
            aspect: "SOLID-PRIMARY",
            label: n
        })) : r.createElement(a.default, {
            aspect: "GHOST-TERTIARY",
            label: n
        }), r.createElement("div", {className: "marketing-module--MAIN"}, r.createElement("p", {className: "marketing-module--text"}, r.createElement("span", {className: "marketing-module--upsell-text"}, "Using ", d, " of ", p, " ", f), r.createElement("br", null), p - d < 1 ? r.createElement("span", {className: "marketing-module--upsell-text"}, "Need more? ", r.createElement("a", {href: "mailto:customersuccess@bitly.com"}, "Contact your Customer Success Manager ", r.createElement(s.default, {iconName: "arrow-icon"}))) : null)), v.length ? v.map(function (e) {
            return r.createElement(o.default, {
                key: e.id + e.label,
                label: e.label,
                labelIcon: e.labelIcon,
                pillLabel: e.pillLabel,
                secondLabel: e.secondLabel,
                thirdLabel: e.thirdLabel,
                thirdLabelClassName: e.thirdLabelClassName,
                fourthLabel: e.fourthLabel,
                checkbox: !1,
                clickHandler: e.clickHandler
            })
        }) : m ? r.createElement(c.default, null) : g ? r.createElement(l.default, {
            aspect: "BITLINKS",
            title: g.get("title"),
            link: g.get("link"),
            iconName: g.get("icon"),
            clickFunction: i
        }) : null, k.length && "mobile apps" !== f ? r.createElement("div", null, r.createElement("h2", {className: "admin-section--header2"}, "Deactivated ", u), k.map(function (e) {
            return r.createElement(o.default, {
                key: e.id,
                label: e.label,
                secondLabel: e.secondLabel,
                thirdLabel: e.thirdLabel,
                thirdLabelClassName: e.thirdLabelClassName,
                checkbox: !1,
                clickHandler: e.clickHandler
            })
        })) : null)
    });
    t.default = u
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    var r = n(0), i = n(1), a = n(2), o = n(7), s = n(3), l = n(95), c = n(96), u = n(97), d = n(644), p = n(646), f = n(176), h = n(140), g = n(100), m = n(138), v = n(10), k = {
        onKeyPress: function (e) {
            o.keyEventsHandlerMixin.keyPressCheck(e, !1, this.props.notification.size)
        }, componentDidMount: function () {
            document.body.addEventListener("keydown", this.onKeyPress, !1)
        }, componentWillUnmount: function () {
            document.body.removeEventListener("keydown", this.onKeyPress, !1), s.default.UI.deselectCampaign()
        }, componentWillMount: function () {
            s.default.Campaigns.getChannels()
        }
    }, b = {
        closeAllSheets: function () {
            v.closeAllSheetsAnimation()
        }
    }, y = i("CampaignsLayout", [k, o.keyEventsHandlerMixin, b, o.FilterPillMixin], function (e) {
        var t = e.page, n = e.productTier, i = e.notification, o = e.actionSheets, v = e.user, k = e.dateFilter, b = e.userList, y = e.session, D = e.accountSettings, I = e.preferences, A = e.siteWideMessage, E = e.easterEgg, w = e.config, C = e.campaigns, _ = e.formData, U = e.section, S = e.brands, B = e.organizations, N = e.brandUserRoles, O = e.orgUserRoles, T = e.shareAccounts, R = e.bsds, L = e.deeplinkApps, M = e.siteAssociation, P = C.cursor(["activeCampaign"]).deref(), G = C.cursor(["activeChannel"]).deref(), F = C.getIn(["campaignCache", P]), z = C.getIn(["channelsCache", G]), x = C.get("clickCache"), q = t.cursor("cache"), j = t.get("activeBitlink"), H = q.get(j), V = C.cursor(["views", "list"]).deref(), W = (V.get("loading"), C.cursor(["views", "list", "data"]).map(function (e) {
            return C.getIn(["campaignCache", e])
        })), K = t.cursor("allTags").deref(), J = U.deref(), Y = (k.get("unit_reference_ts"), C.getIn(["filter", "query"])), X = C.cursor(["views", "list"]), Q = C.cursor(["views", "detail"]).get("loading"), Z = F ? x.getIn([F.get("guid"), "data", "data"]) : a.Map(), $ = Y ? a.fromJS([{
            iconAction: function () {
                return s.default.Campaigns.search("")
            }, label: Y, labelAction: function () {
                return null
            }
        }]) : 0, ee = o.size > 0 ? o.map(function (e) {
            return r.createElement(u.default, {
                page: t,
                dateFilter: k,
                action: e,
                key: e,
                activeBitlink: H,
                user: v,
                userList: b,
                tags: K,
                session: y,
                account: D,
                preferences: I,
                config: w,
                accountSettings: D,
                formData: _,
                section: U,
                campaigns: C,
                productTier: n,
                brands: S,
                organizations: B,
                brandUserRoles: N,
                orgUserRoles: O,
                shareAccounts: T,
                bsds: R,
                deeplinkApps: L.deref().get("data", a.Map()),
                siteAssociation: M
            })
        }) : null, te = o.size > 0 ? r.createElement("div", {
            className: "layout--action-sheet open",
            onClick: this.closeAllSheets
        }, ee) : null;
        return r.createElement("div", {className: "layout--MAIN " + (o.size > 0 ? "open" : "")}, E.deref() ? r.createElement(f.default, {type: E}) : null, A.deref() ? r.createElement(h.default, {message: A}) : null, i.size && r.createElement("div", {className: "layout--notification"}, r.createElement(c.default, {notification: i})), r.createElement("div", {className: "layout--primary-section"}, r.createElement(l.default, {
            activeBrand: S.get(y.get("activeBrand")),
            productTier: n,
            query: C.cursor(["filter", "query"]),
            preferences: I,
            pageName: "OneView",
            showFilter: !1,
            showSearch: !0,
            session: y
        }), $ ? r.createElement(g.default, {
            aspect: "FILTER",
            filterLabel: "Filters",
            items: $,
            showIcons: !1
        }) : null), r.createElement("div", {
            className: "layout--wrapper",
            ref: "layoutWrapper"
        }, r.createElement(m.default, {
            section: J,
            loadable: X,
            items: W,
            clicksByDate: x,
            dateFilter: k,
            dateRangeLabel: "",
            activeItem: P,
            activeChannel: G,
            selectedBitlinks: t.cursor("selectedBitlinks").deref(),
            filterActive: !!$.size,
            easterEgg: E,
            session: y
        }), G ? r.createElement(p.default, {
            section: J,
            config: w,
            clicksData: Z,
            activeCampaign: F,
            activeChannel: G,
            open: !!z,
            loading: Q
        }) : r.createElement(d.default, {
            section: J,
            config: w,
            clicksData: Z,
            activeCampaign: F,
            open: !!F,
            activeBrand: y.get("activeBrand"),
            loading: Q
        })), te)
    });
    t.default = y
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    var r = n(0), i = n(2), a = n(1), o = n(4), s = n(3), l = n(8), c = n(645), u = n(75), d = n(24), p = n(18), f = n(9), h = n(76), g = n(38), m = n(65), v = {
        getChartData: function (e) {
            var t = e.get("clicks").map(function (e) {
                return {x: 1e3 * e.get("ts"), y: e.get("clicks")}
            }).sortBy(function (e) {
                return e.x
            }).toJS();
            return i.fromJS({series: [{data: t}]})
        }, getAxisData: function () {
            var e = i.List(), t = this.props.clicksData ? this.props.clicksData.get("campaign_channels") : i.List();
            t && t.forEach(function (t) {
                t.get("clicks") && (e = e.concat(t.get("clicks").map(function (e) {
                    return 1e3 * e.get("ts")
                })).toList())
            });
            var n = e.max(), r = new Date(e.min()), a = n - e.min();
            return i.Map({min: a ? r.setDate(r.getDate() - 7) : null, max: a ? n : null})
        }, openChannel: function (e) {
            s.default.Campaigns.setActiveChannel(e)
        }, getChannelsClicksData: function () {
            var e = (this.props.activeCampaign, this.props.clicksData.get("campaign_channels", i.List()).map(function (e) {
                return {name: e.get("channel_name"), data: [e.get("total_clicks")]}
            }));
            return i.fromJS({series: e, xAxis: {categories: ["CLICKS BY CHANNEL"]}})
        }
    }, k = a("CampaignDetail", v, function (e) {
        var t = this, n = (e.section, e.config, e.clicksData), i = e.activeCampaign, a = e.open, v = e.activeBrand, k = e.loading, b = n ? n.get("total_clicks", 0) : "0", y = i ? i.get("total_bitlinks", 0) : "0", D = n && n.get("campaign_channels", 0), I = this.getAxisData(), A = r.createElement("div", {className: "campaign-item-detail--MAIN" + (a ? " open" : "")}, r.createElement(p.default, null));
        return k || (A = i ? r.createElement("div", {className: "campaign-item-detail--MAIN" + (a ? " open" : "")}, r.createElement("span", {className: "item-detail--back-nav"}, "Campaign Details", r.createElement(o.default, {
            iconName: "close-icon",
            iconAction: s.default.UI.deselectCampaign
        })), r.createElement("div", {className: "info-wrapper--MAIN no-border"}, i ? r.createElement("div", null, r.createElement("div", {className: "info-wrapper--header"}, i.get("name")), r.createElement("div", {className: "item-detail--stats"}, r.createElement("span", {className: "item-detail--channels"}, (D ? D.count() : "0") + " " + m.default("Channel", D ? D.count() : "0")), y + " " + m.default("Bitlink", y)), r.createElement("div", {className: "info-wrapper--description"}, i.get("description")), r.createElement("div", {className: "actions--MAIN"}, r.createElement(l.default, {
            aspect: "ACTION",
            label: "ADD LINKS",
            disabled: D && !D.count(),
            clickCallback: function () {
                return s.default.UI.openSheet("addBitlinks")
            }
        }), r.createElement(l.default, {
            aspect: "ACTION", label: "EDIT", clickCallback: function () {
                return s.default.UI.openSheet("editCampaign")
            }
        }), r.createElement("a", {
            href: "" + g.exportUrl("/data/campaign_clicks?campaign_guid=" + i.get("guid"), v),
            className: "button--ACTION export"
        }, "Export")), r.createElement("div", {className: "item-detail--click-stats"}, r.createElement("span", {className: "item-detail--numbers"}, f.commifyNumber(b)), " Total ", m.default("Click", b)), n && i && b ? r.createElement(c.default, {
            chartData: this.getChannelsClicksData(),
            height: 100,
            configs: ["stackedColumnChart"]
        }) : null, D && D.count() ? D.toList().map(function (e, n) {
            var i = e.get("total_clicks", 0);
            return r.createElement("div", {
                className: "info-wrapper--MAIN no-border",
                key: n
            }, r.createElement("div", {className: "info-wrapper--clicks-header"}, r.createElement("a", {
                className: "info-wrapper--text",
                onClick: function () {
                    return t.openChannel(e.get("channel_guid") || e.get("guid"))
                }
            }, e.get("channel_name") || e.get("name")), r.createElement("span", {className: "click-count--MAIN"}, f.commifyNumber(i), r.createElement(o.default, {iconName: "clicks-icon"}))), i ? r.createElement(u.default, {
                chartData: t.getChartData(e),
                height: 200,
                configs: ["custom", "timeSeries", "barChartDefault"],
                seriesUnit: "day",
                max: I.get("max"),
                min: I.get("min"),
                ref: "clickGraph",
                customColor: h.getCurrentHex(n)
            }) : e.getIn(["channel_bitlinks", "total"], 0) ? r.createElement(d.default, {
                aspect: "BITLINKS",
                title: "NO CLICKS",
                text: "Start Sharing your Bitlinks",
                iconName: "no-bitlinks-icon"
            }) : r.createElement(d.default, {
                aspect: "BITLINKS",
                title: "NO BITLINKS",
                link: "Add a bitlink to this Channel",
                iconName: "no-bitlinks-icon",
                clickFunction: function () {
                    return s.default.UI.openSheet("addBitlinks")
                }
            }))
        }) : r.createElement(d.default, {
            aspect: "BITLINKS",
            title: "NO CHANNELS",
            link: "Add a channel to this Campaign",
            iconName: "no-bitlinks-icon",
            clickFunction: function () {
                return s.default.UI.openSheet("editCampaign")
            }
        })) : r.createElement(d.default, {
            aspect: "BITLINKS",
            title: "No Campaign Selected"
        }))) : r.createElement("div", {className: "campaign-item-detail--MAIN" + (a ? " open" : "")}, r.createElement("div", {className: "info-wrapper--MAIN no-border"}, r.createElement(d.default, {
            aspect: "BITLINKS",
            title: "No Campaign Selected"
        })))), A
    });
    t.default = k
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    var r = n(42), i = n(0), a = n(74), o = n(63), s = n(1), l = n(110), c = n(76), u = {
        componentDidUpdate: function () {
            l.updateChart(this.props.chartData, this.chart)
        }, componentDidMount: function () {
            this.renderChart()
        }, componentWillUnmount: function () {
            this.chart.destroy(), this.chart = null
        }, renderChart: function () {
            r.Highcharts.setOptions({colors: c.BAR_COLORS});
            var e = {
                chart: {
                    renderTo: this.refs.chart,
                    height: this.props.height
                }
            }, t = this.props.configs.map(function (e) {
                return o.default[e]
            }), n = a.apply(void 0, [this.props.chartData.toJSON(), e].concat(t));
            this.chart = new r.Highcharts.Chart(n)
        }
    }, d = s("StackedColumnChart", [u], function () {
        return i.createElement("div", {className: "stacked-column-chart", ref: "chart"})
    });
    t.default = d
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    var r = n(0), i = n(2), a = n(1), o = n(15), s = n(4), l = n(3), c = n(8), u = n(75), d = n(18), p = n(51), f = n(94), h = n(24), g = n(9), m = n(76), v = n(17), k = n(65), b = {
        selectBitlink: function (e) {
            l.default.UI.select(e), l.default.UI.openSheet("bitlinkDetail")
        }, closeDialog: function (e, t) {
            var n = i.fromJS([{
                text: "CONFIRM", fill: !0, callback: function () {
                    return l.default.Campaigns.removeBitlink({id: e, domain: t})
                }
            }, {
                text: "CANCEL", fill: !1, callback: function () {
                    return l.default.Notification.closeNotification()
                }
            }]);
            l.default.Notification.openNotification(new o.default({
                aspect: "ACTION",
                title: "REMOVE BITLINK",
                text: "Remove bitlink from the campaign",
                buttons: n
            }))
        }, getChartData: function (e) {
            var t = e.get("clicks").map(function (e) {
                return {x: 1e3 * e.get("ts"), y: e.get("clicks")}
            }).sortBy(function (e) {
                return e.x
            }).toJS();
            return i.fromJS({series: [{data: t}]})
        }
    }, y = a("ChannelDetail", b, function (e) {
        var t = this, n = (e.section, e.config, e.clicksData), a = e.activeCampaign, o = e.activeChannel, b = e.open, y = e.loading, D = 0, I = a && a.getIn(["campaign_channels", "channels"], i.List()).find(function (e, t) {
                return D = t, e.get("guid") === o
            }), A = I && I.getIn(["channel_bitlinks", "bitlinks"]), E = I && A.count(), w = n && n.getIn(["campaign_channels"], 0) && n.getIn(["campaign_channels"], 0).filter(function (e) {
                return e.get("channel_guid") === o
            }).first(), C = w && w.get("total_clicks", 0), _ = r.createElement("div", {className: "campaign-item-detail--MAIN" + (b ? " open" : "")}, r.createElement(d.default, null));
        return y || (_ = r.createElement("div", {className: "campaign-item-detail--MAIN" + (b ? " open" : "")}, r.createElement("span", {className: "item-detail--back-nav"}, "Channel Details", r.createElement(s.default, {
            iconName: "close-icon",
            iconAction: l.default.UI.deselectCampaign
        })), r.createElement("div", {className: "info-wrapper--MAIN no-border"}, I ? r.createElement("div", null, r.createElement("div", {className: "info-wrapper--header"}, I.get("name")), r.createElement("div", {className: "item-detail--stats"}, E + " " + k.default("Bitlink", E)), r.createElement("div", {className: "actions--MAIN"}, r.createElement(c.default, {
            aspect: "ACTION",
            label: "ADD LINKS",
            clickCallback: function () {
                return l.default.UI.openSheet("addBitlinks")
            }
        })), r.createElement("div", {className: "item-detail--click-stats"}, r.createElement("span", {className: "item-detail--numbers"}, g.commifyNumber(C)), " Total ", k.default("Click", C)), C ? r.createElement(u.default, {
            chartData: this.getChartData(w),
            height: 200,
            configs: ["custom", "timeSeries", "barChartDefault"],
            seriesUnit: "day",
            ref: "clickGraph",
            customColor: m.getCurrentHex(D)
        }) : E ? r.createElement(h.default, {
            aspect: "BITLINKS",
            title: "NO CLICKS",
            text: "Start Sharing your Bitlinks",
            iconName: "no-bitlinks-icon"
        }) : null, E ? r.createElement("div", {className: "info-wrapper--header"}, E + " " + k.default("BITLINK", E), " ") : null, E ? A.map(function (e, n) {
            var i = e.get("userHash"), a = w && w.getIn(["channel_bitlinks", "bitlinks"]).filter(function (e) {
                    return v.shortUrlToHash(v.protocolizeUrl(e.get("bitlink_id"))) == i
                }), o = a && a.first() ? a.first().get("total_clicks", 0) : "0";
            return r.createElement("div", {
                className: "item-detail--bitlink",
                key: n
            }, r.createElement(f.default, {bitlink: e, showUrl: !1}), r.createElement(p.default, {
                bitlink: e,
                onLinkClick: function () {
                    return t.selectBitlink(i)
                },
                hasEditButton: !0,
                shareComponent: "share"
            }), r.createElement("span", {
                onClick: function () {
                    return t.closeDialog(i, e.get("domain"))
                }, className: "item-detail--close"
            }, r.createElement("div", {className: "notification--text"}, "Remove bitlink from campaign"), r.createElement(s.default, {iconName: "close-icon"})), r.createElement("span", {className: "click-count--MAIN"}, g.commifyNumber(o), r.createElement(s.default, {iconName: "clicks-icon"})))
        }) : r.createElement(h.default, {
            aspect: "BITLINKS",
            title: "NO BITLINKS",
            link: "Add a bitlink to this Channel",
            iconName: "no-bitlinks-icon",
            clickFunction: function () {
                return l.default.UI.openSheet("addBitlinks")
            }
        })) : r.createElement(h.default, {aspect: "BITLINKS", title: "No Channel Selected"})))), _
    });
    t.default = y
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    var r = n(0), i = n(1), a = n(2), o = n(18), s = n(24), l = n(3), c = n(62), u = n(95), d = n(96), p = n(648), f = n(97), h = n(139), g = n(176), m = n(140), v = n(7), k = n(77), b = n(54), y = n(16), D = n(37), I = n(38), A = n(39), E = n(10), w = {
        openAppPage: function (e) {
            l.default.UI.changeSection(e)
        }, getTopChannels: function (e, t) {
            var n = this.props.dashboardOverview.cursor(["totalClicks", "data"]).deref(), r = t.map(function (e) {
                return ["unknown" === e.get("network") ? "Email, SMS, Direct" : "other" === e.get("network") ? "Other Websites" : b.default(e.get("network")), e.get("clicks")]
            });
            return a.fromJS({series: [{name: "Channels", data: this.truncateGraphSeries(e, r, n)}]})
        }, getTopCountries: function (e, t) {
            var n = this.props.dashboardOverview.cursor(["totalClicks", "data"]).deref(), r = t.map(function (e) {
                return ["None" !== e.get("country") ? k.default[e.get("country")] : e.get("country"), e.get("clicks")]
            });
            return a.fromJS({series: [{name: "Countries", data: this.truncateGraphSeries(e, r, n)}]})
        }
    }, C = {
        onKeyPress: function (e) {
            v.keyEventsHandlerMixin.keyPressCheck(e, !1, this.props.notification.size)
        }, componentDidMount: function () {
            document.body.addEventListener("keydown", this.onKeyPress, !1)
        }, componentWillUnmount: function () {
            document.body.removeEventListener("keydown", this.onKeyPress, !1)
        }
    }, _ = {
        closeAllSheets: function () {
            E.closeAllSheetsAnimation()
        }, dismissBitlyNetworkCoachmark: function (e) {
            l.default.Preferences.dismissContent("bitly_network_coachmark"), e.stopPropagation()
        }
    }, U = i("DashboardLayout", [C, w, v.TruncateSeriesMixin, v.keyEventsHandlerMixin, _], function (e) {
        var t, n, i, l, v = e.page, k = e.dateFilter, b = e.section, E = e.notification, w = e.actionSheets, C = e.user, _ = e.session, U = e.accountSettings, S = e.preferences, B = e.siteWideMessage, N = e.dashboardOverview, O = e.productTier, T = e.performance, R = e.easterEgg, L = e.config, M = e.userList, P = e.formData, G = e.campaigns, F = e.brands, z = e.organizations, x = e.brandUserRoles, q = e.orgUserRoles, j = e.shareAccounts, H = e.bsds, V = e.calendar, W = e.deeplinkApps, K = e.siteAssociation, J = y.default.enterprise, Y = v.cursor("cache"), X = N.cursor(["topBrandLinks"]).get("data").map(function (e) {
            return Y.cursor(e).deref()
        }).slice(0, J.MAX_POPULAR_LINKS), Q = N.cursor(["topBitlyNetworkLinks"]).get("data").map(function (e) {
            return v.cursor(["bitlyNetwork", "data"]).get(e)
        }).slice(0, J.MAX_POPULAR_BITLY_LINKS), Z = v.cursor("allTags").deref(), $ = b.deref(), ee = k.cursor($).deref(), te = a.fromJS({
            rollup: !0,
            limit: 1e3,
            units: ee.units,
            unit: ee.unit,
            timezone: ee.timezone
        }), ne = v.get("activeBitlink"), re = Y.cursor(ne), ie = F.getIn([_.get("activeBrand"), "name"], "Your Group"), ae = S.get("dismissedContent").has("dashboard_summary_coachmark") && !S.get("dismissedContent").has("bitly_network_coachmark"), oe = w.size > 0 ? w.map(function (e) {
            return r.createElement(f.default, {
                calendar: V,
                action: e,
                key: e,
                activeBitlink: re,
                user: C,
                tags: Z,
                session: _,
                account: U,
                preferences: S,
                config: L,
                accountSettings: U,
                formData: P,
                productTier: O,
                userList: M,
                section: b,
                campaigns: G,
                brands: F,
                organizations: z,
                brandUserRoles: x,
                orgUserRoles: q,
                shareAccounts: j,
                bsds: H,
                deeplinkApps: W.deref().get("data", a.Map()),
                siteAssociation: K
            })
        }) : null, se = w.size > 0 ? r.createElement("div", {
            className: "layout--action-sheet open",
            onClick: this.closeAllSheets
        }, oe) : null, le = T.getIn(["topReferrers", "data"]), ce = T.getIn(["allCountries", "data"]), ue = N.cursor(["totalClicks", "data"]).deref();
        return t = T.getIn(["topReferrers", "loading"]) || !T.getIn(["topReferrers", "loadedOnce"]) ? r.createElement(o.default, null) : le.isEmpty() ? r.createElement(s.default, {
            title: "No click data to report today",
            aspect: "DARK",
            iconName: "clicks-icon",
            inlineStyle: {background: 'url("/s/bbt2/images/db_empty_state_ref_channels.png") 0/37rem no-repeat'}
        }) : r.createElement(c.default, {
            aspect: "DARK",
            configs: ["doughnutChartDefault"],
            chartData: this.getTopChannels(J.MAX_CHANNELS, le),
            total: ue,
            section: $
        }), n = T.getIn(["allCountries", "loading"]) || !T.getIn(["allCountries", "loadedOnce"]) ? r.createElement(o.default, null) : ce.isEmpty() ? r.createElement(s.default, {
            title: "No click data to report today",
            aspect: "DARK",
            iconName: "clicks-icon",
            inlineStyle: {background: 'url("/s/bbt2/images/db_empty_state_top_locations.png") 0/37rem no-repeat'}
        }) : r.createElement(c.default, {
            aspect: "DARK",
            configs: ["doughnutChartDefault"],
            chartData: this.getTopCountries(J.MAX_LOCATIONS, ce),
            total: ue,
            section: $
        }), i = N.cursor(["topBitlyNetworkLinks"]).get("loading") || !N.cursor(["topBitlyNetworkLinks"]).get("loadedOnce") ? r.createElement(o.default, null) : Q.isEmpty() || !Q.first() ? r.createElement(s.default, {
            title: "No organic clicks to your content today",
            aspect: "DARK",
            iconName: "clicks-icon",
            inlineStyle: {background: 'url("/s/bbt2/images/db_empty_state_bitly_network.png") 0 1rem/36rem no-repeat'}
        }) : r.createElement("div", null, Q.valueSeq().map(function (e) {
            return r.createElement(h.default, {
                key: e.get("userHash"),
                isActive: !1,
                isSelected: !1,
                bitlink: e,
                clickable: !0,
                clicks: e.getIn(["clicks", "data", "ownClicks"], 0),
                changeSectionTo: "bitlinks",
                showEncoder: !0,
                showExport: !1,
                isCustomBitlink: !1
            })
        })), l = N.cursor(["topBrandLinks"]).get("loading") || !N.cursor(["topBrandLinks"]).get("loadedOnce") ? r.createElement(o.default, null) : X.isEmpty() || !X.first() ? r.createElement(s.default, {
            title: "No click data to report today",
            aspect: "DARK",
            iconName: "clicks-icon",
            inlineStyle: {background: 'url("/s/bbt2/images/db_empty_state_top_bitlinks.png") 0 0.7rem/23rem no-repeat'}
        }) : X.map(function (e) {
            var t = v.cursor("clickCache").getIn([k.cursor($).deref(), e.get("userHash"), "clicks", "data", "ownClicks"], 0);
            return r.createElement(h.default, {
                key: e.get("userHash"),
                isActive: !1,
                isSelected: !1,
                bitlink: e,
                clicks: t,
                changeSectionTo: "bitlinks",
                showExport: !1,
                showEncoder: !1,
                isCustomBitlink: !1
            })
        }), r.createElement("div", {className: "layout--MAIN " + (w.size > 0 ? "open" : "")}, R.deref() ? r.createElement(g.default, {type: R}) : null, B.deref() ? r.createElement(m.default, {message: B}) : null, E.size && r.createElement("div", {className: "layout--notification"}, r.createElement(d.default, {notification: E})), r.createElement("div", {className: "layout--primary-section"}, r.createElement(u.default, {
            session: _,
            productTier: O,
            query: v.cursor(["filter", "query"]),
            preferences: S,
            pageName: "Dashboard",
            showFilter: !1,
            activeBrand: F.get(_.get("activeBrand"))
        }), r.createElement(p.default, {
            name: ie,
            dashboardOverview: N,
            preferences: S,
            dateFilter: k.cursor($).deref(),
            dateSelected: !k.cursor($).deref().equals(J.DASHBOARD_DATE_FILTER)
        }), r.createElement("div", null, r.createElement("div", {className: "info-wrapper--DARK"}, r.createElement("h4", {className: "info-wrapper--header"}, "Top Bitlinks"), r.createElement("span", {
            onClick: this.openAppPage.bind(null, "performance"),
            className: "info-wrapper--link"
        }, "View All"), l), r.createElement("div", {className: "info-wrapper--DARK"}, ae ? r.createElement(A.default, {
            text: "Always know what’s popular with the Bitly Network’s 5 billion uniques.",
            button: {aspect: "SOLID-SECONDARY", label: "Ok, I got it!", callback: this.dismissBitlyNetworkCoachmark}
        }) : null, r.createElement("h4", {className: "info-wrapper--header"}, "Bitly Network Top Content"), r.createElement("a", {
            href: "https://bitly.is/BB2KB_BitlyNetworkTopContent",
            className: "info-wrapper--link",
            target: "_blank"
        }, "Learn More"), i), r.createElement("div", {className: "info-wrapper--DARK"}, r.createElement("h4", {className: "info-wrapper--header"}, "Top Referrers"), le.isEmpty() ? null : r.createElement(D.default, {
            action: I.exportUrl("/proxy/v3/user/referring_networks", _.get("activeBrand")),
            link: null,
            aspect: "DARK",
            extraParams: te
        }), t), r.createElement("div", {className: "info-wrapper--DARK"}, r.createElement("h4", {className: "info-wrapper--header"}, "Top Locations"), ce.isEmpty() ? null : r.createElement(D.default, {
            action: I.exportUrl("/proxy/v3/user/countries", _.get("activeBrand")),
            link: null,
            aspect: "DARK",
            extraParams: te
        }), n))), se)
    });
    t.default = U
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    var r = n(0), i = n(5), a = n(2), o = n(1), s = n(129), l = n(9), c = n(3), u = n(137), d = n(135), p = n(386), f = n(39), h = n(649), g = n(50), m = n(650), v = {
        dismissDashboardSummaryStatsCoachmark: function (e) {
            e.stopPropagation(), c.default.Preferences.dismissContent("dashboard_summary_coachmark")
        }, exportTopModule: function (e, t) {
            return function (n) {
                try {
                    var r = m.arrayToCsv(e.toJS()), i = new Blob([r], {type: "text/csv;charset=utf-8;"});
                    h.downloadFile(i, t)
                } catch (e) {
                    g.genericErrorMsg({success: !1, err: e})
                }
            }
        }
    }, k = function (e) {
        return (null === e.unit_reference_ts || i.unix(e.unit_reference_ts).utc().isSameOrAfter(i(), "day")) && "day" === e.unit && 1 === e.units
    }, b = function (e, t, n) {
        return {start: i.unix(e).utc().subtract(t - 1, n), end: i.unix(e).utc()}
    }, y = function (e) {
        if (k(e))return i().utc().format("MMM D");
        var t = b(e.unit_reference_ts, e.units, e.unit), n = t.start, r = t.end;
        return n.format("MMM D") + " – " + r.format("MMM D")
    }, D = function (e) {
        if (k(e))return "today, " + i.utc().format("MMMM Do");
        var t = b(e.unit_reference_ts, e.units, e.unit), n = t.start, r = t.end;
        return n.format("MMMM Do") + " – " + r.format("MMMM Do")
    }, I = function (e) {
        var t = b(null === e.unit_reference_ts ? i().unix() : e.unit_reference_ts, e.units, e.unit), n = t.start, r = t.end;
        return n.format("MM/DD/Y") + " to " + r.format("MM/DD/Y")
    }, A = function (e) {
        return new u.PerformanceSummaryItemRD({description: e.description, stat: e.stat.mapData(l.displayNumber)})
    }, E = o("DashboardPerformanceSummary", v, function (e) {
        var t = e.name, n = e.dashboardOverview, i = e.preferences, o = e.dateFilter, l = e.dateSelected, g = n.cursor("totalClicks").deref(), m = n.cursor(["linksCreated"]).deref(), v = n.cursor("totalUniques").deref(), k = n.cursor("totalBrandClicksPerUnique").deref(), b = n.cursor("totalNetworkClicks").deref(), E = n.cursor(["bitlyNetworkLinksCreated"]).deref().mapData(function (e) {
            return e.map(function (e) {
                return e.get("shortens", 0)
            }).reduce(s.sum, 0)
        }), w = !i.get("dismissedContent").has("dashboard_summary_coachmark"), C = y(o), _ = a.List([new u.PerformanceSummaryItemRD({
            stat: g,
            description: 1 === g.data ? "Total Click" : "Total Clicks"
        }), new u.PerformanceSummaryItemRD({
            stat: m,
            description: 1 === m.data ? "Bitlink Created" : "Bitlinks Created"
        })]), U = a.List([new u.PerformanceSummaryItemRD({
            stat: v,
            description: "Total Uniques"
        }), new u.PerformanceSummaryItemRD({
            stat: k,
            description: "Clicks per Unique"
        })]), S = a.List([new u.PerformanceSummaryItemRD({
            stat: b,
            description: "Bitly Network Clicks"
        }), new u.PerformanceSummaryItemRD({
            stat: E,
            description: 1 === E.data ? "Bitly Network Link" : "Bitly Network Links"
        })]), B = -1 === _.concat(U, S).toList().findIndex(function (e) {
                return !0 === e.stat.loading
            }), N = a.List([null, I(o)]), O = B ? _.concat(U, S).map(function (e) {
            return a.List([e.description, e.stat.error ? "ERROR" : e.stat.data])
        }).toList().unshift(N) : a.List();
        return r.createElement("div", {className: "performance-summary-dashboard--MAIN"}, r.createElement(d.default, {
            dateRangeLabel: C,
            isDateSelected: l,
            showFilter: !1,
            clearFn: c.default.Dashboard.resetDateFilter,
            exportFn: this.exportTopModule(O, h.sanitizeFileName(t) + " -- Bitly dashboard data from " + I(o) + ".csv"),
            exportDisabled: !B
        }), r.createElement("h3", {className: "performance-summary--title"}, "Here are ", r.createElement("span", {className: "performance-summary--name"}, t, "'s"), " stats for ", D(o), " ", r.createElement("span", {className: "performance-summary--utc-label"}, "(data in UTC)")), r.createElement(p.default, {
            iconName: "bitlinks_created-icon",
            items: _.map(A).toList()
        }), r.createElement(p.default, {
            iconName: "audience-icon",
            items: U.map(A).toList()
        }), r.createElement(p.default, {
            iconName: "network-icon",
            items: S.map(A).toList()
        }), w ? r.createElement(f.default, {
            text: "Get your top stats, updated in real-time.",
            button: {
                aspect: "SOLID-SECONDARY",
                label: "Ok, I got it!",
                callback: this.dismissDashboardSummaryStatsCoachmark
            }
        }) : null)
    });
    t.default = E
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    var r = function (e, t) {
        if (navigator.msSaveBlob)navigator.msSaveBlob(e, t); else {
            var n = document.createElement("a");
            if (void 0 !== n.download) {
                var r = URL.createObjectURL(e);
                n.setAttribute("href", r), n.setAttribute("download", t), n.style.visibility = "hidden", document.body.appendChild(n), n.click(), document.body.removeChild(n)
            }
        }
    };
    t.downloadFile = r;
    var i = function (e) {
        return e.trim().replace(/\s/g, "_").replace(/[^\w]/g, "")
    };
    t.sanitizeFileName = i
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    var r = function (e) {
        return !e.filter(function (t, n) {
            return t.length !== e[0].length
        }).length
    }, i = function (e) {
        return e.match(/[,"]|(\r\n)/) ? '"' + e.replace('"', '""') + '"' : e
    }, a = function (e) {
        if (!r(e))throw RangeError("Invalid tabular data: variable row lengths");
        return e.reduce(function (e, t) {
            return e + t.map(function (e) {
                    return null === e ? "" : e.toString()
                }).map(i).join(",") + "\r\n"
        }, "")
    };
    t.arrayToCsv = a
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    var r = n(1), i = n(379), a = n(3), o = {
        getInitialState: function () {
            return {url: ""}
        }, componentDidUpdate: function () {
            var e = i.serializeUrl(this.props.route.encode(this.props.state));
            this.state.url !== e && this.changeState(e)
        }, changeState: function (e) {
            this.props.state.getIn(["config", "trackPageviews"]) && a.default.UI.trackPageView(e), this.setState({url: e})
        }
    }, s = r("URLPushState", o, function (e) {
        var t = (e.route, e.state, e.title), n = this.state.url;
        if (document.title = t, "object" == typeof history) {
            var r = Date.now();
            history.state && history.state.ts ? history.state.url === n && history.state.title === t || (r - history.state.ts < 1e3 ? history.replaceState({
                url: n,
                title: t,
                ts: r
            }, t, n) : history.pushState({url: n, title: t, ts: r}, t, n)) : history.pushState({
                url: n,
                title: t,
                ts: r
            }, t, n)
        }
        return this.props.children
    });
    t.default = s
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    var r = n(5), i = n(16);
    t.getCalendarMinDate = function (e) {
        var t, n = e.get("session"), a = e.getIn(["brands", n.get("activeBrand")]);
        if ("bitlinks" === e.get("section")) {
            var o = r.unix(a.get("created_ts"));
            t = r.utc().diff(o, "days")
        } else t = i.default[e.get("productTier")].MAX_CLICK_DAYS;
        return {maxTimespanInDays: t, minDate: r.utc().subtract(t, "days")}
    }
}, function (e, t) {
    !function (e, t, n) {
        "use awesome";
        if (e.trackJs)e.console && e.console.warn && e.console.warn("TrackJS global conflict"); else {
            var r = function (e, t, n, r, i) {
                this.util = e, this.onError = t, this.onFault = n, this.options = i, i.enabled && this.initialize(r)
            };
            r.prototype = {
                initialize: function (e) {
                    f.forEach(["EventTarget", "Node", "XMLHttpRequest"], function (t) {
                        f.has(e, t + ".prototype.addEventListener") && (t = e[t].prototype, t.hasOwnProperty("addEventListener") && (this.wrapAndCatch(t, "addEventListener", 1), this.wrapRemoveEventListener(t)))
                    }, this), this.wrapAndCatch(e, "setTimeout", 0), this.wrapAndCatch(e, "setInterval", 0)
                }, wrapAndCatch: function (e, t, n) {
                    var r = this, a = e[t];
                    f.isWrappableFunction(a) && (e[t] = function () {
                        try {
                            var o, s, l = Array.prototype.slice.call(arguments), c = l[n];
                            if (r.options.bindStack)try {
                                throw Error()
                            } catch (e) {
                                s = e.stack, o = r.util.isoNow()
                            }
                            var u = function () {
                                try {
                                    if (f.isObject(c))return c.handleEvent.apply(c, arguments);
                                    if (f.isFunction(c))return c.apply(this, arguments)
                                } catch (e) {
                                    throw r.onError("catch", e, {bindTime: o, bindStack: s}), f.wrapError(e)
                                }
                            };
                            if ("addEventListener" === t && (this._trackJsEvt || (this._trackJsEvt = new i), this._trackJsEvt.get(l[0], c, l[2])))return;
                            try {
                                c && (f.isWrappableFunction(c) || f.isWrappableFunction(c.handleEvent)) && (l[n] = u, "addEventListener" === t && this._trackJsEvt.add(l[0], c, l[2], l[n]))
                            } catch (e) {
                                return a.apply(this, arguments)
                            }
                            return a.apply(this, l)
                        } catch (n) {
                            e[t] = a, r.onFault(n)
                        }
                    })
                }, wrapRemoveEventListener: function (e) {
                    if (e && e.removeEventListener && this.util.hasFunction(e.removeEventListener, "call")) {
                        var t = e.removeEventListener;
                        e.removeEventListener = function (e, n, r) {
                            if (this._trackJsEvt) {
                                var i = this._trackJsEvt.get(e, n, r);
                                if (i)return this._trackJsEvt.remove(e, n, r), t.call(this, e, i, r)
                            }
                            return t.call(this, e, n, r)
                        }
                    }
                }
            };
            var i = function () {
                this.events = []
            };
            i.prototype = {
                add: function (e, t, n, r) {
                    -1 >= this.indexOf(e, t, n) && (n = this.getEventOptions(n), this.events.push([e, t, n.capture, n.once, n.passive, r]))
                }, get: function (e, t, r) {
                    return e = this.indexOf(e, t, r), 0 <= e ? this.events[e][5] : n
                }, getEventOptions: function (e) {
                    var t = {capture: !1, once: !1, passive: !1};
                    return f.isBoolean(e) ? f.defaults({}, {capture: e}, t) : f.defaults({}, e, t)
                }, indexOf: function (e, t, n) {
                    n = this.getEventOptions(n);
                    for (var r = 0; r < this.events.length; r++) {
                        var i = this.events[r];
                        if (i[0] === e && i[1] === t && i[2] === n.capture && i[3] === n.once && i[4] === n.passive)return r
                    }
                    return -1
                }, remove: function (e, t, n) {
                    0 <= (e = this.indexOf(e, t, n)) && this.events.splice(e, 1)
                }
            };
            var a = function (e) {
                this.initCurrent(e)
            };
            a.prototype = {
                current: {},
                initOnly: {
                    cookie: !0,
                    enabled: !0,
                    token: !0,
                    callback: {enabled: !0},
                    console: {enabled: !0},
                    navigation: {enabled: !0},
                    network: {enabled: !0, fetch: !0},
                    visitor: {enabled: !0},
                    window: {enabled: !0, promise: !0}
                },
                defaults: {
                    application: "",
                    cookie: !1,
                    dedupe: !0,
                    enabled: !0,
                    errorURL: "https://capture.trackjs.com/capture",
                    errorNoSSLURL: "http://capture.trackjs.com/capture",
                    faultURL: "https://usage.trackjs.com/fault.gif",
                    onError: function () {
                        return !0
                    },
                    serialize: function (e) {
                        function t(e) {
                            var t = "<" + e.tagName.toLowerCase();
                            e = e.attributes || [];
                            for (var n = 0; n < e.length; n++)t += " " + e[n].name + '="' + e[n].value + '"';
                            return t + ">"
                        }

                        if ("" === e)return "Empty String";
                        if (e === n)return "undefined";
                        if (f.isString(e) || f.isNumber(e) || f.isBoolean(e) || f.isFunction(e))return "" + e;
                        if (f.isElement(e))return t(e);
                        var r;
                        try {
                            r = JSON.stringify(e, function (e, r) {
                                return r === n ? "undefined" : f.isNumber(r) && isNaN(r) ? "NaN" : f.isError(r) ? {
                                    name: r.name,
                                    message: r.message,
                                    stack: r.stack
                                } : f.isElement(r) ? t(r) : r
                            })
                        } catch (t) {
                            r = "";
                            for (var i in e)e.hasOwnProperty(i) && (r += ',"' + i + '":"' + e[i] + '"');
                            r = r ? "{" + r.replace(",", "") + "}" : "Unserializable Object"
                        }
                        return r.replace(/"undefined"/g, "undefined").replace(/"NaN"/g, "NaN")
                    },
                    sessionId: "",
                    token: "",
                    userId: "",
                    version: "",
                    callback: {enabled: !0, bindStack: !1},
                    console: {
                        enabled: !0,
                        display: !0,
                        error: !0,
                        warn: !1,
                        watch: ["log", "debug", "info", "warn", "error"]
                    },
                    navigation: {enabled: !0},
                    network: {enabled: !0, error: !0, fetch: !0},
                    visitor: {enabled: !0},
                    usageURL: "https://usage.trackjs.com/usage.gif",
                    window: {enabled: !0, promise: !0}
                },
                initCurrent: function (e) {
                    return this.validate(e, this.defaults, "config", {}) ? (this.current = f.defaultsDeep({}, e, this.defaults), !0) : (this.current = f.defaultsDeep({}, this.defaults), console.log("init current config", this.current), !1)
                },
                setCurrent: function (e) {
                    return !!this.validate(e, this.defaults, "config", this.initOnly) && (this.current = f.defaultsDeep({}, e, this.current), !0)
                },
                validate: function (e, t, n, r) {
                    var i = !0;
                    n = n || "", r = r || {};
                    for (var a in e)if (e.hasOwnProperty(a))if (t.hasOwnProperty(a)) {
                        var o = typeof t[a];
                        o !== typeof e[a] ? (console.warn(n + "." + a + ": property must be type " + o + "."), i = !1) : "[object Array]" !== Object.prototype.toString.call(e[a]) || this.validateArray(e[a], t[a], n + "." + a) ? "[object Object]" === Object.prototype.toString.call(e[a]) ? i = this.validate(e[a], t[a], n + "." + a, r[a]) : r.hasOwnProperty(a) && (console.warn(n + "." + a + ": property cannot be set after load."), i = !1) : i = !1
                    } else console.warn(n + "." + a + ": property not supported."), i = !1;
                    return i
                },
                validateArray: function (e, t, n) {
                    var r = !0;
                    n = n || "";
                    for (var i = 0; i < e.length; i++)f.contains(t, e[i]) || (console.warn(n + "[" + i + "]: invalid value: " + e[i] + "."), r = !1);
                    return r
                }
            };
            var o = function (e, t, n, r, i, a, o) {
                this.util = e, this.log = t, this.onError = n, this.onFault = r, this.serialize = i, o.enabled && (a.console = this.wrapConsoleObject(a.console, o))
            };
            o.prototype = {
                wrapConsoleObject: function (e, t) {
                    e = e || {};
                    var n, r = e.log || function () {
                        }, i = this;
                    for (n = 0; n < t.watch.length; n++)!function (n) {
                        var a = e[n] || r;
                        e[n] = function () {
                            try {
                                var e = Array.prototype.slice.call(arguments);
                                if (i.log.add("c", {
                                        timestamp: i.util.isoNow(),
                                        severity: n,
                                        message: i.serialize(1 === e.length ? e[0] : e)
                                    }), t[n])if (f.isError(e[0]) && 1 === e.length)i.onError("console", e[0]); else try {
                                    throw Error(i.serialize(1 === e.length ? e[0] : e))
                                } catch (e) {
                                    i.onError("console", e)
                                }
                                t.display && (i.util.hasFunction(a, "apply") ? a.apply(this, e) : a(e[0]))
                            } catch (e) {
                                i.onFault(e)
                            }
                        }
                    }(t.watch[n]);
                    return e
                }, report: function () {
                    return this.log.all("c")
                }
            };
            var s = function (e, t, n, r, i) {
                this.config = e, this.util = t, this.log = n, this.window = r, this.document = i, this.correlationId = this.token = null, this.initialize()
            };
            s.prototype = {
                initialize: function () {
                    this.token = this.getCustomerToken(), this.correlationId = this.getCorrelationId()
                }, getCustomerToken: function () {
                    if (this.config.current.token)return this.config.current.token;
                    var e = this.document.getElementsByTagName("script");
                    return e[e.length - 1].getAttribute("data-token")
                }, getCorrelationId: function () {
                    var e;
                    if (!this.config.current.cookie)return this.util.uuid();
                    try {
                        (e = this.document.cookie.replace(/(?:(?:^|.*;\s*)TrackJS\s*\=\s*([^;]*).*$)|^.*$/, "$1")) || (e = this.util.uuid(), this.document.cookie = "TrackJS=" + e + "; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/")
                    } catch (t) {
                        e = this.util.uuid()
                    }
                    return e
                }, report: function () {
                    return {
                        application: this.config.current.application,
                        correlationId: this.correlationId,
                        sessionId: this.config.current.sessionId,
                        token: this.token,
                        userId: this.config.current.userId,
                        version: this.config.current.version
                    }
                }
            };
            var l = function (e) {
                this.loadedOn = (new Date).getTime(), this.window = e
            };
            l.prototype = {
                discoverDependencies: function () {
                    var e, t = {};
                    this.window.jQuery && this.window.jQuery.fn && this.window.jQuery.fn.jquery && (t.jQuery = this.window.jQuery.fn.jquery), this.window.jQuery && this.window.jQuery.ui && this.window.jQuery.ui.version && (t.jQueryUI = this.window.jQuery.ui.version), this.window.angular && this.window.angular.version && this.window.angular.version.full && (t.angular = this.window.angular.version.full);
                    for (e in this.window)if ("_trackJs" !== e && "_trackJS" !== e && "_trackjs" !== e && "webkitStorageInfo" !== e && "webkitIndexedDB" !== e && "top" !== e && "parent" !== e && "frameElement" !== e)try {
                        if (this.window[e]) {
                            var n = this.window[e].version || this.window[e].Version || this.window[e].VERSION;
                            "string" == typeof n && (t[e] = n)
                        }
                    } catch (e) {
                    }
                    return t
                }, report: function () {
                    return {
                        age: (new Date).getTime() - this.loadedOn,
                        dependencies: this.discoverDependencies(),
                        userAgent: this.window.navigator.userAgent,
                        viewportHeight: this.window.document.documentElement.clientHeight,
                        viewportWidth: this.window.document.documentElement.clientWidth
                    }
                }
            };
            var c = function (e) {
                this.util = e, this.appender = [], this.maxLength = 30
            };
            c.prototype = {
                all: function (e) {
                    var t, n, r = [];
                    for (n = 0; n < this.appender.length; n++)(t = this.appender[n]) && t.category === e && r.push(t.value);
                    return r
                }, clear: function () {
                    this.appender.length = 0
                }, truncate: function () {
                    this.appender.length > this.maxLength && (this.appender = this.appender.slice(Math.max(this.appender.length - this.maxLength, 0)))
                }, add: function (e, t) {
                    var n = this.util.uuid();
                    return this.appender.push({key: n, category: e, value: t}), this.truncate(), n
                }, get: function (e, t) {
                    var n, r;
                    for (r = 0; r < this.appender.length; r++)if (n = this.appender[r], n.category === e && n.key === t)return n.value;
                    return !1
                }
            };
            var u = function (e, t) {
                this.log = e, this.options = t, t.enabled && this.watch()
            };
            u.prototype = {
                isCompatible: function (t) {
                    return t = t || e, !f.has(t, "chrome.app.runtime") && f.has(t, "addEventListener") && f.has(t, "history.pushState")
                }, record: function (e, t, n) {
                    this.log.add("h", {type: e, from: f.truncate(t, 250), to: f.truncate(n, 250), on: f.isoNow()})
                }, report: function () {
                    return this.log.all("h")
                }, watch: function () {
                    if (this.isCompatible()) {
                        var t = this, n = f.getLocationURL().relative;
                        e.addEventListener("popstate", function () {
                            var e = f.getLocationURL().relative;
                            t.record("popState", n, e), n = e
                        }, !0), f.forEach(["pushState", "replaceState"], function (e) {
                            f.patch(history, e, function (r) {
                                return function () {
                                    n = f.getLocationURL().relative;
                                    var i = r.apply(this, arguments), a = f.getLocationURL().relative;
                                    return t.record(e, n, a), n = a, i
                                }
                            })
                        })
                    }
                }
            };
            var d = function (e, t, n, r, i, a) {
                this.util = e, this.log = t, this.onError = n, this.onFault = r, this.window = i, this.options = a, a.enabled && this.initialize(i)
            };
            d.prototype = {
                initialize: function (e) {
                    e.XMLHttpRequest && this.util.hasFunction(e.XMLHttpRequest.prototype.open, "apply") && this.watchNetworkObject(e.XMLHttpRequest), e.XDomainRequest && this.util.hasFunction(e.XDomainRequest.prototype.open, "apply") && this.watchNetworkObject(e.XDomainRequest), this.options.fetch && f.isWrappableFunction(e.fetch) && this.watchFetch()
                }, watchFetch: function () {
                    var t = this.log, n = this.options, r = this.onError;
                    f.patch(e, "fetch", function (i) {
                        return function (a, o) {
                            var s = a instanceof Request ? a : new Request(a, o), l = i.apply(e, arguments);
                            return l._tjsId = t.add("n", {
                                type: "fetch",
                                startedOn: f.isoNow(),
                                method: s.method,
                                url: s.url
                            }), l.then(function (e) {
                                var i = t.get("n", l._tjsId);
                                return i && (f.defaults(i, {
                                    completedOn: f.isoNow(),
                                    statusCode: e.status,
                                    statusText: e.statusText
                                }), n.error && 400 <= e.status && r("ajax", i.statusCode + " " + i.statusText + ": " + i.method + " " + i.url)), e
                            }).catch(function (e) {
                                var i = t.get("n", l._tjsId);
                                throw i && (f.defaults(i, {
                                    completedOn: f.isoNow(),
                                    statusCode: 0,
                                    statusText: (e || "").toString()
                                }), n.error && r("ajax", e)), e
                            })
                        }
                    })
                }, watchNetworkObject: function (e) {
                    var t = this, n = e.prototype.open, r = e.prototype.send;
                    return e.prototype.open = function (e, t) {
                        var r = (t || "").toString();
                        return 0 > r.indexOf("localhost:0") && (this._trackJs = {
                            method: e,
                            url: r
                        }), n.apply(this, arguments)
                    }, e.prototype.send = function () {
                        try {
                            if (!this._trackJs)return r.apply(this, arguments);
                            this._trackJs.logId = t.log.add("n", {
                                type: "xhr",
                                startedOn: t.util.isoNow(),
                                method: this._trackJs.method,
                                url: this._trackJs.url
                            }), t.listenForNetworkComplete(this)
                        } catch (e) {
                            t.onFault(e)
                        }
                        return r.apply(this, arguments)
                    }, e
                }, listenForNetworkComplete: function (e) {
                    var t = this;
                    t.window.ProgressEvent && e.addEventListener && e.addEventListener("readystatechange", function () {
                        4 === e.readyState && t.finalizeNetworkEvent(e)
                    }, !0), e.addEventListener ? e.addEventListener("load", function () {
                        t.finalizeNetworkEvent(e), t.checkNetworkFault(e)
                    }, !0) : setTimeout(function () {
                        try {
                            var n = e.onload;
                            e.onload = function () {
                                t.finalizeNetworkEvent(e), t.checkNetworkFault(e), "function" == typeof n && t.util.hasFunction(n, "apply") && n.apply(e, arguments)
                            };
                            var r = e.onerror;
                            e.onerror = function () {
                                t.finalizeNetworkEvent(e), t.checkNetworkFault(e), "function" == typeof oldOnError && r.apply(e, arguments)
                            }
                        } catch (e) {
                            t.onFault(e)
                        }
                    }, 0)
                }, finalizeNetworkEvent: function (e) {
                    if (e._trackJs) {
                        var t = this.log.get("n", e._trackJs.logId);
                        t && (t.completedOn = this.util.isoNow(), t.statusCode = 1223 == e.status ? 204 : e.status, t.statusText = 1223 == e.status ? "No Content" : e.statusText)
                    }
                }, checkNetworkFault: function (e) {
                    if (this.options.error && 400 <= e.status && 1223 != e.status) {
                        var t = e._trackJs || {};
                        this.onError("ajax", e.status + " " + e.statusText + ": " + t.method + " " + t.url)
                    }
                }, report: function () {
                    return this.log.all("n")
                }
            };
            var p = function (t, n) {
                this.util = t, this.config = n, this.disabled = !1, this.throttleStats = {
                    attemptCount: 0,
                    throttledCount: 0,
                    lastAttempt: (new Date).getTime()
                }, e.JSON && e.JSON.stringify || (this.disabled = !0)
            };
            p.prototype = {
                errorEndpoint: function (t) {
                    var n = this.config.current.errorURL;
                    return this.util.testCrossdomainXhr() || -1 !== e.location.protocol.indexOf("https") || (n = this.config.current.errorNoSSLURL), n + "?token=" + t
                }, usageEndpoint: function (e) {
                    return this.appendObjectAsQuery(e, this.config.current.usageURL)
                }, trackerFaultEndpoint: function (e) {
                    return this.appendObjectAsQuery(e, this.config.current.faultURL)
                }, appendObjectAsQuery: function (e, t) {
                    t += "?";
                    for (var n in e)e.hasOwnProperty(n) && (t += encodeURIComponent(n) + "=" + encodeURIComponent(e[n]) + "&");
                    return t
                }, getCORSRequest: function (t, n) {
                    var r;
                    return this.util.testCrossdomainXhr() ? (r = new e.XMLHttpRequest, r.open(t, n), r.setRequestHeader("Content-Type", "text/plain")) : void 0 !== e.XDomainRequest ? (r = new e.XDomainRequest, r.open(t, n)) : r = null, r
                }, sendTrackerFault: function (e) {
                    this.throttle(e) || ((new Image).src = this.trackerFaultEndpoint(e))
                }, sendUsage: function (e) {
                    (new Image).src = this.usageEndpoint(e)
                }, sendError: function (t, r) {
                    var i = this;
                    if (!this.disabled && !this.throttle(t))try {
                        var a = this.getCORSRequest("POST", this.errorEndpoint(r));
                        a.onreadystatechange = function () {
                            4 === a.readyState && 200 !== a.status && (i.disabled = !0)
                        }, a._trackJs = n, a.send(e.JSON.stringify(t))
                    } catch (e) {
                        throw this.disabled = !0, e
                    }
                }, throttle: function (e) {
                    var t = (new Date).getTime();
                    if (this.throttleStats.attemptCount++, this.throttleStats.lastAttempt + 1e3 >= t) {
                        if (this.throttleStats.lastAttempt = t, 10 < this.throttleStats.attemptCount)return this.throttleStats.throttledCount++, !0
                    } else e.throttled = this.throttleStats.throttledCount, this.throttleStats.attemptCount = 0, this.throttleStats.lastAttempt = t, this.throttleStats.throttledCount = 0;
                    return !1
                }
            };
            var f = function () {
                function r(e, t, a, o) {
                    return a = a || !1, o = o || 0, f.forEach(t, function (t) {
                        f.forEach(f.keys(t), function (s) {
                            null === t[s] || t[s] === n ? e[s] = t[s] : a && 10 > o && "[object Object]" === i(t[s]) ? (e[s] = e[s] || {}, r(e[s], [t[s]], a, o + 1)) : e.hasOwnProperty(s) || (e[s] = t[s])
                        })
                    }), e
                }

                function i(e) {
                    return Object.prototype.toString.call(e)
                }

                return {
                    addEventListenerSafe: function (e, t, n, r) {
                        e.addEventListener ? e.addEventListener(t, n, r) : e.attachEvent && e.attachEvent("on" + t, n)
                    }, afterDocumentLoad: function (e) {
                        var n = !1;
                        "complete" === t.readyState ? f.defer(e) : (f.addEventListenerSafe(t, "readystatechange", function () {
                            "complete" !== t.readyState || n || (f.defer(e), n = !0)
                        }), setTimeout(function () {
                            n || (f.defer(e), n = !0)
                        }, 1e4))
                    }, bind: function (e, t) {
                        return function () {
                            return e.apply(t, Array.prototype.slice.call(arguments))
                        }
                    }, contains: function (e, t) {
                        var n;
                        for (n = 0; n < e.length; n++)if (e[n] === t)return !0;
                        return !1
                    }, defaults: function (e) {
                        return r(e, Array.prototype.slice.call(arguments, 1), !1)
                    }, defaultsDeep: function (e) {
                        return r(e, Array.prototype.slice.call(arguments, 1), !0)
                    }, defer: function (e, t) {
                        setTimeout(function () {
                            e.apply(t)
                        })
                    }, forEach: function (e, t, n) {
                        if (e.forEach)return e.forEach(t, n);
                        for (var r = 0; r < e.length;)t.call(n, e[r], r, e), r++
                    }, getLocation: function () {
                        return e.location.toString().replace(/ /g, "%20")
                    }, getLocationURL: function () {
                        return f.parseURL(f.getLocation())
                    }, has: function (e, t) {
                        for (var n = t.split("."), r = e, i = 0; i < n.length; i++) {
                            if (!r[n[i]])return !1;
                            r = r[n[i]]
                        }
                        return !0
                    }, hasFunction: function (e, t) {
                        try {
                            return !!e[t]
                        } catch (e) {
                            return !1
                        }
                    }, isArray: function (e) {
                        return "[object Array]" === i(e)
                    }, isBoolean: function (e) {
                        return "boolean" == typeof e || f.isObject(e) && "[object Boolean]" === i(e)
                    }, isBrowserIE: function (t) {
                        t = t || e.navigator.userAgent;
                        var n = t.match(/Trident\/([\d.]+)/);
                        return n && "7.0" === n[1] ? 11 : !!(t = t.match(/MSIE ([\d.]+)/)) && parseInt(t[1], 10)
                    }, isBrowserSupported: function () {
                        var e = this.isBrowserIE();
                        return !e || 8 <= e
                    }, isError: function (e) {
                        if (!f.isObject(e))return !1;
                        var t = i(e);
                        return "[object Error]" === t || "[object DOMException]" === t || f.isString(e.name) && f.isString(e.message)
                    }, isElement: function (e) {
                        return f.isObject(e) && 1 === e.nodeType
                    }, isFunction: function (e) {
                        return !(!e || "function" != typeof e)
                    }, isNumber: function (e) {
                        return "number" == typeof e || f.isObject(e) && "[object Number]" === i(e)
                    }, isObject: function (e) {
                        return !(!e || "object" != typeof e)
                    }, isString: function (e) {
                        return "string" == typeof e || !f.isArray(e) && f.isObject(e) && "[object String]" === i(e)
                    }, isWrappableFunction: function (e) {
                        return this.isFunction(e) && this.hasFunction(e, "apply")
                    }, isoNow: function () {
                        var e = new Date;
                        return e.toISOString ? e.toISOString() : e.getUTCFullYear() + "-" + this.pad(e.getUTCMonth() + 1) + "-" + this.pad(e.getUTCDate()) + "T" + this.pad(e.getUTCHours()) + ":" + this.pad(e.getUTCMinutes()) + ":" + this.pad(e.getUTCSeconds()) + "." + String((e.getUTCMilliseconds() / 1e3).toFixed(3)).slice(2, 5) + "Z"
                    }, keys: function (e) {
                        if (!f.isObject(e))return [];
                        var t, n = [];
                        for (t in e)e.hasOwnProperty(t) && n.push(t);
                        return n
                    }, noop: function () {
                    }, pad: function (e) {
                        return e = String(e), 1 === e.length && (e = "0" + e), e
                    }, parseURL: function (e) {
                        var t = e.match(/^(([^:\/?#]+):)?(\/\/([^\/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/);
                        return t ? (t = {
                            protocol: t[2],
                            host: t[4],
                            path: t[5],
                            query: t[6],
                            hash: t[8]
                        }, t.origin = (t.protocol || "") + "://" + (t.host || ""), t.relative = (t.path || "") + (t.query || "") + (t.hash || ""), t.href = e, t) : {}
                    }, patch: function (e, t, n) {
                        e[t] = n(e[t] || f.noop)
                    }, testCrossdomainXhr: function () {
                        return "withCredentials"in new XMLHttpRequest
                    }, truncate: function (e, t) {
                        if (e.length <= t)return e;
                        var n = e.length - t;
                        return e.substr(0, t) + "...{" + n + "}"
                    }, uuid: function () {
                        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (e) {
                            var t = 16 * Math.random() | 0;
                            return ("x" == e ? t : 3 & t | 8).toString(16)
                        })
                    }, wrapError: function (e) {
                        if (e.innerError)return e;
                        var t = Error("TrackJS Caught: " + (e.message || e));
                        return t.description = "TrackJS Caught: " + e.description, t.file = e.file, t.line = e.line || e.lineNumber, t.column = e.column || e.columnNumber, t.stack = e.stack, t.innerError = e, t
                    }
                }
            }(), h = function (e, t, n, r, i, a) {
                this.util = e, this.log = t, this.onError = n, this.onFault = r, this.options = a, this.document = i, a.enabled && this.initialize(i)
            };
            h.prototype = {
                initialize: function (e) {
                    var t = this.util.bind(this.onDocumentClicked, this), n = this.util.bind(this.onInputChanged, this);
                    e.addEventListener ? (e.addEventListener("click", t, !0), e.addEventListener("blur", n, !0)) : e.attachEvent && (e.attachEvent("onclick", t), e.attachEvent("onfocusout", n))
                }, onDocumentClicked: function (e) {
                    try {
                        var t = this.getElementFromEvent(e);
                        t && t.tagName && (this.isDescribedElement(t, "a") || this.isDescribedElement(t, "button") || this.isDescribedElement(t, "input", ["button", "submit"]) ? this.writeVisitorEvent(t, "click") : this.isDescribedElement(t, "input", ["checkbox", "radio"]) && this.writeVisitorEvent(t, "input", t.value, t.checked))
                    } catch (e) {
                        this.onFault(e)
                    }
                }, onInputChanged: function (e) {
                    try {
                        var t = this.getElementFromEvent(e);
                        t && t.tagName && (this.isDescribedElement(t, "textarea") ? this.writeVisitorEvent(t, "input", t.value) : this.isDescribedElement(t, "select") && t.options && t.options.length ? this.onSelectInputChanged(t) : this.isDescribedElement(t, "input") && !this.isDescribedElement(t, "input", ["button", "submit", "hidden", "checkbox", "radio"]) && this.writeVisitorEvent(t, "input", t.value))
                    } catch (e) {
                        this.onFault(e)
                    }
                }, onSelectInputChanged: function (e) {
                    if (e.multiple)for (var t = 0; t < e.options.length; t++)e.options[t].selected && this.writeVisitorEvent(e, "input", e.options[t].value); else 0 <= e.selectedIndex && e.options[e.selectedIndex] && this.writeVisitorEvent(e, "input", e.options[e.selectedIndex].value)
                }, writeVisitorEvent: function (e, t, r, i) {
                    "password" === this.getElementType(e) && (r = n), this.log.add("v", {
                        timestamp: this.util.isoNow(),
                        action: t,
                        element: {
                            tag: e.tagName.toLowerCase(),
                            attributes: this.getElementAttributes(e),
                            value: this.getMetaValue(r, i)
                        }
                    })
                }, getElementFromEvent: function (e) {
                    return e.target || t.elementFromPoint(e.clientX, e.clientY)
                }, isDescribedElement: function (e, t, n) {
                    if (e.tagName.toLowerCase() !== t.toLowerCase())return !1;
                    if (!n)return !0;
                    for (e = this.getElementType(e), t = 0; t < n.length; t++)if (n[t] === e)return !0;
                    return !1
                }, getElementType: function (e) {
                    return (e.getAttribute("type") || "").toLowerCase()
                }, getElementAttributes: function (e) {
                    for (var t = {}, n = 0; n < e.attributes.length; n++)"value" !== e.attributes[n].name.toLowerCase() && (t[e.attributes[n].name] = e.attributes[n].value);
                    return t
                }, getMetaValue: function (e, t) {
                    return e === n ? n : {length: e.length, pattern: this.matchInputPattern(e), checked: t}
                }, matchInputPattern: function (e) {
                    return "" === e ? "empty" : /^[a-z0-9!#$%&'*+=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/.test(e) ? "email" : /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/.test(e) || /^(\d{4}[\/\-](0?[1-9]|1[012])[\/\-]0?[1-9]|[12][0-9]|3[01])$/.test(e) ? "date" : /^(?:(?:\+?1\s*(?:[.-]\s*)?)?(?:\(\s*([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9])\s*\)|([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9]))\s*(?:[.-]\s*)?)?([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2})\s*(?:[.-]\s*)?([0-9]{4})(?:\s*(?:#|x\.?|ext\.?|extension)\s*(\d+))?$/.test(e) ? "usphone" : /^\s*$/.test(e) ? "whitespace" : /^\d*$/.test(e) ? "numeric" : /^[a-zA-Z]*$/.test(e) ? "alpha" : /^[a-zA-Z0-9]*$/.test(e) ? "alphanumeric" : "characters"
                }, report: function () {
                    return this.log.all("v")
                }
            };
            var g = function (e, t, n, r, i) {
                this.onError = e, this.onFault = t, this.serialize = n, i.enabled && this.watchWindowErrors(r), i.promise && this.watchPromiseErrors(r)
            };
            g.prototype = {
                watchPromiseErrors: function (e) {
                    var t = this;
                    e.addEventListener ? e.addEventListener("unhandledrejection", function (e) {
                        if (e = e || {}, (e = e.detail ? e.detail.reason : e.reason) !== n) {
                            if (!f.isError(e))try {
                                throw Error(t.serialize(e))
                            } catch (t) {
                                e = t
                            }
                            t.onError("promise", e)
                        }
                    }) : e.onunhandledrejection = function (e) {
                        t.onError("promise", e)
                    }
                }, watchWindowErrors: function (e) {
                    var t = this;
                    f.patch(e, "onerror", function (e) {
                        return function (n, r, i, a, o) {
                            try {
                                o = o || {}, o.message = o.message || t.serialize(n), o.name = o.name || "Error", o.line = o.line || parseInt(i, 10) || null, o.column = o.column || parseInt(a, 10) || null, "[object Event]" !== Object.prototype.toString.call(n) || r ? o.file = o.file || t.serialize(r) : o.file = (n.target || {}).src, t.onError("window", o)
                            } catch (e) {
                                t.onFault(e)
                            }
                            e.apply(this, arguments)
                        }
                    })
                }
            };
            var m = function (e, t, n, r, i, a, o, s, l, c, u, d, p, h, g, m, v) {
                try {
                    if (this.window = g, this.document = m, this.util = f, this.onError = this.util.bind(this.onError, this), this.onFault = this.util.bind(this.onFault, this), this.serialize = this.util.bind(this.serialize, this), this.config = new r(e), this.transmitter = new u(this.util, this.config), this.log = new s(this.util), this.api = new t(this.config, this.util, this.onError, this.serialize), this.metadata = new l(this.serialize), this.environment = new o(this.window), this.customer = new a(this.config, this.util, this.log, this.window, this.document), this.customer.token && (this.apiConsoleWatcher = new i(this.util, this.log, this.onError, this.onFault, this.serialize, this.api, this.config.defaults.console), this.config.current.enabled && (this.windowConsoleWatcher = new i(this.util, this.log, this.onError, this.onFault, this.serialize, this.window, this.config.current.console), this.util.isBrowserSupported()))) {
                        this.callbackWatcher = new n(this.util, this.onError, this.onFault, this.window, this.config.current.callback), this.visitorWatcher = new d(this.util, this.log, this.onError, this.onFault, this.document, this.config.current.visitor), this.navigationWatcher = new v(this.log, this.config.current.navigation), this.networkWatcher = new c(this.util, this.log, this.onError, this.onFault, this.window, this.config.current.network), this.windowWatcher = new p(this.onError, this.onFault, this.serialize, this.window, this.config.current.window);
                        var k = this;
                        f.afterDocumentLoad(function () {
                            k.transmitter.sendUsage({
                                token: k.customer.token,
                                correlationId: k.customer.correlationId,
                                application: k.config.current.application,
                                x: k.util.uuid()
                            })
                        })
                    }
                } catch (e) {
                    this.onFault(e)
                }
            };
            m.prototype = {
                reveal: function () {
                    return this.customer.token ? (this.api.addMetadata = this.metadata.addMetadata, this.api.removeMetadata = this.metadata.removeMetadata, this.api) : (this.config.current.enabled && this.window.console && this.window.console.warn && this.window.console.warn("TrackJS could not find a token"), n)
                }, onError: function () {
                    var t, n = !1;
                    return function (r, i, a) {
                        if (f.isBrowserSupported() && this.config.current.enabled)try {
                            if (a = a || {
                                        bindStack: null,
                                        bindTime: null,
                                        force: !1
                                    }, i && f.isError(i) || (i = {
                                    name: "Error",
                                    message: this.serialize(i, a.force)
                                }), -1 === i.message.indexOf("TrackJS Caught"))if (n && -1 !== i.message.indexOf("Script error"))n = !1; else {
                                var o = f.defaultsDeep({}, {
                                    bindStack: a.bindStack,
                                    bindTime: a.bindTime,
                                    column: i.column || i.columnNumber,
                                    console: this.windowConsoleWatcher.report(),
                                    customer: this.customer.report(),
                                    entry: r,
                                    environment: this.environment.report(),
                                    file: i.file || i.fileName,
                                    line: i.line || i.lineNumber,
                                    message: i.message,
                                    metadata: this.metadata.report(),
                                    nav: this.navigationWatcher.report(),
                                    network: this.networkWatcher.report(),
                                    url: (e.location || "").toString(),
                                    stack: i.stack,
                                    timestamp: this.util.isoNow(),
                                    visitor: this.visitorWatcher.report(),
                                    version: "2.8.4"
                                });
                                if (!a.force)try {
                                    if (!this.config.current.onError(o, i))return
                                } catch (e) {
                                    o.console.push({
                                        timestamp: this.util.isoNow(),
                                        severity: "error",
                                        message: e.message
                                    });
                                    var s = this;
                                    setTimeout(function () {
                                        s.onError("catch", e, {force: !0})
                                    }, 0)
                                }
                                if (this.config.current.dedupe) {
                                    var l = (o.message + o.stack).substr(0, 1e4);
                                    if (l === t)return;
                                    t = l
                                }
                                this.log.clear(), setTimeout(function () {
                                    n = !1
                                }), n = !0, this.transmitter.sendError(o, this.customer.token)
                            }
                        } catch (e) {
                            this.onFault(e)
                        }
                    }
                }(), onFault: function (e) {
                    var t = this.transmitter || new p;
                    e = e || {}, e = {
                        token: this.customer.token,
                        file: e.file || e.fileName,
                        msg: e.message || "unknown",
                        stack: (e.stack || "unknown").substr(0, 500),
                        url: this.window.location,
                        v: "2.8.4",
                        h: "5185f9f5d33a5f573259dbc513ba36f779dc37fb",
                        x: this.util.uuid()
                    }, t.sendTrackerFault(e)
                }, serialize: function (e, t) {
                    if (this.config.current.serialize && !t)try {
                        return this.config.current.serialize(e)
                    } catch (e) {
                        this.onError("catch", e, {force: !0})
                    }
                    return this.config.defaults.serialize(e)
                }
            }, r = new m(e._trackJs || e._trackJS || e._trackjs || {}, function (e, t, n, r) {
                return {
                    attempt: function (e, r) {
                        try {
                            var i = Array.prototype.slice.call(arguments, 2);
                            return e.apply(r || this, i)
                        } catch (e) {
                            throw n("catch", e), t.wrapError(e)
                        }
                    }, configure: function (t) {
                        return e.setCurrent(t)
                    }, track: function (e) {
                        var t = r(e);
                        if (e = e || {}, !e.stack)try {
                            throw Error(t)
                        } catch (t) {
                            e = t
                        }
                        n("direct", e)
                    }, watch: function (e, r) {
                        return function () {
                            try {
                                var i = Array.prototype.slice.call(arguments, 0);
                                return e.apply(r || this, i)
                            } catch (e) {
                                throw n("catch", e), t.wrapError(e)
                            }
                        }
                    }, watchAll: function (e) {
                        var r, i = Array.prototype.slice.call(arguments, 1);
                        for (r in e)"function" == typeof e[r] && (t.contains(i, r) || function () {
                            var i = e[r];
                            e[r] = function () {
                                try {
                                    var e = Array.prototype.slice.call(arguments, 0);
                                    return i.apply(this, e)
                                } catch (e) {
                                    throw n("catch", e), t.wrapError(e)
                                }
                            }
                        }());
                        return e
                    }, hash: "5185f9f5d33a5f573259dbc513ba36f779dc37fb", version: "2.8.4"
                }
            }, r, a, o, s, l, c, function (e) {
                var t = {};
                return {
                    addMetadata: function (e, n) {
                        t[e] = n
                    }, removeMetadata: function (e) {
                        delete t[e]
                    }, report: function () {
                        var n, r = [];
                        for (n in t)t.hasOwnProperty(n) && r.push({key: n, value: e(t[n])});
                        return r
                    }, store: t
                }
            }, d, p, h, g, i, e, t, u), e.trackJs = r.reveal()
        }
    }(window, document), e.exports = trackJs
}], [410]));
//# sourceMappingURL=app-2e2ecd0e296fb2ff745e.js.map