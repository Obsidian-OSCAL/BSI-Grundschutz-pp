---
tags:
- credential_stuffing_brute-force-attacke
- oscal_control
class: BSI-Stand-der-Technik-Kernel
type: control
control: BER.3.10 Anmeldeversuchsgrenze an der Anwendung
stmt_target_object_category: Anwendungen
stmt_modal_verb: SOLLTE
stmt_action_word: blockieren
stmt_documentation: Konfigurationshistorie
control_effort_level: '2'
---


** Control ** der Klasse "BSI-Stand-der-Technik-Kernel"
# BER.3.10 - Anmeldeversuchsgrenze an der Anwendung
> [!example]- Tags:> [[tags_Credential Stuffing|Credential Stuffing]]> [[tags_Brute-Force-Attacke|Brute-Force-Attacke]]
Gruppe: [BER.3 Zugangskonten](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/BER.3%20Zugangskonten.md)
---

### Statement
|  Gruppe | Praktik | Zielobjekt | Modalverb | Ergebnis | Präzisierung Ergebnis | Handlungswort | Dokumentation |
| - | - | - | - | - | - | - | - |
| <div style="background:#cccccc">*[Berechtigung (BER)](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/BER%20Berechtigung.md)*<br> *  &rarr; [Zugangskonten](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/BER.3%20Zugangskonten.md) *</div> | [Berechtigung](practices_Berechtigung_389cd5ad-fb81-4a95-8f7a-8f1fe1881709) | [Anwendungen](target_object_categories_Anwendungen_7e41ecf5-1831-4691-ad0c-4fc7bbc1b871) | [SOLLTE](modal_verbs_SOLLTE_a04a4855-3a63-4f06-b2f4-fc4d94aee2cf) | weitere Anmeldeversuche nach Erreichen von einem maximalen Schwellwert an fehlgeschlagenen Versuchen | vorübergehend | [blockieren](action_words_blockieren_2abccead-8fc1-4f04-af4b-8c5ff796bd67) | [Konfigurationshistorie](documentation_guidelines_Konfigurationshistorie) | &mapsto;<span style="display:inline-block;border:1px solid;margin-left:8pt;padding:8pt;vertical-align:top;max-width:90%;">Berechtigung für Anwendungen SOLLTE weitere Anmeldeversuche nach Erreichen von einem maximalen Schwellwert an fehlgeschlagenen Versuchen vorübergehend blockieren.</span>

> [!info]- Guidance
>Häufen sich Anmeldeversuche, so könnte ein Angreifer Zugangsdaten durchprobieren. Durch eine Anmeldeversuchsgrenze wird der Zugriff durch das massenhafte Durchprobieren von Zugangsdaten (Credential Stuffing) verhindert. Dies kann z.B. durch die Begrenzung der Anmeldeversuche pro Client oder pro IP erfolgen. Dies betrifft sowohl die Anmeldung an der Benutzeroberfläche als auch über das Netz. Relevant sind hierbei sowohl primäre als auch ggf. vorhandene sekundäre Zugänge (z.B. Sicherheitsfragen, Passwort zurücksetzen). Für die Wahl des Schwellwertes ist die Anzahl der betroffenen Zugangskonten, die Passwortlänge und der Schutzbedarf der Anwendung von Bedeutung. Je nach Risikoprofil der Anwendung sind verschiedene Lösungen denkbar, z.B. die Verwendung von CAPTCHAS bei Erreichen der Anmeldeversuchsgrenze oder indem der Zeitraum einer Blockierung nach jedem fehlgeschlagenen Anmeldeversuch erhöht wird. Erfordert die Anwendung keine Zugangsdaten, so ist auch diese Anforderung entbehrlich.

### Weitere Informationen


> [!info]- Properties> |  | |> | - | - |> | ** Alternate Identifier ** | 265ee5bc-059a-4bde-b480-9bc1611171bf |> | ** Security Level** | [normal-SdT](security_level_normal-SdT) |> | ** Effort Level ** | [2](effort_level_2) |> | ** Alternate Identifier ** | 265ee5bc-059a-4bde-b480-9bc1611171bf |
