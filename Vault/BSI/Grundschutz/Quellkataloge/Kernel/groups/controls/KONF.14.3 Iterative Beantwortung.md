---
tags:
- produktbeschreibung
- oscal_control
class: BSI-Stand-der-Technik-Kernel
type: control
control: KONF.14.3 Iterative Beantwortung
stmt_target_object_category: DNS-Server
stmt_modal_verb: SOLLTE
stmt_action_word: aktivieren
stmt_documentation: Konfigurationshistorie
control_effort_level: '1'
---


** Control ** der Klasse "BSI-Stand-der-Technik-Kernel"
# KONF.14.3 - Iterative Beantwortung
Tag: [[tags_Produktbeschreibung|Produktbeschreibung]]
Gruppe: [KONF.14 Verteilte Anwendungen](BSI/Grundschutz/Quellkataloge/Kernel/groups/KONF.14%20Verteilte%20Anwendungen.md)
---

### Statement
|  Gruppe | Praktik | Zielobjekt | Modalverb | Ergebnis | Präzisierung Ergebnis | Handlungswort | Dokumentation |
| - | - | - | - | - | - | - | - |
| <div style="background:#cccccc">*[Konfiguration (KONF)](BSI/Grundschutz/Quellkataloge/Kernel/groups/KONF%20Konfiguration.md)*<br> *  &rarr; [Verteilte Anwendungen](BSI/Grundschutz/Quellkataloge/Kernel/groups/KONF.14%20Verteilte%20Anwendungen.md) *</div> | [Konfiguration](practices_Konfiguration_8e46d34c-5145-44f8-882e-790e2dcffa09) | [DNS-Server](target_object_categories_DNS-Server_f88fd07b-f918-45b5-80a5-59fcea43a99c) | [SOLLTE](modal_verbs_SOLLTE_a04a4855-3a63-4f06-b2f4-fc4d94aee2cf) | die iterative Beantwortung von DNS-Anfragen | aus dem Internet | [aktivieren](action_words_aktivieren_4d9da359-34e9-41b2-b198-ed53920a0414) | [Konfigurationshistorie](documentation_guidelines_Konfigurationshistorie) | &mapsto;<span style="display:inline-block;border:1px solid;margin-left:8pt;padding:8pt;vertical-align:top;max-width:90%;">Konfiguration für DNS-Server SOLLTE die iterative Beantwortung von DNS-Anfragen aus dem Internet aktivieren.</span>

> [!info]- Guidance
>Bei iterativen Anfragen kommt die Antwort direkt vom autoritativen Server, statt auf zwischengespeicherte Antworten anderer DNS-Resolver zu vertrauen. Dies reduziert die Angriffsfläche für Cache Poisoning und erschwert DNS-Tunneling zur Datenexfiltration oder Command-and-Control-Kommunikation.

### Weitere Informationen


> [!info]- Properties> |  | |> | - | - |> | ** Alternate Identifier ** | 57cb3f3e-bb54-444c-a337-8f098ae085a2 |> | ** Security Level** | [normal-SdT](security_level_normal-SdT) |> | ** Effort Level ** | [1](effort_level_1) |> | ** Alternate Identifier ** | 57cb3f3e-bb54-444c-a337-8f098ae085a2 |
