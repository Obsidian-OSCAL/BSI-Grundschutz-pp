---
tags:
- automatic_session_locking_zero_trust
- ber312-prm1
- oscal_control
class: BSI-Stand-der-Technik-Kernel
type: control
control: BER.3.12 Sperre der Anwendung bei Inaktivität
stmt_target_object_category: Anwendungen
stmt_modal_verb: SOLLTE
stmt_action_word: aktivieren
stmt_documentation: Konfigurationshistorie
control_effort_level: '2'
---


** Control ** der Klasse "BSI-Stand-der-Technik-Kernel"
# BER.3.12 - Sperre der Anwendung bei Inaktivität
> [!example]- Tags:> [[tags_Automatic Session Locking|Automatic Session Locking]]> [[tags_Zero Trust|Zero Trust]]
Gruppe: [BER.3 Zugangskonten](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/BER.3%20Zugangskonten.md)
---

### Statement
|  Gruppe | Praktik | Zielobjekt | Modalverb | Ergebnis | Präzisierung Ergebnis | Handlungswort | Dokumentation |
| - | - | - | - | - | - | - | - |
| <div style="background:#cccccc">*[Berechtigung (BER)](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/BER%20Berechtigung.md)*<br> *  &rarr; [Zugangskonten](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/BER.3%20Zugangskonten.md) *</div> | [Berechtigung](practices_Berechtigung_389cd5ad-fb81-4a95-8f7a-8f1fe1881709) | [Anwendungen](target_object_categories_Anwendungen_7e41ecf5-1831-4691-ad0c-4fc7bbc1b871) | [SOLLTE](modal_verbs_SOLLTE_a04a4855-3a63-4f06-b2f4-fc4d94aee2cf) | eine Sperre bei Inaktivität | nach {{einer Frist}} | [aktivieren](action_words_aktivieren_4d9da359-34e9-41b2-b198-ed53920a0414) | [Konfigurationshistorie](documentation_guidelines_Konfigurationshistorie) | &mapsto;<span style="display:inline-block;border:1px solid;margin-left:8pt;padding:8pt;vertical-align:top;max-width:90%;">Berechtigung für Anwendungen SOLLTE eine Sperre bei Inaktivität nach {{ insert: param, ber.3.12-prm1 }} aktivieren.</span>

> [!info]- Guidance
>Kann je nach Anmeldeweg durch eine Abmeldung (Automatic Session Locking) direkt an der Anwendung, über Single-Sign-On oder (bei Anmeldung über das Netz) die Trennung der Netzverbindung umgesetzt werden. Eine längere Inaktivität kann z.B. 5-15 Minuten lang sein. Verfügt die Anwendung über keine eigene Authentifizierungsmethode, so ist die Anforderung entbehrlich.

### Weitere Informationen


> [!info]- Properties> |  | |> | - | - |> | ** Alternate Identifier ** | 5c8bb88d-6692-4904-908a-ed3f7a81b34e |> | ** Security Level** | [normal-SdT](security_level_normal-SdT) |> | ** Effort Level ** | [2](effort_level_2) |> | ** Alternate Identifier ** | 5c8bb88d-6692-4904-908a-ed3f7a81b34e |
