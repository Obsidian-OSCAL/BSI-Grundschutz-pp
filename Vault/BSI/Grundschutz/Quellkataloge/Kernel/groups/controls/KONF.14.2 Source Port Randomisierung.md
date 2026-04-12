---
tags:
- produktbeschreibung
- oscal_control
class: BSI-Stand-der-Technik-Kernel
type: control
control: KONF.14.2 Source Port Randomisierung
stmt_target_object_category: DNS-Server
stmt_modal_verb: SOLLTE
stmt_action_word: aktivieren
stmt_documentation: Konfigurationshistorie
control_effort_level: '1'
---


** Control ** der Klasse "BSI-Stand-der-Technik-Kernel"
# KONF.14.2 - Source Port Randomisierung
Tag: [[tags_Produktbeschreibung|Produktbeschreibung]]
Gruppe: [KONF.14 Verteilte Anwendungen](BSI/Grundschutz/Quellkataloge/Kernel/groups/KONF.14%20Verteilte%20Anwendungen.md)
---

### Statement
|  Gruppe | Praktik | Zielobjekt | Modalverb | Ergebnis | Präzisierung Ergebnis | Handlungswort | Dokumentation |
| - | - | - | - | - | - | - | - |
| <div style="background:#cccccc">*[Konfiguration (KONF)](BSI/Grundschutz/Quellkataloge/Kernel/groups/KONF%20Konfiguration.md)*<br> *  &rarr; [Verteilte Anwendungen](BSI/Grundschutz/Quellkataloge/Kernel/groups/KONF.14%20Verteilte%20Anwendungen.md) *</div> | [Konfiguration](practices_Konfiguration_8e46d34c-5145-44f8-882e-790e2dcffa09) | [DNS-Server](target_object_categories_DNS-Server_f88fd07b-f918-45b5-80a5-59fcea43a99c) | [SOLLTE](modal_verbs_SOLLTE_a04a4855-3a63-4f06-b2f4-fc4d94aee2cf) | Source Port Randomisierung |  | [aktivieren](action_words_aktivieren_4d9da359-34e9-41b2-b198-ed53920a0414) | [Konfigurationshistorie](documentation_guidelines_Konfigurationshistorie) | &mapsto;<span style="display:inline-block;border:1px solid;margin-left:8pt;padding:8pt;vertical-align:top;max-width:90%;">Konfiguration für DNS-Server SOLLTE Source Port Randomisierung aktivieren.</span>

> [!info]- Guidance
>Die mehrfache Verwendung gleicher Source Ports erleichtert Angreifern das Erraten gültiger Antworten, z. B. bei DNS-Spoofing oder Cache-Poisoning-Angriffen. Sourceport-Randomisierung (IETFC RFC 5452) erhöht die Anzahl möglicher Kombinationen und erschwert derartige Angriffe.

### Weitere Informationen


> [!info]- Properties> |  | |> | - | - |> | ** Alternate Identifier ** | 8cf919ad-46cd-4173-9def-7b84abd6f278 |> | ** Security Level** | [normal-SdT](security_level_normal-SdT) |> | ** Effort Level ** | [1](effort_level_1) |> | ** Alternate Identifier ** | 8cf919ad-46cd-4173-9def-7b84abd6f278 |
