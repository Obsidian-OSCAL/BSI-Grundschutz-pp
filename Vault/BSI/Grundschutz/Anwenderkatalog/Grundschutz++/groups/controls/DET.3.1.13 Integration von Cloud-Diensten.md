---
tags: oscal_control
class: BSI-Stand-der-Technik-Kernel
type: control
control: DET.3.1.13 Integration von Cloud-Diensten
parent_control: DET.3.1 Protokollierung sicherheitsrelevanter Ereignisse
stmt_target_object_category: Cloud-Dienste
stmt_modal_verb: KANN
stmt_action_word: protokollieren
stmt_documentation: Audit Log
control_effort_level: '5'
---


** Control ** der Klasse "BSI-Stand-der-Technik-Kernel"
# DET.3.1.13 - Integration von Cloud-Diensten
Gruppe: [DET.3 Protokollierung](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/DET.3%20Protokollierung.md)
---

** Übergeordnetes Control: ** [DET.3.1 Protokollierung sicherheitsrelevanter Ereignisse](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/controls/DET.3.1%20Protokollierung%20sicherheitsrelevanter%20Ereignisse.md)
### Statement
|  Gruppe | Praktik | Zielobjekt | Modalverb | Ergebnis | Präzisierung Ergebnis | Handlungswort | Dokumentation |
| - | - | - | - | - | - | - | - |
| <div style="background:#cccccc">*[Detektion (DET)](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/DET%20Detektion.md)*<br> *  &rarr; [Protokollierung](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/DET.3%20Protokollierung.md) *</div> | [Detektion](practices_Detektion_f479aa5a-6dd9-4b9b-973e-8c4f85b074ed) | [Cloud-Dienste](target_object_categories_Cloud-Dienste_d2a23b62-9c66-4f72-98e2-17518d5dbe0f) | [KANN](modal_verbs_KANN_1c941e58-72a5-4633-8cca-8efad571932b) | Ereignisse in der Cloud | im Audit Log der Institution | [protokollieren](action_words_protokollieren_fe0c8466-8c0d-450b-a649-02c11e0231f8) | [Audit Log](documentation_guidelines_Audit Log) | &mapsto;<span style="display:inline-block;border:1px solid;margin-left:8pt;padding:8pt;vertical-align:top;max-width:90%;">Detektion für Cloud-Dienste KANN Ereignisse in der Cloud im Audit Log der Institution protokollieren.</span>

> [!info]- Guidance
>Daten in Cloud-Diensten könnten von Angreifern über das Internet angegriffen werden, ohne dass Ereignisse im internen Netz hierauf Rückschlüsse geben. Dies könnte zum Beispiel durch Phishing geschehen, wodurch ein OAuth Token für den Cloud-Zugang missbraucht wird. Die Integration der Logs des Cloud-Dienstleisters in die institutionseigene Protokollierung kann hier helfen, z.B. bei Authentifizierung oder Berechtigungsänderungen, sowie bei Zugriff oder Veränderung von Daten. Insbesondere die Integration des Loggings mit einer bedingten Zugriffsrichtlinie kann hier helfen, z.B. indem Zugriffe von ungewöhnlichen IP-Adressen oder Browser Agents auf Angriffe hinweisen können. Die Integration von Cloud-Protokollen in ein internes Logging birgt oft erhebliche Herausforderungen, darunter die Bewältigung des enormen Volumens und der Vielfalt an Datenformaten, was durch selektive Protokollierung, Datennormalisierung und -anreicherung angegangen werden kann. Die Absicherung der Datenpipeline gegen Man-in-the-Middle-Angriffe kann durch die Einhaltung der technischen Anforderungen an die beteiligten IT-Systeme und Anwendungen bewältigt werden, z.B. Verschlüsselung und Authentifizierung. Da Cloud-Anbieter oftzusätzliche Gebühren für den Datentransfer (Egress-Kosten) verlangen bietet es sich an, die Protokolle vor der Übertragung zu filtern, um die Kosten für die Verbesserung der Sicherheit gering zu halten.

### Weitere Informationen


> [!info]- Properties> |  | |> | - | - |> | ** Alternate Identifier ** | 681494bd-8d1d-4b34-84f6-abab2f4ea751 |> | ** Security Level** | [erhöht](security_level_erhöht) |> | ** Effort Level ** | [5](effort_level_5) |> | ** Alternate Identifier ** | 681494bd-8d1d-4b34-84f6-abab2f4ea751 |
