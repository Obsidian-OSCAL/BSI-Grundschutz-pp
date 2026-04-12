---
tags: oscal_control
class: BSI-Stand-der-Technik-Kernel
type: control
control: DET.3.1.8 Privilegierte Ereignisse
parent_control: DET.3.1 Protokollierung sicherheitsrelevanter Ereignisse
stmt_target_object_category: Anwendungen
stmt_modal_verb: SOLLTE
stmt_action_word: protokollieren
stmt_documentation: Audit Log
control_effort_level: '2'
---


** Control ** der Klasse "BSI-Stand-der-Technik-Kernel"
# DET.3.1.8 - Privilegierte Ereignisse
Gruppe: [DET.3 Protokollierung](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/DET.3%20Protokollierung.md)
---

** Übergeordnetes Control: ** [DET.3.1 Protokollierung sicherheitsrelevanter Ereignisse](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/controls/DET.3.1%20Protokollierung%20sicherheitsrelevanter%20Ereignisse.md)
### Statement
|  Gruppe | Praktik | Zielobjekt | Modalverb | Ergebnis | Präzisierung Ergebnis | Handlungswort | Dokumentation |
| - | - | - | - | - | - | - | - |
| <div style="background:#cccccc">*[Detektion (DET)](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/DET%20Detektion.md)*<br> *  &rarr; [Protokollierung](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/DET.3%20Protokollierung.md) *</div> | [Detektion](practices_Detektion_f479aa5a-6dd9-4b9b-973e-8c4f85b074ed) | [Anwendungen](target_object_categories_Anwendungen_7e41ecf5-1831-4691-ad0c-4fc7bbc1b871) | [SOLLTE](modal_verbs_SOLLTE_a04a4855-3a63-4f06-b2f4-fc4d94aee2cf) | privilegierte Ereignisse | einschließlich der Aktivierung, Deaktivierung oder Blockierung privilegierter Funktionen | [protokollieren](action_words_protokollieren_fe0c8466-8c0d-450b-a649-02c11e0231f8) | [Audit Log](documentation_guidelines_Audit_Log) | &mapsto;<span style="display:inline-block;border:1px solid;margin-left:8pt;padding:8pt;vertical-align:top;max-width:90%;">Detektion für Anwendungen SOLLTE privilegierte Ereignisse einschließlich der Aktivierung, Deaktivierung oder Blockierung privilegierter Funktionen protokollieren.</span>

> [!info]- Guidance
>Privilegierte Ereignisse sind Vorgänge, bei denen besonders weitreichende Rechte genutzt werden – beispielsweise die Vergabe oder Entziehung von Administratorrechten, das Deaktivieren von Virenscannern oder Änderungen an Firewallregeln. Gerade solche Eingriffe könnten einen erheblichen Einfluss auf die Verfügbarkeit und Integrität von Daten haben. Ohne eine gezielte Aufzeichnung könnten sicherheitsrelevante Änderungen unentdeckt bleiben – etwa, wenn ein Angreifer unbefugt einen privilegierten Account übernimmt und Spuren verwischt, oder wenn ein interner Benutzer kritische Funktionen deaktiviert, wodurch Schutzmaßnahmen umgangen werden.

### Weitere Informationen


> [!info]- Properties> |  | |> | - | - |> | ** Alternate Identifier ** | e7d500ff-393c-4c14-baed-c87b676efe5c |> | ** Security Level** | [normal-SdT](security_level_normal-SdT) |> | ** Effort Level ** | [2](effort_level_2) |> | ** Alternate Identifier ** | e7d500ff-393c-4c14-baed-c87b676efe5c |
