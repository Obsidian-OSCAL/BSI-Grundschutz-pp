---
tags: oscal_control
class: BSI-Stand-der-Technik-Kernel
type: control
control: DET.3.1.3 Anbindung von Peripheriegeräten
parent_control: DET.3.1 Protokollierung sicherheitsrelevanter Ereignisse
stmt_target_object_category: IT-Systeme
stmt_modal_verb: SOLLTE
stmt_action_word: protokollieren
stmt_documentation: Audit Log
control_effort_level: '3'
---


** Control ** der Klasse "BSI-Stand-der-Technik-Kernel"
# DET.3.1.3 - Anbindung von Peripheriegeräten
Gruppe: [DET.3 Protokollierung](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/DET.3%20Protokollierung.md)
---

** Übergeordnetes Control: ** [DET.3.1 Protokollierung sicherheitsrelevanter Ereignisse](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/controls/DET.3.1%20Protokollierung%20sicherheitsrelevanter%20Ereignisse.md)
### Statement
|  Gruppe | Praktik | Zielobjekt | Modalverb | Ergebnis | Präzisierung Ergebnis | Handlungswort | Dokumentation |
| - | - | - | - | - | - | - | - |
| <div style="background:#cccccc">*[Detektion (DET)](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/DET%20Detektion.md)*<br> *  &rarr; [Protokollierung](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/DET.3%20Protokollierung.md) *</div> | [Detektion](practices_Detektion_f479aa5a-6dd9-4b9b-973e-8c4f85b074ed) | [IT-Systeme](target_object_categories_IT-Systeme_427da6dd-d744-4b2b-88b7-f0a695f21e14) | [SOLLTE](modal_verbs_SOLLTE_a04a4855-3a63-4f06-b2f4-fc4d94aee2cf) | das Anschließen von Peripheriegeräten |  | [protokollieren](action_words_protokollieren_fe0c8466-8c0d-450b-a649-02c11e0231f8) | [Audit Log](documentation_guidelines_Audit_Log) | &mapsto;<span style="display:inline-block;border:1px solid;margin-left:8pt;padding:8pt;vertical-align:top;max-width:90%;">Detektion für IT-Systeme SOLLTE das Anschließen von Peripheriegeräten protokollieren.</span>

> [!info]- Guidance
>Das Protokollieren der Anbindung von Peripheriegeräten kann helfen, Manipulationsversuche an IT-Systemen frühzeitig zu erkennen und nachzuvollziehen. Ohne ein solches Protokoll könnte beispielsweise ein unbefugtes Speichermedium angeschlossen und vertrauliche Daten unbemerkt entwendet werden, oder es könnte Schadsoftware über ein USB-Gerät eingeschleust werden. Auch manipulierte Eingabegeräte könnten genutzt werden, um Tastatureingaben auszulesen oder unbemerkt Befehle einzuschleusen. Unter Peripheriegeräten sind in diesem Kontext externe Komponenten (aus Hardware oder virtuell) zu verstehen, die ein IT-System erweitern oder mit diesem verbunden werden – etwa USB-Sticks, externe Festplatten, Smartphones im Lade- oder Datenmodus, Drucker oder auch spezialisierte Geräte wie Diagnose- oder Messinstrumente. Zur praktischen Umsetzung kann eine Institution beispielsweise auf Betriebssystemfunktionen zurückgreifen, die Geräteanschlüsse im System-Log erfassen, oder ergänzende Endpoint-Management-Lösungen einsetzen, die eine zentralisierte Protokollierung erlauben.

### Weitere Informationen


> [!info]- Properties> |  | |> | - | - |> | ** Alternate Identifier ** | b0d1ef63-3c21-4d01-a5ad-82c23f113994 |> | ** Security Level** | [normal-SdT](security_level_normal-SdT) |> | ** Effort Level ** | [3](effort_level_3) |> | ** Alternate Identifier ** | b0d1ef63-3c21-4d01-a5ad-82c23f113994 |
