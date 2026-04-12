---
tags:
- zero_trust_advanced_persistent_threats_apt_lateral_movement
- oscal_control
class: BSI-Stand-der-Technik-Kernel
type: control
control: ARCH.2.3 Mikrosegmentierung
stmt_target_object_category: IT-Systeme
stmt_modal_verb: KANN
stmt_action_word: einschränken
stmt_documentation: Netzplan
control_effort_level: '5'
---


** Control ** der Klasse "BSI-Stand-der-Technik-Kernel"
# ARCH.2.3 - Mikrosegmentierung
> [!example]- Tags:> [[tags_Zero Trust|Zero Trust]]> [[tags_Advanced Persistent Threats (APT)|Advanced Persistent Threats (APT)]]> [[tags_Lateral Movement|Lateral Movement]]
Gruppe: [ARCH.2 Netzdesign](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/ARCH.2%20Netzdesign.md)
---

### Statement
|  Gruppe | Praktik | Zielobjekt | Modalverb | Ergebnis | Präzisierung Ergebnis | Handlungswort | Dokumentation |
| - | - | - | - | - | - | - | - |
| <div style="background:#cccccc">*[Architektur (ARCH)](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/ARCH%20Architektur.md)*<br> *  &rarr; [Netzdesign](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/ARCH.2%20Netzdesign.md) *</div> | [Architektur](practices_Architektur_6710c63e-bb40-4742-9bae-1779ba21f2a9) | [IT-Systeme](target_object_categories_IT-Systeme_427da6dd-d744-4b2b-88b7-f0a695f21e14) | [KANN](modal_verbs_KANN_1c941e58-72a5-4633-8cca-8efad571932b) | Verbindungen zu allen anderen IT-Systemen |  | [einschränken](action_words_einschränken_c8289ac3-7877-4224-b43b-08e005e461ad) | [Netzplan](documentation_guidelines_Netzplan) | &mapsto;<span style="display:inline-block;border:1px solid;margin-left:8pt;padding:8pt;vertical-align:top;max-width:90%;">Architektur für IT-Systeme KANN Verbindungen zu allen anderen IT-Systemen einschränken.</span>

> [!info]- Guidance
>Mikrosegmentierung ist die Unterteilung des Netzes in möglichst kleine Segmente (z.B. pro IT-System oder Server-Anwendung). Für jedes dieser Segmente wird die erlaubte Kommunikation definiert und gefiltert. Mikrosegmentierung sorgt dafür, dass z.B. zwei medizinische Geräte mit gleicher Rolle zwar ins gleiche VLAN dürfen, aber nicht direkt miteinander kommunizieren dürfen. Die Umsetzung kann mit dynamischen VLANs, softwaredefinierten Netzwerken (SDN) oder Netzwerk-Firewalls auf Host-Ebene erfolgen. Die Mikrosegmentierung begrenzt Angriffe, die sich lateral ausbreiten.

### Weitere Informationen


> [!info]- Properties> |  | |> | - | - |> | ** Alternate Identifier ** | 193a28ca-0382-4998-874d-4c08b6326f26 |> | ** Security Level** | [erhöht](security_level_erhöht) |> | ** Effort Level ** | [5](effort_level_5) |> | ** Alternate Identifier ** | 193a28ca-0382-4998-874d-4c08b6326f26 |
