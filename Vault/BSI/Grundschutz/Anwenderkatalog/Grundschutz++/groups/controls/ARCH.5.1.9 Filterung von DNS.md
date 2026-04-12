---
tags: oscal_control
class: BSI-Stand-der-Technik-Kernel
type: control
control: ARCH.5.1.9 Filterung von DNS
parent_control: ARCH.5.1 Einschränkung und Inspektion von Verbindungen
stmt_target_object_category: Externe Netzanschlüsse
stmt_modal_verb: SOLLTE
stmt_action_word: einschränken
stmt_documentation: Firewallregeln
control_effort_level: '3'
---


** Control ** der Klasse "BSI-Stand-der-Technik-Kernel"
# ARCH.5.1.9 - Filterung von DNS
Gruppe: [ARCH.5 Perimeterschutz](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/ARCH.5%20Perimeterschutz.md)
---

** Übergeordnetes Control: ** [ARCH.5.1 Einschränkung und Inspektion von Verbindungen](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/controls/ARCH.5.1%20Einschränkung%20und%20Inspektion%20von%20Verbindungen.md)
### Statement
|  Gruppe | Praktik | Zielobjekt | Modalverb | Ergebnis | Präzisierung Ergebnis | Handlungswort | Dokumentation |
| - | - | - | - | - | - | - | - |
| <div style="background:#cccccc">*[Architektur (ARCH)](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/ARCH%20Architektur.md)*<br> *  &rarr; [Perimeterschutz](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/ARCH.5%20Perimeterschutz.md) *</div> | [Architektur](practices_Architektur_6710c63e-bb40-4742-9bae-1779ba21f2a9) | [Externe Netzanschlüsse](target_object_categories_Externe Netzanschlüsse_a9521914-ccf9-4c20-8eef-2dd912fb815d) | [SOLLTE](modal_verbs_SOLLTE_a04a4855-3a63-4f06-b2f4-fc4d94aee2cf) | unerwünschte Inhalte in DNS-Verbindungen |  | [einschränken](action_words_einschränken_c8289ac3-7877-4224-b43b-08e005e461ad) | [Firewallregeln](documentation_guidelines_Firewallregeln) | &mapsto;<span style="display:inline-block;border:1px solid;margin-left:8pt;padding:8pt;vertical-align:top;max-width:90%;">Architektur für Externe Netzanschlüsse SOLLTE unerwünschte Inhalte in DNS-Verbindungen einschränken.</span>

> [!info]- Guidance
>Unerwünschte Inhalte sind DNS-Anfragen oder -Antworten, die für Geschäftsprozesse unnötige oder sogar schädliche Daten enthalten, z.B. Verbindungen zu bekannten Malware-Domains oder zu Werbe- oder Telemetriediensten. Dies kann entweder nach dem Allowlist- oder Denylist-Ansatz erfolgen. Listen bekannter schädlicher Domains können über Threat Intelligence-Feeds oder spezielle DNS-Lösungen wie Pihole bezogen werden.

### Weitere Informationen


> [!info]- Properties> |  | |> | - | - |> | ** Alternate Identifier ** | 4938a7c4-fdbb-4ca8-a33c-87d177d25f8b |> | ** Security Level** | [normal-SdT](security_level_normal-SdT) |> | ** Effort Level ** | [3](effort_level_3) |> | ** Alternate Identifier ** | 4938a7c4-fdbb-4ca8-a33c-87d177d25f8b |
